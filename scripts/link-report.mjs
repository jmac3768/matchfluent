/**
 * Internal-link report over the built site. Run after `npm run build`:
 *
 *   node scripts/link-report.mjs                 # resolution + distribution
 *   node scripts/link-report.mjs --resolve-only  # exit 1 on a bad href
 *
 * Counts unique inbound linking PAGES per target, twice:
 *   in-main  — editorial links only, header/footer/breadcrumbs excluded
 *   full     — chrome inclusive, what a crawler sees
 *
 * /404/ is excluded from the distribution: nothing links to it by design,
 * so a crawler never reaches it and its zero would skew the minimum.
 *
 * Self-links do not count. Screaming Frog's "Unique Inlinks" does count
 * them, so pages the footer links to from every page including themselves
 * (/sobre-nosotros/, /como-evaluamos/) read one lower here than in a crawl.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(root, "dist");
const resolveOnly = process.argv.includes("--resolve-only");

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) htmlFiles.push(p);
  }
})(DIST);

/** dist path -> site path, always with a trailing slash. */
const toPath = (file) =>
  ("/" + relative(DIST, file).replace(/\\/g, "/").replace(/index\.html$/, "").replace(/\.html$/, "/"))
    .replace(/\/{2,}/g, "/");

/** Internal page URL for a raw href, or null for assets/redirects/externals. */
const normalize = (href) => {
  const h = href.replace(/^https?:\/\/matchfluent\.com/, "").split("#")[0].split("?")[0];
  if (!h.startsWith("/")) return null;
  if (/\.\w{2,4}$/.test(h)) return null;
  if (h.startsWith("/go/") || h.startsWith("/api/") || h.startsWith("/_astro/")) return null;
  return { path: h.endsWith("/") ? h : h + "/", hadSlash: h.endsWith("/") };
};

const pages = new Set(htmlFiles.map(toPath));
// Anchors only. A bare href match also catches <link rel="alternate" hreflang>,
// which inflated every hreflang-paired page by one against Screaming Frog.
const hrefRe = /<a\s[^>]*href="([^"]+)"/g;

const inMain = new Map();
const inFull = new Map();
const broken = [];
const noSlash = [];

const record = (map, target, source) => {
  if (!map.has(target)) map.set(target, new Set());
  map.get(target).add(source);
};

for (const file of htmlFiles) {
  const src = toPath(file);
  const html = readFileSync(file, "utf8");
  // Astro renders one <main> per layout; everything outside it is chrome.
  const mainHtml = html.match(/<main[\s>][\s\S]*?<\/main>/)?.[0] || "";

  for (const [, href] of html.matchAll(hrefRe)) {
    const link = normalize(href);
    if (!link) continue;
    if (!pages.has(link.path)) broken.push(`${src}  ->  ${href}`);
    else if (!link.hadSlash) noSlash.push(`${src}  ->  ${href}`);
    if (link.path !== src) record(inFull, link.path, src);
  }
  for (const [, href] of mainHtml.matchAll(hrefRe)) {
    const link = normalize(href);
    if (link && link.path !== src) record(inMain, link.path, src);
  }
}

console.log(`pages built: ${pages.size}`);
console.log(`\n=== link resolution ===`);
console.log(`unresolved internal hrefs: ${broken.length}`);
for (const b of broken) console.log("  BROKEN " + b);
console.log(`internal hrefs missing trailing slash: ${noSlash.length}`);
for (const n of noSlash) console.log("  NOSLASH " + n);

if (resolveOnly) process.exit(broken.length || noSlash.length ? 1 : 0);

const rows = [...pages]
  .filter((p) => p !== "/404/")
  .sort()
  .map((p) => ({ path: p, main: inMain.get(p)?.size || 0, full: inFull.get(p)?.size || 0 }));

console.log(`\n=== unique inbound linking pages (${rows.length} crawlable) ===`);
console.log(`${"page".padEnd(58)} ${"in-main".padStart(7)} ${"full".padStart(5)}`);
for (const r of rows) {
  console.log(`${r.path.padEnd(58)} ${String(r.main).padStart(7)} ${String(r.full).padStart(5)}`);
}

const stats = (key) => {
  const v = rows.map((r) => r[key]).sort((a, b) => a - b);
  const mid = Math.floor(v.length / 2);
  return {
    min: v[0],
    median: v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2,
    max: v[v.length - 1],
    below2: v.filter((x) => x < 2).length,
  };
};

const m = stats("main");
const f = stats("full");
console.log(`\n=== summary ===`);
console.log(`${"".padEnd(8)} ${"in-main".padStart(9)} ${"chrome-incl".padStart(12)}`);
for (const k of ["min", "median", "max", "below2"]) {
  console.log(`${k.padEnd(8)} ${String(m[k]).padStart(9)} ${String(f[k]).padStart(12)}`);
}

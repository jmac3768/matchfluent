/**
 * Data layer: merges keyword-clusters.json (Layer 1 + 2) with
 * keyword-clusters-2b.json (Layer 2b) and exposes the page lists that
 * drive every getStaticPaths() in the site.
 */
// Import attributes keep this module loadable by bare node (data.test.mjs)
// as well as by Vite during the Astro build.
import layer1 from "../data/keyword-clusters.json" with { type: "json" };
import layer2b from "../data/keyword-clusters-2b.json" with { type: "json" };
import { BRAND } from "../config/site.js";

export const esClusters = [...layer1.es, ...layer2b.es];
export const enClusters = [...layer1.en, ...layer2b.en];
export const careerLessons = layer1.lessons;

export const espLessons = esClusters.filter((c) => c.type === "esp-lesson");
export const esMainPages = esClusters.filter((c) => c.type !== "esp-lesson");
export const enMainPages = enClusters;

const stripPrefix = (slug, prefix) => slug.replace(prefix, "").replace(/^\//, "");

/**
 * Builds the route list for a silo's [...slug].astro:
 * main cluster/comparison/glossary pages plus their fanout children.
 * Fanouts whose slug collides with a main page (e.g.
 * /learning-english/learning-english-with-ai) are deduped in favor of
 * the main cluster entry.
 */
function buildSiloRoutes(pages, prefix) {
  const routes = new Map();
  for (const page of pages) {
    routes.set(page.slug, { kind: "main", page, parent: null });
  }
  for (const page of pages) {
    for (const fanout of page.fanouts || []) {
      if (!routes.has(fanout.slug)) {
        routes.set(fanout.slug, { kind: "fanout", page: fanout, parent: page });
      }
    }
  }
  return [...routes.values()].map((entry) => ({
    params: { slug: stripPrefix(entry.page.slug, prefix) },
    props: entry,
  }));
}

export const esRoutes = () => buildSiloRoutes(esMainPages, "/aprender-ingles");
export const enRoutes = () => buildSiloRoutes(enMainPages, "/learning-english");

const mainSlugs = new Set([...esMainPages, ...enMainPages].map((p) => p.slug));

/**
 * A pillar's own fanout children, for its on-page table of contents.
 * Drops fanouts whose slug is also a main page (e.g.
 * /learning-english/learning-english-with-ai) — buildSiloRoutes resolves
 * those in favor of the main entry, so they are sibling pillars, not children.
 */
export function ownFanouts(page) {
  return (page?.fanouts || []).filter((f) => !mainSlugs.has(f.slug));
}

/**
 * Reciprocal hreflang pairs — ES and EN pages that cover the same topic.
 * x-default points at the homepage (handled in SEOHead).
 */
export const hreflangPairs = {
  "/aprender-ingles/metodos-para-aprender-ingles": "/learning-english/english-learning-methods",
  "/aprender-ingles/preply-italki-cambly-comparacion": "/learning-english/best-online-english-tutor",
  "/aprender-ingles/hablar-ingles-con-fluidez": "/learning-english/how-to-speak-english-fluently",
  "/aprender-ingles/ia-para-aprender-ingles": "/learning-english/learning-english-with-ai",
  "/aprender-ingles/mejor-app-para-aprender-ingles": "/learning-english/best-app-to-learn-english",
};

/** Returns { es, en } absolute paths for a page, or null if unpaired. */
export function hreflangFor(slug) {
  for (const [es, en] of Object.entries(hreflangPairs)) {
    if (slug === es || slug === en) return { es, en };
  }
  return null;
}

/** "Last updated" date, default = build date, overridable via data field. */
export function lastUpdatedLabel(page, lang) {
  const date = page?.lastUpdated ? new Date(page.lastUpdated) : new Date();
  const formatted = date.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    month: "long",
    year: "numeric",
  });
  return lang === "es"
    ? formatted.charAt(0).toUpperCase() + formatted.slice(1)
    : formatted;
}

/** Breadcrumb trail for any page in a silo. */
export function breadcrumbsFor({ slug, title, lang, parent, hubPath, hubName }) {
  const crumbs = [
    { name: lang === "es" ? "Inicio" : "Home", path: "/" },
    { name: hubName, path: hubPath },
  ];
  if (parent) {
    crumbs.push({ name: parent.h1, path: parent.slug });
  }
  crumbs.push({ name: title, path: slug });
  return crumbs;
}

/**
 * Every internally linkable page, flattened, with its silo and the pillar
 * that heads its cluster. Main pages claim their slugs first so a fanout
 * that collides with one (e.g. /learning-english/learning-english-with-ai)
 * stays a pillar, matching buildSiloRoutes.
 */
function buildRegistry() {
  const entries = [];
  const claimed = new Set();

  // `family` keeps the job-specific lessons out of the general-guide
  // rotation: "inglés para meseros" is not a neighbour of "leer en inglés".
  const addPillar = (page, silo, family) => {
    if (claimed.has(page.slug)) return;
    claimed.add(page.slug);
    entries.push({ slug: page.slug, label: page.h1, silo, parent: null, family });
  };

  for (const page of esMainPages) addPillar(page, "es", "main");
  for (const page of espLessons) addPillar(page, "es", "esp");
  for (const page of enMainPages) addPillar(page, "en", "main");
  for (const page of careerLessons) addPillar(page, "en", "lesson");

  for (const [silo, pages] of [
    ["es", esMainPages],
    ["en", enMainPages],
  ]) {
    for (const page of pages) {
      for (const fanout of page.fanouts || []) {
        if (claimed.has(fanout.slug)) continue;
        claimed.add(fanout.slug);
        entries.push({ slug: fanout.slug, label: fanout.h1, silo, parent: page.slug, family: "main" });
      }
    }
  }

  return entries;
}

const REGISTRY = buildRegistry();
const REGISTRY_BY_SLUG = new Map(REGISTRY.map((entry, index) => [entry.slug, { ...entry, index }]));

/** Which silo a path belongs to. ESP lessons live under /aprender-ingles/esp/. */
function siloOf(slug) {
  if (slug.startsWith("/aprender-ingles")) return "es";
  if (slug.startsWith("/learning-english") || slug.startsWith("/lessons")) return "en";
  return null;
}

/** Deterministic rotation: same page, same build, same output. */
const rotate = (list, by) =>
  list.length ? list.slice(by % list.length).concat(list.slice(0, by % list.length)) : list;

/**
 * Related links for one page, chosen by topical distance rather than a
 * fixed site-wide list. Candidates are tiered, each tier rotated by the
 * page's registry index so no single page absorbs everything, then slots
 * fill from tier 1 down:
 *
 *   1. same cluster — the parent pillar first, then sibling fanouts
 *   2. sibling pillars — other cluster heads of the same family
 *   3. everything else in the silo
 *
 * A pillar's own fanouts are excluded: FanoutList already lists them.
 * Cross-silo pairs never enter the pool, so ES pages cannot link to EN.
 */
export function relatedLinksFor(slug, limit = 3) {
  const self = REGISTRY_BY_SLUG.get(slug);
  const silo = self ? self.silo : siloOf(slug);
  if (!silo) return [];

  const clusterHead = self ? self.parent || self.slug : slug;
  const family = self ? self.family : "main";
  const index = self ? self.index : 0;
  const ownFanoutSlugs = new Set(REGISTRY.filter((e) => e.parent === slug).map((e) => e.slug));

  const pool = REGISTRY.filter(
    (e) => e.silo === silo && e.slug !== slug && !ownFanoutSlugs.has(e.slug)
  );

  const parent = pool.filter((e) => e.slug === clusterHead);
  const siblings = pool.filter((e) => e.parent === clusterHead);
  const pillars = pool.filter(
    (e) => e.parent === null && e.slug !== clusterHead && e.family === family
  );
  const chosen = new Set([...parent, ...siblings, ...pillars].map((e) => e.slug));
  const rest = pool.filter((e) => !chosen.has(e.slug));

  return [...parent, ...rotate(siblings, index), ...rotate(pillars, index), ...rotate(rest, index)]
    .slice(0, limit)
    .map((e) => ({ path: e.slug, label: e.label }));
}

export const SITE_URL = BRAND.url;

/**
 * Title formula per docs/seo-schema.md §9: "{H1} — MatchFluent",
 * max 60 chars, truncated gracefully at a word boundary.
 */
export function makeTitle(h1, suffix = " — MatchFluent") {
  const full = `${h1}${suffix}`;
  if (full.length <= 60) return full;
  const room = 60 - suffix.length - 1;
  const cut = h1.slice(0, room);
  const clean = cut.slice(0, cut.lastIndexOf(" ")) || cut;
  return `${clean}…${suffix}`;
}

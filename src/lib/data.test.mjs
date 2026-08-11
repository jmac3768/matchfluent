/**
 * Self-check for relatedLinksFor(). Run: node src/lib/data.test.mjs
 * Asserts the invariants the internal-linking graph depends on —
 * silo containment, determinism, no self-links, no ToC duplication.
 */
import assert from "node:assert/strict";
import { esMainPages, enMainPages, espLessons, careerLessons, relatedLinksFor } from "./data.js";

const siloOf = (slug) =>
  slug.startsWith("/aprender-ingles") ? "es" : slug.startsWith("/learning-english") || slug.startsWith("/lessons") ? "en" : null;

// Mirrors buildSiloRoutes: a fanout slug that is also a main page stays a
// pillar (e.g. /learning-english/learning-english-with-ai), so main pages
// and lessons claim their slugs before any fanout does.
const allPages = [];
const claimed = new Set();
const claim = (slug, silo, parent, fanouts) => {
  if (claimed.has(slug)) return;
  claimed.add(slug);
  allPages.push({ slug, silo, parent, fanouts });
};
for (const p of esMainPages) claim(p.slug, "es", null, []);
for (const l of espLessons) claim(l.slug, "es", null, []);
for (const p of enMainPages) claim(p.slug, "en", null, []);
for (const l of careerLessons) claim(l.slug, "en", null, []);
for (const [silo, pages] of [["es", esMainPages], ["en", enMainPages]]) {
  for (const p of pages) for (const f of p.fanouts || []) claim(f.slug, silo, p.slug, []);
}
// A pillar's ToC lists only the fanouts it actually owns after the dedupe.
for (const page of allPages.filter((p) => p.parent === null)) {
  page.fanouts = allPages.filter((p) => p.parent === page.slug).map((p) => p.slug);
}

let linkCount = 0;
const inbound = new Map();

for (const page of allPages) {
  const links = relatedLinksFor(page.slug);

  // Deterministic: same input, same output.
  assert.deepEqual(links, relatedLinksFor(page.slug), `nondeterministic for ${page.slug}`);

  // Never more than the limit, never a self-link, always labelled.
  assert.ok(links.length <= 3, `${page.slug} returned ${links.length} links`);
  for (const l of links) {
    assert.notEqual(l.path, page.slug, `${page.slug} links to itself`);
    assert.ok(l.label && l.path, `${page.slug} produced an incomplete link`);
    // Silo containment — the whole point of the two-silo build.
    assert.equal(siloOf(l.path), page.silo, `${page.slug} crossed silos to ${l.path}`);
    // A pillar's own fanouts belong to FanoutList, not here.
    assert.ok(!page.fanouts.includes(l.path), `${page.slug} duplicates its ToC entry ${l.path}`);
    inbound.set(l.path, (inbound.get(l.path) || 0) + 1);
    linkCount++;
  }
}

// Tier 1 first: a fanout's top link is its parent pillar.
for (const page of allPages.filter((p) => p.parent)) {
  assert.equal(
    relatedLinksFor(page.slug)[0]?.path,
    page.parent,
    `${page.slug} did not lead with its parent pillar`
  );
}

// Spread: no page may absorb an outsized share of all generated links.
const worst = [...inbound.entries()].sort((a, b) => b[1] - a[1])[0];
assert.ok(worst[1] <= linkCount * 0.1, `${worst[0]} absorbs ${worst[1]} of ${linkCount} links`);

console.log(`ok — ${allPages.length} pages, ${linkCount} links, max inbound ${worst[1]} (${worst[0]})`);

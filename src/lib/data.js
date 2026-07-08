/**
 * Data layer: merges keyword-clusters.json (Layer 1 + 2) with
 * keyword-clusters-2b.json (Layer 2b) and exposes the page lists that
 * drive every getStaticPaths() in the site.
 */
import layer1 from "../data/keyword-clusters.json";
import layer2b from "../data/keyword-clusters-2b.json";
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

/** Internal linking rules from site-architecture.json. */
export const internalLinks = {
  es: [
    { path: "/aprender-ingles/aprender-ingles-desde-cero", label: "Aprender inglés desde cero: guía paso a paso" },
    { path: "/aprender-ingles/duolingo-vs-rocket-languages", label: "Duolingo vs Rocket Languages: comparación honesta" },
    { path: "/aprender-ingles/mejor-app-para-aprender-ingles", label: "La mejor app para aprender inglés en 2025" },
  ],
  esp: [
    { path: "/aprender-ingles", label: "Todas las guías para aprender inglés" },
    { path: "/aprender-ingles/aprender-ingles-desde-cero", label: "Aprender inglés desde cero: guía paso a paso" },
    { path: "/aprender-ingles/cursos-para-aprender-ingles", label: "Los mejores cursos de inglés online" },
  ],
  en: [
    { path: "/learning-english/best-app-to-learn-english", label: "Best app to learn English: honest comparison" },
    { path: "/learning-english/learning-english-with-ai", label: "Learning English with AI: what actually works" },
    { path: "/learning-english/for-spanish-speakers", label: "Learning English for Spanish speakers" },
  ],
};

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

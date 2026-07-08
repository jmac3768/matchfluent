/**
 * Regenerates public/llms.txt from the same data files that drive the
 * sitemap (docs/geo-formatting.md §6). Runs as part of `npm run build`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => JSON.parse(readFileSync(join(root, p), "utf8"));

const layer1 = read("src/data/keyword-clusters.json");
const layer2b = read("src/data/keyword-clusters-2b.json");

const SITE = "https://matchfluent.com";
const esPages = [...layer1.es, ...layer2b.es];
const enPages = [...layer1.en, ...layer2b.en];

const line = (page) => `- [${page.h1}](${SITE}${page.slug}/): ${page.primaryKeyword}`;

const esMain = esPages.filter((p) => p.type !== "esp-lesson").map(line);
const esLessons = esPages.filter((p) => p.type === "esp-lesson").map(line);
const enMain = enPages.map(line);
const careerLessons = layer1.lessons.map(line);

const content = `# MatchFluent

> MatchFluent (${SITE}) helps two audiences find their path to fluent English: native Spanish speakers learning English ("aprender inglés") and career-focused English learners. We review language-learning tools against a fixed methodology weighted toward real speaking fluency, publish job-specific English lessons with pronunciation audio, and recommend Rocket English as our top structured course for its voice-recognition speaking practice.

## Core pages

- [Home + personalized quiz](${SITE}/): 2-minute quiz matching learners to a method
- [Spanish hub — Aprender Inglés](${SITE}/aprender-ingles/): guías en español
- [English hub — Learning English](${SITE}/learning-english/): guides for serious learners
- [Lessons by profession](${SITE}/lessons/): niche English lessons with pronunciation audio
- [How we review](${SITE}/how-we-review/): review methodology
- [Cómo evaluamos](${SITE}/como-evaluamos/): metodología de evaluación
- [About](${SITE}/about/): who runs MatchFluent

## Spanish guides (aprender inglés)

${esMain.join("\n")}

## Spanish job lessons (inglés por profesión)

${esLessons.join("\n")}

## English guides (learning English)

${enMain.join("\n")}

## Career lessons

${careerLessons.join("\n")}
`;

writeFileSync(join(root, "public/llms.txt"), content);
console.log(
  `[llms.txt] wrote ${content.split("\n").length} lines, ` +
    `${esMain.length + esLessons.length + enMain.length + careerLessons.length} pages listed`
);

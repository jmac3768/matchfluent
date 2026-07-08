# MatchFluent.com

A fully static English-learning affiliate site built with **Astro** (`output: 'static'`), Tailwind CSS, and exactly two React islands. It serves two audiences: native Spanish speakers learning English (`/aprender-ingles/`) and career-focused English learners (`/learning-english/`), routing high-intent traffic into the Rocket Languages affiliate program.

## 1. Overview & why static output

- **Stack:** Astro 4 + `@astrojs/tailwind` + `@astrojs/react` + `@astrojs/sitemap`. React is used for exactly two islands: the Quiz and the PronounceButton. Everything else ships zero JavaScript.
- **Why static is non-negotiable:** the site's entire strategy is SEO and GEO (Generative Engine Optimization — being cited by ChatGPT, Perplexity, and Google AI Overviews). AI crawlers do not reliably execute JavaScript, so every heading, phrase list, comparison table, FAQ, and JSON-LD block must exist in the raw HTML response. `view-source:` on any deployed page shows the complete content.
- **Data-driven pages:** all cluster, comparison, glossary, fanout, and lesson pages are generated at build time via `getStaticPaths()` from `src/data/keyword-clusters.json` + `src/data/keyword-clusters-2b.json`. One template per page type — no hand-written page per keyword.

## 2. Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # regenerates public/llms.txt, then builds static HTML into dist/
npm run preview    # serves dist/ — the exact HTML crawlers will see
```

## 3. Swap in the real affiliate link

Edit `src/config/site.js`:

```js
export const AFFILIATE_URL = "https://YOUR_AFFILIATE_LINK_HERE";
```

Replace with your tracked Awin link (`https://www.awin1.com/cread.php?awinmid=XXXXX&awinaffid=YYYYYY`) or ClickBank hoplink. Every CTA on the site resolves through `buildAffiliateUrl(source)` — nothing is hardcoded, and each CTA passes a `source` for campaign tracking (`quiz-result`, `cluster-footer`, `intercept`, …).

## 4. Connect the email stub

The quiz's optional email gate calls `submitEmail()` in `src/config/site.js` — a stub compatible with Loops, Beehiiv, or SendFox.

1. Set your provider's API URL: `export const EMAIL_ENDPOINT = "..."` in `src/config/site.js`.
2. Create `.env` (copy `.env.example`) with `PUBLIC_EMAIL_API_KEY=your_key`.
   Astro exposes env vars via `import.meta.env`, and **client-exposed vars need the `PUBLIC_` prefix** — the quiz island runs in the browser, so the key must be `PUBLIC_`-prefixed. Never commit `.env`.
3. Adjust the request body in `submitEmail()` to match your provider's API spec (Loops: `{ email, firstName, source }`; Beehiiv: `{ email, utm_source }`).

Until configured, submissions no-op with a console warning and the quiz still shows results.

## 5. Deployment

**Cloudflare Pages (primary):** connect the repo → framework preset *Astro* → build command `npm run build` → output directory `dist` → add env var `PUBLIC_EMAIL_API_KEY`.

**Netlify:** same — build command `npm run build`, publish directory `dist`, env var `PUBLIC_EMAIL_API_KEY`.

## 6. Page inventory

**Root:** `/` (homepage + full quiz) · `/404` · `/about` · `/sobre-nosotros` · `/how-we-review` · `/como-evaluamos` · `/affiliate-disclosure` · `/lessons/` · `/lessons/english-for-software-engineers`

**Spanish silo `/aprender-ingles/`** — hub plus:

- Clusters: `mejor-app-para-aprender-ingles`, `cursos-para-aprender-ingles`, `mejores-libros-para-aprender-ingles`, `mejores-podcasts-para-aprender-ingles`, `series-para-aprender-ingles`, `ia-para-aprender-ingles`, `aprender-ingles-desde-cero`, `hablar-ingles-con-fluidez`, `inmersion-en-ingles`, `leer-en-ingles`
- Comparisons: `duolingo-vs-rocket-languages`, `preply-italki-cambly-comparacion`
- Glossary hub: `metodos-para-aprender-ingles`
- ESP lessons (`esp/`): `ingles-para-meseros`, `ingles-para-construccion`, `ingles-para-limpieza`, `ingles-para-restaurantes`, `ingles-para-call-center`, `ingles-para-enfermeras`, `ingles-para-hotel`
- Plus 29 fanout child pages (free apps, Android, offline, ChatGPT, CEFR levels, miedo a hablar, …)

**English silo `/learning-english/`** — hub plus:

- Clusters: `best-app-to-learn-english`, `best-books-for-learning-english`, `for-spanish-speakers`, `american-english-accent-training`, `learning-english-with-ai`, `fastest-way-to-learn-english`, `how-to-speak-english-fluently`, `english-exam-prep`
- Comparison: `best-online-english-tutor`
- Glossary hub: `english-learning-methods`
- Plus 14 fanout child pages (30 days, TOEFL/IELTS guides, phonetics, tutor-vs-course, …)

All routes appear in the generated sitemap (`/sitemap-index.xml`) and in `/llms.txt`.

## 7. Add a new cluster page

1. Add an entry to `src/data/keyword-clusters.json` (or `-2b.json`) under `es` or `en`: `id`, `slug`, `type` (`cluster` | `comparison` | `glossary-hub`), `h1`, keywords, `affiliateIntercept`, optional `fanouts`, optional `hasPronunciation` + `practicePhrases`, optional `glossaryTerms`.
2. Add the matching authored copy in `src/content/copy-es.js` / `copy-en.js` keyed by `id` (or `src/content/fanouts-*.js` keyed by slug for fanouts): `description`, `quickAnswer`, `entity`, `sections`, `tableTakeaway`, `faq`. The build **fails loudly** if copy is missing — that's intentional.
3. `npm run build`. The page, its schema, the sitemap entry, and the llms.txt line are all generated.

Optional: add a `lastUpdated: "2026-07-01"` field to any page entry to override the build-date "Last updated" stamp.

## 8. Add a new ESP lesson

1. Add an entry with `type: "esp-lesson"` under `es` in `src/data/keyword-clusters.json`, including `lessonPhrases: [{ en, es, context }]`.
2. Add its intro/closing/description in `espIntros` in `src/content/copy-es.js` (keyed by `id`). Use *usted* register for professional/medical jobs, *tú* otherwise.
3. `npm run build`. The lesson renders with one PronounceButton per English phrase.

## 9. E-E-A-T TODO checklist

Search the project for `[TODO` and `[REPLACE`:

- [ ] Replace the placeholder author name **Alex Rivera** in `src/components/astro/AuthorByline.astro` and on `/about` + `/sobre-nosotros`
- [ ] Add the real author bio + photo on `/about` and `/sobre-nosotros` (`[TODO: real author bio + photo]`)
- [ ] Replace any testimonial placeholders (`[REPLACE WITH REAL REVIEW]`) before adding testimonial blocks
- [ ] Replace `public/og-image.png` (currently a 1×1 placeholder) with a real 1200×630 OG image
- [ ] Set the real `AFFILIATE_URL` and `EMAIL_ENDPOINT` (§3–4)

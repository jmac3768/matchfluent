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

All CTAs point at internal redirect paths (`/go/rocket-en` for the English silo, `/go/rocket` for the Spanish silo), defined in `src/config/site.js` and resolved by `public/_redirects` on Cloudflare Pages. To change the tracked destination (e.g. a new ClickBank hoplink), edit `public/_redirects` only. Every CTA on the site resolves through `buildAffiliateUrl(source, lang)` — nothing is hardcoded, and each CTA passes a `source` for campaign tracking (`quiz-result`, `cluster-footer`, `intercept`, …).

## 4. Email capture (SendFox)

The quiz shows an email capture form under its results. It POSTs to `/api/subscribe`, a server-rendered Astro API route (`src/pages/api/subscribe.js`, `prerender = false`) running in the Cloudflare Worker, which adds the contact to a SendFox list — Spanish silo → list 663144, English silo → list 663145. The silo comes from the user's step-2 language answer.

The SendFox token lives **only** in the `SENDFOX_API_TOKEN` secret in the Cloudflare project settings — never in the repo, never client-side. The route reads it via `locals.runtime.env`.

**Local dev:** `astro dev` serves the route with local bindings via the adapter's `platformProxy`; put the token in a git-ignored `.dev.vars` file (`SENDFOX_API_TOKEN=your_token`) so wrangler picks it up.

## 5. Deployment

**Cloudflare Pages (primary):** connect the repo → framework preset *Astro* → build command `npm run build` → output directory `dist` → add secret `SENDFOX_API_TOKEN`.

**Netlify:** same build command/output, but `/api/subscribe` is a Cloudflare Pages Function and would need porting to a Netlify Function.

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
- [ ] Set the real `AFFILIATE_URL` and the `SENDFOX_API_TOKEN` secret (§3–4)

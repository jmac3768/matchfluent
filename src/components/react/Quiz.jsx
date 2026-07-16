import { useEffect, useState } from "react";
import {
  QUIZ_CONFIG,
  COMPARISON_TABLE,
  buildAffiliateUrl,
  submitEmail,
} from "../../config/site.js";

/**
 * Quiz
 * ------------------------------------------------------------------
 * The full quiz state machine: 3 answer steps + optional email gate +
 * personalized results engine (docs/conversion-rules.md §6).
 *
 * Props:
 *   lang    "en" | "es" — UI language before the user answers Step 2.
 *           Once Step 2 is answered, the ANSWER controls results language:
 *           Spanish users see 100% Spanish results.
 *   compact boolean — condensed 2-step entry version for cluster pages.
 *           After Step 2 it links into the full homepage quiz with state.
 */

const RESULTS_COPY = {
  speaking: {
    headline_en: "Your roadblock is speaking — so speaking practice is your plan.",
    headline_es: "Tu bloqueo es el habla — así que tu plan es práctica de habla.",
    body_en:
      "You freeze up when speaking because understanding and speaking are different skills — and almost nothing you've used trains the second one. Your plan: 20–30 minutes of daily out-loud practice with pronunciation feedback, in private, where mistakes cost nothing. That's exactly what Rocket English's voice-recognition lessons are built around.",
    body_es:
      "Te bloqueas al hablar porque entender y hablar son habilidades distintas — y casi nada de lo que has usado entrena la segunda. Tu plan: 20–30 minutos diarios de práctica en voz alta con retroalimentación de pronunciación, en privado, donde equivocarte no cuesta nada. Eso es exactamente lo que hacen las lecciones con reconocimiento de voz de Rocket English.",
  },
  vocabulary: {
    headline_en: "Your roadblock is professional vocabulary — context is your plan.",
    headline_es: "Tu bloqueo es el vocabulario profesional — tu plan es el contexto.",
    body_en:
      "Word lists don't stick; words learned inside real conversations do. Your plan: learn vocabulary in full phrases from real professional dialogue, then say them out loud until they retrieve automatically. Rocket English teaches every phrase inside a native-speaker conversation — vocabulary with its context attached.",
    body_es:
      "Las listas de palabras no se quedan; las palabras aprendidas dentro de conversaciones reales, sí. Tu plan: aprende vocabulario en frases completas de diálogos profesionales reales, y dilas en voz alta hasta que salgan automáticas. Rocket English enseña cada frase dentro de una conversación de hablantes nativos — vocabulario con su contexto incluido.",
  },
  exam: {
    headline_en: "Your goal is an interview or exam — structure and measurable progress win.",
    headline_es: "Tu meta es una entrevista o examen — ganan la estructura y el progreso medible.",
    body_en:
      "Interviews and exams are mostly lost on speaking and listening, not grammar. Your plan: a structured curriculum that builds spoken fluency on a schedule, then format-specific drilling in the final weeks. Rocket English provides the progressive path and speaking practice that moves the scores hardest to move.",
    body_es:
      "Las entrevistas y los exámenes se pierden sobre todo en el habla y la comprensión, no en la gramática. Tu plan: un currículum estructurado que construya fluidez hablada con calendario, y práctica del formato específico en las semanas finales. Rocket English pone la ruta progresiva y la práctica de habla que mueve las secciones más difíciles de mover.",
  },
  beginner: {
    headline_en: "You're starting from scratch — the right sequence is your plan.",
    headline_es: "Empiezas desde cero — tu plan es la secuencia correcta.",
    body_en:
      "Beginners fail from scattered resources, not difficulty. Your plan: sounds first, the 300 most frequent words, whole phrases out loud from day one — in that order, decided for you. Rocket English's progressive lessons handle the sequencing so your only job is showing up 30 minutes a day.",
    body_es:
      "Los principiantes fracasan por recursos dispersos, no por dificultad. Tu plan: primero los sonidos, las 300 palabras más frecuentes, frases completas en voz alta desde el día uno — en ese orden, decidido por ti. Las lecciones progresivas de Rocket English se encargan de la secuencia; tu único trabajo es aparecer 30 minutos al día.",
  },
};

const TRACK_NOTES = {
  tech: {
    en: "Since you chose Software & Tech: start with our free English for Software Engineers lesson after your first Rocket session.",
    es: "Como elegiste Tecnología: revisa también nuestra lección gratuita de inglés para ingenieros de software después de tu primera sesión.",
  },
  medical: {
    en: "Since you chose Medical & Nursing: precision matters — our medical English lesson pairs well with your daily practice.",
    es: "Como elegiste Medicina y Enfermería: la precisión importa — nuestra lección de inglés médico complementa tu práctica diaria.",
  },
  business: {
    en: "Since you chose Business & Management: prioritize meeting and negotiation phrases in your daily practice.",
    es: "Como elegiste Negocios y Gerencia: prioriza frases de reuniones y negociación en tu práctica diaria.",
  },
  general: {
    en: "Since you chose General Fluency: conversation-first practice is exactly the right call.",
    es: "Como elegiste Fluidez General: la práctica centrada en conversación es exactamente la decisión correcta.",
  },
};

const pick = (obj, lang, key) => obj[`${key}_${lang}`] ?? obj[key];

export default function Quiz({ lang = "en", compact = false }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [phase, setPhase] = useState("questions"); // questions | email | results
  const [emailState, setEmailState] = useState("idle"); // idle | sending | sent | skipped | error
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const answerSteps = QUIZ_CONFIG.steps.filter((s) => !s.isOptional);
  const emailStep = QUIZ_CONFIG.steps.find((s) => s.isOptional);
  const visibleSteps = compact ? answerSteps.slice(0, 2) : answerSteps;

  // Results language follows the Step 2 ANSWER (Spanish users see fully
  // Spanish results); before that answer exists, follow the page language.
  const resultLang = answers.language === "es" ? "es" : answers.language === "en" ? "en" : lang;

  // Full quiz: pick up state passed from a condensed cluster-page quiz.
  useEffect(() => {
    if (compact || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const roadblock = params.get("roadblock");
    const language = params.get("language");
    if (roadblock && language) {
      setAnswers({ roadblock, language });
      setStepIndex(2);
    }
  }, [compact]);

  const selectOption = (stepId, value) => {
    const next = { ...answers, [stepId]: value };
    setAnswers(next);

    if (compact && stepIndex === 1) {
      // Condensed version links into the full quiz with state.
      window.location.href = `/?roadblock=${next.roadblock}&language=${next.language}#quiz`;
      return;
    }
    if (stepIndex < visibleSteps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setPhase("email");
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setEmailState("sending");
    const result = await submitEmail({ firstName, email, source: "quiz" });
    setEmailState(result.success ? "sent" : "error");
    setPhase("results");
  };

  const skipEmail = () => {
    setEmailState("skipped");
    setPhase("results");
  };

  const t = (en, es) => (resultLang === "es" ? es : en);
  const uiLang = phase === "questions" && !answers.language ? lang : resultLang;

  // ------------------------------------------------------------------
  // Questions phase
  // ------------------------------------------------------------------
  if (phase === "questions") {
    const step = visibleSteps[stepIndex];
    const progress = ((stepIndex + 1) / (compact ? 2 : answerSteps.length + 1)) * 100;
    return (
      <div className="rounded-xl border border-border bg-background p-6 shadow-card animate-fade-in">
        <div className="h-1.5 rounded-full bg-navy-100 mb-5 overflow-hidden">
          <div
            className="h-full bg-gradient-cta rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono text-xs text-text-muted mb-2">
          {uiLang === "es" ? "Paso" : "Step"} {stepIndex + 1} /{" "}
          {compact ? 2 : answerSteps.length + 1}
        </p>
        <h3 className="text-xl font-bold text-navy-700 mb-4">
          {uiLang === "es" ? step.question_es : step.question_en}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {step.options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => selectOption(step.id, option.value)}
              className="text-left rounded-xl border-2 border-border bg-surface p-4 hover:border-navy-500 focus:border-navy-700 focus:outline-none transition-colors"
            >
              <span className="mr-2" aria-hidden="true">
                {option.icon}
              </span>
              <span className="font-medium text-navy-700">
                {uiLang === "es" ? option.label_es : option.label_en}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Email gate (optional — clearly labeled, skippable)
  // ------------------------------------------------------------------
  const copy = RESULTS_COPY[answers.roadblock] || RESULTS_COPY.beginner;

  if (phase === "email") {
    return (
      <div className="rounded-xl border border-border bg-background p-6 shadow-card animate-slide-up">
        {/* Teaser of results above the form */}
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2">
          {t("Your result", "Tu resultado")}
        </p>
        <h3 className="text-xl font-bold text-navy-700 mb-1">
          {resultLang === "es" ? copy.headline_es : copy.headline_en}
        </h3>
        <p className="text-text-secondary text-sm mb-5">
          {resultLang === "es" ? emailStep.headline_es : emailStep.headline_en}{" "}
          {resultLang === "es" ? emailStep.subheadline_es : emailStep.subheadline_en}
        </p>
        <form onSubmit={handleEmailSubmit} className="grid gap-3 sm:grid-cols-2">
          <label className="sr-only" htmlFor="quiz-firstname">
            {t("First name", "Nombre")}
          </label>
          <input
            id="quiz-firstname"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t("First name", "Nombre")}
            className="rounded-lg border border-border-strong px-4 py-3 text-navy-700 focus:border-teal-500 focus:outline-none"
          />
          <label className="sr-only" htmlFor="quiz-email">
            Email
          </label>
          <input
            id="quiz-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded-lg border border-border-strong px-4 py-3 text-navy-700 focus:border-teal-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={emailState === "sending"}
            className="sm:col-span-2 rounded-xl bg-gradient-cta text-white font-semibold py-3 shadow-cta hover:shadow-cta-hover transition-shadow disabled:opacity-60"
          >
            {emailState === "sending"
              ? t("Sending…", "Enviando…")
              : resultLang === "es"
                ? emailStep.ctaLabel_es
                : emailStep.ctaLabel_en}
          </button>
        </form>
        <button
          type="button"
          onClick={skipEmail}
          className="mt-3 w-full text-sm text-text-muted underline hover:text-navy-500"
        >
          {resultLang === "es" ? emailStep.skipLabel_es : emailStep.skipLabel_en}
        </button>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Results phase — personalized per Step 1 + Step 2 answers
  // ------------------------------------------------------------------
  const condensed = emailState === "skipped";
  const trackNote = answers.track ? TRACK_NOTES[answers.track] : null;
  const h = COMPARISON_TABLE.headers;

  return (
    <div className="rounded-xl border border-border bg-background p-6 shadow-card animate-slide-up">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-2">
        {t("Your personalized plan", "Tu plan personalizado")}
      </p>
      <h3 className="text-xl font-bold text-navy-700 mb-3">
        {resultLang === "es" ? copy.headline_es : copy.headline_en}
      </h3>
      {emailState === "sent" && (
        <p className="text-sm text-success bg-success-light rounded-lg px-3 py-2 mb-3">
          {t(
            `Plan sent${firstName ? `, ${firstName}` : ""} — check your inbox.`,
            `Plan enviado${firstName ? `, ${firstName}` : ""} — revisa tu correo.`
          )}
        </p>
      )}
      {emailState === "error" && (
        <p className="text-sm text-warning bg-warning-light rounded-lg px-3 py-2 mb-3">
          {t(
            "We couldn't send the email right now — your results are below.",
            "No pudimos enviar el correo en este momento — tus resultados están abajo."
          )}
        </p>
      )}
      {!condensed && (
        <p className="text-text-secondary leading-relaxed mb-3">
          {resultLang === "es" ? copy.body_es : copy.body_en}
        </p>
      )}
      {!condensed && trackNote && (
        <p className="text-sm text-navy-500 italic mb-4">
          {resultLang === "es" ? trackNote.es : trackNote.en}
        </p>
      )}

      <div className="overflow-x-auto rounded-xl border border-border my-4">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-navy-700 text-white">
              <th className="px-3 py-2 font-semibold">
                {resultLang === "es" ? h.feature_es : h.feature_en}
              </th>
              <th className="px-3 py-2 font-semibold">
                {resultLang === "es" ? h.freeApps_es : h.freeApps_en}
              </th>
              <th className="px-3 py-2 font-semibold border-l-2 border-teal-400">
                {resultLang === "es" ? h.rocket_es : h.rocket_en}
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_TABLE.rows.map((row, i) => (
              <tr key={row.feature_en} className={i % 2 === 0 ? "bg-surface" : "bg-background"}>
                <th scope="row" className="px-3 py-2 font-medium text-navy-700">
                  {resultLang === "es" ? row.feature_es : row.feature_en}
                </th>
                <td className="px-3 py-2 text-text-secondary">
                  {resultLang === "es" ? row.freeApps_es : row.freeApps}
                </td>
                <td className="px-3 py-2 text-navy-700 border-l-2 border-teal-100">
                  {resultLang === "es" ? row.rocket_es : row.rocket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a
        href={buildAffiliateUrl("quiz-result", resultLang)}
        rel="nofollow sponsored noopener"
        target="_blank"
        className="block text-center rounded-xl bg-gradient-cta text-gold-50 font-semibold text-lg py-4 shadow-cta hover:shadow-cta-hover transition-shadow"
      >
        {t("Start My Free Rocket English Lesson →", "Empieza Mi Lección Gratis de Rocket English →")}
      </a>
    </div>
  );
}

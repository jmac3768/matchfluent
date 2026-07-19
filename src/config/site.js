/**
 * MatchFluent Site Configuration
 * ================================
 * All affiliate links, API endpoints, and brand constants live here.
 * Never hardcode these values in components.
 *
 * BEFORE DEPLOYING:
 * 1. Keep public/_redirects pointing at your real ClickBank tracked link
 * 2. Replace EMAIL_ENDPOINT with your Loops or Beehiiv API endpoint
 * 3. Set PUBLIC_EMAIL_API_KEY in your .env file (never commit this)
 */

// ---------------------------------------------------------------------------
// AFFILIATE LINK
// Internal redirect paths (see public/_redirects) — the actual tracked
// destination lives there; swap it in one place without touching pages.
// ---------------------------------------------------------------------------
export const ROCKET_URL_EN = "/go/rocket-en";
export const ROCKET_URL_ES = "/go/rocket";

// `source` is unused for now; call sites keep passing it so campaign tracking
// can be re-enabled here if needed.
export const buildAffiliateUrl = (source = "generic", lang = "en") => {
  return lang === "es" ? ROCKET_URL_ES : ROCKET_URL_EN;
};

// ---------------------------------------------------------------------------
// EMAIL COLLECTION
// Compatible with Loops (https://loops.so) or Beehiiv (https://beehiiv.com)
// Set EMAIL_ENDPOINT to your list's API URL.
// Set the API key in .env as PUBLIC_EMAIL_API_KEY — Astro exposes env vars
// via import.meta.env, and client-visible vars need the PUBLIC_ prefix
// (the Quiz island calls submitEmail from the browser).
// ---------------------------------------------------------------------------
export const EMAIL_ENDPOINT = "https://YOUR_EMAIL_ENDPOINT_HERE";
export const EMAIL_API_KEY = import.meta.env.PUBLIC_EMAIL_API_KEY || "";

/**
 * Stub email submission function.
 * Replace the body and headers to match your provider's API spec.
 *
 * Loops example body: { email, firstName, source }
 * Beehiiv example body: { email, utm_source }
 */
export const submitEmail = async ({ firstName, email, source = "quiz" }) => {
  if (!EMAIL_ENDPOINT || EMAIL_ENDPOINT.includes("YOUR_")) {
    console.warn("[MatchFluent] EMAIL_ENDPOINT not configured. Skipping submission.");
    return { success: false, reason: "not_configured" };
  }

  try {
    const response = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${EMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstName,
        source,
        tags: ["quiz-funnel", source],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return { success: true };
  } catch (err) {
    console.error("[MatchFluent] Email submission failed:", err);
    return { success: false, reason: err.message };
  }
};

// ---------------------------------------------------------------------------
// BRAND
// ---------------------------------------------------------------------------
export const BRAND = {
  name: "MatchFluent",
  domain: "matchfluent.com",
  url: "https://matchfluent.com",
  tagline_en: "Find your path to fluent English.",
  tagline_es: "Encuentra tu camino al inglés fluido.",
  trustSignals_en: [
    "Trusted by learners in 30+ countries",
    "Interactive audio lessons",
    "Native speaker content",
    "No subscription required",
  ],
  trustSignals_es: [
    "Confiado por estudiantes en más de 30 países",
    "Lecciones de audio interactivas",
    "Contenido con hablantes nativos",
    "Sin suscripción mensual",
  ],
  social: {
    twitter: "",
    youtube: "",
  },
};

// ---------------------------------------------------------------------------
// QUIZ
// ---------------------------------------------------------------------------
export const QUIZ_CONFIG = {
  steps: [
    {
      id: "roadblock",
      question_en: "Where do you get stuck the most?",
      question_es: "¿Dónde te trabas más?",
      options: [
        {
          value: "speaking",
          label_en: "I freeze up when speaking",
          label_es: "Me bloqueo al hablar",
          icon: "🗣️",
        },
        {
          value: "vocabulary",
          label_en: "I struggle with professional vocabulary",
          label_es: "Me cuesta el vocabulario profesional",
          icon: "📚",
        },
        {
          value: "exam",
          label_en: "I want to pass an interview or exam",
          label_es: "Quiero pasar una entrevista o examen",
          icon: "🎯",
        },
        {
          value: "beginner",
          label_en: "I am starting entirely from scratch",
          label_es: "Estoy empezando desde cero",
          icon: "🌱",
        },
      ],
    },
    {
      id: "language",
      question_en: "What is your primary language?",
      question_es: "¿Cuál es tu idioma principal?",
      options: [
        {
          value: "en",
          label_en: "English — I want to advance my career",
          label_es: "Inglés — quiero avanzar en mi carrera",
          icon: "🇺🇸",
        },
        {
          value: "es",
          label_en: "Español — I want to learn English fast",
          label_es: "Español — quiero aprender inglés rápido",
          icon: "🇲🇽",
        },
      ],
    },
    {
      id: "track",
      question_en: "Choose your specialized track:",
      question_es: "Elige tu área de enfoque:",
      options: [
        {
          value: "tech",
          label_en: "Software & Tech",
          label_es: "Tecnología y Software",
          icon: "💻",
        },
        {
          value: "medical",
          label_en: "Medical & Nursing",
          label_es: "Medicina y Enfermería",
          icon: "🏥",
        },
        {
          value: "business",
          label_en: "Business & Management",
          label_es: "Negocios y Gerencia",
          icon: "📊",
        },
        {
          value: "general",
          label_en: "General Fluency / Travel",
          label_es: "Fluidez General / Viajes",
          icon: "✈️",
        },
      ],
    },
    {
      id: "email",
      isOptional: true,
      headline_en: "Your personalized plan is ready.",
      headline_es: "Tu plan personalizado está listo.",
      subheadline_en:
        "Get your full 3-day lesson plan + an exclusive Rocket Languages discount delivered to your inbox.",
      subheadline_es:
        "Recibe tu plan de 3 días + un código de descuento exclusivo para Rocket Languages.",
      skipLabel_en: "Skip — show me my results",
      skipLabel_es: "Omitir — ver mis resultados",
      ctaLabel_en: "Send My Plan",
      ctaLabel_es: "Enviar Mi Plan",
    },
  ],
};

// ---------------------------------------------------------------------------
// COMPARISON TABLE DATA
// ---------------------------------------------------------------------------
export const COMPARISON_TABLE = {
  headers: {
    feature_en: "Feature",
    feature_es: "Característica",
    freeApps_en: "Free Apps (Duolingo etc.)",
    freeApps_es: "Apps Gratuitas (Duolingo etc.)",
    rocket_en: "Rocket English",
    rocket_es: "Rocket English",
  },
  rows: [
    {
      feature_en: "Speaking practice",
      feature_es: "Práctica de habla",
      freeApps: "❌ Minimal or none",
      freeApps_es: "❌ Mínima o ninguna",
      rocket: "✅ Core feature",
      rocket_es: "✅ Función central",
    },
    {
      feature_en: "Real conversation audio",
      feature_es: "Audio de conversación real",
      freeApps: "❌ Gamified matching",
      freeApps_es: "❌ Juegos de emparejamiento",
      rocket: "✅ Native speaker recordings",
      rocket_es: "✅ Grabaciones de hablantes nativos",
    },
    {
      feature_en: "Structured curriculum",
      feature_es: "Currículum estructurado",
      freeApps: "⚠️ Loose and gamified",
      freeApps_es: "⚠️ Poco estructurado",
      rocket: "✅ Progressive lesson path",
      rocket_es: "✅ Ruta de lecciones progresiva",
    },
    {
      feature_en: "Pronunciation feedback",
      feature_es: "Retroalimentación de pronunciación",
      freeApps: "❌ Limited or absent",
      freeApps_es: "❌ Limitada o ausente",
      rocket: "✅ AI voice recognition",
      rocket_es: "✅ Reconocimiento de voz con IA",
    },
    {
      feature_en: "Ownership model",
      feature_es: "Modelo de acceso",
      freeApps: "❌ Subscription — lose access if you stop paying",
      freeApps_es: "❌ Suscripción — pierdes acceso si dejas de pagar",
      rocket: "✅ Lifetime access",
      rocket_es: "✅ Acceso de por vida",
    },
    {
      feature_en: "Ads",
      feature_es: "Anuncios",
      freeApps: "❌ Yes (unless paid tier)",
      freeApps_es: "❌ Sí (sin pagar)",
      rocket: "✅ None",
      rocket_es: "✅ Ninguno",
    },
  ],
};

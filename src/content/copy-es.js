/**
 * Authored copy for the Spanish silo — main cluster/comparison/glossary
 * pages and ESP lesson intros. Written per docs/geo-formatting.md
 * (answer-first, self-contained chunks, question H2s, citable specifics)
 * and docs/conversion-rules.md (tú register on conversational pages,
 * usted on professional/medical ESP pages).
 *
 * Section shape: { h2, paras: [html strings], list?: { ordered, items } }
 */

export const mainCopy = {
  "mejor-app": {
    description:
      "Comparamos las mejores apps para aprender inglés en 2025: Duolingo, Babbel, Rocket English y más. Cuál sirve para hablar de verdad y cuál solo entretiene.",
    quickAnswer:
      "Para la mayoría de los hispanohablantes, la mejor app para aprender inglés en serio es <strong>Rocket English</strong>, porque es la única centrada en práctica de habla con reconocimiento de voz. <strong>Duolingo</strong> es la mejor opción gratuita para vocabulario básico, pero tiene un techo bajo: no te enseña a mantener una conversación.",
    entity:
      "Elegir entre las decenas de apps para aprender inglés se reduce a una pregunta: ¿quieres entretenerte o realmente hablar inglés? En MatchFluent analizamos herramientas de aprendizaje de idiomas para hispanohablantes y las evaluamos por lo que producen — fluidez real, no rachas diarias. Nuestra recomendación principal es Rocket English, porque su diferenciador es la práctica de habla con reconocimiento de voz, la carencia número uno de casi todas las demás apps.",
    sections: [
      {
        h2: "¿Cuál es la mejor app para aprender inglés en 2025?",
        paras: [
          "La mejor app depende de tu objetivo, pero el ranking cambia poco cuando el objetivo es hablar. Estas son nuestras posiciones después de comparar práctica de habla, currículum, audio real y modelo de precio:",
        ],
        list: {
          ordered: true,
          items: [
            "<strong>Rocket English</strong> — la mejor para hablar. Lecciones de audio interactivas de 20–30 minutos, reconocimiento de voz que califica tu pronunciación, y pago único (~$150 USD, con descuentos frecuentes a ~$100) con acceso de por vida.",
            "<strong>Duolingo</strong> — la mejor gratuita. Perfecta para crear el hábito diario y las primeras 1,000 palabras, pero su práctica de habla es mínima.",
            "<strong>Babbel</strong> — buen currículum estructurado por suscripción (~$180 USD al año), aunque su retroalimentación de pronunciación es limitada.",
            "<strong>BBC Learning English</strong> — gratuita y excelente para comprensión auditiva con acentos británicos reales; no es un curso completo.",
          ],
        },
      },
      {
        h2: "¿Por qué la mayoría de las apps no te enseñan a hablar?",
        paras: [
          "La mayoría de las apps de idiomas están optimizadas para retención de usuarios, no para fluidez: ejercicios de emparejar palabras, rachas y vidas mantienen la app abierta, pero no entrenan la boca. Hablar inglés es una habilidad motora y de recuperación rápida — se desarrolla diciendo frases en voz alta bajo presión de tiempo, algo que un ejercicio de opción múltiple nunca te pide.",
          "Por eso alguien puede tener una racha de 500 días en Duolingo y congelarse cuando un cliente le habla en inglés. El problema no es la disciplina; es que la herramienta entrena reconocimiento, no producción.",
        ],
      },
      {
        h2: "¿Qué hace diferente a Rocket English?",
        paras: [
          "Rocket English construye cada lección alrededor de una conversación real entre hablantes nativos, y luego te pone a ti en la conversación: escuchas, repites, y el reconocimiento de voz te dice qué tan cerca estuviste. Son más de 120 horas de contenido organizadas en una ruta progresiva, con acceso de por vida en lugar de suscripción.",
          "No es la app más gamificada ni la más bonita. Es la que está diseñada para que a los 3 meses puedas sostener una conversación, no una racha.",
        ],
      },
      {
        h2: "¿Las apps gratuitas sirven para algo?",
        paras: [
          "Sí, y conviene decirlo sin rodeos: las apps gratuitas son la mejor forma de empezar hoy mismo sin gastar un peso. Duolingo te da vocabulario y hábito; BBC Learning English te da oído. El punto donde dejan de servir es cuando necesitas pasar de entender frases a producirlas — típicamente entre el nivel A2 y B1 del marco CEFR. Ahí es donde un curso estructurado con práctica de habla deja de ser un lujo y se vuelve el camino corto.",
        ],
      },
    ],
    tableTakeaway:
      "En resumen: las apps gratuitas ganan en precio y hábito diario, pero Rocket English gana en lo que decide la fluidez — práctica de habla real, retroalimentación de pronunciación y un currículum que progresa.",
    faq: [
      {
        q: "¿Cuál es la mejor aplicación gratuita para aprender inglés?",
        a: "Duolingo es la mejor app gratuita para vocabulario básico y hábito diario, y BBC Learning English es la mejor gratuita para comprensión auditiva. Ninguna app gratuita ofrece práctica seria de habla; para eso necesitas audio interactivo como el de Rocket English.",
      },
      {
        q: "¿Cuál es la mejor aplicación para aprender inglés en Android?",
        a: "Todas las apps principales — Rocket English, Duolingo, Babbel — funcionan igual de bien en Android que en iPhone. Rocket English además permite descargar las lecciones de audio para escucharlas sin conexión desde su app de Android.",
      },
      {
        q: "¿Qué app para aprender inglés funciona sin internet?",
        a: "Rocket English permite descargar lecciones completas para uso offline, ideal para trayectos o zonas con mala conexión. Duolingo ofrece modo offline limitado solo en su versión de pago.",
      },
      {
        q: "¿Cuánto tiempo debo usar una app al día para ver resultados?",
        a: "Entre 20 y 30 minutos diarios de práctica activa — repitiendo en voz alta, no solo tocando la pantalla — producen progreso visible en 6 a 8 semanas. La consistencia diaria importa más que las sesiones largas de fin de semana.",
      },
    ],
  },

  "cursos-clases": {
    description:
      "Cursos para aprender inglés online vs escuelas presenciales: precios reales, flexibilidad y cuál te conviene. Guía honesta en español.",
    quickAnswer:
      "Para la mayoría de los adultos que trabajan, un curso de inglés online estructurado es mejor opción que una escuela presencial: cuesta una fracción (un pago único de ~$150 USD en Rocket English contra $200–400 USD mensuales de una academia), no tiene horarios fijos y te deja practicar a las 11 de la noche si ese es tu único tiempo libre.",
    entity:
      "Los cursos para aprender inglés se dividen en dos mundos: escuelas presenciales con horarios y grupos, y cursos online que estudias a tu ritmo. En MatchFluent evaluamos ambos formatos para hispanohablantes que necesitan resultados — no certificados de asistencia. Nuestra recomendación online es Rocket English, por su acceso de por vida y su práctica de habla con reconocimiento de voz, que replica lo mejor de una clase sin sus limitaciones de horario.",
    sections: [
      {
        h2: "¿Curso online o clases presenciales: cuál conviene?",
        paras: [
          "Las clases presenciales ganan en una sola cosa: la presión social de asistir. Todo lo demás favorece al online. Una academia presencial típica cuesta entre $200 y $400 USD al mes, avanza al ritmo del grupo (es decir, del alumno más lento), y te da quizás 15 minutos de habla real por clase repartidos entre 10 estudiantes.",
          "Un curso online estructurado cuesta menos que un solo mes de academia, avanza a tu ritmo, y cada minuto de práctica de habla es tuyo. La desventaja honesta: nadie pasa lista. Si necesitas presión externa para estudiar, combina el curso online con un horario fijo autoimpuesto — mismos días, misma hora.",
        ],
      },
      {
        h2: "¿Qué debe incluir un buen curso de inglés online?",
        paras: [
          "Un curso online serio debe incluir cuatro cosas: una ruta progresiva de lecciones (no una biblioteca suelta de videos), audio de conversaciones reales entre nativos, práctica de habla con retroalimentación, y acceso sin fecha de caducidad. Rocket English cumple las cuatro: más de 120 horas de lecciones progresivas, reconocimiento de voz en cada frase, y pago único con acceso de por vida.",
          "Desconfía de cursos que son solo video: ver a un profesor explicar gramática es la parte menos importante de aprender a hablar.",
        ],
      },
      {
        h2: "¿Y las clases de inglés gratis?",
        paras: [
          "Los recursos gratuitos — YouTube, apps, cursos abiertos de universidades — son excelentes complementos y un punto de partida legítimo si el presupuesto es cero. Su límite es estructural: no hay ruta, no hay retroalimentación de pronunciación, y el material rara vez pasa del nivel intermedio. Úsalos para empezar hoy; invierte en estructura cuando confirmes que vas en serio.",
        ],
      },
      {
        h2: "¿Cuánto tiempo toma completar un curso de inglés?",
        paras: [
          "Con 30 minutos diarios, un principiante típico alcanza nivel conversacional (B1 del marco CEFR) en 4 a 6 meses con un curso estructurado. Una academia presencial con 3 horas semanales suele tomar 12 a 18 meses para el mismo nivel — no porque enseñe peor, sino porque son menos horas efectivas de práctica individual.",
        ],
      },
    ],
    tableTakeaway:
      "La comparación es clara: la flexibilidad, el precio y el acceso de por vida del formato online superan a la academia presencial para casi todos los adultos que trabajan.",
    faq: [
      {
        q: "¿Dónde puedo tomar clases de inglés online gratis?",
        a: "BBC Learning English, el canal de YouTube de VOA Learning English y los cursos abiertos de Coursera (modo oyente) son las mejores opciones gratuitas. Son buenos complementos, pero carecen de práctica de habla con retroalimentación.",
      },
      {
        q: "¿Vale la pena buscar escuelas de inglés cerca de mí?",
        a: "Solo si necesitas la presión social de un horario fijo y puedes pagar $200–400 USD mensuales. Para la mayoría, un curso online estructurado logra el mismo nivel en menos tiempo y por una fracción del costo.",
      },
      {
        q: "¿Existen cursos de inglés gratis con certificado?",
        a: "Sí — plataformas como Coursera y edX ofrecen certificados pagando solo la certificación (~$40–50 USD). Ten en cuenta que los empleadores valoran mucho más tu inglés hablado en la entrevista que cualquier certificado de curso.",
      },
      {
        q: "¿Cuánto cuesta un curso de inglés online completo?",
        a: "Rocket English cuesta un pago único de ~$150 USD (a menudo ~$100 con descuento) con acceso de por vida. Las plataformas de suscripción como Babbel rondan los $180 USD al año, recurrentes mientras sigas estudiando.",
      },
    ],
  },

  "libros-audiolibros": {
    description:
      "Los mejores libros y audiolibros para aprender inglés desde cero, organizados por nivel — y el vacío que ningún libro puede llenar.",
    quickAnswer:
      "Los mejores libros para aprender inglés desde cero son <strong>English Grammar in Use</strong> (Raymond Murphy) para gramática, los <strong>graded readers</strong> de Oxford y Penguin por nivel para lectura, y <strong>English for Everyone</strong> de DK para autoestudio visual. Eso sí: los libros enseñan a entender inglés, no a hablarlo — combínalos con práctica de audio interactiva.",
    entity:
      "Los libros para aprender inglés siguen siendo la herramienta más barata y profunda para construir gramática y vocabulario, especialmente para hispanohablantes que estudian por su cuenta. En MatchFluent evaluamos materiales de aprendizaje por su efecto en la fluidez real, y ahí los libros tienen un límite claro: son 100% pasivos. Por eso los recomendamos junto a Rocket English, cuyo audio interactivo cubre exactamente lo que un libro no puede — entrenar tu boca y tu oído.",
    sections: [
      {
        h2: "¿Cuáles son los mejores libros para aprender inglés desde cero?",
        paras: ["Estos cuatro cubren el camino completo de principiante a intermedio:"],
        list: {
          ordered: true,
          items: [
            "<strong>English Grammar in Use (Raymond Murphy)</strong> — la referencia de gramática más usada del mundo; la edición intermedia tiene 145 unidades de una página con ejercicios en la página opuesta.",
            "<strong>English for Everyone (DK)</strong> — curso visual de 4 niveles ideal para autodidactas; explica con diagramas en lugar de párrafos densos.",
            "<strong>Graded readers de Oxford Bookworms / Penguin Readers</strong> — novelas adaptadas por nivel (del A1 al C1); leer historias a tu nivel real es la forma más rápida de absorber vocabulario en contexto.",
            "<strong>Vocabulary in Use (Cambridge)</strong> — vocabulario organizado por temas con ejercicios; mejor que memorizar listas sueltas.",
          ],
        },
      },
      {
        h2: "¿Se puede aprender inglés solo con libros?",
        paras: [
          "No, y es importante entender por qué. Un libro puede enseñarte todas las reglas del inglés, pero leer sobre pronunciación es como leer sobre natación: la información no se convierte en habilidad hasta que la practicas físicamente. Los estudiantes que solo estudian con libros suelen llegar a un nivel de lectura B2 con un nivel de habla A1 — entienden artículos completos y se congelan al pedir un café.",
          "La solución no es abandonar los libros sino cerrar el circuito: cada estructura que aprendas en papel, dila en voz alta el mismo día en una práctica de audio.",
        ],
      },
      {
        h2: "¿Los audiolibros sirven para aprender inglés?",
        paras: [
          "Los audiolibros entrenan el oído mejor que casi cualquier otro recurso pasivo — escuchas pronunciación real, entonación y ritmo durante horas. Funcionan mejor a partir del nivel A2, con audiolibros de graded readers que incluyen el texto para leer y escuchar a la vez.",
          "Su límite es el mismo de todo material pasivo: escuchar 100 horas de audiolibros no te hace capaz de responder. Para quienes aprenden bien escuchando, el audio interactivo de Rocket English es el paso natural — mismo formato de audio, pero con pausas donde tú hablas y un reconocimiento de voz que te corrige.",
        ],
      },
      {
        h2: "¿Libros en PDF gratis: valen la pena?",
        paras: [
          "Hay material legítimo gratuito — bibliotecas públicas digitales, el Proyecto Gutenberg para clásicos en inglés, y los materiales abiertos del British Council. Los PDF piratas de libros comerciales, además del problema legal, suelen ser ediciones viejas sin los audios que acompañan al libro físico, que es justo la parte que más necesitas.",
        ],
      },
    ],
    tableTakeaway:
      "Los libros construyen tu base de gramática y vocabulario mejor que cualquier app; el audio interactivo convierte esa base en habla. Se complementan, no compiten.",
    faq: [
      {
        q: "¿Dónde encuentro audiolibros para aprender inglés gratis?",
        a: "LibriVox ofrece miles de audiolibros gratuitos de dominio público leídos por voluntarios, y Spotify tiene audiolibros de graded readers. Empieza con historias adaptadas a tu nivel, no con novelas para nativos.",
      },
      {
        q: "¿Hay libros para aprender inglés desde cero en PDF gratis?",
        a: "El British Council y VOA Learning English publican materiales descargables legítimos y gratuitos para principiantes. Para libros comerciales como Grammar in Use, la edición oficial incluye audio y ejercicios interactivos que los PDF sueltos no traen.",
      },
      {
        q: "¿Es posible aprender inglés escuchando solamente?",
        a: "Escuchar construye comprensión, que es la mitad del idioma — pero solo hablar construye habla. La combinación que funciona es escuchar mucho inglés a tu nivel y practicar en voz alta todos los días, aunque sean 15 minutos.",
      },
    ],
  },

  "podcast-audio": {
    description:
      "Los 7 mejores podcasts para aprender inglés en 2025, por nivel — y cómo pasar de entender podcasts a hablar inglés de verdad.",
    quickAnswer:
      "Los mejores podcasts para aprender inglés son <strong>ESLPod</strong> y <strong>Luke's English Podcast</strong> para nivel intermedio, y <strong>VOA Learning English</strong> para principiantes por su inglés lento y claro. Los podcasts entrenan tu oído de forma excelente, pero no te enseñan a hablar: para eso necesitas práctica activa con retroalimentación.",
    entity:
      "Los podcasts para aprender inglés son el recurso gratuito más eficiente para entrenar comprensión auditiva: audio real, gratis, en tu bolsillo. En MatchFluent evaluamos recursos de aprendizaje para hispanohablantes según lo que aportan a la fluidez completa — oído y boca. Los podcasts cubren magistralmente la primera mitad; para la segunda recomendamos Rocket English, cuyo formato también es audio, pero interactivo: tú hablas y su reconocimiento de voz te corrige.",
    sections: [
      {
        h2: "¿Cuáles son los mejores podcasts para aprender inglés?",
        paras: ["Nuestra selección por nivel y estilo:"],
        list: {
          ordered: true,
          items: [
            "<strong>VOA Learning English</strong> — principiantes; noticias leídas ~30% más lento de lo normal con vocabulario controlado.",
            "<strong>ESLPod</strong> — principiante-intermedio; cada episodio explica un diálogo frase por frase.",
            "<strong>Luke's English Podcast</strong> — intermedio; conversación natural británica con humor, más de 800 episodios.",
            "<strong>All Ears English</strong> — intermedio; inglés americano conversacional enfocado en frases que la gente usa de verdad.",
            "<strong>6 Minute English (BBC)</strong> — intermedio; episodios cortos perfectos para trayectos, un tema y ~6 palabras nuevas por episodio.",
            "<strong>The English We Speak (BBC)</strong> — expresiones e idioms en 3 minutos.",
            "<strong>Speak English Now (Georgiana)</strong> — técnica de preguntas y respuestas pensada para hispanohablantes.",
          ],
        },
      },
      {
        h2: "¿Se puede aprender inglés solo escuchando podcasts?",
        paras: [
          "Los podcasts desarrollan comprensión auditiva, vocabulario en contexto y familiaridad con la velocidad real del inglés — tres cosas que ningún libro logra. Lo que no desarrollan es producción: puedes entender el 90% de un episodio y seguir sin poder formular una respuesta de tres frases, porque entender y producir usan procesos mentales distintos.",
          "La regla práctica: los podcasts son perfectos para entrenar el oído. Para entrenar la boca, necesitas algo que te haga hablar en voz alta y te corrija — un intercambio de conversación, un tutor, o un curso interactivo.",
        ],
      },
      {
        h2: "¿Cómo usar podcasts para avanzar más rápido?",
        paras: [
          "Tres técnicas convierten la escucha pasiva en estudio activo. Primero, escucha cada episodio dos veces: una para la idea general, otra pausando en frases nuevas. Segundo, practica shadowing — repite en voz alta encima del audio imitando ritmo y entonación durante 5 minutos por sesión. Tercero, elige podcasts a tu nivel real: si entiendes menos del 70%, baja de nivel; la incomprensión total no enseña nada.",
        ],
      },
    ],
    tableTakeaway:
      "Los podcasts gratuitos ganan en comprensión auditiva; Rocket English gana en lo que los podcasts no tocan — hacerte hablar con retroalimentación inmediata.",
    faq: [
      {
        q: "¿Cuáles son los mejores podcasts para aprender inglés en Spotify?",
        a: "Todos los de nuestra lista están en Spotify: busca VOA Learning English para empezar, ESLPod para nivel básico-intermedio y Luke's English Podcast o All Ears English para intermedio. Spotify además guarda tu posición entre dispositivos.",
      },
      {
        q: "¿Dónde encuentro audios para aprender inglés gratis?",
        a: "Además de los podcasts, VOA y el British Council ofrecen audios descargables con transcripción gratuitos. La transcripción importa: leer mientras escuchas acelera la comprensión en los primeros meses.",
      },
      {
        q: "¿Funciona aprender inglés mientras duermes?",
        a: "No. La investigación sobre aprendizaje durante el sueño muestra que no se adquiere vocabulario nuevo dormido; a lo sumo hay un efecto mínimo de familiaridad con sonidos. Esos 30 minutos rinden infinitamente más despierto, repitiendo frases en voz alta.",
      },
    ],
  },

  "media-series-peliculas": {
    description:
      "Las mejores series, películas y canciones para aprender inglés — y cómo usarlas para que cuenten como estudio y no solo entretenimiento.",
    quickAnswer:
      "Las mejores series para aprender inglés son <strong>Friends</strong> y <strong>How I Met Your Mother</strong> por su inglés conversacional claro, y <strong>The Office</strong> para nivel intermedio-avanzado. Ver series funciona como refuerzo cuando ya tienes una base gramatical — como método principal para principiantes, es de los caminos más lentos.",
    entity:
      "Las series y películas para aprender inglés son la forma de inmersión más accesible que existe: miles de horas de conversación nativa real a un clic. En MatchFluent analizamos cómo usar los medios en inglés para hispanohablantes de forma que aceleren el aprendizaje en lugar de solo entretener. La clave está en la secuencia: el contenido nativo rinde cuando ya existe una base estructurada — la que construye un curso como Rocket English — y se desperdicia cuando se usa como punto de partida.",
    sections: [
      {
        h2: "¿Cuáles son las mejores series para aprender inglés?",
        paras: ["Ordenadas de más fácil a más difícil para el oído hispanohablante:"],
        list: {
          ordered: true,
          items: [
            "<strong>Friends</strong> — el clásico por una razón: diálogos cortos, vocabulario cotidiano, situaciones visuales que dan contexto. Nivel A2+.",
            "<strong>How I Met Your Mother</strong> — similar a Friends con inglés algo más rápido. Nivel B1.",
            "<strong>The Office (EEUU)</strong> — inglés de oficina real, ideal si trabajas en ambiente corporativo. Nivel B1+.",
            "<strong>Modern Family</strong> — bonus para hispanohablantes: el personaje de Gloria normaliza hablar con acento. Nivel B1.",
            "<strong>Breaking Bad</strong> — para nivel B2+: acentos variados, jerga y velocidad real.",
          ],
        },
      },
      {
        h2: "¿Ver series en inglés realmente enseña?",
        paras: [
          "Ver series es exposición, no instrucción — y la diferencia importa. La exposición refuerza lo que ya sabes: consolidas vocabulario, afinas el oído, absorbes expresiones. Pero no construye lo que no tienes; un principiante viendo Breaking Bad sin base entiende el 15% y adquiere casi nada, por debajo del umbral de 'input comprensible' (~80% de comprensión) donde ocurre el aprendizaje.",
          "Con una base de gramática y 1,500–2,000 palabras, las series se convierten en un acelerador potente. Sin ella, son subtítulos en español con ruido de fondo en inglés.",
        ],
      },
      {
        h2: "¿Cómo ver series para aprender más (método de 3 pasos)?",
        paras: [],
        list: {
          ordered: true,
          items: [
            "<strong>Mira</strong> el episodio con subtítulos en inglés — nunca en español; leer en español desconecta el oído.",
            "<strong>Anota</strong> máximo 5 frases nuevas por episodio; más de eso no se retiene.",
            "<strong>Repite</strong> esas 5 frases en voz alta al terminar, imitando la entonación del actor. Este paso convierte el episodio en práctica activa.",
          ],
        },
      },
      {
        h2: "¿Y la música y las canciones en inglés?",
        paras: [
          "Las canciones son la mejor herramienta de pronunciación pasiva que existe: la melodía fija el ritmo y el linking (cómo se conectan las palabras) mejor que cualquier explicación. Su límite es el vocabulario — las letras usan lenguaje poético y gramática rota que no siempre sirve para conversar. Úsalas para el oído y la pronunciación, no como fuente principal de vocabulario.",
        ],
      },
    ],
    tableTakeaway:
      "Las series y la música afinan tu oído una vez que tienes base; el curso estructurado construye esa base. En ese orden funcionan; al revés, frustran.",
    faq: [
      {
        q: "¿Cuáles son las mejores películas en Netflix para aprender inglés?",
        a: "Las películas de animación (Toy Story, Shrek, Coco en inglés) tienen el inglés más claro y pausado del catálogo. Actívales subtítulos en inglés y evita los doblajes: la voz original es el material de estudio.",
      },
      {
        q: "¿Dónde encuentro canciones para aprender inglés con subtítulos?",
        a: "YouTube tiene versiones con letra (lyrics) de casi cualquier canción, y apps como Lirica convierten canciones en ejercicios. Elige canciones lentas primero — baladas antes que rap — para poder distinguir cada palabra.",
      },
      {
        q: "¿Sirve la música para aprender inglés?",
        a: "Sirve principalmente para pronunciación y ritmo: cantar en inglés entrena el linking entre palabras de forma natural. Como fuente de vocabulario es limitada, porque las letras usan lenguaje poético poco conversacional.",
      },
      {
        q: "¿Qué series de Netflix son mejores para empezar?",
        a: "Empieza con sitcoms de episodios cortos: Friends y Brooklyn Nine-Nine tienen diálogos claros de 20 minutos. Las series de una hora con tramas complejas (dramas, ciencia ficción) exigen un nivel B2 para disfrutarse en inglés.",
      },
    ],
  },

  "ia-tools": {
    description:
      "Cómo usar ChatGPT y la inteligencia artificial para aprender inglés gratis — qué hace bien la IA, dónde falla y cómo combinarla con un curso.",
    quickAnswer:
      "La inteligencia artificial es el mejor compañero de práctica de conversación que ha existido — gratis, infinitamente paciente y disponible 24/7 — pero no sustituye un currículum: la IA responde, no te guía. La combinación ganadora es un curso estructurado como <strong>Rocket English</strong> para la ruta de aprendizaje, más ChatGPT como campo de práctica diaria.",
    entity:
      "Usar la IA para aprender inglés pasó de truco curioso a herramienta seria: ChatGPT, Claude y Gemini pueden conversar contigo, corregir tus textos y explicarte gramática en español, gratis. En MatchFluent probamos estas herramientas desde la perspectiva del hispanohablante que quiere fluidez real, y el veredicto tiene matices: la IA es un campo de práctica extraordinario y un mal profesor principal. Por eso la recomendamos como complemento de un currículum estructurado como el de Rocket English, no como sustituto.",
    sections: [
      {
        h2: "¿Qué hace bien la IA para aprender inglés?",
        paras: ["Cuatro usos donde la IA es genuinamente superior a las alternativas:"],
        list: {
          ordered: true,
          items: [
            "<strong>Conversación sin vergüenza</strong> — practicas por escrito o por voz sin el miedo a equivocarte frente a una persona; para el 60%+ de estudiantes que reportan ansiedad al hablar, esto elimina la barrera principal.",
            "<strong>Corrección instantánea con explicación</strong> — pégale cualquier texto tuyo y pídele que corrija y explique cada error en español.",
            "<strong>Vocabulario a demanda</strong> — pídele las 30 frases más útiles para tu trabajo específico, con ejemplos.",
            "<strong>Simulación de situaciones</strong> — 'actúa como entrevistador de trabajo y hazme preguntas' es un simulador de entrevistas gratis.",
          ],
        },
      },
      {
        h2: "¿Dónde falla la IA como profesor?",
        paras: [
          "La IA no tiene plan. Un buen curso decide qué necesitas aprender esta semana, en qué orden, y cuándo repasar lo de hace un mes; ChatGPT solo responde a lo que tú le pides — y un principiante no sabe qué pedir. El resultado típico es práctica dispersa: mucha actividad, poco progreso medible.",
          "Además, la retroalimentación de pronunciación por voz sigue siendo imprecisa comparada con sistemas de reconocimiento entrenados para evaluar acento, y la IA tiende a ser demasiado amable: te entiende aunque hables mal, cosa que un desconocido en inglés no hará.",
        ],
      },
      {
        h2: "¿Cómo combinar un curso estructurado con ChatGPT?",
        paras: [
          "La rutina que recomendamos toma 30–40 minutos diarios: haz tu lección de Rocket English (20–30 minutos de audio interactivo con reconocimiento de voz), y remata con 10 minutos de conversación con ChatGPT usando el vocabulario exacto de esa lección — pídele que converse contigo usando esas frases y te corrija. El curso pone el orden y la pronunciación; la IA pone las repeticiones ilimitadas.",
        ],
      },
      {
        h2: "¿Cuál es la mejor IA para aprender inglés gratis?",
        paras: [
          "ChatGPT (versión gratuita) es la opción más completa para conversación escrita y corrección; su modo de voz gratuito tiene límites de uso pero sirve para práctica corta. Claude destaca en explicaciones de matices gramaticales, y Gemini se integra bien si vives en el ecosistema de Google. La diferencia entre ellas es menor que la diferencia entre usarlas con plan o sin plan.",
        ],
      },
    ],
    tableTakeaway:
      "La IA da repeticiones ilimitadas y cero vergüenza; el curso estructurado da la ruta y la retroalimentación de pronunciación real. Juntos cubren todo el ciclo de aprendizaje.",
    faq: [
      {
        q: "¿Cómo aprender inglés con ChatGPT paso a paso?",
        a: "Dale un rol específico: 'Eres mi tutor de inglés; conversa conmigo sobre mi día en inglés nivel básico y corrige mis errores explicando en español'. Sesiones de 10–15 minutos diarias con el vocabulario que estés estudiando rinden más que sesiones largas sin tema.",
      },
      {
        q: "¿Cuál es la mejor IA gratis para aprender inglés?",
        a: "ChatGPT gratuito es la más completa para práctica de conversación y corrección de textos. Para pronunciación evaluada con precisión, el reconocimiento de voz especializado de un curso como Rocket English sigue siendo superior al modo de voz de los chatbots.",
      },
      {
        q: "¿La IA puede sustituir un curso de inglés?",
        a: "No para la mayoría: la IA no estructura tu aprendizaje ni decide qué sigue — solo responde. Funciona como sustituto únicamente si ya tienes nivel intermedio y la disciplina de diseñarte tu propio plan.",
      },
    ],
  },

  "duolingo-vs": {
    description:
      "Duolingo vs Rocket Languages comparados sin rodeos: precio, práctica de habla y hasta dónde te lleva cada uno. Guía honesta 2025.",
    quickAnswer:
      "<strong>Duolingo</strong> es mejor para empezar gratis y crear el hábito diario; <strong>Rocket Languages</strong> es mejor para llegar a hablar inglés de verdad, por su práctica de habla con reconocimiento de voz y sus conversaciones reales. Si solo puedes elegir uno y tu meta es mantener una conversación, Rocket gana; si tu meta es probar sin gastar, empieza con Duolingo.",
    entity:
      "Duolingo y Rocket Languages representan dos filosofías opuestas de cómo aprender inglés: la gamificación diaria contra el currículum de conversación. En MatchFluent comparamos ambas plataformas desde la experiencia del hispanohablante, midiendo lo que importa — cuánto inglés hablas después de 3 meses de uso. Esta comparación es honesta por diseño: Duolingo hace muy bien lo suyo, y también tiene un techo que conviene conocer antes de invertir un año de rachas en él.",
    sections: [
      {
        h2: "Duolingo vs Rocket Languages: ¿en qué es mejor cada uno?",
        paras: [
          "Duolingo gana en tres cosas reales: es gratis, su gamificación crea hábito diario mejor que ningún competidor (las rachas funcionan), y su curva de entrada es perfecta para tocar el inglés por primera vez sin miedo.",
          "Rocket Languages gana en lo que decide la fluidez: cada lección gira alrededor de una conversación real entre nativos de 20–30 minutos, su reconocimiento de voz califica tu pronunciación frase por frase, y el currículum progresa hacia mantener conversaciones — no hacia mantener rachas. Son más de 120 horas de contenido con pago único (~$150 USD, frecuentemente ~$100 con descuento) y acceso de por vida.",
        ],
      },
      {
        h2: "¿Duolingo sirve para llegar a un nivel avanzado?",
        paras: [
          "No — y no es opinión nuestra, es el diseño del producto. El curso de inglés de Duolingo cubre material hasta un nivel B1 aproximado, y sus ejercicios de emparejar y traducir entrenan reconocimiento, no producción espontánea. El patrón clásico: usuarios con rachas de 300+ días que entienden bastante y se congelan al hablar.",
          "Duolingo es donde empiezas. El error no es usarlo; es quedarse esperando que el nivel avanzado llegue por acumulación de rachas.",
        ],
      },
      {
        h2: "¿Cuánto cuesta cada uno realmente?",
        paras: [
          "Duolingo es gratuito con anuncios; Super Duolingo cuesta ~$13 USD al mes (~$156 al año, recurrente). Rocket English cuesta un pago único de ~$150 USD — con descuentos frecuentes a ~$100 — y es tuyo de por vida. La aritmética es curiosa: un año de Super Duolingo cuesta lo mismo que Rocket para siempre. Si vas a pagar por aprender inglés, el pago único con práctica de habla rinde más por dólar.",
        ],
      },
      {
        h2: "¿Se pueden usar los dos juntos?",
        paras: [
          "Sí, y es una combinación sensata: Duolingo como calentamiento diario de 10 minutos para vocabulario y hábito, Rocket como la sesión seria de 20–30 minutos donde practicas hablar. Si tu tiempo es limitado, prioriza la sesión de habla — es la que mueve tu nivel.",
        ],
      },
    ],
    tableTakeaway:
      "Duolingo es el mejor punto de partida gratuito; Rocket Languages es el camino al inglés hablado. Duolingo es donde empiezas — Rocket Languages es donde llegas.",
    faq: [
      {
        q: "¿Cuáles son las mejores alternativas a Duolingo para aprender inglés?",
        a: "Rocket English si buscas hablar (práctica de voz real), Babbel si prefieres suscripción con lecciones cortas estructuradas, y Anki si tu déficit es vocabulario. La mejor alternativa depende de qué te falta: habla, estructura o palabras.",
      },
      {
        q: "¿Duolingo sirve para aprender inglés de verdad?",
        a: "Sirve para vocabulario básico, hábito diario y perder el miedo inicial — eso es real. No sirve para desarrollar conversación: su práctica de habla es mínima y su contenido llega hasta un B1 aproximado.",
      },
      {
        q: "¿Rocket Languages tiene versión gratuita?",
        a: "Ofrece una prueba gratuita con lecciones de muestra de cada nivel, suficiente para evaluar el formato de audio interactivo y el reconocimiento de voz antes de pagar. No hay versión gratuita permanente como la de Duolingo.",
      },
    ],
  },

  "desde-cero": {
    description:
      "Cómo aprender inglés desde cero: hoja de ruta paso a paso para adultos, con tiempos reales, método y los errores que frenan a los principiantes.",
    quickAnswer:
      "Para aprender inglés desde cero, empieza por el método y no por el contenido: 30 minutos diarios de práctica en voz alta con un curso estructurado llevan a un adulto de cero a nivel conversacional (B1) en típicamente 6 a 9 meses. El error número uno de los principiantes es acumular apps, videos y listas de vocabulario sin una ruta que los ordene.",
    entity:
      "Aprender inglés desde cero como adulto es completamente alcanzable — millones lo logran cada año — pero el camino está lleno de falsos comienzos. En MatchFluent ayudamos a hispanohablantes a encontrar el método que encaja con su forma de aprender, porque la causa principal de abandono no es la dificultad del inglés sino empezar con el contenido equivocado. Esta guía es la hoja de ruta completa: qué hacer primero, en qué orden, y con qué herramientas — incluida nuestra recomendación estructurada, Rocket English.",
    sections: [
      {
        h2: "¿Por dónde se empieza a aprender inglés desde cero?",
        paras: ["El orden importa más de lo que parece. La secuencia probada para las primeras 12 semanas:"],
        list: {
          ordered: true,
          items: [
            "<strong>Aprende los sonidos primero (semanas 1–2):</strong> el inglés tiene ~44 sonidos y el español ~24; dedica las primeras sesiones a escuchar y repetir los sonidos que no existen en español, como la 'th' o las vocales cortas.",
            "<strong>Construye las 300 palabras más frecuentes (semanas 1–6):</strong> el inglés cotidiano se sostiene en un núcleo pequeño; 300 palabras bien pronunciadas valen más que 2,000 reconocidas a medias.",
            "<strong>Frases completas desde el día uno (siempre):</strong> aprende 'Where is the bathroom?' como unidad, no 'where' + 'is' + 'the' aparte. El cerebro conversa en bloques.",
            "<strong>Habla en voz alta cada día (siempre):</strong> aunque estés solo. La fluidez es una habilidad física; se entrena con la boca, no con los ojos.",
          ],
        },
      },
      {
        h2: "¿Cuánto tiempo toma aprender inglés desde cero?",
        paras: [
          "Con 30 minutos diarios consistentes, un hispanohablante típico alcanza nivel básico funcional (A2) en 3–4 meses y nivel conversacional (B1) en 6–9 meses. Los hispanohablantes tienen ventaja real: miles de cognados compartidos (información/information, hospital/hospital) y un alfabeto común recortan el camino frente a hablantes de otros idiomas.",
          "Desconfía de promesas de 'inglés fluido en 30 días' — no existen atajos de esa escala. Sí existe la diferencia entre un año bien invertido y cinco años de empezar y abandonar.",
        ],
      },
      {
        h2: "¿Cuáles son los errores más comunes al empezar?",
        paras: [
          "Tres errores explican la mayoría de los abandonos. Primero, estudiar en silencio: leer y hacer ejercicios sin hablar produce estudiantes que entienden y no hablan. Segundo, coleccionar recursos: 5 apps, 3 canales de YouTube y 2 PDFs sin terminar ninguno; la variedad se siente productiva pero dispersa el esfuerzo. Tercero, la gramática primero: memorizar los 12 tiempos verbales antes de poder pedir un café invierte la pirámide — la gramática se fija usándola, no antes de usarla.",
        ],
      },
      {
        h2: "¿Qué herramientas necesita realmente un principiante?",
        paras: [
          "Menos de las que crees: un curso estructurado que ordene el camino y te haga hablar (Rocket English es nuestra recomendación por su audio interactivo con reconocimiento de voz y pago único), un cuaderno de frases — no de palabras sueltas — y una fuente de audio a tu nivel para el trayecto diario. Todo lo demás — series, música, ChatGPT — suma cuando ya hay una base de 2–3 meses.",
        ],
      },
    ],
    tableTakeaway:
      "Para un principiante absoluto, la diferencia entre las apps gratuitas y un curso estructurado no es la calidad del contenido — es que el curso decide por ti qué sigue, y esa decisión es justo lo que un principiante no puede tomar solo.",
    faq: [
      {
        q: "¿Cómo aprender inglés básico gratis?",
        a: "Combina Duolingo para vocabulario diario, VOA Learning English para audio lento con transcripción, y ChatGPT como compañero de práctica escrita. Es un punto de partida real — su límite es la falta de ruta y de corrección de pronunciación.",
      },
      {
        q: "¿Un adulto principiante puede aprender inglés o ya es tarde?",
        a: "Nunca es tarde: los adultos aprenden gramática y vocabulario más rápido que los niños por su capacidad de análisis. La única ventaja infantil real es el acento — y para comunicarte no necesitas acento nativo, necesitas claridad.",
      },
      {
        q: "¿Cuál es el primer paso para aprender inglés desde cero paso a paso?",
        a: "Antes de elegir contenido, identifica tu estilo: ¿aprendes escuchando, leyendo o haciendo? Nuestro quiz de 2 minutos te da una ruta según tu punto de partida y tu meta — ese es literalmente el paso uno.",
      },
      {
        q: "¿Necesito clases presenciales para empezar?",
        a: "No. Un principiante avanza igual o más rápido con un curso online estructurado practicando a diario, por una fracción del costo. Las clases presenciales aportan presión social, no un método superior.",
      },
    ],
  },

  "hablar-ingles-fluidez": {
    description:
      "Cómo hablar inglés con fluidez: por qué te bloqueas, cómo perder el miedo y el plan de práctica diaria que sí funciona.",
    quickAnswer:
      "Hablar inglés con fluidez no se logra estudiando más gramática, sino hablando en voz alta todos los días — idealmente 20–30 minutos — en un entorno donde equivocarte no dé vergüenza. La fluidez es velocidad de recuperación, no perfección: se entrena con repeticiones de habla, y el reconocimiento de voz de Rocket English te da un lugar privado para acumularlas.",
    entity:
      "Hablar inglés con fluidez es la meta que más se resiste a los hispanohablantes: miles entienden series, leen artículos y aprueban exámenes, pero se bloquean al hablar. En MatchFluent nos especializamos en ese bloqueo exacto, porque no es un problema de conocimiento sino de práctica de producción — y las herramientas tradicionales casi no la entrenan. Esta guía explica por qué te congelas y qué lo resuelve, incluyendo la práctica privada con reconocimiento de voz de Rocket English, diseñada precisamente para hablar sin público.",
    sections: [
      {
        h2: "¿Por qué me bloqueo al hablar inglés si ya entiendo bastante?",
        paras: [
          "Entender y hablar son habilidades separadas que viven en procesos mentales distintos: comprender es reconocimiento (la palabra llega y la identificas), hablar es recuperación bajo presión (necesitas la palabra YA, construir la frase YA, pronunciarla YA). Puedes tener 3,000 palabras en reconocimiento y 300 en recuperación rápida — ese desnivel es el bloqueo.",
          "La consecuencia práctica es liberadora: no necesitas estudiar más inglés; necesitas convertir el inglés que ya tienes en inglés recuperable. Y eso solo se logra produciéndolo, una y otra vez, en voz alta.",
        ],
      },
      {
        h2: "¿Cómo se pierde el miedo a hablar inglés?",
        paras: [
          "El miedo a hablar se reduce con exposición gradual, no con valentía repentina. La escalera que funciona: primero habla solo — lee en voz alta, narra tu día, repite frases con un curso de audio; cero público, cero riesgo. Luego habla con máquinas — el reconocimiento de voz de Rocket English o el modo de voz de ChatGPT te escuchan y corrigen sin juzgar. Después conversaciones de bajo riesgo — intercambios de idiomas donde la otra persona también se equivoca. Al final, las situaciones reales que hoy te asustan.",
          "Cada peldaño reduce la carga emocional del siguiente. El error clásico es intentar saltar del estudio silencioso directo a la conversación real — de ahí el pánico.",
        ],
      },
      {
        h2: "¿Cuánto hay que practicar para hablar con fluidez?",
        paras: [
          "La referencia realista: 20–30 minutos diarios de práctica de habla — no de estudio general — producen mejora notable en 4–6 semanas y fluidez conversacional en 4–6 meses partiendo de un nivel intermedio bajo. La palabra clave es diario: la fluidez es memoria muscular de la boca y del cerebro, y la memoria muscular se construye con frecuencia, no con intensidad. Tres horas el domingo rinden menos que 25 minutos cada día.",
        ],
      },
      {
        h2: "¿Qué ejercicios concretos desarrollan fluidez?",
        paras: [],
        list: {
          ordered: true,
          items: [
            "<strong>Shadowing (5–10 min):</strong> reproduce audio de un nativo y habla encima, imitando ritmo y entonación en tiempo real.",
            "<strong>Auto-narración (5 min):</strong> describe en voz alta lo que estás haciendo mientras lo haces — vocabulario cotidiano bajo presión suave.",
            "<strong>Lección interactiva (20 min):</strong> una lección de audio donde tú respondes hablando y el reconocimiento de voz te evalúa — el núcleo del método Rocket English.",
            "<strong>Un minuto sin parar (1 min):</strong> elige un tema y habla 60 segundos sin detenerte; los huecos que encuentres son tu lista de estudio de mañana.",
          ],
        },
      },
    ],
    tableTakeaway:
      "Las apps gratuitas casi no te hacen hablar; Rocket English está construido alrededor de hacerte hablar. Para el objetivo específico de fluidez oral, esa es toda la comparación.",
    faq: [
      {
        q: "¿Cómo perder el miedo a hablar inglés?",
        a: "Con exposición gradual: empieza hablando solo en voz alta, pasa a practicar con reconocimiento de voz o IA (sin juicio humano), y sube a conversaciones reales cuando las repeticiones te hayan dado base. El miedo baja con cada peldaño superado.",
      },
      {
        q: "¿Dónde consigo práctica de conversación en inglés?",
        a: "En orden de menor a mayor exposición: reconocimiento de voz de un curso interactivo, modo de voz de ChatGPT, intercambios de idiomas (Tandem, HelloTalk) y tutores online ($15–30/hora). Empieza donde tu nivel de ansiedad te deje practicar a diario.",
      },
      {
        q: "¿Puedo lograr fluidez sin vivir en un país de habla inglesa?",
        a: "Sí — la fluidez depende de horas de producción oral, no de geografía. Un estudiante con 30 minutos diarios de habla activa supera a un inmigrante que vive en inglés pero solo lo escucha.",
      },
    ],
  },

  "metodos-aprender-ingles": {
    description:
      "Los métodos para aprender inglés explicados sin humo: input comprensible, shadowing, repetición espaciada, inmersión y niveles CEFR.",
    quickAnswer:
      "Los métodos para aprender inglés con mejor evidencia son el <strong>input comprensible</strong> (consumir inglés que entiendes al 80–90%), la <strong>repetición espaciada</strong> para vocabulario, y el <strong>shadowing</strong> para pronunciación. Ninguno es suficiente solo: los estudiantes que avanzan combinan input, repaso espaciado y práctica de habla diaria — juntos o dentro de un curso estructurado que ya los integre.",
    entity:
      "Los métodos para aprender inglés — input comprensible, shadowing, repetición espaciada, inmersión — suenan a jerga, pero son las palancas reales detrás de todo progreso en el idioma. En MatchFluent explicamos cada método con honestidad: qué es, para qué sirve y para qué no, de modo que puedas armar tu sistema o elegir un curso que ya los combine. Rocket English, nuestra recomendación estructurada, integra varios de estos enfoques — input comprensible por audio, repaso espaciado y práctica de habla — en una sola ruta.",
    sections: [
      {
        h2: "¿Qué método para aprender inglés funciona mejor?",
        paras: [
          "Ningún método gana en todo, porque cada uno entrena una pieza distinta del idioma. El input comprensible (la teoría de Stephen Krashen) construye comprensión y vocabulario pasivo; la repetición espaciada fija ese vocabulario en memoria de largo plazo; el shadowing entrena pronunciación y ritmo; y la práctica de producción — hablar y escribir — convierte todo lo anterior en comunicación real. Los estudiantes estancados casi siempre sobreinvierten en un método (típicamente input: series, podcasts, lectura) y subinvierten en producción.",
          "La combinación mínima que funciona: 60–70% input a tu nivel, 20–30% práctica de habla diaria, y repaso espaciado del vocabulario nuevo. En esa proporción, cada método cubre el punto ciego de los otros.",
        ],
      },
      {
        h2: "¿Cómo saber mi nivel: qué significan A1, B1, C2?",
        paras: [
          "El marco CEFR (Marco Común Europeo de Referencia) divide el dominio del idioma en seis niveles: A1 y A2 (básico — frases hechas, presente simple, sobrevivir como turista), B1 y B2 (independiente — conversar, trabajar, ver series sin subtítulos con esfuerzo), C1 y C2 (dominio — matices, humor, negociación). La mayoría de los empleos que piden inglés buscan B1–B2, y llegar de cero a B1 toma típicamente entre 350 y 400 horas de estudio efectivo. Saber tu nivel importa porque define qué material es 'comprensible' para ti — la base de todo lo demás.",
        ],
      },
    ],
    tableTakeaway: null,
    faq: [
      {
        q: "¿Qué es el input comprensible en inglés?",
        a: "Es consumir inglés que entiendes en un 80–90% — lo bastante fácil para seguir el hilo, lo bastante difícil para aprender. Es la base de la teoría de adquisición de Stephen Krashen y el criterio para elegir series, podcasts y lecturas.",
      },
      {
        q: "¿Qué es el shadowing y cómo se practica?",
        a: "Shadowing es reproducir audio de un nativo y hablar encima de él en tiempo real, imitando ritmo y entonación. Con 5–10 minutos diarios mejora notablemente la pronunciación y la velocidad de habla en unas semanas.",
      },
      {
        q: "¿Cuáles son los niveles de inglés CEFR?",
        a: "Van de A1 (principiante absoluto) a C2 (dominio casi nativo), pasando por A2, B1, B2 y C1. La mayoría de los trabajos que piden inglés buscan B1–B2; los exámenes como TOEFL e IELTS certifican estos niveles.",
      },
      {
        q: "¿Necesito elegir un solo método?",
        a: "No — los métodos se complementan porque entrenan piezas distintas: input para comprensión, repetición espaciada para memoria, shadowing para pronunciación, producción para fluidez. Un buen curso estructurado ya los combina en proporciones sensatas.",
      },
    ],
  },

  "tutores-online-es": {
    description:
      "Preply vs italki vs Cambly comparados: precios reales por hora, fortalezas de cada plataforma y cuándo conviene un tutor — y cuándo no.",
    quickAnswer:
      "<strong>italki</strong> es la mejor plataforma de tutores por flexibilidad y precio (desde ~$8–10 USD/hora con tutores comunitarios), <strong>Preply</strong> destaca en tutores con planes estructurados, y <strong>Cambly</strong> en conversación inmediata con nativos sin agendar. Pero si estás empezando, espera: pagar $15–30 la hora para aprender lo básico sale carísimo — construye la base con un curso y usa el tutor para pulir.",
    entity:
      "Preply, italki y Cambly dominan el mercado de tutores de inglés online, y elegir entre ellas confunde porque las tres hacen lo mismo con modelos distintos. En MatchFluent las comparamos desde la perspectiva del hispanohablante que paga de su bolsillo: qué cuesta cada una por hora real de conversación, en qué es mejor cada una, y la pregunta previa que casi nadie hace — si un tutor es la mejor inversión para tu nivel actual, o si un curso estructurado como Rocket English te deja la base a una fracción del costo para aprovechar al tutor después.",
    sections: [
      {
        h2: "Preply vs italki vs Cambly: ¿cuál es mejor?",
        paras: [],
        list: {
          ordered: true,
          items: [
            "<strong>italki</strong> — la más flexible y económica: tutores profesionales desde ~$12–25 USD/hora y 'community tutors' (nativos sin título docente) desde ~$8–10. Pagas por clase, sin paquetes obligatorios. La mejor relación precio-calidad para práctica de conversación regular.",
            "<strong>Preply</strong> — mejor para aprendizaje estructurado con el mismo tutor: los profesores arman planes de estudio y la plataforma empuja la constancia con suscripción de horas mensuales (~$15–30/hora). Su modelo de suscripción penaliza si eres irregular.",
            "<strong>Cambly</strong> — conversación instantánea con nativos, sin agendar: abres la app y hablas. Ideal para práctica espontánea (~$100–150 USD/mes por 30 min diarios), pero es el costo por hora más alto y los tutores rara vez siguen un plan.",
          ],
        },
      },
      {
        h2: "¿Cuándo vale la pena pagar un tutor de inglés?",
        paras: [
          "Un tutor rinde en proporción a lo que ya sabes. Con nivel intermedio (B1+), cada hora de conversación con corrección es oro: puliendo errores fosilizados, ganando naturalidad, preparando entrevistas. Con nivel principiante, la mayor parte de la hora se va en explicaciones de gramática básica y vocabulario que un curso de $100–150 USD de pago único te enseña igual de bien — la aritmética no perdona: 20 horas de tutor a $20 son $400 para cubrir lo que el curso cubre completo.",
          "La secuencia eficiente: curso estructurado hasta B1 (4–6 meses), y de ahí tutor 1–2 veces por semana para convertir esa base en conversación pulida.",
        ],
      },
      {
        h2: "¿Qué preguntar antes de reservar un tutor?",
        paras: [
          "Tres filtros separan a los buenos tutores: ¿tiene experiencia específica con hispanohablantes? (los errores del hispanohablante son predecibles — un tutor que los conoce corrige más rápido); ¿ofrece clase de prueba barata o gratuita? (las tres plataformas la tienen; úsala); y ¿te hace hablar más del 70% de la clase? — si el tutor habla más que tú, estás pagando por un podcast caro.",
        ],
      },
    ],
    tableTakeaway:
      "Los tutores son el mejor pulidor y el peor cimiento: brillantes a partir de B1, carísimos como forma de aprender lo básico que un curso estructurado enseña por pago único.",
    faq: [
      {
        q: "¿Valen la pena las clases de inglés con profesor particular?",
        a: "A partir de nivel intermedio, sí — la corrección personalizada acelera mucho. Como principiante, es la forma más cara de aprender lo básico: construye primero la base con un curso estructurado y luego invierte en el tutor.",
      },
      {
        q: "¿Cuánto cuesta un tutor de inglés online?",
        a: "En italki desde ~$8–10 USD/hora con tutores comunitarios y ~$12–25 con profesionales; Preply ronda $15–30/hora en suscripción mensual; Cambly sale a ~$100–150 al mes por 30 minutos diarios.",
      },
      {
        q: "¿Preply o italki: cuál elijo?",
        a: "italki si quieres pagar clase por clase y elegir entre más tutores baratos; Preply si prefieres compromiso mensual con un plan estructurado. Para práctica de conversación pura, italki suele dar más horas por el mismo dinero.",
      },
    ],
  },

  "inmersion-ingles": {
    description:
      "Inmersión en inglés sin viajar: cómo crear un ambiente de inglés en casa que acelere tu aprendizaje — con estructura, no solo ruido de fondo.",
    quickAnswer:
      "La inmersión en inglés no requiere mudarte: consiste en convertir tu entorno diario al inglés — teléfono, series, música, notas mentales — sumando 2–4 horas diarias de contacto con el idioma. La condición que casi todos omiten: la inmersión sin un currículum que la ordene es solo ruido de fondo; funciona cuando un curso estructurado le da dirección.",
    entity:
      "La inmersión en inglés es el método con mejor reputación y peor implementación: todos saben que 'rodearse del idioma' acelera el aprendizaje, pero pocos saben convertir esa idea en un sistema que funcione desde casa. En MatchFluent enseñamos a hispanohablantes a construir inmersión real sin viajar — y a evitar la trampa de la exposición pasiva infinita. El ancla del sistema es un currículum estructurado como Rocket English, que convierte las horas de exposición en progreso medible.",
    sections: [
      {
        h2: "¿Cómo crear inmersión en inglés sin salir de tu país?",
        paras: ["La inmersión casera se construye por capas, de menor a mayor esfuerzo:"],
        list: {
          ordered: true,
          items: [
            "<strong>Cambia tus dispositivos al inglés</strong> — teléfono, computadora, redes sociales. Es vocabulario de interfaz repetido cientos de veces al día, gratis.",
            "<strong>Convierte tu entretenimiento</strong> — series con subtítulos en inglés, música en inglés con letra a mano, YouTube de tus temas favoritos en inglés. No agregas horas de estudio; reconviertes horas que ya gastas.",
            "<strong>Piensa en inglés en momentos fijos</strong> — narra mentalmente tu rutina de la mañana o tu trayecto en inglés; cuando encuentres un hueco de vocabulario, anótalo.",
            "<strong>Ancla todo con una lección estructurada diaria</strong> — 20–30 minutos de curso que decida qué aprendes esta semana; el resto de la inmersión refuerza lo que la lección introduce.",
          ],
        },
      },
      {
        h2: "¿La inmersión funciona sin estructura?",
        paras: [
          "No, y el mecanismo es conocido: la exposición solo enseña dentro del rango que ya casi entiendes (input comprensible, ~80–90% de comprensión). Un principiante inmerso en contenido nativo entiende 10–20% y su cerebro descarta el resto como ruido — por eso hay inmigrantes con 20 años en EEUU y un inglés estancado, y estudiantes que nunca salieron de su país hablando con fluidez. La diferencia nunca es la geografía; es la estructura de la práctica.",
          "La inmersión multiplica lo que el estudio siembra. Sin siembra, no hay nada que multiplicar.",
        ],
      },
      {
        h2: "¿Cuántas horas de inmersión se necesitan para notar el cambio?",
        paras: [
          "Con el sistema de capas anterior — 2–4 horas diarias de contacto, ancladas en 30 minutos de lección estructurada — la comprensión auditiva mejora de forma notable en 6–8 semanas, y la sensación de 'pensar en inglés' en momentos cotidianos aparece típicamente entre el segundo y el cuarto mes. El progreso es más rápido que con estudio aislado porque cada palabra nueva reaparece el mismo día en tu serie, tu música o tu teléfono.",
        ],
      },
    ],
    tableTakeaway:
      "La exposición pasiva sola estanca; el curso estructurado solo avanza despacio; juntos — lección diaria más ambiente en inglés — son la forma más rápida de aprender sin viajar.",
    faq: [
      {
        q: "¿Los cursos intensivos de inglés funcionan de verdad?",
        a: "Aceleran mientras duran, pero el nivel se sostiene solo si la práctica diaria continúa después. Un intensivo de 2 semanas sin rutina posterior rinde menos que 30 minutos diarios durante 3 meses.",
      },
      {
        q: "¿Debo poner subtítulos en español o en inglés?",
        a: "En inglés siempre que entiendas al menos el 70%; en español, tu cerebro lee y desconecta el oído. Si necesitas subtítulos en español para seguir la trama, el contenido está por encima de tu nivel — baja la dificultad.",
      },
      {
        q: "¿Sirve dejar podcasts en inglés de fondo mientras trabajo?",
        a: "Muy poco: sin atención no hay adquisición, solo familiaridad con la música del idioma. Mejor 20 minutos de escucha atenta que 8 horas de fondo ignorado.",
      },
    ],
  },

  "leer-en-ingles": {
    description:
      "Cómo aprender inglés leyendo: por qué nivel empezar, qué leer según tu etapa y el error que hace que la mayoría abandone la lectura en inglés.",
    quickAnswer:
      "Leer en inglés es la forma más rápida de construir vocabulario — un lector constante absorbe 1,000+ palabras nuevas al año en contexto — pero solo si lees material de tu nivel real: graded readers y libros donde entiendas el 90% o más. El error que mata el hábito es empezar con novelas para nativos. Y un límite honesto: leer no te enseña cómo suenan las palabras — combínalo con audio.",
    entity:
      "Leer en inglés es el método de aprendizaje más subestimado por los hispanohablantes, que suelen saltar de los ejercicios de app directamente a intentar Harry Potter — y abandonar en el capítulo dos. En MatchFluent enseñamos a usar la lectura como motor de vocabulario eligiendo material por nivel, y a cubrir su punto ciego: la lectura no enseña pronunciación, y el hispanohablante que solo lee aprende pronunciaciones inventadas difíciles de corregir después. El audio interactivo de Rocket English es el complemento exacto de ese vacío.",
    sections: [
      {
        h2: "¿Cómo empezar a leer en inglés para principiantes?",
        paras: [
          "Empieza con graded readers — libros adaptados por nivel de las editoriales Oxford Bookworms, Penguin Readers o Cambridge English Readers. Un graded reader de nivel A2 usa las 1,000 palabras más frecuentes del inglés y cuenta historias reales (desde Sherlock Holmes hasta biografías) sin frustrar. La regla del 90%: si entiendes 9 de cada 10 palabras de una página, el libro es tu nivel; si necesitas el diccionario en cada línea, baja un nivel sin vergüenza — la fluidez de lectura se construye leyendo mucho material fácil, no descifrando material difícil.",
        ],
      },
      {
        h2: "¿Qué tan rápido crece el vocabulario leyendo?",
        paras: [
          "Los números de la investigación en adquisición léxica son consistentes: leyendo 15–20 minutos diarios a tu nivel, absorbes entre 1,000 y 1,500 palabras nuevas al año — sin memorizar listas, porque el contexto hace el trabajo de fijación. Para comparar: las apps de vocabulario típicas enseñan 300–500 palabras al año con más esfuerzo consciente. La lectura gana por volumen: cada página son 250–300 palabras de exposición con gramática real incluida.",
          "El multiplicador es releer: la segunda pasada de un libro fija el vocabulario que la primera solo presentó.",
        ],
      },
      {
        h2: "¿Qué NO te enseña la lectura?",
        paras: [
          "La lectura tiene un punto ciego serio para hispanohablantes: la pronunciación inglesa no se deduce de la escritura ('though', 'through' y 'tough' no riman), así que el lector silencioso inventa pronunciaciones con fonética española — y esas pronunciaciones inventadas se fosilizan. La vacuna es simple: acompaña la lectura con audio desde el inicio. Los graded readers con audiolibro incluido resuelven la mitad; una práctica de habla con retroalimentación — como el reconocimiento de voz de Rocket English — resuelve la otra mitad, porque te obliga a decir en voz alta lo que llevas meses leyendo.",
        ],
      },
    ],
    tableTakeaway:
      "La lectura construye vocabulario más rápido que cualquier app; el audio interactivo evita que ese vocabulario llegue con pronunciación inventada. Lee y habla el mismo día.",
    faq: [
      {
        q: "¿Qué libros fáciles hay para empezar a leer en inglés?",
        a: "Los graded readers de Oxford Bookworms nivel 1–2 y Penguin Readers nivel Easystarts son el punto de partida ideal: historias completas con las 300–1,000 palabras más frecuentes. De ahí se sube nivel por nivel hasta novelas juveniles como las de Roald Dahl.",
      },
      {
        q: "¿Leer en inglés mejora el vocabulario más que las apps?",
        a: "Sí, por volumen: 15–20 minutos diarios de lectura a tu nivel aportan 1,000–1,500 palabras al año en contexto, contra 300–500 de una app típica de vocabulario. Además la lectura enseña la gramática de contrabando.",
      },
      {
        q: "¿Debo leer con diccionario a mano?",
        a: "Úsalo con moderación: busca solo las palabras que se repiten o bloquean la trama, y deja que el contexto resuelva el resto. Parar en cada palabra rompe la fluidez de lectura, que es justo lo que estás entrenando.",
      },
    ],
  },
};

/**
 * Intros y cierres para las 7 lecciones ESP. Register: usted en páginas
 * profesionales/médicas (call center, enfermeras, hotel), tú en las demás
 * conversacionales de oficio.
 */
export const espIntros = {
  "esp-meseros": {
    description:
      "Las 8 frases en inglés que todo mesero necesita en EEUU: tomar la orden, recomendar platos y manejar quejas — con pronunciación incluida.",
    intro:
      "El inglés de mesero es de los más aprendibles que existen: las mismas situaciones se repiten mesa tras mesa, así que un núcleo pequeño de frases bien pronunciadas cubre el 80% de tu turno. Estas 8 frases son las que se usan de verdad en restaurantes de Estados Unidos — desde tomar la orden hasta resolver una queja. Escucha cada una con el botón de audio, repítela en voz alta, y llévala a tu próximo turno.",
    closing:
      "Domina estas frases y tu turno cambia: mejores propinas, menos malentendidos y clientes que te piden por tu nombre. El siguiente nivel — entender cuando el cliente responde algo inesperado — se entrena con práctica de conversación real.",
  },
  "esp-construccion": {
    description:
      "Vocabulario y frases de inglés para construcción: seguridad, herramientas e instrucciones de obra. El inglés que previene accidentes.",
    intro:
      "En una obra, el inglés no es un adorno del currículum — es equipo de seguridad. Entender una advertencia a tiempo, confirmar una instrucción del supervisor o leer un plano puede prevenir un accidente, y también es el filtro que separa al ayudante del supervisor. Estas frases son las que se escuchan en obras reales de Estados Unidos. Escúchalas, repítelas en voz alta y úsalas esta misma semana.",
    closing:
      "El inglés técnico de construcción es una de las inversiones con mejor retorno del sector: los supervisores bilingües ganan consistentemente más que los monolingües con la misma experiencia. Estas frases son el arranque; la fluidez para coordinar equipos completos requiere práctica estructurada.",
  },
  "esp-limpieza": {
    description:
      "Frases de inglés para trabajo de limpieza en hoteles, oficinas y casas: reportes, suministros y comunicación con supervisores.",
    intro:
      "El trabajo de limpieza profesional tiene su propio inglés: reportar una habitación lista, pedir suministros antes de que se acaben, avisar de un daño sin que suene a culpa. Estas frases cubren las situaciones que se repiten cada semana en hoteles, oficinas y casas particulares en Estados Unidos. Escucha el audio de cada una, repítela en voz alta y empieza a usarlas en tu trabajo.",
    closing:
      "Comunicarte con confianza es lo que convierte un trabajo de limpieza en una carrera: supervisión de housekeeping, contratos corporativos y equipos a tu cargo. Estas frases abren esa puerta; la conversación fluida con supervisores y clientes la atraviesa.",
  },
  "esp-restaurantes": {
    description:
      "Inglés para trabajar en restaurantes: frases reales de cocina, bar, servicio y gerencia — incluida la jerga que no enseñan los cursos.",
    intro:
      "El inglés de restaurante va mucho más allá de tomar órdenes: la cocina tiene su jerga ('86 the salmon'), el servicio tiene sus fórmulas, y la gerencia espera que entiendas ambas. Estas frases cubren los roles completos del restaurante en Estados Unidos — desde recibir clientes hasta dividir la cuenta. Escucha cada una, imita la pronunciación y úsalas en tu próximo turno.",
    closing:
      "En la industria restaurantera de EEUU, el inglés fluido se nota directamente en las propinas y en las oportunidades: los puestos de cara al cliente y la gerencia son para quienes conversan, no solo para quienes memorizan frases. Este es el punto de partida.",
  },
  "esp-call-center": {
    description:
      "Frases profesionales de inglés para call center: apertura, manejo de quejas, transferencias y cierre — las fórmulas que usan los mejores agentes.",
    intro:
      "El inglés de call center es un inglés de fórmulas: la apertura, la empatía con el cliente molesto, la transferencia y el cierre siguen patrones que los mejores agentes dominan hasta que suenan naturales. Estas cinco fórmulas son la columna vertebral de cualquier llamada en inglés. Escuche cada una con el botón de audio, repítala en voz alta hasta que fluya, y úsela en su próxima llamada.",
    closing:
      "En los call centers, la ruta de agente a team lead o QA pasa por el inglés: acento claro, vocabulario profesional y soltura cuando la llamada se sale del guion. Las fórmulas son la base; la conversación imprevista es lo que se entrena con práctica estructurada.",
  },
  "esp-enfermeras": {
    description:
      "Inglés médico para enfermeras y personal de salud: frases de triaje, comunicación con pacientes e instrucciones — donde la precisión importa.",
    intro:
      "El inglés médico no perdona ambigüedades: una alergia mal entendida o una instrucción de ayuno confusa tienen consecuencias reales. Por eso el personal de salud necesita frases exactas, pronunciadas con claridad, para las situaciones que se repiten en cada turno — triaje, evaluación de dolor, procedimientos de rutina e instrucciones al paciente. Escuche cada frase con el audio, repítala hasta que salga sin dudar, y úsela con su próximo paciente.",
    closing:
      "En el campo médico de Estados Unidos, el personal de salud bilingüe es de los perfiles más demandados — y mejor pagados — del sector. La precisión en estas frases es el punto de partida; la confianza clínica completa, incluida la conversación con médicos y familiares, se construye con práctica de audio estructurada.",
  },
  "esp-hotel": {
    description:
      "Inglés para trabajar en hoteles: frases de front desk, housekeeping y concierge con el tono formal que esperan los huéspedes internacionales.",
    intro:
      "El inglés hotelero tiene una particularidad: el tono. Los huéspedes internacionales esperan un registro formal y cálido a la vez — 'Would you like...' en lugar de 'Do you want...' — y dominar ese registro distingue inmediatamente al personal profesional. Estas frases cubren front desk, housekeeping y servicios del hotel. Escuche cada una, imite la entonación cortés del audio, y úsela en su próximo turno.",
    closing:
      "En hotelería, el inglés profesional es el ascensor más directo: de housekeeping a supervisión, de auxiliar a front desk, de hotel económico a propiedad de lujo con mejores propinas. Estas frases marcan el tono; la conversación fluida con huéspedes lo confirma.",
  },
};

/* Vida Plena Conecta — plataforma de comunicación para personas mayores.
   Responsiva (móvil / tablet / escritorio), con lectura en voz alta real
   (SpeechSynthesis, español) y control de tamaño de texto A−/A+ con límites
   adaptados a cada dispositivo y guardado entre visitas. */

const { Button, Eyebrow, Badge, Card, Avatar } = window.DesignSystem_84165a;

/* ---------- helpers ---------- */
function useBreakpoint() {
  const get = () => (window.innerWidth < 640 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop');
  const [bp, setBp] = React.useState(get());
  React.useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bp;
}

// Type / spacing per device — mobile already runs larger relative to layout.
const SZ = {
  mobile:  { pad: 18, max: 560, greet: 30, lead: 19, sectionH: 26, featTitle: 27, featExc: 18, cardTitle: 22, cardExc: 17, tip: 22, artTitle: 34, artBody: 21, gap: 18 },
  tablet:  { pad: 28, max: 820, greet: 38, lead: 21, sectionH: 30, featTitle: 34, featExc: 20, cardTitle: 23, cardExc: 17, tip: 25, artTitle: 42, artBody: 22, gap: 24 },
  desktop: { pad: 32, max: 1120, greet: 40, lead: 21, sectionH: 32, featTitle: 38, featExc: 20, cardTitle: 24, cardExc: 17, tip: 26, artTitle: 46, artBody: 22, gap: 28 },
};
// A−/A+ limits per device
const SCALE_LIMITS = { mobile: { min: 1.0, max: 1.6 }, tablet: { min: 1.0, max: 1.5 }, desktop: { min: 0.9, max: 1.4 } };

function CIcon({ path, size = 24, stroke = 2, fill = 'none' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
    strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">{path}</svg>;
}
const ci = {
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1.5 9-3 13.5A7 7 0 0 1 11 20z"/><path d="M2 22c5.5-5 8-9 9-13"/></>,
  walk: <><circle cx="13" cy="4" r="2"/><path d="M9 21l2-5 2 2v4M11 16l-1-5 4-1 2 3 2 1"/></>,
  users: <><circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7"/></>,
  sound: <><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 8.5a4 4 0 0 1 0 7M19.5 6a7.5 7.5 0 0 1 0 12"/></>,
  stop: <rect x="6" y="6" width="12" height="12" rx="2.5"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></>,
  back: <path d="M15 18l-6-6 6-6"/>,
  check: <path d="M20 6L9 17l-5-5"/>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  phone: <path d="M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  mic: <><path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/><path d="M8 22h8"/></>,
};

const CATS = {
  salud: { label: 'Salud', tone: 'var(--pine-700)', icon: 'heart' },
  nutricion: { label: 'Nutrición', tone: 'var(--gold-600)', icon: 'leaf' },
  actividad: { label: 'Actividad', tone: 'var(--leaf)', icon: 'walk' },
  comunidad: { label: 'Comunidad', tone: 'var(--sky)', icon: 'users' },
};

const ARTICLES = [
  // ---- SALUD ----
  { id: 'a1', cat: 'salud', title: 'Cómo cuidar tu presión arterial cada día', mins: 6,
    excerpt: 'Pasos sencillos para medir y mantener tu presión en casa, sin complicaciones.',
    body: ['La presión arterial nos dice cuánto esfuerzo hace tu corazón para mover la sangre. Vigilarla es una de las formas más simples de cuidar tu salud.',
      'Mídela siempre a la misma hora, sentado y relajado, con el brazo apoyado sobre la mesa. Anota el resultado en una libreta o en la aplicación.',
      'Camina treinta minutos al día, reduce la sal y bebe agua. Si los números suben de forma seguida, habla con tu médico sin esperar.'],
    points: ['Mide a la misma hora cada día', 'Camina treinta minutos', 'Reduce la sal en tus comidas'] },
  { id: 'a1b', cat: 'salud', title: 'Dormir bien: claves para un sueño reparador', mins: 5,
    excerpt: 'El sueño cambia con la edad, pero hay hábitos sencillos que marcan la diferencia cada noche.',
    body: ['Dormir bien es tan importante como comer sano o hacer ejercicio. Durante el sueño, el cuerpo repara tejidos, consolida la memoria y regula el sistema inmune.',
      'Mantén un horario fijo: acuéstate y levántate a la misma hora todos los días, incluso los fines de semana. La regularidad es la clave del sueño profundo.',
      'Evita la cafeína después del mediodía, apaga las pantallas una hora antes de acostarte y mantén la habitación fresca y oscura. Si te despiertas por la noche, no mires el reloj.'],
    points: ['Misma hora de dormir y despertar', 'Sin cafeína después del mediodía', 'Habitación oscura y fresca'] },
  { id: 'a1c', cat: 'salud', title: 'Visita al médico: las preguntas que debes hacer', mins: 4,
    excerpt: 'Ir preparado a la consulta te ayuda a sacar el máximo partido y a no olvidar nada importante.',
    body: ['Una consulta médica suele durar pocos minutos. Prepararse antes de ir te permite aprovechar cada momento y salir con respuestas claras.',
      'Escribe tus dudas antes de entrar, por orden de importancia. Lleva una lista de todos los medicamentos que tomas, con dosis y horarios. Si es posible, ve acompañado de alguien de confianza.',
      'No salgas sin entender el diagnóstico, el tratamiento y cuándo debes volver. Si algo no queda claro, pide que te lo expliquen de otra forma. Preguntar siempre es lo correcto.'],
    points: ['Escribe tus preguntas antes de entrar', 'Lleva la lista de tus medicamentos', 'Pide que te expliquen lo que no entiendas'] },
  { id: 'a1d', cat: 'salud', title: 'Cuidado de los pies: pasos sencillos cada día', mins: 4,
    excerpt: 'Unos pies sanos te permiten moverte con seguridad y disfrutar cada día sin molestias.',
    body: ['Los pies sostienen todo el peso del cuerpo durante años. Con la edad, la piel se seca más, las uñas se endurecen y la circulación puede ser menos eficiente.',
      'Lava los pies con agua tibia y jabón suave cada día. Sécalos bien entre los dedos y aplica crema hidratante, evitando el espacio entre los dedos. Córtate las uñas de forma recta para prevenir encarnaduras.',
      'Usa zapatos cómodos y que sujeten bien el pie. Si tienes diabetes, revísate los pies cada día y consulta a tu médico ante cualquier herida, por pequeña que sea.'],
    points: ['Lava y seca bien entre los dedos', 'Hidrata la piel todos los días', 'Usa calzado cómodo y de tu talla'] },
  { id: 'a1e', cat: 'salud', title: 'Cómo prevenir caídas en casa', mins: 5,
    excerpt: 'Pequeños cambios en el hogar reducen enormemente el riesgo de caídas y sus consecuencias.',
    body: ['Las caídas son una de las principales causas de lesiones en personas mayores, pero muchas se pueden evitar con ajustes sencillos en el hogar y en los hábitos diarios.',
      'Retira alfombras sueltas, asegura los cables y mejora la iluminación, especialmente en pasillos y el baño. Instala barras de apoyo junto al inodoro y en la ducha. Usa calzado antideslizante dentro de casa.',
      'El ejercicio también protege: fortalecer las piernas y mejorar el equilibrio reduce mucho el riesgo. Si necesitas gafas o audífono, úsalos siempre. Y si tomas varios medicamentos, habla con tu médico sobre el mareo como posible efecto secundario.'],
    points: ['Retira alfombras y obstáculos del suelo', 'Instala barras de apoyo en el baño', 'Haz ejercicio para mejorar el equilibrio'] },
  { id: 'a1f', cat: 'salud', title: 'Señales de alerta que no debes ignorar', mins: 5,
    excerpt: 'Conocer las señales tempranas de problemas de salud puede marcar una gran diferencia.',
    body: ['A veces el cuerpo avisa antes de que un problema se vuelva grave. Reconocer esas señales y actuar rápido puede hacer una gran diferencia en el resultado.',
      'Busca atención médica urgente ante: dolor en el pecho, dificultad para respirar, debilidad o entumecimiento repentino en un lado del cuerpo, confusión súbita o pérdida de visión repentina. Pueden ser síntomas de infarto o derrame cerebral.',
      'Consulta a tu médico sin esperar ante pérdida de peso sin causa, fatiga persistente, cambios en el estado de ánimo que duran semanas o cualquier síntoma nuevo que te preocupe. Nunca es una molestia consultar.'],
    points: ['Ante dolor en el pecho, busca ayuda urgente', 'No ignores la fatiga persistente', 'Cualquier síntoma nuevo merece consulta'] },
  { id: 'a1g', cat: 'salud', title: 'Chequeos preventivos: cuáles necesitas y cuándo', mins: 5,
    excerpt: 'Las revisiones periódicas detectan problemas antes de que aparezcan síntomas. No esperes a estar enfermo.',
    body: ['La medicina preventiva es la más eficaz. Muchas enfermedades graves tienen mejor tratamiento cuando se detectan en etapas tempranas, incluso antes de que causen molestias.',
      'Habla con tu médico sobre las revisiones que te corresponden según tu edad: presión arterial, glucosa, colesterol, función renal y tiroides son controles habituales. Las mujeres deben revisar mamografía y densidad ósea; los hombres, la próstata.',
      'Lleva un registro de tus resultados y compáralos en cada visita. Una libreta sencilla o una aplicación de salud puede ayudarte a ver cómo evolucionan tus valores a lo largo del tiempo.'],
    points: ['Controla presión, glucosa y colesterol', 'Lleva un registro de tus resultados', 'Habla con tu médico sobre tus revisiones'] },
  { id: 'a1h', cat: 'salud', title: 'Salud ocular: cuida tu vista cada día', mins: 4,
    excerpt: 'La vista cambia con los años, pero con cuidados adecuados puedes protegerla durante mucho tiempo.',
    body: ['Con la edad es normal que la vista cambie: puede costar más enfocar de cerca, se necesita más luz para leer o aparecer más sensibilidad a los brillos. Sin embargo, hay condiciones evitables con revisiones y hábitos correctos.',
      'Visita al oftalmólogo al menos una vez al año. El glaucoma, las cataratas y la degeneración macular son más frecuentes después de los 60, pero se pueden detectar y tratar a tiempo.',
      'Protege tus ojos del sol con gafas con filtro UV. Al leer, asegúrate de tener buena luz. Si notas visión borrosa, manchas, destellos o pérdida de visión repentina, consulta sin demora.'],
    points: ['Visita al oftalmólogo cada año', 'Usa gafas con protección UV', 'Ante cambios bruscos de visión, consulta urgente'] },
  // ---- NUTRICIÓN ----
  { id: 'a2', cat: 'nutricion', title: 'Comidas fáciles y nutritivas para la semana', mins: 5,
    excerpt: 'Ideas simples, económicas y buenas para tu cuerpo, listas en pocos minutos.',
    body: ['Comer bien no tiene que ser complicado ni caro. Con unos pocos ingredientes frescos puedes preparar platos completos y sabrosos.',
      'Llena la mitad de tu plato con verduras, un cuarto con proteína (huevo, pescado o legumbres) y el resto con un cereal integral.',
      'Cocina de más y guarda raciones en la nevera. Así siempre tendrás algo bueno listo para calentar.'],
    points: ['Media de verduras en cada plato', 'Cocina de más y guarda raciones', 'Bebe agua en lugar de refrescos'] },
  { id: 'a2b', cat: 'nutricion', title: 'Proteínas: cuánta necesitas después de los 60', mins: 5,
    excerpt: 'La proteína es esencial para mantener músculo y fuerza. Descubre cuáles son las mejores fuentes.',
    body: ['Después de los 60 años, el cuerpo empieza a perder músculo de forma gradual. La proteína es el nutriente clave para frenar ese proceso y mantener la fuerza y la independencia.',
      'Las mejores fuentes son: huevo, pescado azul como el salmón o la sardina, pollo, legumbres (lentejas, garbanzos, frijoles) y lácteos bajos en grasa. Intenta incluir proteína en cada comida del día.',
      'No es necesario comer grandes cantidades. Un huevo en el desayuno, legumbres al mediodía y un poco de pescado o pollo por la tarde ya cubren bien las necesidades de la mayoría.'],
    points: ['Incluye proteína en cada comida', 'El huevo y las legumbres son excelentes fuentes', 'El pescado azul nutre músculo y corazón'] },
  { id: 'a2c', cat: 'nutricion', title: 'Calcio y vitamina D: los aliados de tus huesos', mins: 5,
    excerpt: 'Dos nutrientes esenciales para mantener los huesos fuertes y reducir el riesgo de osteoporosis.',
    body: ['Con la edad, los huesos pierden densidad con mayor facilidad. El calcio y la vitamina D son los nutrientes clave para mantenerlos fuertes y reducir el riesgo de fractura.',
      'El calcio se encuentra en lácteos, sardinas con espina, almendras, brócoli y leches vegetales enriquecidas. La vitamina D la produce el cuerpo al exponerse al sol, y también está en el salmón, los huevos y alimentos enriquecidos.',
      'Si tu alimentación o tu exposición al sol son limitadas, habla con tu médico sobre la posibilidad de tomar un suplemento. Es uno de los más recomendados en personas mayores.'],
    points: ['Come lácteos o alimentos ricos en calcio', 'Toma algo de sol cada día de forma segura', 'Consulta a tu médico sobre suplementos'] },
  { id: 'a2d', cat: 'nutricion', title: 'Hidratación: tan importante como lo que comes', mins: 4,
    excerpt: 'Con la edad se percibe menos la sed, pero la necesidad de agua sigue siendo igual o mayor.',
    body: ['Uno de los cambios menos conocidos de la longevidad es que disminuye la sensación de sed, lo que aumenta el riesgo de deshidratación incluso sin darse cuenta.',
      'Bebe agua de forma regular a lo largo del día, aunque no tengas sed. El objetivo habitual es entre seis y ocho vasos diarios. Las infusiones, los caldos y las frutas con mucha agua como la sandía o la naranja también cuentan.',
      'Señales de deshidratación: orina oscura, cansancio sin causa o dolor de cabeza. Si tomas diuréticos o hace mucho calor, necesitas beber más. Lleva siempre una botella de agua contigo.'],
    points: ['Bebe agua aunque no tengas sed', 'Orina clara es señal de buena hidratación', 'Las infusiones y caldos también hidratan'] },
  { id: 'a2e', cat: 'nutricion', title: 'Cómo leer las etiquetas de los alimentos', mins: 5,
    excerpt: 'Entender lo que dice el envase te ayuda a tomar mejores decisiones en el supermercado.',
    body: ['Las etiquetas nutricionales pueden parecer complicadas, pero con unos pocos trucos es fácil entender lo más importante y elegir mejor en cada compra.',
      'Fíjate primero en el tamaño de la porción: todos los valores se refieren a esa cantidad, no al envase completo. Luego revisa el azúcar añadido (idealmente menos de 5 g por porción), el sodio (menos de 600 mg) y las grasas saturadas.',
      'Cuantos menos ingredientes tenga el producto, mejor. Si el azúcar o alguna grasa aparece entre los tres primeros ingredientes, hay mucho de eso. Elige productos con ingredientes que puedas reconocer fácilmente.'],
    points: ['Revisa el tamaño de la porción primero', 'Menos de 5 g de azúcar añadido por porción', 'Ingredientes cortos y reconocibles, mejor'] },
  { id: 'a2f', cat: 'nutricion', title: 'Recetas rápidas con pocos ingredientes', mins: 4,
    excerpt: 'Cocinar no tiene que ser complicado. Estos platos se preparan en menos de veinte minutos.',
    body: ['Comer bien no requiere pasar horas en la cocina. Con cuatro o cinco ingredientes básicos puedes preparar platos completos, sabrosos y nutritivos en muy poco tiempo.',
      'Tortilla de verduras: huevo, cebolla, pimiento y una pizca de sal. Lista en diez minutos. Sopa de lentejas: lentejas de bote, caldo, zanahoria y comino. Lista en quince minutos y llena de fibra y proteína.',
      'Mantén en casa: huevos, lentejas o garbanzos de bote, avena, arroz integral, aceite de oliva, ajo y tomate. Con esos siete básicos puedes preparar más de diez comidas diferentes.'],
    points: ['La tortilla es rápida y nutritiva', 'Las legumbres de bote ahorran tiempo', 'Con siete básicos puedes comer bien toda la semana'] },
  { id: 'a2g', cat: 'nutricion', title: 'Frutas y verduras: qué comer en cada temporada', mins: 4,
    excerpt: 'Las frutas y verduras de temporada son más nutritivas, más sabrosas y cuestan menos.',
    body: ['Comer frutas y verduras de temporada es uno de los hábitos más sencillos y beneficiosos que puedes adoptar. Son más frescas, tienen más nutrientes y generalmente cuestan menos.',
      'En los meses fríos elige: naranja, mandarina, kiwi, col, brócoli, espinacas y zanahoria. En los meses cálidos: sandía, melocotón, ciruela, tomate, pimiento y calabacín.',
      'Intenta que la mitad de tu plato sean verduras en cada comida. Si no tienes tiempo de cocinarlas, las ensaladas o las verduras al vapor son opciones rápidas y muy nutritivas.'],
    points: ['La fruta de temporada tiene más vitaminas', 'Verduras en la mitad de tu plato', 'El mercado local es la mejor fuente de temporada'] },
  { id: 'a2h', cat: 'nutricion', title: 'Reduce el azúcar sin perder el sabor', mins: 5,
    excerpt: 'Pequeños cambios en tus hábitos te permiten disfrutar de lo que comes con mucho menos azúcar.',
    body: ['El exceso de azúcar está relacionado con la diabetes, la inflamación y el aumento de peso. Reducirlo no significa dejar de disfrutar de la comida, sino aprender a saborearla de otra manera.',
      'Empieza por lo fácil: reduce el azúcar del café o el té de forma gradual, semana a semana. Cambia los refrescos por agua con limón o infusiones. Lee las etiquetas: muchos alimentos salados como salsas o embutidos tienen azúcar oculta.',
      'La fruta fresca es el mejor sustituto del dulce. Si necesitas endulzar algo, usa dátiles triturados, plátano maduro o una pequeña cantidad de miel. Tu paladar se adapta en pocas semanas.'],
    points: ['Reduce el azúcar del café poco a poco', 'La fruta fresca satisface el antojo de dulce', 'Lee etiquetas: el azúcar se esconde en muchos productos'] },
  // ---- ACTIVIDAD ----
  { id: 'a3', cat: 'actividad', title: 'Ejercicios suaves para mantenerte ágil', mins: 4,
    excerpt: 'Movimientos seguros que puedes hacer en casa, sentado o de pie.',
    body: ['Mantenerte en movimiento conserva tu fuerza y tu equilibrio. No hace falta ir al gimnasio: tu salón es suficiente.',
      'Empieza sentado: estira los brazos, gira los tobillos y levanta las rodillas con suavidad. Repite cada ejercicio diez veces.',
      'Si te sientes seguro, ponte de pie apoyado en una silla y haz pequeñas sentadillas. Para si notas dolor o mareo.'],
    points: ['Calienta sentado primero', 'Apóyate en una silla firme', 'Para si notas dolor o mareo'] },
  { id: 'a3b', cat: 'actividad', title: 'Caminar: el mejor ejercicio para cada día', mins: 4,
    excerpt: 'Sencillo, gratuito y con grandes beneficios para el cuerpo y la mente. Solo necesitas un buen par de zapatos.',
    body: ['Caminar es el ejercicio más natural y accesible que existe. No necesita equipo, no tiene contraindicaciones para la mayoría y se puede hacer en cualquier momento y lugar.',
      'Treinta minutos de caminata diaria reducen el riesgo cardiovascular, mejoran el equilibrio, fortalecen los huesos y elevan el ánimo. Si treinta minutos seguidos son mucho al principio, empieza con tres caminatas de diez minutos.',
      'Para aprovechar al máximo: mantén la espalda recta, activa el abdomen y mueve los brazos con naturalidad. Usa calzado cómodo con buen soporte. Y si puedes, camina acompañado: el tiempo pasa más rápido.'],
    points: ['Treinta minutos al día es suficiente para empezar', 'Puedes dividirlos en tres caminatas de diez', 'El calzado cómodo es tu inversión más importante'] },
  { id: 'a3c', cat: 'actividad', title: 'Yoga suave: flexibilidad y paz a tu ritmo', mins: 5,
    excerpt: 'El yoga adaptado a personas mayores mejora la flexibilidad, el equilibrio y reduce el estrés.',
    body: ['El yoga no es solo para jóvenes ni para personas muy flexibles. Existe una versión suave, adaptada, que cualquier persona mayor puede practicar con beneficios reales y sin riesgo.',
      'Con veinte minutos al día, el yoga suave mejora la flexibilidad de las articulaciones, fortalece los músculos posturales, mejora el equilibrio y calma la mente. También ayuda a dormir mejor y a reducir el dolor crónico de espalda o cuello.',
      'No necesitas equipamiento especial: una esterilla o una manta en el suelo es suficiente. Empieza con clases en vídeo pensadas para mayores o busca un grupo local. Lo importante es escuchar al cuerpo y no forzar nunca.'],
    points: ['Empieza con sesiones de veinte minutos', 'Nunca fuerces las posturas: respeta tu cuerpo', 'Busca clases adaptadas a personas mayores'] },
  { id: 'a3d', cat: 'actividad', title: 'Ejercicios para una espalda sin dolor', mins: 5,
    excerpt: 'El dolor de espalda es frecuente, pero con los ejercicios adecuados puedes reducirlo o eliminarlo.',
    body: ['El dolor de espalda es uno de los motivos más frecuentes de consulta médica en personas mayores. En muchos casos mejora mucho con ejercicio específico y hábitos posturales correctos.',
      'Estiramiento del gato-vaca: a cuatro patas, arquea la espalda hacia arriba y luego hacia abajo suavemente, diez veces. Fortalecimiento: tumbado boca arriba, lleva las rodillas al pecho y mantén diez segundos. Repite cinco veces.',
      'En el día a día: siéntate con la espalda apoyada en el respaldo, sin cruzar las piernas. Al agacharte, dobla las rodillas en lugar de la espalda. Si el dolor irradia a las piernas, consulta a tu médico antes de empezar.'],
    points: ['El estiramiento diario reduce el dolor', 'Siéntate con la espalda bien apoyada', 'Dobla las rodillas, no la espalda, al agacharte'] },
  { id: 'a3e', cat: 'actividad', title: 'Baile: muévete y disfruta al mismo tiempo', mins: 4,
    excerpt: 'Bailar es ejercicio, es alegría y es conexión social. Y es perfectamente válido hacerlo en el salón de tu casa.',
    body: ['Bailar combina actividad física con estimulación mental y conexión emocional. Es uno de los ejercicios más completos y, desde luego, de los más divertidos.',
      'Media hora de baile equivale a una caminata enérgica: trabaja el corazón, las piernas, el equilibrio y la coordinación. Además, aprender coreografías sencillas es un excelente ejercicio para la memoria.',
      'No necesitas ir a clases si no quieres. Pon tu música favorita y muévete en casa. Empieza despacio y aumenta el ritmo según cómo te sientas. Si hay un club de baile en tu barrio, es una oportunidad perfecta para conocer gente nueva.'],
    points: ['Treinta minutos de baile equivalen a una caminata', 'La música favorita es la mejor motivación', 'El baile también entrena la memoria'] },
  { id: 'a3f', cat: 'actividad', title: 'Natación y aquagym: cuida tus articulaciones', mins: 5,
    excerpt: 'El agua sostiene el cuerpo y permite moverse sin impacto, ideal para articulaciones delicadas.',
    body: ['El ejercicio en el agua es uno de los más recomendados para personas mayores porque el agua sostiene el peso corporal, reduciendo enormemente el impacto sobre las articulaciones.',
      'La natación trabaja todo el cuerpo: brazos, piernas, espalda y abdomen, mientras mejora la resistencia cardiovascular. El aquagym se practica en piscina poco profunda y no requiere saber nadar.',
      'Treinta minutos en el agua tres veces por semana ya producen beneficios notables. Consulta los horarios de tu piscina más cercana; muchas tienen programas específicos para mayores con precio reducido.'],
    points: ['El agua reduce el impacto en las articulaciones', 'El aquagym no requiere saber nadar', 'Tres sesiones semanales de treinta minutos son suficientes'] },
  { id: 'a3g', cat: 'actividad', title: 'Tai chi: equilibrio, calma y salud en movimiento', mins: 4,
    excerpt: 'Esta práctica milenaria mejora el equilibrio y reduce el estrés con movimientos lentos y seguros.',
    body: ['El tai chi combina movimientos lentos y fluidos con respiración consciente y concentración mental. Es suave, seguro y sus beneficios están avalados por la ciencia.',
      'Estudios demuestran que practicar tai chi regularmente reduce el riesgo de caídas en personas mayores hasta en un 45 %. También mejora la presión arterial, el equilibrio y el bienestar emocional.',
      'Se puede practicar en grupo o solo, al aire libre o en casa. Una sesión típica dura entre veinte y cuarenta y cinco minutos. No requiere equipamiento y se puede adaptar para personas con movilidad reducida.'],
    points: ['Reduce el riesgo de caídas un 45 %', 'Mejora el equilibrio y la presión arterial', 'Puedes practicarlo en casa o al aire libre'] },
  { id: 'a3h', cat: 'actividad', title: 'Rutina de estiramiento para empezar bien el día', mins: 4,
    excerpt: 'Cinco minutos de estiramiento al levantarte preparan el cuerpo y la mente para el día.',
    body: ['Los primeros minutos del día son clave. Un estiramiento suave antes de levantarte de la cama activa la circulación, reduce la rigidez matinal y prepara el cuerpo para moverse sin dolor.',
      'Antes de levantarte: estira los brazos por encima de la cabeza, lleva las rodillas al pecho y gira suavemente el tronco hacia cada lado. Una vez de pie: inclina la cabeza hacia los lados, haz círculos con los hombros y estira las pantorrillas.',
      'Todo el proceso lleva cinco minutos. Hazlo cada mañana durante dos semanas y notarás la diferencia. Termina con tres respiraciones profundas: inhala cuatro tiempos, mantén dos, exhala seis.'],
    points: ['Estira antes de levantarte de la cama', 'Cinco minutos diarios son suficientes', 'Termina con tres respiraciones profundas'] },
  // ---- COMUNIDAD ----
  { id: 'a4', cat: 'comunidad', title: 'Encuentros de Vida Plena cerca de ti', mins: 3,
    excerpt: 'Conoce a otras personas, comparte y aprende en grupo. Esta semana hay tres encuentros.',
    body: ['Compartir con otras personas es tan importante para la salud como caminar o comer bien. La compañía nos cuida.',
      'Esta semana hay tres encuentros gratuitos: un paseo por el parque el martes, un taller de cocina el jueves y una charla de salud el sábado.',
      'Apúntate desde la aplicación o llámanos. Te guardamos un sitio y, si lo necesitas, te ayudamos con el transporte.'],
    points: ['Martes: paseo en el parque', 'Jueves: taller de cocina', 'Sábado: charla de salud'] },
  { id: 'a4b', cat: 'comunidad', title: 'Mantente conectado con tu familia a distancia', mins: 5,
    excerpt: 'La tecnología hace que la distancia no sea un obstáculo para sentirte cerca de los tuyos.',
    body: ['La distancia física no tiene por qué significar distancia emocional. Con herramientas sencillas y una conexión a internet, puedes ver, escuchar y compartir momentos con tu familia en cualquier parte del mundo.',
      'Las videollamadas son la opción más cercana a estar en persona. WhatsApp, FaceTime o Zoom funcionan bien y son gratuitas. Si necesitas ayuda para configurarlas, en Vida Plena podemos orientarte paso a paso.',
      'Establece una hora fija cada semana para llamar: la rutina hace que todos lo recuerden y esperen. Comparte fotos, cuenta lo que has hecho, pregunta por los más jóvenes. La conexión regular mantiene vivo el vínculo.'],
    points: ['Las videollamadas son gratis y fáciles de usar', 'Fija un día y hora para llamar cada semana', 'Compartir fotos acorta la distancia'] },
  { id: 'a4c', cat: 'comunidad', title: 'Voluntariado: da y recibe al mismo tiempo', mins: 5,
    excerpt: 'Ayudar a otros es también cuidarse a uno mismo. El voluntariado tiene beneficios reales para la salud.',
    body: ['Las personas que hacen voluntariado viven más tiempo, tienen menor riesgo de depresión y reportan mayor satisfacción con su vida. Es el efecto del propósito, la conexión y la generosidad.',
      'Hay opciones para todos los perfiles: acompañar a personas mayores que viven solas, apoyar en comedores comunitarios, colaborar con asociaciones de animales o participar en grupos de lectura para niños.',
      'Empieza con pocas horas a la semana, las que puedas dar sin esfuerzo. Lo importante no es cuánto tiempo, sino la regularidad y el compromiso. Contacta con tu ayuntamiento o asociación local para conocer las opciones.'],
    points: ['Empieza con pocas horas semanales', 'El voluntariado reduce el riesgo de depresión', 'Pregunta en tu ayuntamiento por las opciones'] },
  { id: 'a4d', cat: 'comunidad', title: 'Grupos de lectura: aprender y conversar juntos', mins: 4,
    excerpt: 'Compartir un libro o una idea en grupo estimula la mente y crea amistades genuinas.',
    body: ['Los grupos de lectura son mucho más que leer en común. Son espacios donde las personas comparten perspectivas, aprenden unas de otras y disfrutan de conversación real en un entorno de respeto y escucha.',
      'Participar en un club de lectura mejora la memoria, amplía el vocabulario y mantiene la mente activa. Pero el beneficio más valorado suele ser otro: la compañía y el sentido de pertenencia.',
      'Muchas bibliotecas y centros comunitarios tienen clubes de lectura gratuitos. Si no encuentras uno cerca, puedes crear el tuyo con vecinos o amigos: basta escoger un libro, fijar una fecha y reunirse a comentarlo.'],
    points: ['Las bibliotecas suelen tener clubes gratuitos', 'Un club de lectura también es un espacio social', 'Puedes crear el tuyo con vecinos o amigos'] },
  { id: 'a4e', cat: 'comunidad', title: 'Huertos comunitarios: cultiva salud y amistad', mins: 4,
    excerpt: 'Cuidar un huerto junto a otras personas es ejercicio, terapia y conexión al mismo tiempo.',
    body: ['Los huertos comunitarios son espacios donde vecinos comparten tierra, herramientas y conocimientos para cultivar frutas, verduras y plantas. Son también un ejemplo de cómo la comunidad cuida la salud.',
      'Participar implica actividad física moderada al aire libre, contacto con la naturaleza, aprendizaje continuo y, sobre todo, compartir. El proceso de plantar, cuidar y cosechar juntos crea vínculos genuinos.',
      'Pregunta en tu ayuntamiento o parque más cercano si hay un huerto comunitario activo. Muchos buscan voluntarios sin experiencia previa. Si no existe en tu zona, quizá es el momento de proponérselo a los vecinos.'],
    points: ['Ejercicio al aire libre y contacto con la naturaleza', 'No se necesita experiencia previa', 'Pregunta en tu ayuntamiento si hay huertos cerca'] },
  { id: 'a4f', cat: 'comunidad', title: 'Cómo hacer nuevos amigos después de los 60', mins: 5,
    excerpt: 'La amistad no tiene edad. Con los pasos correctos, es posible construir nuevas conexiones en cualquier momento.',
    body: ['Hacer amigos de adulto puede parecer difícil, pero no es imposible. Muchas personas mayores reportan que las amistades construidas en esta etapa son las más honestas y profundas de su vida.',
      'La clave está en la regularidad: las amistades se construyen con encuentros repetidos en el tiempo, no en una sola conversación. Por eso los grupos, talleres y actividades regulares son el mejor lugar para empezar.',
      'Muéstrate abierto, haz preguntas con interés genuino y propón un siguiente encuentro cuando la conversación fluya bien. No hay que esperar que el otro dé el primer paso. Una invitación a tomar un café puede ser el inicio de una amistad de años.'],
    points: ['La regularidad es clave para construir amistad', 'Los grupos y talleres son el mejor punto de partida', 'No esperes que el otro dé el primer paso'] },
  { id: 'a4g', cat: 'comunidad', title: 'Tecnología para conectar: más fácil de lo que parece', mins: 5,
    excerpt: 'Aprender a usar el teléfono o la tablet para conectar con otros abre un mundo de posibilidades.',
    body: ['La tecnología no es cosa de jóvenes. Cada vez más personas mayores usan el móvil o la tablet no solo para llamar, sino para mantenerse informadas, entretenidas y conectadas con quienes quieren.',
      'No hace falta aprenderlo todo de golpe. Empieza por una sola aplicación: WhatsApp para mensajes y fotos, o YouTube para ver vídeos de temas que te interesan. Una vez que la manejas con soltura, añade la siguiente.',
      'Busca talleres de alfabetización digital en tu biblioteca, centro de mayores o ayuntamiento. Son gratuitos, van a tu ritmo y estarás rodeado de personas con las mismas dudas. En Vida Plena también podemos orientarte.'],
    points: ['Empieza con una sola aplicación a la vez', 'Los talleres digitales gratuitos son un gran punto de partida', 'No tengas miedo de preguntar y equivocarte'] },
  { id: 'a4h', cat: 'comunidad', title: 'Tu centro comunitario: un recurso que vale la pena conocer', mins: 4,
    excerpt: 'Los centros de mayores ofrecen actividades, compañía y servicios que muchas personas no saben que existen.',
    body: ['Los centros comunitarios y de mayores son uno de los recursos más valiosos y menos aprovechados. Ofrecen actividades físicas, culturales y de ocio, muchas de ellas gratuitas o a muy bajo coste.',
      'En la mayoría encontrarás: clases de gimnasia o yoga adaptado, talleres de manualidades o pintura, grupos de baile, aulas de informática, charlas de salud y espacios para jugar al dominó o a las cartas en compañía.',
      'Si nunca has ido, la primera vez puede dar algo de reparo. Lleva a un amigo o vecino la primera visita. Una vez dentro, casi siempre se descubre que merece la pena haberlo intentado.'],
    points: ['Muchas actividades son gratuitas o de bajo coste', 'Lleva a alguien contigo la primera vez', 'Pregunta por la agenda mensual al entrar'] },
];

const TIP = 'Bebe un vaso de agua al despertar. Tu cuerpo lo agradece después de toda la noche.';

function articleSpeech(a) {
  return [a.title, ...a.body, 'Recuerda: ' + (a.points || []).join('. ')].join('. ');
}

const SPEECH_RATES = [
  { label: 'Lenta',      rate: 0.7  },
  { label: 'Normal',     rate: 0.9  },
  { label: 'Rápida',     rate: 1.15 },
  { label: 'Muy rápida', rate: 1.4  },
];

/* ---------- voice helpers ---------- */
const FEMALE_HINTS = /laura|monica|paulina|maria|elena|isabel|rosa|carmen|pilar|lucia|diana|silvia|helena|ines|female|mujer/i;
const MALE_HINTS   = /jorge|pablo|alejandro|carlos|juan|diego|enrique|sergio|antonio|manuel|pedro|miguel|alvaro|raul|male|hombre/i;

function guessGender(voice) {
  if (FEMALE_HINTS.test(voice.name)) return 'f';
  if (MALE_HINTS.test(voice.name))   return 'm';
  return null;
}

function cleanVoiceName(name) {
  const cleaned = name
    .replace(/Microsoft\s+/gi, '').replace(/Google\s+/gi, '').replace(/Apple\s+/gi, '')
    .replace(/\b(Online|Natural|Neural|Enhanced|Desktop|Mobile)\b/gi, '')
    .replace(/-?\s*(Spanish|Español)\s*\([^)]*\)/gi, '')
    .replace(/\([^)]*\)/g, '')
    .replace(/\s{2,}/g, ' ').replace(/(^\s*-\s*|\s*-\s*$)/g, '').trim();
  return cleaned || name;
}

function selectVoices(voices) {
  const es = voices.filter(v => /^es/i.test(v.lang));
  es.sort((a, b) => (/natural|online|neural/i.test(a.name) ? 0 : 1) - (/natural|online|neural/i.test(b.name) ? 0 : 1));
  const f    = es.filter(v => FEMALE_HINTS.test(v.name)).slice(0, 2);
  const m    = es.filter(v => MALE_HINTS.test(v.name)).slice(0, 2);
  const rest = es.filter(v => !FEMALE_HINTS.test(v.name) && !MALE_HINTS.test(v.name));
  const out  = [...f, ...m];
  return out.length < 4 ? [...out, ...rest.slice(0, 4 - out.length)] : out;
}

/* ---------- scale control ---------- */
function ScaleControl({ scale, setScale, bp }) {
  const lim = SCALE_LIMITS[bp];
  const dim = bp === 'mobile' ? 44 : 42;
  const btn = (txt, fs, delta, label, dis) => (
    <button onClick={() => setScale(s => Math.min(lim.max, Math.max(lim.min, +(s + delta).toFixed(2))))} aria-label={label} disabled={dis}
      style={{ width: dim, height: dim, borderRadius: '50%', border: 0, background: 'transparent', cursor: dis ? 'default' : 'pointer',
        fontFamily: 'var(--font-display)', fontSize: fs, fontWeight: 600, color: dis ? 'var(--text-subtle)' : 'var(--pine-700)', opacity: dis ? 0.45 : 1, flexShrink: 0 }}>{txt}</button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-full)', padding: 3 }}>
      {btn('A−', 18, -0.1, 'Reducir tamaño del texto', scale <= lim.min)}
      {bp !== 'mobile' ? <span style={{ fontSize: 13, color: 'var(--text-muted)', minWidth: 36, textAlign: 'center' }}>Texto</span> : null}
      {btn('A+', 24, +0.1, 'Aumentar tamaño del texto', scale >= lim.max)}
    </div>
  );
}

/* ---------- voice picker modal ---------- */
function VoicePicker({ availableVoices, selectedVoiceName, setSelectedVoiceName, speechRate, setSpeechRate, onClose }) {
  const [previewName, setPreviewName] = React.useState(null);

  const doPreview = (voice) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    if (previewName === voice.name) { setPreviewName(null); return; }
    const u = new SpeechSynthesisUtterance('Hola, así es como suena mi voz.');
    u.lang = voice.lang; u.rate = speechRate; u.pitch = 1.05; u.volume = 1; u.voice = voice;
    u.onend = u.onerror = () => setPreviewName(null);
    synth.speak(u);
    setPreviewName(voice.name);
  };

  const groups = [
    { label: 'Voces femeninas', color: '#9b59a0', voices: availableVoices.filter(v => guessGender(v) === 'f') },
    { label: 'Voces masculinas', color: '#2e7abf', voices: availableVoices.filter(v => guessGender(v) === 'm') },
    { label: 'Otras voces',      color: 'var(--text-muted)', voices: availableVoices.filter(v => !guessGender(v)) },
  ].filter(g => g.voices.length);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.45)', padding: 20 }}
      onClick={onClose}>
      <div style={{ background: 'var(--surface-card)', borderRadius: 22, padding: '28px 24px', maxWidth: 500, width: '100%', maxHeight: '82vh', overflowY: 'auto', boxShadow: '0 12px 50px rgba(0,0,0,0.22)' }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: 0, color: 'var(--text-strong)' }}>Elige una voz</h2>
          <button onClick={onClose} aria-label="Cerrar" style={{ width: 44, height: 44, borderRadius: '50%', border: 0, background: 'var(--surface-page)', cursor: 'pointer', fontSize: 22, color: 'var(--text-body)', display: 'grid', placeItems: 'center' }}>✕</button>
        </div>
        {availableVoices.length === 0 ? (
          <p style={{ fontSize: 18, color: 'var(--text-body)', lineHeight: 1.6 }}>No se encontraron voces en español en este dispositivo.</p>
        ) : groups.map(g => (
          <div key={g.label} style={{ marginBottom: 22 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: g.color, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>{g.label}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {g.voices.map(voice => {
                const sel  = voice.name === selectedVoiceName;
                const prev = previewName === voice.name;
                return (
                  <div key={voice.name} onClick={() => setSelectedVoiceName(voice.name)}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 14,
                      border: `${sel ? '2.5px' : '1.5px'} solid ${sel ? 'var(--pine-700)' : 'var(--border-default)'}`,
                      background: sel ? 'rgba(44,92,60,0.07)' : 'var(--surface-page)', cursor: 'pointer' }}>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                      border: `2px solid ${sel ? 'var(--pine-700)' : 'var(--border-default)'}`,
                      background: sel ? 'var(--pine-700)' : 'transparent',
                      display: 'grid', placeItems: 'center', color: 'white' }}>
                      {sel && <CIcon path={ci.check} size={14} stroke={3} />}
                    </span>
                    <span style={{ flex: 1, fontSize: 19, fontWeight: sel ? 700 : 500, color: 'var(--text-strong)' }}>{cleanVoiceName(voice.name)}</span>
                    <button onClick={e => { e.stopPropagation(); doPreview(voice); }} aria-label={prev ? 'Detener' : 'Probar voz'}
                      style={{ flexShrink: 0, height: 40, padding: '0 14px', borderRadius: 10, border: '1.5px solid var(--border-default)',
                        background: 'var(--surface-card)', cursor: 'pointer', fontSize: 15, fontWeight: 600, color: 'var(--pine-700)',
                        display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CIcon path={prev ? ci.stop : ci.sound} size={17} fill={prev ? 'currentColor' : 'none'} stroke={prev ? 0 : 2} />
                      {prev ? 'Detener' : 'Probar'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: 24, paddingTop: 22 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px', textAlign: 'center' }}>Velocidad de lectura</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {SPEECH_RATES.map((sr, i) => {
              const sel = speechRate === sr.rate;
              const barColor = sel ? 'var(--pine-700)' : 'var(--border-default)';
              return (
                <button key={sr.rate} onClick={() => setSpeechRate(sr.rate)} aria-label={sr.label} aria-pressed={sel}
                  style={{ flex: 1, padding: '12px 6px 10px', borderRadius: 12,
                    border: `${sel ? '2.5px' : '1.5px'} solid ${sel ? 'var(--pine-700)' : 'var(--border-default)'}`,
                    background: sel ? 'rgba(44,92,60,0.07)' : 'var(--surface-page)',
                    cursor: 'pointer', fontFamily: 'var(--font-sans)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 20 }}>
                    {Array.from({ length: i + 1 }).map((_, j) => (
                      <div key={j} style={{ width: 5, borderRadius: 2, height: 5 + j * 4, background: barColor }} />
                    ))}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: sel ? 700 : 500, color: sel ? 'var(--pine-700)' : 'var(--text-body)' }}>{sr.label}</span>
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-muted)' }}>
              <CIcon path={ci.back} size={14} stroke={2.5} /> Más lento
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--text-muted)' }}>
              Más rápido <CIcon path={ci.arrow} size={14} stroke={2.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- listen button ---------- */
function Listen({ id, text, speak, speakingId, variant = 'secondary', size = 'lg', label = 'Escuchar', fullWidth = false, style = {} }) {
  const active = speakingId === id;
  return (
    <Button variant={active ? 'primary' : variant} size={size} fullWidth={fullWidth} style={style}
      iconLeft={<CIcon path={active ? ci.stop : ci.sound} size={20} fill={active ? 'currentColor' : 'none'} stroke={active ? 0 : 2} />}
      onClick={() => speak(id, text)}>
      {active ? 'Detener' : label}
    </Button>
  );
}

/* ---------- top bar ---------- */
function Topbar({ go, scale, setScale, bp, speak, speakingId, onVoicePicker }) {
  const compact = bp !== 'desktop';
  return (
    <header style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 20 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: compact ? '12px 18px' : '16px 32px', display: 'flex', alignItems: 'center', gap: compact ? 12 : 24 }}>
        <a onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}>
          <img src="./assets/logo-mark-transparent.png" alt="Vida Plena" style={{ height: compact ? 38 : 44 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: compact ? 22 : 26, color: 'var(--pine-700)' }}>Vida Plena</span>
        </a>
        {!compact ? (
          <nav style={{ display: 'flex', gap: 6, marginLeft: 8 }}>
            {Object.entries(CATS).map(([id, c]) => (
              <a key={id} onClick={() => go('category', id)} style={{ cursor: 'pointer', fontSize: 18, fontWeight: 600, color: 'var(--text-body)', padding: '8px 14px', borderRadius: 'var(--radius-sm)' }}>{c.label}</a>
            ))}
          </nav>
        ) : null}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <ScaleControl scale={scale} setScale={setScale} bp={bp} />
          <button onClick={onVoicePicker} aria-label="Elegir voz"
            style={{ height: compact ? 44 : 42, padding: '0 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-default)',
              background: 'var(--surface-card)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
              fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: 'var(--pine-700)', flexShrink: 0 }}>
            <CIcon path={ci.mic} size={20} />
            {bp !== 'mobile' && <span>Voz</span>}
          </button>
        </div>
      </div>
      {compact ? (
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 18px 12px', WebkitOverflowScrolling: 'touch' }}>
          {Object.entries(CATS).map(([id, c]) => (
            <button key={id} onClick={() => go('category', id)} style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', cursor: 'pointer', fontSize: 16, fontWeight: 600, color: 'var(--text-body)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: c.tone }} />{c.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

/* ---------- article card ---------- */
function ArticleCard({ a, go, big, bp, speak, speakingId }) {
  const c = CATS[a.cat];
  const s = SZ[bp];
  return (
    <Card tone="default" padding="none" interactive onClick={() => go('article', a)} style={{ overflow: 'hidden', height: '100%' }}>
      <div style={{ height: big ? (bp === 'mobile' ? 160 : 220) : 150, background: c.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sand-100)' }}>
        <CIcon path={ci[c.icon]} size={big ? 60 : 44} stroke={1.6} />
      </div>
      <div style={{ padding: big ? (bp === 'mobile' ? '22px 22px' : '28px 30px') : '20px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
          <Badge tone="brand">{c.label}</Badge>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, color: 'var(--text-muted)' }}>
            <CIcon path={ci.clock} size={17} /> {a.mins} min de lectura
          </span>
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: big ? s.featTitle : s.cardTitle, lineHeight: 1.15, margin: '0 0 10px', color: 'var(--text-strong)' }}>{a.title}</h3>
        <p style={{ margin: '0 0 16px', fontSize: big ? s.featExc : s.cardExc, color: 'var(--text-body)', lineHeight: 1.6 }}>{a.excerpt}</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} onClick={(e) => e.stopPropagation()}>
          <Button variant="primary" size={big ? 'lg' : 'md'} iconRight={<CIcon path={ci.arrow} size={big ? 20 : 18} />} onClick={() => go('article', a)}>Leer artículo</Button>
          <Listen id={(big ? 'feat-' : 'card-') + a.id} text={articleSpeech(a)} speak={speak} speakingId={speakingId} size={big ? 'lg' : 'md'} />
        </div>
      </div>
    </Card>
  );
}

/* ---------- home ---------- */
function Home({ go, bp, speak, speakingId }) {
  const s = SZ[bp];
  const featured = ARTICLES.find(a => a.cat === 'salud');
  const rest = ['nutricion', 'actividad', 'comunidad'].map(cat => ARTICLES.find(a => a.cat === cat));
  const heroCols = bp === 'desktop' ? '1.6fr 1fr' : '1fr';
  const sideRow = bp === 'tablet' ? 'repeat(2,1fr)' : '1fr';
  const todayCols = bp === 'mobile' ? '1fr' : bp === 'tablet' ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  return (
    <div style={{ maxWidth: s.max, margin: '0 auto', padding: `${s.pad + 12}px ${s.pad}px ${s.pad + 48}px` }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.greet, margin: '0 0 6px', color: 'var(--text-strong)' }}>Hola</h1>
        <p style={{ fontSize: s.lead, color: 'var(--text-body)', margin: 0 }}>Información clara para vivir con vitalidad cada día.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: heroCols, gap: s.gap, alignItems: 'start' }}>
        <ArticleCard a={featured} go={go} big bp={bp} speak={speak} speakingId={speakingId} />
        <div style={{ display: 'grid', gridTemplateColumns: sideRow, gap: s.gap }}>
          <Card tone="brand" padding="lg">
            <Eyebrow tone="accent">Consejo del día</Eyebrow>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: s.tip, lineHeight: 1.35, color: 'var(--sand-100)', margin: '14px 0 20px' }}>{TIP}</p>
            <Listen id="tip" text={TIP} speak={speak} speakingId={speakingId} variant="inverse" label="Escuchar consejo" />
          </Card>
          <Card tone="default" padding="lg">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
              <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--clay-soft)', color: 'var(--clay)', display: 'grid', placeItems: 'center', flexShrink: 0 }}><CIcon path={ci.phone} size={26} /></span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, margin: 0, color: 'var(--text-strong)' }}>¿Necesitas ayuda?</h3>
            </div>
            <p style={{ fontSize: 17, color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 14px' }}>Habla con una persona del equipo de Vida Plena, de lunes a sábado.</p>
            <Button variant="secondary" size="lg" fullWidth iconLeft={<CIcon path={ci.phone} size={20} />}>Llamar ahora</Button>
          </Card>
        </div>
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.sectionH, margin: `${s.pad + 22}px 0 22px`, color: 'var(--text-strong)' }}>Hoy para ti</h2>
      <div style={{ display: 'grid', gridTemplateColumns: todayCols, gap: s.gap }}>
        {rest.map(a => <ArticleCard key={a.id} a={a} go={go} bp={bp} speak={speak} speakingId={speakingId} />)}
      </div>
    </div>
  );
}

/* ---------- article ---------- */
function Article({ article, go, bp, scale, speak, speakingId }) {
  const a = article || ARTICLES[0];
  const c = CATS[a.cat];
  const s = SZ[bp];
  return (
    <div>
      <div style={{ height: bp === 'mobile' ? 170 : 240, background: c.tone, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sand-100)' }}>
        <button onClick={() => go('home')} aria-label="Volver al inicio" style={{ position: 'absolute', top: 20, left: `max(${s.pad}px, calc((100% - 1120px)/2 + ${s.pad}px))`, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 'var(--radius-full)', border: 0, background: 'rgba(251,249,243,0.92)', color: 'var(--pine-700)', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 17 }}>
          <CIcon path={ci.back} size={22} /> Volver
        </button>
        <CIcon path={ci[c.icon]} size={bp === 'mobile' ? 56 : 72} stroke={1.4} />
      </div>
      <article style={{ maxWidth: 760, margin: '0 auto', padding: `${s.pad + 12}px ${s.pad}px ${s.pad + 50}px` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
          <Badge tone="brand">{c.label}</Badge>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 16, color: 'var(--text-muted)' }}><CIcon path={ci.clock} size={18} /> {a.mins} min de lectura</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.artTitle, lineHeight: 1.12, margin: '0 0 22px', color: 'var(--text-strong)' }}>{a.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 22, borderBottom: '1px solid var(--border-subtle)', marginBottom: 26, flexWrap: 'wrap' }}>
          <Avatar name="Dr. Mateo Salas" size={48} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--text-strong)' }}>Dr. Mateo Salas</div>
            <div style={{ fontSize: 15, color: 'var(--text-muted)' }}>Equipo médico de Vida Plena</div>
          </div>
          <div style={{ marginLeft: bp === 'mobile' ? 0 : 'auto', width: bp === 'mobile' ? '100%' : 'auto' }}>
            <Listen id={'art-' + a.id} text={articleSpeech(a)} speak={speak} speakingId={speakingId} variant="accent" label="Escuchar artículo" fullWidth={bp === 'mobile'} />
          </div>
        </div>
        <div style={{ zoom: scale }}>
          {a.body.map((p, i) => (
            <p key={i} style={{ fontSize: s.artBody, lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 22px' }}>{p}</p>
          ))}
          <Card tone="soft" padding="lg" style={{ margin: '8px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, margin: '0 0 16px', color: 'var(--pine-800)' }}>Recuerda</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {(a.points || []).map(t => (
                <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 19, color: 'var(--text-strong)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--leaf)', flexShrink: 0, marginTop: 2 }}><CIcon path={ci.check} size={24} stroke={2.6} /></span>{t}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </article>
    </div>
  );
}

/* ---------- category page ---------- */
function CategoryPage({ cat, go, bp, speak, speakingId }) {
  const s = SZ[bp];
  const c = CATS[cat];
  const articles = ARTICLES.filter(a => a.cat === cat);
  const cols = bp === 'mobile' ? '1fr' : 'repeat(2, 1fr)';
  return (
    <div style={{ maxWidth: s.max, margin: '0 auto', padding: `${s.pad + 12}px ${s.pad}px ${s.pad + 48}px` }}>
      <button onClick={() => go('home')} aria-label="Volver al inicio"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
          padding: '10px 18px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-default)',
          background: 'var(--surface-card)', cursor: 'pointer',
          fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 16, color: 'var(--text-body)' }}>
        <CIcon path={ci.back} size={20} /> Inicio
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
        <span style={{ width: 64, height: 64, borderRadius: 18, background: c.tone,
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
          <CIcon path={ci[c.icon]} size={32} stroke={1.6} />
        </span>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.greet, margin: 0, color: 'var(--text-strong)' }}>{c.label}</h1>
          <p style={{ fontSize: s.lead, color: 'var(--text-body)', margin: '4px 0 0' }}>{articles.length} artículos para ti</p>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: s.gap }}>
        {articles.map(a => <ArticleCard key={a.id} a={a} go={go} bp={bp} speak={speak} speakingId={speakingId} />)}
      </div>
    </div>
  );
}

/* ---------- mayam logo ---------- */
function MayamLogo({ height = 36, onDark = false }) {
  const gray = onDark ? 'rgba(255,255,255,0.82)' : '#4a4f5a';
  const blue = onDark ? '#7fb3f5' : '#2b68d4';
  const w = Math.round(height * 3.6);
  return (
    <svg width={w} height={height} viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg" aria-label="MAYAM — Todo es posible">
      <text x="90" y="33" textAnchor="middle"
        fontFamily="'Century Gothic','Gill Sans MT','Gill Sans',Futura,'Trebuchet MS',sans-serif"
        fontSize="32" fontWeight="300" letterSpacing="6" fill={gray}>
        MA<tspan fill={blue}>Y</tspan>AM
      </text>
      <text x="90" y="48" textAnchor="middle"
        fontFamily="'Century Gothic','Gill Sans MT','Gill Sans',Futura,'Trebuchet MS',sans-serif"
        fontSize="9.5" fontWeight="400" letterSpacing="5.5" fill={blue}>
        TODO ES POSIBLE
      </text>
    </svg>
  );
}

/* ---------- about section ---------- */
function AboutSection({ bp, speak, speakingId }) {
  const s = SZ[bp];
  const pillars = [
    { icon: 'users', color: 'var(--sky)',      bg: 'var(--sky-soft)',
      title: 'Comunidad que cuida',
      text: 'Nadie debería enfrentar la vejez en soledad. Aquí encontrarás información, encuentros y una red que camina contigo.' },
    { icon: 'heart', color: 'var(--pine-700)', bg: 'var(--pine-50)',
      title: 'Dignidad sin límites',
      text: 'Toda persona, sin importar su edad, merece acceder a información clara, útil y presentada con el respeto que merece.' },
    { icon: 'leaf',  color: 'var(--leaf)',     bg: 'var(--leaf-soft)',
      title: 'Vitalidad a tu ritmo',
      text: 'Pequeños hábitos, grandes cambios. Te acompañamos con contenido práctico para vivir cada día con más energía y bienestar.' },
  ];
  const aboutText = [
    'Quiénes somos. Un espacio hecho con propósito, pensado para quienes más experiencia tienen.',
    'Vida Plena Conecta nació de la convicción de que las personas mayores merecen acceso fácil, claro y digno a la información que necesitan para cuidarse, mantenerse activas y seguir disfrutando la vida. Porque la experiencia no caduca: florece.',
    ...pillars.map(p => `${p.title}. ${p.text}`),
    'Longevidad con dignidad no es un privilegio, es un derecho que construimos juntos, cada día, con información, comunidad y amor. — Equipo Vida Plena',
  ].join(' ');
  const isDesktop = bp === 'desktop';
  return (
    <section style={{ background: 'var(--surface-sunken)', borderTop: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: s.max, margin: '0 auto', padding: `${s.pad + 32}px ${s.pad}px ${s.pad + 40}px` }}>
        <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column', alignItems: isDesktop ? 'center' : 'stretch', gap: s.gap, marginBottom: s.pad + 16 }}>
          <div style={{ flex: isDesktop ? 1 : undefined, maxWidth: 680 }}>
            <p style={{ fontSize: s.lead, fontWeight: 350, color: 'var(--gold-600)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 14px' }}>Quiénes somos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: Math.round(s.artTitle * 0.78), lineHeight: 1.15, margin: '14px 0 18px', color: 'var(--text-strong)' }}>
              Un espacio hecho con propósito, pensado para quienes más experiencia tienen
            </h2>
            <p style={{ fontSize: s.lead, color: 'var(--text-body)', lineHeight: 1.75, margin: 0 }}>
              Vida Plena Conecta nació de la convicción de que las personas mayores merecen acceso fácil, claro y digno a la información que necesitan para cuidarse, mantenerse activas y seguir disfrutando la vida. Porque la experiencia no caduca: florece.
            </p>
          </div>
          {speak && (
            <div style={{
              flexShrink: 0,
              marginLeft: isDesktop ? s.gap : 0,
              padding: '24px',
              borderRadius: 22,
              background: 'var(--surface-card)',
              border: '1.5px solid var(--border-subtle)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            }}>
              <Listen id="about-section" text={aboutText} speak={speak} speakingId={speakingId} label="Escuchar sección" size="lg" variant="accent" />
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: bp === 'mobile' ? '1fr' : 'repeat(3, 1fr)', gap: s.gap }}>
          {pillars.map(p => (
            <div key={p.title} style={{ background: 'var(--surface-card)', borderRadius: 18, padding: '28px 24px', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ display: 'inline-flex', width: 54, height: 54, borderRadius: 14, background: p.bg, color: p.color, alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CIcon path={ci[p.icon]} size={28} stroke={1.6} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.cardTitle, margin: 0, color: 'var(--text-strong)' }}>{p.title}</h3>
              <p style={{ fontSize: s.cardExc + 1, color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>

        <blockquote style={{ margin: `${s.pad + 8}px 0 0`, borderLeft: '4px solid var(--gold-500)', paddingLeft: 28, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: s.tip, fontWeight: 500, color: 'var(--pine-700)', lineHeight: 1.5 }}>
          "La longevidad con dignidad no es un privilegio, es un derecho que construimos juntos, cada día, con información, comunidad y amor."
          <span style={{ display: 'block', marginTop: 10, fontStyle: 'normal', fontSize: Math.round(s.tip * 0.65), fontWeight: 600, color: 'var(--text-muted)' }}>— Equipo Vida Plena</span>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer({ bp }) {
  const s = SZ[bp];
  return (
    <footer>
      <div style={{ background: 'var(--pine-800)', color: 'rgba(255,255,255,0.85)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: `${s.pad + 16}px ${s.pad}px ${s.pad + 8}px`, display: 'grid', gridTemplateColumns: bp !== 'mobile' ? '1fr 1fr' : '1fr', gap: s.gap + 12, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="./assets/logo-mark-transparent.png" alt="Vida Plena" style={{ height: 44 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: 'var(--sand-100)' }}>Vida Plena</span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: '0 0 24px', maxWidth: 320 }}>
              Bienestar para toda la vida. Información accesible, comunidad activa y cuidado a tu medida.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}>DESARROLLADO POR</span>
              <MayamLogo height={30} onDark />
            </div>
          </div>

          <div style={{ borderLeft: bp !== 'mobile' ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: bp !== 'mobile' ? s.gap + 12 : 0, borderTop: bp === 'mobile' ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingTop: bp === 'mobile' ? 24 : 0 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, margin: '0 0 12px', color: 'rgba(255,255,255,0.9)' }}>Aviso de Privacidad</h3>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', margin: '0 0 14px' }}>
              Vida Plena Conecta, operado por <strong style={{ color: 'rgba(255,255,255,0.8)' }}>MAYAM</strong>, trata tus datos personales con apego a la <a href="./AvisoDePrivacidad-VidaPlena.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</a>.
            </p>
            
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: `14px ${s.pad}px`, textAlign: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} MAYAM · Vida Plena Conecta. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Home, Article, Topbar, VoicePicker, useBreakpoint, SCALE_LIMITS, selectVoices, SPEECH_RATES, AboutSection, Footer, CategoryPage });

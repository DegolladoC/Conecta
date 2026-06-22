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
};

const CATS = {
  salud: { label: 'Salud', tone: 'var(--pine-700)', icon: 'heart' },
  nutricion: { label: 'Nutrición', tone: 'var(--gold-600)', icon: 'leaf' },
  actividad: { label: 'Actividad', tone: 'var(--leaf)', icon: 'walk' },
  comunidad: { label: 'Comunidad', tone: 'var(--sky)', icon: 'users' },
};

const ARTICLES = [
  { id: 'a1', cat: 'salud', title: 'Cómo cuidar tu presión arterial cada día', mins: 6,
    excerpt: 'Pasos sencillos para medir y mantener tu presión en casa, sin complicaciones.',
    body: ['La presión arterial nos dice cuánto esfuerzo hace tu corazón para mover la sangre. Vigilarla es una de las formas más simples de cuidar tu salud.',
      'Mídela siempre a la misma hora, sentado y relajado, con el brazo apoyado sobre la mesa. Anota el resultado en una libreta o en la aplicación.',
      'Camina treinta minutos al día, reduce la sal y bebe agua. Si los números suben de forma seguida, habla con tu médico sin esperar.'],
    points: ['Mide a la misma hora cada día', 'Camina treinta minutos', 'Reduce la sal en tus comidas'] },
  { id: 'a2', cat: 'nutricion', title: 'Comidas fáciles y nutritivas para la semana', mins: 5,
    excerpt: 'Ideas simples, económicas y buenas para tu cuerpo, listas en pocos minutos.',
    body: ['Comer bien no tiene que ser complicado ni caro. Con unos pocos ingredientes frescos puedes preparar platos completos y sabrosos.',
      'Llena la mitad de tu plato con verduras, un cuarto con proteína (huevo, pescado o legumbres) y el resto con un cereal integral.',
      'Cocina de más y guarda raciones en la nevera. Así siempre tendrás algo bueno listo para calentar.'],
    points: ['Media de verduras en cada plato', 'Cocina de más y guarda raciones', 'Bebe agua en lugar de refrescos'] },
  { id: 'a3', cat: 'actividad', title: 'Ejercicios suaves para mantenerte ágil', mins: 4,
    excerpt: 'Movimientos seguros que puedes hacer en casa, sentado o de pie.',
    body: ['Mantenerte en movimiento conserva tu fuerza y tu equilibrio. No hace falta ir al gimnasio: tu salón es suficiente.',
      'Empieza sentado: estira los brazos, gira los tobillos y levanta las rodillas con suavidad. Repite cada ejercicio diez veces.',
      'Si te sientes seguro, ponte de pie apoyado en una silla y haz pequeñas sentadillas. Para si notas dolor o mareo.'],
    points: ['Calienta sentado primero', 'Apóyate en una silla firme', 'Para si notas dolor o mareo'] },
  { id: 'a4', cat: 'comunidad', title: 'Encuentros de Vida Plena cerca de ti', mins: 3,
    excerpt: 'Conoce a otras personas, comparte y aprende en grupo. Esta semana hay tres encuentros.',
    body: ['Compartir con otras personas es tan importante para la salud como caminar o comer bien. La compañía nos cuida.',
      'Esta semana hay tres encuentros gratuitos: un paseo por el parque el martes, un taller de cocina el jueves y una charla de salud el sábado.',
      'Apúntate desde la aplicación o llámanos. Te guardamos un sitio y, si lo necesitas, te ayudamos con el transporte.'],
    points: ['Martes: paseo en el parque', 'Jueves: taller de cocina', 'Sábado: charla de salud'] },
];

const TIP = 'Bebe un vaso de agua al despertar. Tu cuerpo lo agradece después de toda la noche.';

function articleSpeech(a) {
  return [a.title, ...a.body, 'Recuerda: ' + (a.points || []).join('. ')].join('. ');
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
function Topbar({ go, scale, setScale, bp, speak, speakingId }) {
  const compact = bp !== 'desktop';
  return (
    <header style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 20 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: compact ? '12px 18px' : '16px 32px', display: 'flex', alignItems: 'center', gap: compact ? 12 : 24 }}>
        <a onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}>
          <img src="./assets/logo-mark-transparent.png" alt="Vida Plena" style={{ height: compact ? 38 : 44 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: compact ? 22 : 26, color: 'var(--pine-700)' }}>Conecta</span>
        </a>
        {!compact ? (
          <nav style={{ display: 'flex', gap: 6, marginLeft: 8 }}>
            {Object.entries(CATS).map(([id, c]) => (
              <a key={id} onClick={() => go('home')} style={{ cursor: 'pointer', fontSize: 18, fontWeight: 600, color: 'var(--text-body)', padding: '8px 14px', borderRadius: 'var(--radius-sm)' }}>{c.label}</a>
            ))}
          </nav>
        ) : null}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <ScaleControl scale={scale} setScale={setScale} bp={bp} />
          {bp !== 'mobile' ? <Avatar name="Carmen Ruiz" size={compact ? 42 : 46} ring /> : null}
        </div>
      </div>
      {compact ? (
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 18px 12px', WebkitOverflowScrolling: 'touch' }}>
          {Object.entries(CATS).map(([id, c]) => (
            <button key={id} onClick={() => go('home')} style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', cursor: 'pointer', fontSize: 16, fontWeight: 600, color: 'var(--text-body)' }}>
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
        <p style={{ margin: 0, fontSize: big ? s.featExc : s.cardExc, color: 'var(--text-body)', lineHeight: 1.6 }}>{a.excerpt}</p>
        {big ? (
          <div style={{ display: 'flex', gap: 12, marginTop: 22, flexWrap: 'wrap' }} onClick={(e) => e.stopPropagation()}>
            <Button variant="primary" size="lg" iconRight={<CIcon path={ci.arrow} size={20} />} onClick={() => go('article', a)}>Leer artículo</Button>
            <Listen id={'feat-' + a.id} text={articleSpeech(a)} speak={speak} speakingId={speakingId} />
          </div>
        ) : null}
      </div>
    </Card>
  );
}

/* ---------- home ---------- */
function Home({ go, bp, speak, speakingId }) {
  const s = SZ[bp];
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  const heroCols = bp === 'desktop' ? '1.6fr 1fr' : '1fr';
  const sideRow = bp === 'tablet' ? 'repeat(2,1fr)' : '1fr';
  const todayCols = bp === 'mobile' ? '1fr' : bp === 'tablet' ? 'repeat(2,1fr)' : 'repeat(3,1fr)';
  return (
    <div style={{ maxWidth: s.max, margin: '0 auto', padding: `${s.pad + 12}px ${s.pad}px ${s.pad + 48}px` }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: s.greet, margin: '0 0 6px', color: 'var(--text-strong)' }}>Hola, Carmen</h1>
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

Object.assign(window, { Home, Article, Topbar, useBreakpoint, SCALE_LIMITS });

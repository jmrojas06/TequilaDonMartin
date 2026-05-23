import { motion, AnimatePresence, useTransform, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { CORE_TRILOGY } from '../data';
import { MapPin, Eye, Wind, Sparkles, ArrowRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import TequilaLogo from './TequilaLogo';
import InteractiveBottle from './InteractiveBottle';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ProductNotesAccordion({ product }: { product: typeof CORE_TRILOGY[0] }) {
  const [tab, setTab] = useState<'visual' | 'aroma' | 'taste'>('visual');
  const tabs = [
    { key: 'visual' as const, label: 'Vista', Icon: Eye },
    { key: 'aroma' as const, label: 'Olfato', Icon: Wind },
    { key: 'taste' as const, label: 'Gusto', Icon: Sparkles },
  ];

  return (
    <div className="mt-4 border border-brand-gold/20 rounded-xl bg-white/40 overflow-hidden shadow-sm">
      <div className="grid grid-cols-3 border-b border-brand-gold/15 bg-white/20">
        {tabs.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`py-3 text-[10px] font-mono uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              tab === key
                ? 'bg-white text-brand-gold-dark font-medium border-b border-brand-gold-dark'
                : 'text-neutral-500 hover:text-charcoal hover:bg-white/10'
            }`}
          >
            <Icon className="h-3 w-3" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="p-4 bg-white min-h-[100px] flex flex-col justify-center">
        {tab === 'visual' && (
          <motion.div key="v" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="text-xs text-slate-600 leading-relaxed font-light">{product.visualNotes}</p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Color:</span>
              <span className="inline-block w-3.5 h-3.5 rounded-full border border-neutral-200"
                style={{ backgroundColor: product.colorHex === '#fbfbfb' ? '#e8e8e8' : product.colorHex }} />
            </div>
          </motion.div>
        )}
        {tab === 'aroma' && (
          <motion.div key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ul className="space-y-1.5">
              {product.aromaNotes.map((n, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 bg-brand-gold-dark rounded-full mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-600 font-light">{n}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {tab === 'taste' && (
          <motion.div key="t" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ul className="space-y-1.5">
              {product.tasteNotes.map((n, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 text-brand-gold-dark shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 font-light">{n}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
const BG_COLORS = ['#edf4f8', '#faf3e2', '#faf7f3'] as const;

export default function TrilogySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLg, setIsLg] = useState(true);

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Gold line at top fills as you scroll
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Thresholds: 3 equal bands → 0-0.33 / 0.33-0.66 / 0.66-1.0
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.33 ? 0 : v < 0.66 ? 1 : 2;
    if (next !== activeIndex) setActiveIndex(next);
  });

  // Scroll to center of a given slide's scroll band
  const goTo = (idx: number) => {
    if (!sectionRef.current) return;
    const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const range = sectionRef.current.offsetHeight - window.innerHeight;
    // Visual centers of each band: 16%, 50%, 84%
    const frac = [0.16, 0.50, 0.84][idx];
    window.scrollTo({ top: top + frac * range, behavior: 'smooth' });
  };

  // Per-bottle carousel position based on diff from activeIndex
  const getPos = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff < -1) diff += 3;
    if (diff > 1) diff -= 3;

    const offset = isLg ? 148 : 68;
    const scaleSide = isLg ? 0.68 : 0.56;
    const scaleCenter = isLg ? 1.06 : 0.88;

    if (diff === -1) return { x: -offset, y: isLg ? 24 : 12, scale: scaleSide, opacity: 0.28, zIndex: 10, rotate: isLg ? -13 : -9 };
    if (diff === 1)  return { x:  offset, y: isLg ? 24 : 12, scale: scaleSide, opacity: 0.28, zIndex: 10, rotate: isLg ?  13 :  9 };
    return               { x: 0, y: 0, scale: scaleCenter, opacity: 1, zIndex: 30, rotate: 0 };
  };

  const active = CORE_TRILOGY[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="trilogia"
      className="relative h-[300vh] border-t border-brand-gold/20"
    >
      {/* ── Sticky viewport — everything inside stays locked ── */}
      <motion.div
        className="sticky top-0 w-full h-screen flex flex-col overflow-hidden bg-[#edf4f8]"
        animate={{ backgroundColor: BG_COLORS[activeIndex] }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-px bg-gradient-to-r from-brand-gold/30 via-brand-gold to-brand-gold/30 z-50"
          style={{ width: progressWidth }}
        />

        {/* Watermark crests */}
        <div className="absolute right-0 top-1/4 opacity-[0.015] pointer-events-none select-none translate-x-1/3">
          <TequilaLogo showText={false} variant="gold" className="h-[580px] w-[580px] shrink-0 animate-spin" style={{ animationDuration: '240s' }} />
        </div>
        <div className="absolute left-0 bottom-10 opacity-[0.012] pointer-events-none select-none -translate-x-1/3">
          <TequilaLogo showText={false} variant="gold" className="h-[460px] w-[460px] shrink-0 animate-spin" style={{ animationDuration: '180s', animationDirection: 'reverse' }} />
        </div>

        {/* Vertical slide indicator — right edge */}
        <div className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3 z-20 pointer-events-none select-none">
          {CORE_TRILOGY.map((p, idx) => (
            <div key={p.id} className="flex items-center gap-2">
              <motion.span
                className="text-[7px] font-mono uppercase tracking-[0.18em] text-right hidden sm:block"
                animate={{ color: idx === activeIndex ? '#a3845b' : 'rgba(163,132,91,0.22)', x: idx === activeIndex ? 0 : 6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {p.name}
              </motion.span>
              <motion.div
                className="rounded-full"
                animate={{ width: idx === activeIndex ? 20 : 5, height: 1, backgroundColor: idx === activeIndex ? '#a3845b' : 'rgba(163,132,91,0.22)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                className="rounded-full flex-shrink-0"
                animate={{ width: idx === activeIndex ? 5 : 3, height: idx === activeIndex ? 5 : 3, backgroundColor: idx === activeIndex ? '#a3845b' : 'rgba(163,132,91,0.2)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          ))}
        </div>

        {/* ── Content shell ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full h-full flex flex-col justify-between py-5 lg:py-8 relative z-10">

          {/* Header */}
          <div className="shrink-0 text-center select-none">
            <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] text-[#a3845b] block mb-1 font-medium">
              Colección Fundadora Don Martin
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-charcoal font-light leading-none">
              Nuestra Cava de Origen
            </h2>
            <div className="h-[0.8px] w-14 bg-brand-gold/45 mx-auto mt-2" />
          </div>

          {/* ── Main grid ── */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center min-h-0 py-3">

            {/* ── LEFT: Carousel Stage ── */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center justify-center h-full select-none">

              {/* Stage container — all 3 bottles are absolutely centered here */}
              <div className="relative w-full max-w-[500px] h-[560px] sm:h-[680px] lg:h-[820px] mx-auto">

                {/* Ambient backlight glow — color follows active bottle */}
                <motion.div
                  className="absolute inset-0 rounded-full filter blur-3xl opacity-25 pointer-events-none"
                  animate={{ backgroundColor: active.colorHex }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Platform shadow */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-b from-[#dfc8a5]/30 to-transparent border-t border-[#dfc8a5]/30 rounded-full filter blur-[2px] pointer-events-none" />

                {/* 3 bottles — all centered in the stage, positioned by diff */}
                {CORE_TRILOGY.map((product, idx) => {
                  const pos = getPos(idx);
                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={product.id}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: pos.zIndex }}
                      animate={{ x: pos.x, y: pos.y, scale: pos.scale, rotate: pos.rotate, opacity: pos.opacity }}
                      transition={{ type: 'spring', stiffness: 95, damping: 18, mass: 1.1 }}
                      onClick={() => !isActive && goTo(idx)}
                    >
                      <div className={`transition-all duration-500 ${!isActive ? 'blur-[1.5px] brightness-75' : ''}`}>
                        <motion.div
                          className="scale-55 sm:scale-70 lg:scale-100 origin-center"
                          animate={{ y: [0, -7, 0], rotate: [0, 0.35, -0.35, 0] }}
                          transition={{ duration: 5 + idx * 0.9, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <InteractiveBottle id={product.id} name={product.type} colorHex={product.colorHex} />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Pill tab selector */}
              <div className="flex items-center gap-1 mt-3 p-1 bg-white/60 backdrop-blur-md rounded-full border border-brand-gold/20 shadow-sm shrink-0">
                {CORE_TRILOGY.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => goTo(idx)}
                    className={`px-3 sm:px-4 py-1.5 text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.15em] rounded-full transition-all duration-400 cursor-pointer ${
                      idx === activeIndex
                        ? 'bg-charcoal text-[#fbf8f5] shadow-sm font-medium'
                        : 'text-neutral-500 hover:text-charcoal hover:bg-neutral-100/60'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Info + Price ── */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-3 min-h-0">

              {/* Info card — crossfades on bottle change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/75 backdrop-blur-md border border-brand-gold/20 rounded-2xl shadow-xl p-4 sm:p-5 overflow-y-auto max-h-[30vh] lg:max-h-[58vh] custom-scrollbar"
                >
                  {/* Index label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-serif text-3xl font-light text-brand-gold-dark italic leading-none">0{activeIndex + 1}</span>
                    <div className="h-px w-6 bg-brand-gold/30" />
                    <span className="font-mono text-[8px] tracking-widest text-[#a3845b] uppercase font-semibold">100% Puro Agave</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-light leading-tight mb-0.5">
                    Don Martin <span className="text-brand-gold-dark italic">{active.name}</span>
                  </h3>
                  <p className="text-[10.5px] font-sans italic text-[#52504b] tracking-wide mb-3">"{active.tagline}"</p>

                  {/* Description */}
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed mb-3">{active.description}</p>

                  {/* Spec pills */}
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {[`Graduación: ${active.abv}`, `Añejamiento: ${active.aging}`].map(spec => (
                      <div key={spec} className="bg-[#faf8f5]/90 border border-brand-gold/15 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <div className="h-1 w-1 rounded-full bg-brand-gold-dark" />
                        <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-wider">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tasting notes accordion */}
                  <ProductNotesAccordion product={active} />

                  {/* Origin */}
                  <div className="flex items-start gap-2 mt-3 p-2.5 bg-brand-gold/[0.03] border border-brand-gold/10 rounded-xl">
                    <MapPin className="h-4 w-4 text-brand-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono text-[8.5px] font-semibold tracking-wider text-charcoal uppercase mb-0.5">Procedencia</p>
                      <p className="text-[9px] font-mono text-brand-gold-dark uppercase tracking-wider">{active.origin}</p>
                      <p className="text-[9.5px] font-sans font-light text-slate-500 mt-0.5 leading-relaxed">
                        Cosechado en parcelas de más de 2,000m de altitud, maduración mínima 7 años.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Price + Link — also crossfades */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`price-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="flex items-stretch gap-3 shrink-0"
                >
                  <div className="flex-1 bg-white/60 backdrop-blur-md border border-brand-gold/15 rounded-xl px-4 py-2.5">
                    <p className="font-mono text-[7.5px] uppercase tracking-widest text-brand-gold-dark">Precio sugerido</p>
                    <p className="font-serif text-xl text-charcoal font-light leading-tight">{active.priceCOP}</p>
                    <p className="font-mono text-[8px] text-neutral-400">{active.priceUSD}</p>
                  </div>
                  <Link
                    to={`/tequila/${active.id}`}
                    className="flex items-center gap-2 px-4 bg-charcoal text-bone text-[9px] font-mono uppercase tracking-widest rounded-xl hover:bg-brand-gold-dark transition-colors duration-300 shrink-0 group"
                  >
                    <span>Ver detalles</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Footer hint */}
          <div className="shrink-0 text-center font-mono text-[7.5px] tracking-[0.2em] text-[#c5a880] uppercase select-none border-t border-brand-gold/10 pt-2">
            • Desplaza para descubrir los tres tequilas Don Martin •
          </div>
        </div>
      </motion.div>
    </section>
  );
}

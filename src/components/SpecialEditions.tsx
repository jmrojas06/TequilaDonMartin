import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { SPECIAL_EDITIONS } from '../data';
import { Sparkles, Heart, Check } from 'lucide-react';

import carbonImg from '../assets/images/anejo_cristalino_carbon.png';
import flamingoImg from '../assets/images/blanco_rosado_flamingo.png';
import doradoImg from '../assets/images/blanco_hojuelas_dorado.png';
import trilogiaImg from '../assets/images/trilogia.png';

const SPECIAL_IMAGES: Record<string, string> = {
  'carbon': carbonImg,
  'flamingo': flamingoImg,
  'dorado': doradoImg,
};

function SpecialBottlePhoto({
  id,
  glowColor,
}: {
  id: string;
  glowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [5, -5]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width * 400);
    y.set((e.clientY - rect.top) / rect.height * 400);
  };
  const handleMouseLeave = () => { x.set(200); y.set(200); };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-end justify-center h-[580px] w-auto max-w-[320px] min-w-[200px] mx-auto cursor-pointer"
      style={{ perspective: 1200 }}
    >
      {/* Ground shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full bg-neutral-900/25 blur-xl pointer-events-none" />
      {/* Color glow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-12 rounded-full opacity-25 blur-2xl pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />
      <motion.div
        className="relative h-full w-full flex items-end justify-center"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <img
          src={SPECIAL_IMAGES[id]}
          alt=""
          className="h-full w-auto object-contain select-none pointer-events-none mix-blend-multiply"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function SpecialEditions() {
  // Preset styles specifically tailored to each special edition block
  const editionDesigns = {
    carbon: {
      liquidGrad: 'linear-gradient(to bottom, rgba(30, 30, 30, 0.95), rgba(10, 10, 10, 0.99))',
      glowColor: '#c5a880',
      isDark: true,
      hasGoldFlakes: false,
      bannerColor: 'bg-charcoal text-white',
      accentBg: 'bg-[#faf8f5]'
    },
    flamingo: {
      liquidGrad: 'linear-gradient(to bottom, rgba(244, 63, 94, 0.25), rgba(225, 29, 72, 0.65))',
      glowColor: '#fecdd3',
      isDark: false,
      hasGoldFlakes: false,
      bannerColor: 'bg-rose-50 text-rose-700 border-rose-100',
      accentBg: 'bg-rose-50/30'
    },
    dorado: {
      liquidGrad: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.15), rgba(12, 38, 28, 0.45))',
      glowColor: '#10b981',
      isDark: false,
      hasGoldFlakes: true,
      bannerColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      accentBg: 'bg-emerald-50/30'
    }
  };

  return (
    <section id="ediciones" className="py-24 bg-bone border-y border-brand-gold/25 relative overflow-hidden">
      
      {/* Dynamic graphic radial glow in the background */}
      <div className="absolute left-10 top-1/3 h-96 w-96 bg-brand-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs tracking-[0.3em] font-mono uppercase text-brand-gold-dark mb-2 block">
            Colección Limitada
          </h2>
          <h3 className="text-3.5xl md:text-5xl font-serif tracking-tight font-light text-charcoal">
            Ediciones Con Causa Colombia
          </h3>
          <div className="h-px w-24 bg-brand-gold/40 mx-auto my-6" />
          <p className="text-slate-600 font-sans font-light text-sm md:text-base leading-relaxed">
            Nuestros licores especiales de tirada reducida. Creados meticulosamente para deleitar paladares y rascacielos artísticos, actuando de forma transparente como catalizadores de progreso social, becas y redes de apoyo en Colombia.
          </p>
        </div>

        {/* 1. Introductory Portfolio Card: Show the original /image.png */}
        <motion.div 
          className="relative max-w-5xl mx-auto rounded-2xl border border-brand-gold/25 bg-white p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-28 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Shimmer reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/[0.02] to-transparent pointer-events-none" />

          {/* Left Column of Introduction: Details */}
          <div className="md:w-1/2 space-y-4 relative z-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold-dark font-semibold">
              Trilogía Especial Con Causa
            </span>
            <h4 className="font-serif text-3xl font-light text-charcoal tracking-wide">
              La Belleza de la Transformación
            </h4>
            <p className="text-xs font-sans font-light text-slate-500 leading-relaxed">
              Cada una de nuestras tres botellas de colección conmemora un valor fundamental del porvenir colectivo colombiano. A través del Fondo Social Don Martin, las utilidades netas auditadas de cada lote apoyan directamente a cooperativas de pequeños agricultores, becas de inclusión LGBTQI+, y programas educativos para comunidades afro en el Pacífico.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark border border-brand-gold/20 rounded-full font-mono text-[9.5px] uppercase">
              <span>★ 100% Sin Fines de Lucro Corporativo</span>
            </div>
          </div>

          {/* Right Column: User's Premium Asset Photography */}
          <div className="md:w-1/2 flex items-center justify-center relative z-10">
            <div className="p-3 bg-[#faf8f5] border border-brand-gold/20 rounded-xl max-w-sm w-full">
              <img
                src={trilogiaImg}
                alt="Don Martin Ediciones Limitadas de Lujo"
                className="w-full h-auto object-contain rounded-lg hover:scale-[1.03] transition-transform duration-700"
              />
              <span className="block text-[8.5px] font-mono text-center text-neutral-400 uppercase tracking-widest mt-2 leading-none">
                Fotografía Oficial • Colección de Causa Colombia
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. Scroll Showcase of Limited Editions */}
        <div className="space-y-32">
          {SPECIAL_EDITIONS.map((edition, index) => {
            const isEven = index % 2 === 0;
            const design = editionDesigns[edition.id as 'carbon' | 'flamingo' | 'dorado'] || editionDesigns.carbon;

            return (
              <motion.div
                key={edition.id}
                id={`edicion-${edition.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-28"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Image / Interactive Mockup Column */}
                <div className={`lg:col-span-5 flex flex-col items-center justify-center ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    
                    <SpecialBottlePhoto
                      id={edition.id}
                      glowColor={design.glowColor}
                    />

                    {/* Faded Background Text */}
                    <div className="absolute inset-x-0 -bottom-3 text-center pointer-events-none select-none z-0">
                      <span className="font-serif text-5xl md:text-7xl font-extrabold text-brand-gold/10 uppercase tracking-widest leading-none block">
                        Limitada
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description and Impact Details Column */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Category Banner */}
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-light text-brand-gold-dark italic">
                      0{index + 4}
                    </span>
                    <div className="h-[1px] w-12 bg-brand-gold/30" />
                    <span className="font-mono text-[9px] tracking-widest text-[#a3845b] uppercase font-semibold">
                      Edición Especial Limitada
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3.5xl md:text-4.5xl font-serif text-charcoal tracking-wide font-light flex flex-col md:flex-row md:items-baseline gap-2 leading-tight">
                      <span>Don Martin</span>
                      <span className="text-brand-gold-dark italic font-normal">{edition.name}</span>
                    </h3>
                    <p className="text-xs font-sans italic text-[#52504b] mt-1 block">
                      "{edition.tagline}"
                    </p>
                  </div>

                  <p className="text-sm font-sans font-light text-slate-600 leading-relaxed">
                    {edition.details}
                  </p>

                  {/* Bottle and design detailed highlight card */}
                  <div className="p-5 bg-white border border-brand-gold/20 rounded-xl shadow-xs">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-brand-gold-dark mt-0.5 shrink-0" />
                      <div>
                        <h4 className="font-serif text-sm text-charcoal tracking-wide font-medium">El Arte del Envase</h4>
                        <p className="text-xs text-slate-600 font-light leading-relaxed mt-1">
                          {edition.bottleTheme}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Micro Impact Box */}
                  <div className="p-5 bg-brand-gold/5 border border-brand-gold/20 rounded-xl shadow-xs">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-rose-600 mt-0.5 shrink-0 animate-pulse" />
                      <div>
                        <h4 className="font-serif text-sm tracking-wide text-rose-700 font-medium">Impacto Social Directo</h4>
                        <p className="text-xs text-slate-600 font-light mt-1 leading-relaxed">
                          {edition.socialImpactContext}
                        </p>
                        <div className="inline-flex gap-1.5 items-center mt-3 text-[10px] font-mono uppercase bg-rose-50 text-rose-600 border border-rose-200 px-2.5 py-1 rounded-full">
                          <span>Fondo Social Don Martin</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Taste and sensory bullets */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-3 block">
                      Notas de Cata Exclusivas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {edition.tastingHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3.5 bg-white border border-brand-gold/15 rounded-lg shadow-2xs"
                        >
                          <div className="h-4 w-4 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-brand-gold-dark" />
                          </div>
                          <span className="font-sans text-xs font-light text-[#3a3834]">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

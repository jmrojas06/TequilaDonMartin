import { motion, useMotionValue, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import logoImg from '../assets/images/logo.png';
import blancoImg from '../assets/images/blanco.png';
import anejoImg from '../assets/images/anejo_reposado.png';
import cristalinoImg from '../assets/images/anejo_cristalino.png';
import agaveImg from '../assets/images/jalisco_agave_fields_1779559317323.png';

const HERO_BOTTLE_IMAGES: Record<string, string> = {
  'blanco': blancoImg,
  'anejo': anejoImg,
  'cristalino-anejo': cristalinoImg,
};

function HeroBottle({ id, colorHex }: { id: string; colorHex: string }) {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [8, -8]);
  const rotateY = useTransform(x, [0, 400], [-8, 8]);

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
      onClick={() => navigate(`/tequila/${id}`)}
      className="relative flex items-end justify-center h-[340px] sm:h-[500px] md:h-[660px] w-full cursor-pointer group"
      style={{ perspective: 1000 }}
    >
      {/* Fake ground shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-full bg-neutral-900/30 blur-xl pointer-events-none transition-all duration-500 group-hover:opacity-60 group-hover:scale-110" />

      {/* Color ambient glow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-10 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ backgroundColor: colorHex }}
      />

      <motion.div
        className="relative h-full w-full flex items-end justify-center transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', damping: 18, stiffness: 180 }}
      >
        <img
          src={HERO_BOTTLE_IMAGES[id]}
          alt=""
          className="h-full w-auto object-contain select-none pointer-events-none mix-blend-multiply"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const bottleSpecs = [
    {
      id: "blanco",
      name: "Blanco",
      title: "ESENCIA PURA",
      desc: "Agave azul en su expresión más honesta. Notas cítricas y de pimienta blanca.",
      colorHex: "#c5a880"
    },
    {
      id: "anejo",
      name: "Añejo",
      title: "PACIENCIA MAESTRA",
      desc: "Reposo distinguido en roble noble. Vainilla, chocolate negro y un final largo y ahumado.",
      colorHex: "#dca954"
    },
    {
      id: "cristalino-anejo",
      name: "Cristalino",
      title: "EXTREMA FINURA",
      desc: "La profundidad de nuestro añejo filtrada lentamente para una claridad sobresaliente.",
      colorHex: "#dfcbb5"
    }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between [overflow-x:clip] bg-bone pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle background lines */}
      <div className="absolute inset-y-0 left-1/10 w-px bg-brand-gold/[0.04] pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-1/10 w-px bg-brand-gold/[0.04] pointer-events-none hidden lg:block" />

      {/* 1. Compact Brand Header — logo flanking title, one tight line */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto mb-3 shrink-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <img
            src={logoImg}
            alt=""
            className="h-9 w-9 sm:h-11 sm:w-11 mix-blend-multiply opacity-80 shrink-0 select-none"
            draggable={false}
          />
          <h1
            id="hero-title"
            className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-[0.22em] text-charcoal uppercase leading-none"
          >
            Carácter de Campo
          </h1>
          <img
            src={logoImg}
            alt=""
            className="h-9 w-9 sm:h-11 sm:w-11 mix-blend-multiply opacity-80 shrink-0 select-none"
            draggable={false}
          />
        </div>
        <p className="text-[9px] sm:text-[11px] font-mono tracking-[0.35em] text-brand-gold-dark uppercase mt-2 block">
          Destilado Noble · Altos de Jalisco · Exclusivo Colombia
        </p>
      </motion.div>

      {/* 2. CORE COMPOSITION: photo band cuts through the MIDDLE of the Blanco bottle */}
      {/* Band height 68% of composition — its left edge lands right at mid-bottle on the Blanco (left col) */}
      <div className="relative w-full h-[520px] sm:h-[660px] md:h-[840px] my-3 flex items-end justify-center overflow-visible">

        {/* Diagonal photo band — tall, pierced through by the bottles */}
        <div
          className="absolute inset-x-0 top-0 h-[68%] overflow-hidden bg-neutral-950 border-y border-brand-gold/30 z-10 shadow-xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}
        >
          {/* Jalisco Agave Fields */}
          <img
            src={agaveImg}
            alt="Campos de Agave Don Martin"
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity scale-105 filter saturate-40 blur-[0.2px] pointer-events-none select-none"
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-900/40 to-neutral-950/85" />

          {/* DON MARTIN watermark */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none opacity-20 z-0">
            <span className="font-serif text-3.5xl sm:text-6xl md:text-8xl lg:text-9.5xl font-extrabold text-white tracking-[0.3em] uppercase block">
              DON MARTIN
            </span>
          </div>
        </div>

        {/* Bottles — bottom-aligned, z-20 so they pierce through the diagonal cut */}
        <div className="relative z-20 max-w-4xl mx-auto w-full grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 items-end justify-items-center px-2">
          {bottleSpecs.map((spec, idx) => (
            <motion.div
              key={spec.id}
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + idx * 0.18, duration: 1, ease: "easeOut" }}
            >
              <HeroBottle id={spec.id} colorHex={spec.colorHex} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. UNDER BOTTLE SUMMARY CARDS: Sensory descriptors and smooth scroll link */}
      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8 mt-2">
        {bottleSpecs.map((spec) => (
          <div 
            key={spec.id}
            onClick={() => {
              const element = document.getElementById(`producto-${spec.id}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group flex flex-col items-center text-center p-4 bg-white/40 border border-brand-gold/15 rounded-xl cursor-pointer hover:bg-white hover:border-brand-gold-dark/30 hover:shadow-md transition-all duration-300"
          >
            <span className="font-mono text-[9px] tracking-[0.18em] text-brand-gold-dark uppercase font-semibold mb-1">
              {spec.title}
            </span>
            <h4 className="font-serif text-lg text-charcoal font-light mb-1.5 block">
              Don Martin • <span className="italic">{spec.name}</span>
            </h4>
            <p className="font-sans font-light text-[11px] text-[#52504b] leading-relaxed max-w-[240px]">
              {spec.desc}
            </p>
            <span className="text-[9px] font-mono text-neutral-400 group-hover:text-brand-gold-dark mt-2.5 transition-colors uppercase tracking-widest">
              Ver Notas de Cata →
            </span>
          </div>
        ))}
      </div>

      {/* 4. HIGH-END EDITORIAL COMPACT FOOTER REGULATORY PANEL */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-brand-gold/25 pt-6 mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-center md:text-left">
        
        {/* Social Cause Callout block */}
        <div className="md:col-span-5">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-charcoal uppercase block mb-1">
            Modelo de Reciprocidad y Causa
          </span>
          <p className="font-serif italic text-xs text-[#52504b] leading-relaxed max-w-sm">
            Nuestros lotes financian de forma íntegra proyectos de alto impacto social, ecológico y educativo en el territorio rural colombiano.
          </p>
        </div>

        {/* Division Pin */}
        <div className="md:col-span-3 text-center">
          <div className="inline-flex items-center gap-1.5 font-sans text-[9px] tracking-[0.25em] text-[#706c64] uppercase font-light">
            <MapPin className="h-2.5 w-2.5 text-brand-gold-dark" />
            <span>Altos de Jalisco • Colombia</span>
          </div>
        </div>

        {/* Official Warnings and Instagram */}
        <div className="md:col-span-4 text-center md:text-right space-y-1">
          <span className="block font-mono text-[9px] tracking-widest text-brand-gold-dark font-semibold uppercase">
            @donmartinofficial
          </span>
          <span className="block font-sans text-[8.5px] font-semibold leading-tight text-neutral-400 max-w-[320px] md:ml-auto">
            EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD. PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.
          </span>
        </div>
      </div>
    </section>
  );
}

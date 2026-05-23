import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Eye, Wind, Sparkles, ShoppingBag, ExternalLink, Store } from 'lucide-react';
import { CORE_TRILOGY } from '../data';
import InteractiveBottle from './InteractiveBottle';
import TequilaLogo from './TequilaLogo';

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TequilaDetail() {
  const { id } = useParams<{ id: string }>();
  const product = CORE_TRILOGY.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-bone flex flex-col items-center justify-center gap-4">
        <TequilaLogo showText={true} variant="gold" className="h-16 w-16" />
        <p className="font-serif text-2xl text-charcoal">Tequila no encontrado</p>
        <Link to="/" className="font-mono text-[10px] uppercase tracking-widest text-brand-gold-dark hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const bgColor = product.id === 'blanco' ? '#edf4f8' : product.id === 'anejo' ? '#faf3e2' : '#faf7f3';

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: bgColor }}>

      {/* Top bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver
          </Link>
          <TequilaLogo showText={false} variant="gold" className="h-8 w-8" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold-dark">
            Carácter de Campo
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Bottle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center select-none"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <InteractiveBottle id={product.id} name={product.type} colorHex={product.colorHex} />
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold-dark block mb-2">
                  Tequila 100% Puro de Agave · Edición Fundadora
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-none tracking-tight">
                  Don Martin
                  <br />
                  <span className="text-brand-gold-dark italic">{product.name}</span>
                </h1>
                <p className="font-sans italic text-neutral-500 mt-3 text-sm tracking-wide">
                  "{product.tagline}"
                </p>
              </div>

              <div className="h-px w-16 bg-brand-gold/40" />

              <p className="font-sans text-sm text-slate-600 leading-relaxed font-light max-w-md">
                {product.description}
              </p>

              {/* Specs */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/70 border border-brand-gold/20 px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-neutral-600">
                  {product.abv}
                </span>
                <span className="bg-white/70 border border-brand-gold/20 px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-neutral-600">
                  {product.aging}
                </span>
                <span className="bg-white/70 border border-brand-gold/20 px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-neutral-600">
                  100% Agave Azul
                </span>
              </div>

              {/* Price */}
              <div className="bg-white/60 backdrop-blur-md border border-brand-gold/20 rounded-2xl p-5 space-y-1">
                <p className="font-mono text-[8.5px] uppercase tracking-widest text-brand-gold-dark">Precio sugerido</p>
                <p className="font-serif text-3xl text-charcoal font-light">{product.priceCOP}</p>
                <p className="font-mono text-xs text-neutral-400">{product.priceUSD} · Precio puede variar según distribuidor</p>
              </div>

              {/* Tasting notes navigation */}
              <div className="space-y-4">
                <TastingPanel product={product} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-start gap-4 max-w-xl">
            <MapPin className="h-5 w-5 text-brand-gold-dark mt-0.5 shrink-0" />
            <div>
              <h3 className="font-serif text-lg text-charcoal font-light mb-1">Procedencia del Agave</h3>
              <p className="font-mono text-xs text-brand-gold-dark uppercase tracking-wider mb-2">{product.origin}</p>
              <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
                Cosechado rigurosamente en las parcelas más altas, con maduración mínima garantizada de 7 años. El suelo volcánico rojizo de Los Altos de Jalisco imprime una mineralidad y dulzura únicos en el agave Weber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section className="py-16 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] text-brand-gold-dark block mb-2">Distribución autorizada</span>
            <h2 className="font-serif text-3xl text-charcoal font-light">Dónde comprarlo</h2>
            <div className="h-px w-12 bg-brand-gold/40 mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.distributors.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/60 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-5 flex flex-col gap-3 hover:border-brand-gold/40 hover:shadow-md transition-all duration-400"
              >
                <div className="flex items-center gap-2">
                  {d.type === 'online'
                    ? <ShoppingBag className="h-4 w-4 text-brand-gold-dark" />
                    : <Store className="h-4 w-4 text-brand-gold-dark" />
                  }
                  <span className="font-mono text-[8px] uppercase tracking-widest text-brand-gold-dark">
                    {d.type === 'online' ? 'En línea' : 'Tienda física'}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-base text-charcoal font-light">{d.name}</p>
                  <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-wide mt-0.5">{d.region}</p>
                </div>
                {d.url ? (
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-brand-gold-dark hover:text-charcoal transition-colors"
                  >
                    Visitar sitio
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="mt-auto text-[9px] font-mono uppercase tracking-wider text-neutral-300">
                    Consultar disponibilidad
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other tequilas */}
      <section className="py-16 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8">
            <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] text-brand-gold-dark block mb-2">Colección Fundadora</span>
            <h2 className="font-serif text-3xl text-charcoal font-light">Descubre los otros tequilas</h2>
            <div className="h-px w-12 bg-brand-gold/40 mt-3" />
          </div>
          <div className="flex flex-wrap gap-3">
            {CORE_TRILOGY.filter(p => p.id !== product.id).map(p => (
              <Link
                key={p.id}
                to={`/tequila/${p.id}`}
                className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-brand-gold/15 hover:border-brand-gold/40 rounded-xl px-4 py-3 transition-all duration-300 group"
              >
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: p.colorHex === '#fbfbfb' ? '#c5a880' : p.colorHex }} />
                <span className="font-serif text-sm text-charcoal font-light group-hover:text-brand-gold-dark transition-colors">{p.name}</span>
                <ArrowLeft className="h-3 w-3 text-brand-gold/40 rotate-180 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <TequilaLogo showText={true} variant="gold" className="h-8" />
          <p className="font-mono text-[8px] uppercase tracking-widest text-neutral-400 text-center">
            © 2025 Don Martin · Carácter de Campo · Todos los derechos reservados
          </p>
          <p className="font-mono text-[8px] uppercase tracking-widest text-neutral-300">
            +18 · Beba con responsabilidad
          </p>
        </div>
      </footer>

    </div>
  );
}

function TastingPanel({ product }: { product: typeof CORE_TRILOGY[0] }) {
  const tabs = [
    { key: 'visual' as const, label: 'Vista', icon: Eye },
    { key: 'aroma' as const, label: 'Olfato', icon: Wind },
    { key: 'taste' as const, label: 'Gusto', icon: Sparkles },
  ];
  const [active, setActive] = React.useState<'visual' | 'aroma' | 'taste'>('visual');

  return (
    <div className="border border-brand-gold/20 rounded-xl bg-white/40 overflow-hidden">
      <div className="grid grid-cols-3 border-b border-brand-gold/15 bg-white/20">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`py-3 text-[10px] font-mono uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              active === key
                ? 'bg-white text-brand-gold-dark font-medium border-b border-brand-gold-dark'
                : 'text-neutral-500 hover:text-charcoal hover:bg-white/10'
            }`}
          >
            <Icon className="h-3 w-3" />
            {label}
          </button>
        ))}
      </div>
      <div className="p-5 bg-white min-h-[110px] flex flex-col justify-center">
        {active === 'visual' && (
          <motion.div key="visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <p className="text-xs text-slate-600 leading-relaxed font-light">{product.visualNotes}</p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">Color:</span>
              <span className="inline-block w-4 h-4 rounded-full border border-neutral-200 shadow-sm" style={{ backgroundColor: product.colorHex === '#fbfbfb' ? '#ffffff' : product.colorHex }} />
            </div>
          </motion.div>
        )}
        {active === 'aroma' && (
          <motion.div key="aroma" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ul className="space-y-1.5">
              {product.aromaNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-dark mt-1.5 shrink-0" />
                  <span className="text-xs text-slate-600 font-light">{note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {active === 'taste' && (
          <motion.div key="taste" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ul className="space-y-1.5">
              {product.tasteNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 text-brand-gold-dark mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600 font-light">{note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

import React from 'react';

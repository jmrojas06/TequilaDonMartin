import { motion } from 'motion/react';
import { TIMELINE_PROCESS } from '../data';
import { Calendar, Layers, ShieldCheck, HelpCircle } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="proceso" className="py-24 bg-bone relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-10 top-1/2 h-80 w-80 bg-brand-gold/[0.02] rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs tracking-[0.3em] font-mono uppercase text-brand-gold-dark mb-2">
            El Arte del Proceso
          </h2>
          <h3 className="text-3.5xl md:text-5xl font-serif tracking-tight font-light text-charcoal">
            Esculpido por el Tiempo
          </h3>
          <div className="h-px w-24 bg-brand-gold/40 mx-auto my-6" />
          <p className="text-slate-600 font-sans font-light text-sm md:text-base leading-relaxed">
            Nuestra casa no persigue el afán del mercado masivo. Cada gota de Carácter de Campo reposa con la paciencia de quien comprende que la naturaleza es perfecta cuando se le permite obrar a su ritmo.
          </p>
        </div>

        {/* Timeline staggered blocks */}
        <div className="relative border-l border-brand-gold/20 ml-4 md:ml-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:bg-brand-gold/30">
          
          {TIMELINE_PROCESS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`relative pl-8 pb-12 md:pb-0 md:pl-0 ${
                  isEven ? 'md:text-right md:pr-12 md:col-start-1' : 'md:pl-12 md:col-start-2'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Visual Circle milestone */}
                <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full bg-brand-gold border-2 border-bone md:-translate-y-1/2 ${
                  isEven ? 'md:left-auto md:right-0 md:translate-x-2' : 'md:left-0 md:-translate-x-2'
                }`}>
                  <div className="h-full w-full bg-brand-gold-dark rounded-full scale-50 animate-pulse" />
                </div>

                {/* Content Box */}
                <div className="bg-white border border-brand-gold/15 p-6 md:p-8 rounded-xl relative group hover:border-brand-gold-dark/40 transition-colors duration-500 shadow-md">
                  <span className="font-mono text-xs tracking-widest text-brand-gold-dark font-medium block mb-1">
                    Fase {idx + 1}
                  </span>
                  <h4 className="text-xl font-serif text-charcoal font-light tracking-wide mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs font-mono text-brand-gold-dark tracking-wider uppercase mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-neutral-600 font-sans font-light text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Standards Stamp */}
        <div className="mt-20 max-w-4xl mx-auto p-6 md:p-8 bg-white border border-brand-gold/25 rounded-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-lg">
          <div className="absolute right-0 bottom-0 text-brand-gold/[0.04] font-serif text-9xl pointer-events-none select-none uppercase -mr-6 -mb-6 leading-none pointer-events-none">
            37%
          </div>
          
          <div className="p-4 bg-brand-gold/5 border border-brand-gold/25 text-brand-gold-dark rounded-full shrink-0">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <h4 className="font-serif text-lg tracking-wide text-charcoal mb-1">
              Altos Estándares de Calidad e Insumos
            </h4>
            <p className="text-xs font-light text-slate-500 leading-relaxed font-sans">
              Cada botella es deleitada por el consumidor colombiano asegurándose un producto exclusivo realizado con los más altos estándares de calidad en insumos, materias primas de trazabilidad certificada y los mejores profesionales en la elaboración de esta mundialmente reconocida bebida espirituosa de denominación de origen mexicana.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

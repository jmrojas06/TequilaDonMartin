import { SOCIAL_PROJECTS } from '../data';
import { GraduationCap, HeartHandshake, Droplet, Heart } from 'lucide-react';
import TequilaLogo from './TequilaLogo';

export default function ImpactSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="h-6 w-6 text-brand-gold-dark" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6 text-brand-gold-dark" />;
      case 'Droplet':
        return <Droplet className="h-6 w-6 text-brand-gold-dark" />;
      default:
        return <Heart className="h-6 w-6 text-brand-gold-dark" />;
    }
  };

  return (
    <section id="impacto" className="py-24 bg-bone border-t border-brand-gold/25 relative overflow-hidden flex flex-col justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(197,168,128,0.05),transparent_65%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Banner with Sello Background */}
        <div className="bg-[#fcfbf9] p-8 md:p-12 mb-16 rounded-2xl border border-brand-gold/25 relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 md:gap-12 shadow-md">
          
          {/* Circular monogram faded */}
          <div className="absolute right-0 top-0 bottom-0 opacity-[0.04] select-none pointer-events-none translate-x-12 translate-y-6 flex items-center justify-center">
            <TequilaLogo 
              showText={false}
              variant="gold"
              className="h-[280px] w-[280px]"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-rose-600 font-mono text-[10px] uppercase tracking-[0.25em] mb-3">
              <Heart className="h-3.5 w-3.5 fill-rose-500/10" />
              <span>Compromiso de Causa de Don Martin</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-serif tracking-tight font-light text-charcoal leading-tight">
              Un Destilado de Carácter Social e Inclusivo
            </h3>
            
            <p className="text-slate-600 font-sans font-light text-xs md:text-sm leading-relaxed mt-4">
              Tequila CARÁCTER DE CAMPO ¨Don Martin¨ es un producto con causa sustentado en el valor de la reciprocidad. Creemos profundamente que el éxito comercial carece de sentido si no se traduce en el progreso colectivo de nuestro entorno. Por esto, cada botella distribuida aporta fondos directos y transparentes a proyectos de alto impacto social, educativo y ecológico en territorio colombiano.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-white border border-brand-gold/20 rounded-xl max-w-sm w-full text-center shadow-sm relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold-dark">
              Modelo Don Martin
            </span>
            <span className="font-serif text-3xl font-light text-charcoal my-2">
              Progreso Activo
            </span>
            <div className="h-px w-16 bg-brand-gold/45 my-2" />
            <span className="font-sans text-xs font-light text-slate-500">
              Desvío directo de utilidades auditadas a fundaciones territoriales campesinas y de diversidad en Colombia.
            </span>
          </div>
        </div>

        {/* Triple Columns Grid */}
        <div>
          <h4 className="text-center text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-10 block">
            Nuestras Líneas de Acción en Colombia
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOCIAL_PROJECTS.map((proj) => (
              <div 
                key={proj.id} 
                className="bg-white border border-brand-gold/15 p-8 rounded-xl flex flex-col justify-between luxury-card-hover min-h-[300px]"
              >
                <div>
                  <div className="inline-flex p-3 bg-brand-gold/5 border border-brand-gold/20 rounded-full mb-6">
                    {getIcon(proj.iconName)}
                  </div>
                  
                  <h5 className="font-serif text-lg tracking-wide text-charcoal mb-1">
                    {proj.title}
                  </h5>
                  
                  <p className="text-[11px] font-mono text-brand-gold-dark uppercase tracking-wider mb-4 block">
                    📍 {proj.location}
                  </p>
                  
                  <p className="text-slate-500 font-sans font-light text-xs leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="border-t border-brand-gold/15 pt-5 mt-6 flex justify-between items-center">
                  <span className="text-[9.5px] font-mono uppercase text-slate-400 tracking-wider">
                    Logro Proyectado
                  </span>
                  <span className="font-mono text-xs text-brand-gold-dark font-semibold tracking-wider uppercase bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
                    {proj.impactMetric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

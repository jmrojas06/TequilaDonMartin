import { Instagram, MapPin } from 'lucide-react';
import TequilaLogo from './TequilaLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-[#f0ebe1] border-t border-brand-gold/25 pt-16 pb-12 relative overflow-hidden">
      {/* Sello watermark centered background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none flex items-center justify-center">
        <TequilaLogo 
          showText={false}
          variant="gold"
          className="h-[450px] w-[450px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-gold/20">
          
          {/* Column Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <TequilaLogo 
                showText={false}
                variant="gold"
                className="h-10 w-10 shrink-0"
              />
              <div>
                <span className="font-serif text-base tracking-widest text-[#1c1b19] uppercase block">
                  Carácter de Campo
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-brand-gold-dark block -mt-1">
                  Don Martin
                </span>
              </div>
            </div>
            
            <p className="text-xs font-light text-[#52504b] font-sans leading-relaxed max-w-sm">
              Una trilogía de tequilas premium realizada con los más selectos estándares globales. Cosechado en los suelos rojizos de los Altos de Jalisco, México, para deleitar y transformar el porvenir del consumidor Colombiano bajo un modelo sustentable de causa social.
            </p>
          </div>

          {/* Column Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-dark block font-semibold">
              Enlaces
            </span>
            <ul className="space-y-2 text-xs font-sans font-light text-slate-600">
              <li>
                <a href="#inicio" className="hover:text-brand-gold-dark transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#trilogia" className="hover:text-brand-gold-dark transition-colors duration-200">Nuestra Trilogía</a>
              </li>
              <li>
                <a href="#ediciones" className="hover:text-brand-gold-dark transition-colors duration-200">Ediciones Especiales</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-brand-gold-dark transition-colors duration-200">El Arte del Tiempo</a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-brand-gold-dark transition-colors duration-200">Impacto Social</a>
              </li>
            </ul>
          </div>

          {/* Column Social / Location */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-dark block font-semibold">
              Canales Oficiales
            </span>
            
            <a 
              href="https://www.instagram.com/donmartinofficial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans font-light text-slate-600 hover:text-brand-gold-dark transition-colors duration-200"
            >
              <Instagram className="h-4 w-4 text-brand-gold-dark" />
              <span>Sintoniza con nuestro Instagram @donmartinofficial</span>
            </a>

            <div className="space-y-1.5 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light font-sans">
                <MapPin className="h-3 w-3 text-brand-gold-dark shrink-0" />
                <span>Origen: Altos de Jalisco, México</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-light font-sans">
                <MapPin className="h-3 w-3 text-brand-gold-dark shrink-0" />
                <span>Distribución y Causa: Territorio Colombiano</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory notices and credits */}
        <div className="pt-10 flex flex-col items-center text-center gap-6">
          
          {/* Colombia Regulatory Alcohol Warning Message */}
          <div className="max-w-2xl px-6 py-4.5 bg-[#faf8f5] border border-brand-gold/30 rounded-xl shadow-sm">
            <p className="font-sans font-semibold text-xs text-[#a3845b] tracking-wider leading-relaxed">
              EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD.<br />
              PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.
            </p>
            <p className="font-mono text-[9px] text-[#706c64] mt-2 tracking-widest uppercase">
              Tequila Carácter de Campo "Don Martin" • 37% Alc. Vol. • 100% Puro de Agave
            </p>
          </div>

          {/* Copyright copyrights */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-slate-500 font-mono text-[9.5px] tracking-wider pt-4">
            <span>
              &copy; {currentYear} Carácter de Campo ¨Don Martin¨. Todos los derechos reservados.
            </span>
            <span className="mt-2 sm:mt-0">
              Hecho con causa social para Colombia y México.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

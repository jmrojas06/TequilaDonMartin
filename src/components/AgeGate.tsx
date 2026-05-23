import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Check } from 'lucide-react';
import TequilaLogo from './TequilaLogo';

interface AgeGateProps {
  onVerify: () => void;
}

export default function AgeGate({ onVerify }: AgeGateProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasDeclined, setHasDeclined] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('don_martin_age_verified');
    if (verified === 'true') {
      setIsVisible(false);
      onVerify();
    }
  }, [onVerify]);

  const handleAccept = () => {
    localStorage.setItem('don_martin_age_verified', 'true');
    setIsVisible(false);
    onVerify();
  };

  const handleDecline = () => {
    setHasDeclined(true);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="age-gate"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Subtle glowing lines in the background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <motion.div
          id="age-gate-container"
          className="relative max-w-lg w-full text-center p-8 md:p-12 bg-bone border border-brand-gold/30 rounded-xl shadow-2xl"
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Sello Monogram */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-x-0 -bottom-1 h-8 bg-brand-gold/10 blur-md rounded-full" />
              <TequilaLogo 
                variant="gold"
                showText={false}
                className="relative h-24 w-24 transition-transform duration-700 group-hover:rotate-12"
              />
            </div>
          </div>

          <h2 className="text-xs tracking-[0.3em] font-mono uppercase text-brand-gold-dark mb-1">
            Control de Acceso
          </h2>
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight font-light text-charcoal mb-6">
            CARÁCTER DE CAMPO
          </h1>

          <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent my-6" />

          {!hasDeclined ? (
            <>
              <p className="text-charcoal-light font-sans font-light text-sm md:text-base leading-relaxed mb-8">
                Para ingresar, debes confirmar que eres mayor de edad conforme a la legislación de consumo de tu país de residencia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  id="btn-age-accept"
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-3 bg-charcoal text-white hover:bg-brand-gold-dark font-sans tracking-widest font-medium text-xs uppercase cursor-pointer transition-all duration-300 shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/25"
                >
                  Soy Mayor de Edad
                </button>
                <button
                  id="btn-age-decline"
                  onClick={handleDecline}
                  className="w-full sm:w-auto px-8 py-3 border border-neutral-300 hover:border-brand-gold-dark text-neutral-500 hover:text-charcoal font-sans tracking-wide font-light text-xs uppercase transition-all duration-300"
                >
                  No tengo la edad legal
                </button>
              </div>

              <span className="block text-[10px] uppercase tracking-widest font-mono text-neutral-400 mt-10">
                Toma responsablemente. El exceso de alcohol es perjudicial para la salud.
              </span>
            </>
          ) : (
            <motion.div
              id="age-gate-error"
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex p-3 bg-red-50 border border-red-200 text-red-600 rounded-full mb-4">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif font-medium text-charcoal mb-2">
                Acceso Limitado
              </h3>
              <p className="text-sm font-light text-neutral-500 leading-relaxed mb-6">
                Lo sentimos, debes ser mayor de edad para interactuar con los contenidos de nuestra marca y explorar nuestras botellas premium.
              </p>
              <button
                onClick={() => setHasDeclined(false)}
                className="text-xs font-mono text-brand-gold-dark hover:text-brand-gold underline tracking-wider uppercase"
              >
                Volver a intentar
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import TequilaLogo from './TequilaLogo';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#faf8f5]/95 backdrop-blur-md py-4 border-b border-brand-gold/20 shadow-sm'
            : 'bg-transparent py-8'
        }`}
      >
        {/* Full Desktop Header - Split Editorial Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-between">
            <a href="#inicio" className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="Don Martin"
                className="h-10 w-10 shrink-0 mix-blend-multiply select-none"
                draggable={false}
              />
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.22em] text-[#1c1b19] uppercase font-normal">
                  Carácter de Campo
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-brand-gold-dark -mt-0.5">
                  Don Martin
                </span>
              </div>
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-brand-gold-dark transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Majestic Desktop Split Layout */}
          <div className="hidden lg:grid grid-cols-12 items-center text-center">
            
            {/* Left Nav links */}
            <div className="col-span-4 flex justify-end gap-12 text-right">
              <a
                href="#proceso"
                className="font-serif text-xs uppercase tracking-[0.25em] text-[#3a3834] hover:text-brand-gold-dark transition-colors duration-300 py-1"
              >
                La Destilería
              </a>
              <a
                href="#trilogia"
                className="font-serif text-xs uppercase tracking-[0.25em] text-[#3a3834] hover:text-brand-gold-dark transition-colors duration-300 py-1"
              >
                Altos de Jalisco
              </a>
            </div>

            {/* Central Badge Logo & Brand Name */}
            <div className="col-span-4 flex flex-col items-center justify-center -my-4">
              <a href="#inicio" className="flex flex-col items-center group">
                <img
                  src={logoImg}
                  alt="Don Martin"
                  className="h-14 w-14 shrink-0 mix-blend-multiply transition-transform duration-700 group-hover:scale-105 select-none"
                  draggable={false}
                />
                <span className="font-serif text-xl sm:text-2xl tracking-[0.28em] text-charcoal uppercase mt-1 group-hover:text-brand-gold-dark transition-colors duration-300 font-normal">
                  Carácter de Campo
                </span>
              </a>
            </div>

            {/* Right Nav links & Instagram Icon */}
            <div className="col-span-4 flex justify-start items-center gap-12 text-left">
              <a
                href="#impacto"
                className="font-serif text-xs uppercase tracking-[0.25em] text-[#3a3834] hover:text-brand-gold-dark transition-colors duration-300 py-1"
              >
                Proyectos Sociales
              </a>
              <a
                href="#ediciones"
                className="font-serif text-xs uppercase tracking-[0.25em] text-[#3a3834] hover:text-brand-gold-dark transition-colors duration-300 py-1"
              >
                Colombia
              </a>
              <a
                href="https://www.instagram.com/donmartinofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Don Martin"
                className="p-1 px-2 border border-brand-gold/30 hover:border-brand-gold rounded-full text-[#3a3834] hover:text-brand-gold-dark transition-all duration-300 flex items-center justify-center gap-1"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span className="text-[10px] font-mono tracking-wider">@donmartinofficial</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="fixed inset-0 z-30 bg-[#faf8f5]/98 backdrop-blur-xl flex flex-col justify-center p-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-8 text-center items-center">
              <TequilaLogo
                showText={false}
                variant="gold"
                className="h-20 w-20 mb-2 shrink-0 animate-spin"
                style={{ animationDuration: '40s' }}
              />

              <h3 className="font-serif text-lg tracking-widest text-charcoal uppercase -mt-4 mb-4">
                Carácter de Campo
              </h3>

              <div className="flex flex-col gap-6">
                <a
                  href="#proceso"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl tracking-widest text-[#3a3834] hover:text-brand-gold-dark transition-colors"
                >
                  La Destilería
                </a>
                <a
                  href="#trilogia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl tracking-widest text-[#3a3834] hover:text-brand-gold-dark transition-colors"
                >
                  Altos de Jalisco
                </a>
                <a
                  href="#impacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl tracking-widest text-[#3a3834] hover:text-brand-gold-dark transition-colors"
                >
                  Proyectos Sociales
                </a>
                <a
                  href="#ediciones"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-xl tracking-widest text-[#3a3834] hover:text-brand-gold-dark transition-colors"
                >
                  Colombia
                </a>
              </div>

              <div className="h-px w-24 bg-brand-gold/30 my-4" />

              <a
                href="https://www.instagram.com/donmartinofficial/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-charcoal text-white hover:bg-brand-gold-dark rounded-full font-sans text-xs tracking-widest uppercase transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram Oficial</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

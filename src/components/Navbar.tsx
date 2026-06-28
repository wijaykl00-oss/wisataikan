import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Fish } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useWhatsAppLink } from '../utils/whatsapp';

export default function Navbar() {
  const waLink = useWhatsAppLink(
    '6287760943079',
    'Halo Wisata Ikan Sungai Rindu, saya tertarik untuk berkunjung. Bisakah dibantu informasinya?'
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-emerald-50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#beranda"
              onClick={(e) => handleScrollTo(e, '#beranda')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 flex items-center justify-center shadow-md shadow-emerald-600/20 transition-transform duration-300 group-hover:scale-105">
                <Fish className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-base leading-tight tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  Wisata Ikan
                </span>
                <span className={`font-sans font-medium text-xs tracking-wider transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-300'}`}>
                  SUNGAI RINDU
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:text-emerald-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                        isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Header CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-sans text-xs font-semibold py-2.5 px-4 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"

              >
                <Phone size={14} />
                Hubungi Kami
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? 'text-gray-800 hover:bg-emerald-50'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                      <Fish size={18} />
                    </div>
                    <span className="font-display font-bold text-gray-900 text-sm">Wisata Ikan Sungai Rindu</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="mt-8">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => handleScrollTo(e, link.href)}
                          className="flex items-center py-2 px-4 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 font-sans font-semibold text-sm transition-all"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-gray-100">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-sans font-bold py-3 px-4 rounded-xl shadow-md"

                >
                  <Phone size={16} />
                  Hubungi CS Kami
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

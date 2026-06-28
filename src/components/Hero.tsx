import { motion } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Trees, Fish, Users } from 'lucide-react';
import { useWhatsAppLink } from '../utils/whatsapp';

import heroImg from '../assets/images/fotojembatan1.webp';

export default function Hero() {
  const waLink = useWhatsAppLink(
    '6287760943079',
    'Halo Wisata Ikan Sungai Rindu, saya tertarik untuk berkunjung. Bisakah dibantu informasinya?'
  );
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-gradient-to-br from-[#ECFDF5] via-[#EFF9F5] to-[#EFF6FF]">
      {/* Decorative ripple background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        
        {/* Left Column: Content */}
        <div className="flex-1 text-left flex flex-col items-start max-w-2xl">
          {/* Tagline / Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#D1FAE5] border border-emerald-200/50 px-4 py-2 rounded-full text-[#065F46] text-xs font-bold tracking-wider uppercase mb-6"
          >
            <Sparkles size={14} className="text-emerald-600 animate-pulse" />
            Destinasi Wisata Alam Keluarga di Babelan, Bekasi
          </motion.div>

          {/* Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
          >
            Surga Alam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 font-extrabold">
              Wisata Ikan Sungai Rindu
            </span>
            , Pemancingan & Wisata Keluarga
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-sans text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed font-light"
          >
            Nikmati suasana alam yang asri dengan kolam ikan, area pemancingan, gazebo yang nyaman, kuliner lezat, dan spot foto indah. Tempat sempurna untuk bersama keluarga, teman, dan komunitas di Hurip Jaya, Babelan, Bekasi.
          </motion.p>

          {/* Call to Actions (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              id="cta-hubungi"
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#047857] hover:bg-[#065F46] text-white font-sans font-bold text-sm tracking-wide shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"

            >
              Hubungi Kami
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              id="cta-lokasi"
              href="https://www.google.com/maps?q=-6.075287,107.006628"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-[#0F172A] font-sans font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MapPin size={16} className="text-[#047857]" />
              Lihat Lokasi
            </a>
          </motion.div>

          {/* Feature Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-[#E2E8F0] pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-[#047857] shrink-0">
                <Trees size={18} />
              </div>
              <div className="text-left">
                <h3 className="font-display font-semibold text-[#0F172A] text-xs">Suasana Alam Asri</h3>
                <p className="font-sans text-[10px] text-[#64748B]">Sejuk & menenangkan</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <Fish size={18} />
              </div>
              <div className="text-left">
                <h3 className="font-display font-semibold text-[#0F172A] text-xs">Kolam Pemancingan</h3>
                <p className="font-sans text-[10px] text-[#64748B]">Ikan melimpah</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Users size={18} />
              </div>
              <div className="text-left">
                <h3 className="font-display font-semibold text-[#0F172A] text-xs">Cocok Gathering</h3>
                <p className="font-sans text-[10px] text-[#64748B]">Area luas & nyaman</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-3xl p-3 bg-white/60 border border-white shadow-2xl overflow-hidden group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img
                src={heroImg}
                alt="Wisata Ikan Sungai Rindu - Suasana Alam Asri"
                className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              {/* Image Label Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Spot Utama</p>
                  <p className="text-xs font-bold text-[#0F172A]">Kolam Ikan & Area Wisata</p>
                </div>
                <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold py-1 px-2.5 rounded-lg">Buka 24 Jam</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Elegant fade transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8FAFC] to-transparent"></div>
    </section>
  );
}

import React from 'react';
import { Compass, Phone, MapPin, Clock, Fish } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="app-footer" className="bg-gray-950 text-gray-400 font-sans border-t border-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-900">
          
          {/* Col 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/10">
                <Fish size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base leading-tight tracking-tight">
                  Wisata Ikan
                </span>
                <span className="font-sans font-semibold text-emerald-500 text-xs tracking-wider">
                  SUNGAI RINDU
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Destinasi wisata keluarga yang menawarkan suasana alam yang asri dengan kolam ikan, area pemancingan, tempat bersantai, dan kuliner lezat khas pedesaan yang nyaman di Babelan, Bekasi.
            </p>

            <div className="flex gap-4 pt-1">
              <span className="text-xs text-emerald-400 font-semibold">• Asri</span>
              <span className="text-xs text-teal-400 font-semibold">• Keluarga</span>
              <span className="text-xs text-blue-400 font-semibold">• Nyaman</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm tracking-wide">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#beranda" onClick={(e) => handleScrollTo(e, '#beranda')} className="hover:text-emerald-500 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" onClick={(e) => handleScrollTo(e, '#tentang')} className="hover:text-emerald-500 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" onClick={(e) => handleScrollTo(e, '#layanan')} className="hover:text-emerald-500 transition-colors">
                  Layanan & Fasilitas
                </a>
              </li>
              <li>
                <a href="#keunggulan" onClick={(e) => handleScrollTo(e, '#keunggulan')} className="hover:text-emerald-500 transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#galeri" onClick={(e) => handleScrollTo(e, '#galeri')} className="hover:text-emerald-500 transition-colors">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#testimoni" onClick={(e) => handleScrollTo(e, '#testimoni')} className="hover:text-emerald-500 transition-colors">
                  Kesan Pengunjung
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="hover:text-emerald-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h4 className="font-display font-bold text-white text-sm tracking-wide">
              Kontak & Operasional
            </h4>
            
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0" size={16} />
                <span className="leading-relaxed">
                  Kp. Sembilangan RT 06 / RW 04, Hurip Jaya, Kecamatan Babelan, Kabupaten Bekasi, Jawa Barat.
                </span>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={16} />
                <span>+62 877-6094-3079 (Customer Service)</span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="text-emerald-500 shrink-0" size={16} />
                <span>
                  Setiap Hari: <strong className="text-white font-medium">Buka 24 Jam</strong>
                </span>
              </li>
            </ul>

            {/* Quick map button */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps?q=-6.075287,107.006628"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold py-2 px-4 rounded-xl border border-white/10 transition-colors"
              >
                Petunjuk Rute Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer credit */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light">
          <p className="text-center sm:text-left">
            &copy; {currentYear} <span className="text-white font-medium">Wisata Ikan Sungai Rindu</span>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-6">
            <a href="#app-header" className="hover:text-emerald-500 transition-colors">
              Kembali ke Atas
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

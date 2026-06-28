import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import img1 from '../assets/images/fotojembatan1.webp';
import img2 from '../assets/images/fotojembatan2.webp';
import img3 from '../assets/images/fotojembatan3.webp';
import img4 from '../assets/images/pemandangan1.webp';
import img5 from '../assets/images/sungai.jpeg';
import img6 from '../assets/images/tempatmakan.webp';
import img7 from '../assets/images/keluarga.jpeg';
import img8 from '../assets/images/customer1.jpeg';
import img9 from '../assets/images/customer2.jpeg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'semua' | 'alam' | 'aktivitas' | 'kuliner'>('semua');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Foto' },
    { id: 'alam', label: 'Suasana Alam' },
    { id: 'aktivitas', label: 'Aktivitas & Fasilitas' },
    { id: 'kuliner', label: 'Kuliner' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'alam',
      title: 'Pemandangan Jembatan',
      description: 'Pemandangan indah jembatan dengan nuansa alam yang menyejukkan.',
      imageUrl: img1,
    },
    {
      id: 2,
      category: 'aktivitas',
      title: 'Suasana Kolam Ikan',
      description: 'Keseruan di sekitar kolam ikan yang jernih dan tenang.',
      imageUrl: img2,
    },
    {
      id: 3,
      category: 'alam',
      title: 'Spot Foto Instagramable',
      description: 'Berbagai spot foto dengan latar alam yang indah dan natural.',
      imageUrl: img3,
    },
    {
      id: 4,
      category: 'alam',
      title: 'Pemandangan',
      description: 'Nuansa alam yang hijau dan asri, memberikan ketenangan.',
      imageUrl: img4,
    },
    {
      id: 5,
      category: 'alam',
      title: 'Aliran Sungai',
      description: 'Aliran sungai yang tenang dikelilingi pepohonan hijau rindang.',
      imageUrl: img5,
    },
    {
      id: 6,
      category: 'kuliner',
      title: 'Gazebo & Tempat Makan',
      description: 'Gazebo yang nyaman untuk bersantai sambil menikmati kuliner.',
      imageUrl: img6,
    },
    {
      id: 7,
      category: 'aktivitas',
      title: 'Gathering Keluarga',
      description: 'Area yang luas dan representatif untuk gathering keluarga.',
      imageUrl: img7,
    },
    {
      id: 8,
      category: 'aktivitas',
      title: 'Pengunjung Ceria',
      description: 'Keceriaan pengunjung menikmati fasilitas di Sungai Rindu.',
      imageUrl: img8,
    },
    {
      id: 9,
      category: 'aktivitas',
      title: 'Momen Bahagia',
      description: 'Abadikan momen terbaik bersama keluarga dan sahabat.',
      imageUrl: img9,
    }
  ];

  const filteredItems = activeCategory === 'semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeri" className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Galeri Foto Wisata
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Potret Keindahan Sungai Rindu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Intip sudut-sudut paling asri, fasilitas lengkap, dan keceriaan pengunjung di Wisata Ikan Sungai Rindu lewat lensa kamera kami.
          </motion.p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id as any);
                  setSelectedImageIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/10'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="relative group h-64 rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-gray-100"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                      <Sparkles size={10} />
                      {item.category === 'alam' ? 'Suasana Alam' : item.category === 'kuliner' ? 'Kuliner' : 'Aktivitas'}
                    </div>
                    <h3 className="font-display font-bold text-sm tracking-tight">{item.title}</h3>
                    <p className="text-[11px] text-gray-300/90 font-light leading-tight mt-1 truncate">{item.description}</p>
                  </div>
                </div>

                {/* Corner Zoom Button */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-sm">
                  <ZoomIn size={16} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Header */}
              <div className="flex justify-between items-center text-white">
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
                    Foto {selectedImageIndex + 1} dari {filteredItems.length}
                  </span>
                  <span className="font-display font-bold text-base md:text-lg">
                    {filteredItems[selectedImageIndex].title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Slider Area */}
              <div className="flex-1 flex items-center justify-center relative my-4 max-h-[70vh]">
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:left-4 z-10 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <img
                  src={filteredItems[selectedImageIndex].imageUrl}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-0 md:right-4 z-10 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Footer text */}
              <div className="text-center text-white/80 max-w-xl mx-auto text-xs md:text-sm font-light leading-relaxed pb-4">
                {filteredItems[selectedImageIndex].description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

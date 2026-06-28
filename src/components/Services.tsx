import { motion } from 'motion/react';
import { useWhatsAppLink, openWhatsApp } from '../utils/whatsapp';

import { 
  Utensils, 
  Sparkles, 
  Camera, 
  Tent,
  PartyPopper, 
  Smile, 
  ArrowUpRight,
  Fish,
  Trees
} from 'lucide-react';

import imgKeluarga from '../assets/images/keluarga.jpeg';
import imgKolam from '../assets/images/fotojembatan2.webp';
import imgGazebo from '../assets/images/tempatmakan.webp';
import imgKuliner from '../assets/images/customer2.jpeg';
import imgSpotFoto from '../assets/images/fotojembatan3.webp';
import imgPemandangan from '../assets/images/pemandangan1.webp';
import imgGathering from '../assets/images/customer1.jpeg';

export default function Services() {
  const services = [
    {
      id: 'wisata-keluarga',
      title: 'Area Wisata Keluarga',
      description: 'Nikmati suasana alam yang asri bersama keluarga di area wisata yang luas, sejuk, dan nyaman. Cocok untuk semua usia — dari anak-anak hingga orang tua.',
      icon: <Trees className="text-emerald-500" size={24} />,
      image: imgKeluarga,
      badge: 'Terfavorit',
      price: 'Hubungi Kami'
    },
    {
      id: 'pemancingan',
      title: 'Kolam Pemancingan',
      description: 'Salurkan hobi memancing di kolam kami yang luas dengan stok ikan air tawar yang melimpah. Cocok untuk santai sendiri, bersama keluarga, maupun perlombaan komunitas.',
      icon: <Fish className="text-sky-500" size={24} />,
      image: imgKolam,
      badge: 'Rekomendasi',
      price: 'Hubungi Kami'
    },
    {
      id: 'gazebo',
      title: 'Gazebo / Tempat Bersantai',
      description: 'Bersantai di gazebo kami yang nyaman di tengah suasana alam yang hijau and sejuk. Tempat ideal untuk melepas penat sambil menikmati pemandangan kolam.',
      icon: <Tent className="text-teal-500" size={24} />,
      image: imgGazebo,
      badge: 'Nyaman',
      price: 'Hubungi Kami'
    },
    {
      id: 'kuliner',
      title: 'Area Kuliner',
      description: 'Nikmati aneka hidangan lezat berbahan dasar ikan segar dan menu pilihan lainnya. Makan sembari menikmati suasana alam yang asri — pengalaman kuliner yang tak terlupakan.',
      icon: <Utensils className="text-amber-500" size={24} />,
      image: imgKuliner,
      badge: 'Lezat',
      price: 'Hubungi Kami'
    },
    {
      id: 'spot-foto',
      title: 'Spot Foto',
      description: 'Abadikan momen terbaik bersama orang-orang tersayang di berbagai spot foto instagramable yang didesain dengan latar alam yang indah dan natural.',
      icon: <Camera className="text-indigo-500" size={24} />,
      image: imgSpotFoto,
      badge: 'Instagramable',
      price: 'Hubungi Kami'
    },
    {
      id: 'pemandangan',
      title: 'Pemandangan',
      description: 'Saksikan keindahan panorama alam yang hijau dan asri di sepanjang Sungai Rindu. Tempat yang sempurna untuk menenangkan pikiran dan menikmati suasana pedesaan.',
      icon: <Trees className="text-emerald-500" size={24} />,
      image: imgPemandangan,
      badge: 'Asri',
      price: 'Hubungi Kami'
    },
    {
      id: 'gathering',
      title: 'Gathering Keluarga & Komunitas',
      description: 'Area yang luas dan representatif untuk gathering keluarga besar, acara komunitas, reuni, arisan, ulang tahun, dan berbagai kegiatan kelompok lainnya.',
      icon: <PartyPopper className="text-pink-500" size={24} />,
      image: imgGathering,
      badge: 'Kapasitas Besar',
      price: 'Hubungi Kami'
    },
  ];

  const handleBook = (title: string) => {
    const text = `Halo Wisata Ikan Sungai Rindu, saya tertarik bertanya tentang layanan: ${title}. Mohon informasinya.`;
    openWhatsApp('6287760943079', text);
  };

  return (
    <section id="layanan" className="py-24 bg-white font-sans">
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
            <Sparkles size={12} />
            Layanan & Fasilitas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Sajian Utama & Aktivitas Seru
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Dari menikmati alam, memancing, bersantai di gazebo, hingga gathering bersama komunitas — semua tersedia di Wisata Ikan Sungai Rindu untuk pengalaman liburan keluarga yang sempurna.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-500/10 transition-all duration-300 group"
            >
              {/* Image & Badge Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-emerald-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                  {service.badge}
                </span>
                <span className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  {service.price}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mt-4">
                    {service.description}
                  </p>
                </div>

                {/* Footer/Action */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleBook(service.title)}
                    className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold hover:text-emerald-600 group-hover:underline transition-colors cursor-pointer"
                  >
                    Hubungi Kami untuk Info
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

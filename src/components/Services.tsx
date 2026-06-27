import { motion } from 'motion/react';
import { 
  Utensils, 
  Sparkles, 
  BookOpen, 
  Sprout, 
  PartyPopper, 
  Smile, 
  ArrowUpRight,
  Fish
} from 'lucide-react';

import imgKuliner from '../assets/images/foto3.jpeg';
import imgPemancingan from '../assets/images/foto2.jpeg';
import imgWahana from '../assets/images/foto4.jpeg';

export default function Services() {
  const services = [
    {
      id: 'kuliner',
      title: 'Kuliner Saung Bambu',
      description: 'Nikmati aneka olahan ikan super segar seperti Gurame, Nila, Lele, Ayam, Bebek, hingga Sop Iga bakar langsung di atas saung bambu yang teduh dan romantis.',
      icon: <Utensils className="text-emerald-500" size={24} />,
      image: imgKuliner,
      badge: 'Terfavorit',
      price: 'Mulai Rp 15.000'
    },
    {
      id: 'pemancingan',
      title: 'Kolam Pemancingan Luas',
      description: 'Salurkan hobi memancing Anda di kolam kami yang luas dengan stok ikan air tawar melimpah. Cocok untuk bersantai sendiri maupun perlombaan komunitas.',
      icon: <Fish className="text-sky-500" size={24} />,
      image: imgPemancingan,
      badge: 'Rekomendasi',
      price: 'Sesuai Hasil Tangkapan'
    },
    {
      id: 'wahana',
      title: 'Wahana Bermain Anak',
      description: 'Surganya keceriaan anak-anak dengan fasilitas aman: Trampolin, Mandi Bola, Perosotan, Skuter, hingga mobil-mobilan di bawah pengawasan yang bersahabat.',
      icon: <Smile className="text-amber-500" size={24} />,
      image: imgWahana,
      badge: 'Khusus Anak',
      price: 'Mulai Rp 10.000'
    },
    {
      id: 'terapi',
      title: 'Terapi Ikan Alami',
      description: 'Rasakan pijat refleksi alami dari ikan-ikan terapi berukuran kecil yang siap membersihkan sel kulit mati dan melancarkan peredaran darah Anda.',
      icon: <Sparkles className="text-teal-500" size={24} />,
      image: 'https://picsum.photos/seed/therapyfish/600/400',
      badge: 'Gratis',
      price: 'Rp 0 (Khusus Pengunjung)'
    },
    {
      id: 'edukasi',
      title: 'Edukasi Budidaya Ikan',
      description: 'Program wisata edukasi interaktif untuk anak sekolah, keluarga, maupun instansi guna mempelajari seluk beluk pembibitan & budidaya ikan air tawar.',
      icon: <BookOpen className="text-indigo-500" size={24} />,
      image: 'https://picsum.photos/seed/fishedution/600/400',
      badge: 'Edukasi',
      price: 'Hubungi Kami'
    },
    {
      id: 'bibit',
      title: 'Penjualan Bibit & Ikan Segar',
      description: 'Menjual bibit ikan air tawar unggul (Nila, Gurame, Lele, Patin) serta ikan konsumsi hidup berkualitas prima langsung dari kolam budidaya terbaik kami.',
      icon: <Sprout className="text-green-500" size={24} />,
      image: 'https://picsum.photos/seed/fishseeds/600/400',
      badge: 'Grosir & Ecer',
      price: 'Harga Bersahabat'
    },
    {
      id: 'acara',
      title: 'Sewa Tempat & Gathering',
      description: 'Sediakan area outdoor yang luas untuk berbagai event spesial: Ulang tahun, Family gathering perusahaan, Reuni, Arisan, Rapat, hingga resepsi Pernikahan.',
      icon: <PartyPopper className="text-pink-500" size={24} />,
      image: 'https://picsum.photos/seed/gatheringevent/600/400',
      badge: 'Kapasitas Besar',
      price: 'Paket Kustom'
    },
  ];

  const handleBook = (title: string) => {
    const text = encodeURIComponent(`Halo Wisata Ikan Tarumajaya, saya tertarik bertanya tentang layanan: ${title}. Mohon informasinya.`);
    window.open(`https://wa.me/6281388364632?text=${text}`, '_blank');
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
            Layanan & Fasilitas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Sajian Utama & Kegiatan Menarik
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Dari memanjakan lidah hingga edukasi si kecil, jelajahi berbagai pengalaman seru yang dirancang khusus untuk kenyamanan liburan keluarga Anda.
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
                    Tanya Detail & Reservasi
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

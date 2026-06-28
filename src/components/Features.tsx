import { motion } from 'motion/react';
import { 
  Heart, 
  Leaf, 
  MapPin, 
  Camera, 
  Car, 
  Maximize, 
  Fish,
  Users
} from 'lucide-react';

export default function Features() {
  const strengths = [
    {
      title: 'Suasana Alam Sejuk & Nyaman',
      description: 'Dikelilingi pepohonan rindang dan hamparan kolam yang tenang, memberikan udara segar alami yang menenangkan dan menyegarkan jiwa.',
      icon: <Leaf className="text-emerald-600" size={24} />,
      bgColor: 'bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Cocok untuk Semua Keluarga',
      description: 'Tempat wisata ramah keluarga yang nyaman untuk semua usia — dari balita hingga lansia. Suasana bersahabat dan fasilitas lengkap untuk kenyamanan Anda.',
      icon: <Heart className="text-rose-600" size={24} />,
      bgColor: 'bg-rose-50 border-rose-100',
    },
    {
      title: 'Area Pemancingan Luas',
      description: 'Kolam pemancingan berisi ikan air tawar yang melimpah. Nikmati keseruan memancing bersama keluarga atau rekan dalam suasana alam yang tenang.',
      icon: <Fish className="text-sky-600" size={24} />,
      bgColor: 'bg-sky-50 border-sky-100',
    },
    {
      title: 'Banyak Spot Foto Menarik',
      description: 'Berbagai spot foto instagramable dengan latar alam hijau yang indah. Abadikan setiap momen berharga bersama orang-orang tersayang.',
      icon: <Camera className="text-indigo-600" size={24} />,
      bgColor: 'bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Area Luas & Lapang',
      description: 'Lahan yang luas memberikan kebebasan bergerak dan beraktivitas. Cocok untuk rombongan besar, family gathering, maupun kunjungan santai.',
      icon: <Maximize className="text-teal-600" size={24} />,
      bgColor: 'bg-teal-50 border-teal-100',
    },
    {
      title: 'Parkir Kendaraan Tersedia',
      description: 'Tersedia area parkir yang memadai untuk kendaraan roda dua maupun roda empat, sehingga kunjungan Anda semakin nyaman dan bebas khawatir.',
      icon: <Car className="text-gray-600" size={24} />,
      bgColor: 'bg-gray-100 border-gray-200',
    },
    {
      title: 'Lokasi Mudah Dijangkau',
      description: 'Berlokasi strategis di Hurip Jaya, Babelan, Bekasi — mudah diakses dari berbagai penjuru Bekasi dan sekitarnya dengan kendaraan pribadi maupun umum.',
      icon: <MapPin className="text-amber-600" size={24} />,
      bgColor: 'bg-amber-50 border-amber-100',
    },
    {
      title: 'Cocok untuk Gathering & Acara',
      description: 'Area yang representatif untuk gathering keluarga, acara komunitas, arisan, reuni sekolah, ulang tahun, hingga kegiatan kelompok lainnya dengan kapasitas besar.',
      icon: <Users className="text-purple-600" size={24} />,
      bgColor: 'bg-purple-50 border-purple-100',
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Mengapa Memilih Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Keunggulan Wisata Ikan Sungai Rindu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Kami hadir sebagai destinasi wisata alam yang memberikan pengalaman terbaik — nyaman, asri, dan penuh kenangan bagi seluruh keluarga Anda.
          </motion.p>
        </div>

        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md hover:border-emerald-500/20 transition-all duration-300 flex gap-4`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${strength.bgColor} border`}>
                {strength.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base">
                  {strength.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

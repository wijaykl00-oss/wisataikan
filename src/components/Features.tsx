import { motion } from 'motion/react';
import { 
  Heart, 
  Leaf, 
  MapPin, 
  Compass, 
  Sparkles, 
  Camera, 
  Car, 
  Maximize, 
  Smile, 
  Award 
} from 'lucide-react';

export default function Features() {
  const strengths = [
    {
      title: 'Suasana Sejuk & Asri',
      description: 'Dikelilingi tanaman hijau rindang dan hamparan kolam tenang yang memberikan udara sejuk alami dan damai.',
      icon: <Leaf className="text-emerald-600" size={24} />,
      bgColor: 'bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Saung Bambu Estetik',
      description: 'Menyantap hidangan lezat di atas saung bambu apung tradisional yang memberikan sensasi bersantap unik.',
      icon: <Award className="text-amber-600" size={24} />,
      bgColor: 'bg-amber-50 border-amber-100',
    },
    {
      title: 'Pemancingan Keluarga Luas',
      description: 'Kolam pemancingan berkapasitas besar dengan pilihan spesies ikan melimpah untuk hiburan akhir pekan Anda.',
      icon: <Compass className="text-sky-600" size={24} />,
      bgColor: 'bg-sky-50 border-sky-100',
    },
    {
      title: 'Edukasi Budidaya Riil',
      description: 'Belajar langsung proses pembenihan, pembesaran, hingga panen ikan air tawar bersama praktisi kami.',
      icon: <Sparkles className="text-purple-600" size={24} />,
      bgColor: 'bg-purple-50 border-purple-100',
    },
    {
      title: 'Bibit & Ikan Segar Garansi',
      description: 'Dapatkan bibit ikan unggulan berdaya tahan tinggi atau ikan konsumsi super segar langsung ditangkap di tempat.',
      icon: <Heart className="text-rose-600" size={24} />,
      bgColor: 'bg-rose-50 border-rose-100',
    },
    {
      title: 'Wahana Bermain Anak Terintegrasi',
      description: 'Mulai dari perosotan hingga trampolin tersedia untuk menjaga si kecil tetap aktif, gembira, dan bersosialisasi.',
      icon: <Smile className="text-orange-600" size={24} />,
      bgColor: 'bg-orange-50 border-orange-100',
    },
    {
      title: 'Spot Foto Instagramable',
      description: 'Berbagai dekorasi alamiah, jembatan kayu di atas kolam, dan lanskap saung apung yang cantik untuk album foto Anda.',
      icon: <Camera className="text-indigo-600" size={24} />,
      bgColor: 'bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Parkir Luas & Aman',
      description: 'Area parkir mobil dan motor memadai yang dijaga oleh tim keamanan terlatih demi kenyamanan kunjungan Anda.',
      icon: <Car className="text-gray-600" size={24} />,
      bgColor: 'bg-gray-100 border-gray-200',
    },
    {
      title: 'Sewa Tempat Fleksibel',
      description: 'Lahan lapang dengan tata letak adaptif untuk rapat formal, acara arisan, gathering korporat, hingga pernikahan.',
      icon: <Maximize className="text-teal-600" size={24} />,
      bgColor: 'bg-teal-50 border-teal-100',
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
            10 Keunggulan Wisata Ikan Tarumajaya
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Kami mendedikasikan kenyamanan penuh bagi setiap pengunjung lewat perpaduan fasilitas prima dan keindahan alam pedesaan yang menawan.
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

import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, MapPin, Smile, Users, Fish } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Pengunjung Ceria', value: '15,000+', icon: <Smile className="text-emerald-500" size={20} /> },
    { label: 'Jenis Ikan Air Tawar', value: '8+', icon: <Fish className="text-teal-500" size={20} /> },
    { label: 'Kapasitas Acara', value: '300+', icon: <Users className="text-amber-600" size={20} /> },
  ];

  return (
    <section id="tentang" className="py-24 bg-gray-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text & Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles size={12} />
              Mengenal Lebih Dekat
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
            >
              Selamat Datang di <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-700">
                Wisata Ikan Tarumajaya
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed text-sm sm:text-base font-light"
            >
              Wisata Ikan Tarumajaya merupakan destinasi wisata keluarga unggulan yang memadukan rekreasi alam, edukasi budidaya ikan air tawar, petualangan kuliner, dan kolam pemancingan yang luas dalam satu kesatuan lokasi yang sejuk dan asri.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 leading-relaxed text-sm sm:text-base font-light"
            >
              Kami mengundang Anda untuk melepaskan kepenatan dari hiruk-pikuk perkotaan di bawah naungan saung bambu kami yang teduh di atas hamparan air kolam yang tenang. Rasakan kepuasan menikmati olahan kuliner ikan super segar langsung hasil tangkapan sendiri, nikmati terapi ikan gratis demi kebugaran tubuh, serta fasilitasi buah hati Anda dengan berbagai wahana permainan anak yang edukatif dan menyehatkan.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-2">
                    {stat.icon}
                  </div>
                  <h4 className="font-display font-bold text-gray-900 text-lg sm:text-xl leading-none">{stat.value}</h4>
                  <p className="font-sans text-[10px] sm:text-xs text-gray-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Operational & Info Card Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl bg-gradient-to-b from-emerald-600 to-teal-800 p-8 text-white shadow-2xl overflow-hidden border border-emerald-500/20"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-6">
                <h3 className="font-display font-bold text-xl tracking-tight pb-3 border-b border-white/20">
                  Informasi Operasional
                </h3>

                {/* Jam Buka */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Jam Operasional</h4>
                    <p className="font-sans text-xs text-emerald-100/90 mt-1 leading-relaxed">
                      Setiap Hari<br />
                      Pukul <strong className="text-white">08.00 - 21.00 WIB</strong>
                    </p>
                  </div>
                </div>

                {/* Tiket Masuk */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Calendar className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Tiket Masuk & Reservasi</h4>
                    <p className="font-sans text-xs text-emerald-100/90 mt-1 leading-relaxed">
                      Masuk area mulai dari <strong className="text-white">Rp 10.000</strong> per orang.<br />
                      Fasilitas terapi ikan tersedia <strong className="text-white">Gratis</strong> untuk seluruh pengunjung.
                    </p>
                  </div>
                </div>

                {/* Alamat Singkat */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">Alamat Lokasi</h4>
                    <p className="font-sans text-xs text-emerald-100/90 mt-1 leading-relaxed">
                      Jl. Mutiara Gading Raya, Setia Asih, Kecamatan Tarumajaya, Kabupaten Bekasi, Jawa Barat 17215.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      const element = document.querySelector('#kontak');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 px-4 bg-white hover:bg-emerald-50 text-emerald-800 font-sans font-bold text-xs rounded-xl tracking-wider uppercase transition-colors shadow-md shadow-emerald-950/20"
                  >
                    Petunjuk Rute & Google Maps
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

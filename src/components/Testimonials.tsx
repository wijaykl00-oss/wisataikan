import { motion } from 'motion/react';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Ibu Sari Wulandari',
      role: 'Pengunjung Keluarga (Bekasi)',
      text: 'Tempatnya nyaman banget, cocok untuk liburan keluarga! Suasananya asri dan adem, anak-anak senang banget bisa main di area bermain sambil lihat kolam ikan. Pasti balik lagi!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 2,
      name: 'Bapak Roni Fauzan',
      role: 'Komunitas Mancing (Karawang)',
      text: 'Suasananya adem, banyak spot foto yang bagus, dan makanannya enak! Kami sekeluarga sangat menikmati waktu di sini. Area pemancingannya juga luas dan nyaman. Recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 3,
      name: 'Ibu Dewi Kusuma',
      role: 'Gathering Komunitas (Jakarta)',
      text: 'Pelayanannya ramah dan tempatnya bersih. Kami mengadakan gathering komunitas di sini dan semua berjalan lancar. Areanya luas, tempatnya asri, dan harganya terjangkau. Sangat direkomendasikan!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-gray-50 overflow-hidden font-sans">
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
            <Sparkles size={12} />
            Kata Pengunjung Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Testimoni & Kesan Pengunjung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Ribuan pengunjung telah merasakan pengalaman wisata yang menyenangkan dan berkesan. Berikut penuturan jujur dari mereka.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative hover:shadow-lg hover:border-emerald-500/10 transition-all group"
            >
              {/* Quote icon overlay */}
              <div className="absolute top-6 right-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
                <Quote size={48} />
              </div>

              {/* Stars rating */}
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial review text */}
              <p className="text-gray-600 text-sm leading-relaxed font-light italic mb-8">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-emerald-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="font-sans text-[11px] text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

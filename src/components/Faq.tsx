import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Apakah tersedia area parkir kendaraan?',
      answer: 'Ya, tersedia area parkir kendaraan yang memadai baik untuk sepeda motor maupun mobil pribadi. Parkir tersedia di dalam area wisata sehingga kunjungan Anda semakin nyaman dan aman.'
    },
    {
      id: 2,
      question: 'Apakah Wisata Ikan Sungai Rindu cocok untuk anak-anak?',
      answer: 'Ya, sangat cocok! Wisata Ikan Sungai Rindu dirancang untuk wisata keluarga dan sangat ramah anak. Tersedia area bermain anak yang aman dan menyenangkan, serta suasana alam yang nyaman untuk seluruh keluarga termasuk balita hingga anak-anak.'
    },
    {
      id: 3,
      question: 'Apakah bisa digunakan untuk gathering atau acara kelompok?',
      answer: 'Ya, tersedia area yang cukup luas dan representatif untuk gathering keluarga besar, komunitas, arisan, reuni sekolah, ulang tahun, acara perusahaan, dan berbagai kegiatan kelompok lainnya. Hubungi kami via WhatsApp untuk informasi ketersediaan dan paket gathering.'
    },
    {
      id: 4,
      question: 'Apakah tersedia tempat makan dan kuliner di lokasi?',
      answer: 'Ya, tersedia area kuliner dengan berbagai menu pilihan. Nikmati hidangan berbahan dasar ikan segar dan menu pilihan lainnya sambil menikmati suasana alam yang asri dan menyegarkan selera.'
    },
    {
      id: 5,
      question: 'Berapa jam operasional Wisata Ikan Sungai Rindu?',
      answer: 'Wisata Ikan Sungai Rindu buka setiap hari selama 24 jam. Untuk informasi lebih lanjut mengenai layanan dan fasilitas di waktu tertentu, silakan hubungi kami via WhatsApp di 0877-6094-3079.'
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Pertanyaan Umum
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            F.A.Q • Pertanyaan Umum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Masih ragu atau butuh informasi cepat? Temukan jawaban atas pertanyaan yang paling sering ditanyakan pengunjung kami di bawah ini.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-500/30 bg-emerald-50/10 shadow-md' 
                    : 'border-gray-100 bg-white shadow-sm hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                    }`}>
                      <HelpCircle size={18} />
                    </div>
                    <span className={`font-display font-bold text-sm md:text-base transition-colors ${
                      isOpen ? 'text-emerald-950' : 'text-gray-900 group-hover:text-emerald-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen ? 'border-emerald-500/30 text-emerald-600 bg-emerald-50' : 'border-gray-200 text-gray-400'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-11 border-t border-dashed border-gray-100/50">
                        <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

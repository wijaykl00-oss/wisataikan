import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useWhatsAppLink, openWhatsApp } from '../utils/whatsapp';

import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock
} from 'lucide-react';

export default function Contact() {
  const waLink = useWhatsAppLink(
    '6287760943079',
    'Halo Wisata Ikan Sungai Rindu, saya ingin bertanya informasi lebih lanjut.'
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '1-5',
    service: 'Area Wisata Keluarga',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'Area Wisata Keluarga',
    'Kolam Pemancingan',
    'Gazebo / Tempat Bersantai',
    'Area Kuliner',
    'Spot Foto',
    'Area Bermain Anak',
    'Gathering Keluarga & Komunitas'
  ];

  const guestOptions = [
    { label: 'Keluarga Kecil (1-5 orang)', value: '1-5' },
    { label: 'Keluarga Sedang (6-12 orang)', value: '6-12' },
    { label: 'Rombongan (13-25 orang)', value: '13-25' },
    { label: 'Gathering/Komunitas (25+ orang)', value: '25+' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon lengkapi Nama dan No WhatsApp Anda.');
      return;
    }

    const formattedDate = formData.date
      ? new Date(formData.date).toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Belum ditentukan';

    const waText = `Halo Admin Wisata Ikan Sungai Rindu! 🌿

Saya ingin bertanya / Pre-Reservasi Kunjungan:

• *Nama Lengkap*: ${formData.name}
• *No. WhatsApp*: ${formData.phone}
• *Rencana Tanggal*: ${formattedDate}
• *Perkiraan Jumlah Orang*: ${formData.guests} orang
• *Layanan yang Diminati*: ${formData.service}
${formData.notes ? `• *Catatan Tambahan*: ${formData.notes}` : ''}

Mohon informasi ketersediaan dan detail lebih lanjut. Terima kasih! 🙏`;

    setIsSuccess(true);
    
    setTimeout(() => {
      openWhatsApp('6287760943079', waText);
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <section id="kontak" className="py-24 bg-gray-50 overflow-hidden font-sans">
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
            Hubungi & Kunjungi Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight"
          >
            Rencanakan Kunjungan Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mt-4 font-light text-sm sm:text-base leading-relaxed"
          >
            Isi form di bawah untuk menghubungi kami via WhatsApp, atau langsung hubungi nomor kami. Siap melayani 24 jam setiap hari!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Info & Map (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-900 text-sm">WhatsApp Call & Chat</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-semibold">+62 877-6094-3079</p>
                  <p className="text-gray-400 text-[10px]">Tersedia 24 Jam, siap melayani</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-900 text-sm">Alamat Lokasi</h4>
                  <p className="text-gray-600 text-xs leading-normal font-light">
                    Kp. Sembilangan RT 06/RW 04, Hurip Jaya, Babelan, Bekasi
                  </p>
                  <a 
                    href="https://www.google.com/maps?q=-6.075287,107.006628"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] text-amber-800 font-bold hover:underline"
                  >
                    Buka Google Maps &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Jam Operasional Card */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <Clock size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-gray-900 text-sm">Jam Operasional</h4>
                <p className="text-gray-600 text-xs font-light">
                  Buka Setiap Hari — <strong className="text-gray-900 font-semibold">24 Jam</strong>
                </p>
                <p className="text-gray-400 text-[10px]">Kami siap menyambut Anda kapan saja!</p>
              </div>
            </div>

            {/* Live Interactive Map Box */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm overflow-hidden h-[360px] relative">
              <iframe
                title="Google Maps Wisata Ikan Sungai Rindu Babelan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.4102434144147!2d107.00662817421384!3d-6.075287493910798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a26b5fbc2dca9%3A0xb5aba146873a9b2d!2sW2F5%2BVMP%2C%20Hruip%20Jaya%2C%20Kec.%20Babelan%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1782613327514!5m2!1sid!2sid"
                className="w-full h-full rounded-2xl border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-800 text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide">Butuh Info Cepat? Hubungi Kami Sekarang!</h4>
                <p className="text-[11px] text-emerald-200 font-light mt-0.5">Kami siap membantu reservasi, info harga, dan paket wisata Anda.</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 flex items-center gap-2 bg-white text-emerald-800 font-sans font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm hover:bg-emerald-50 transition-colors whitespace-nowrap"

              >
                <Phone size={14} />
                Chat WhatsApp
              </a>
            </div>

          </div>

          {/* Column 2: Contact Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl text-gray-900 tracking-tight">
                Hubungi Kami
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mt-2">
                Isi form ini dan pesan Anda akan langsung dikirimkan via WhatsApp ke tim kami.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                
                {/* Nama Lengkap */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700">Nama Lengkap Anda</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Contoh: Sari Wulandari"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                  />
                </div>

                {/* No WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700">Nomor WhatsApp Aktif</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Contoh: 087760943079"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                  />
                </div>

                {/* Grid Tanggal & Jumlah Tamu */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="date" className="block text-xs font-semibold text-gray-700">Rencana Tanggal Datang</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="guests" className="block text-xs font-semibold text-gray-700">Jumlah Orang</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                    >
                      {guestOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Layanan Utama */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-xs font-semibold text-gray-700">Layanan yang Diminati</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                  >
                    {servicesList.map(item => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* Catatan Tambahan */}
                <div className="space-y-1.5">
                  <label htmlFor="notes" className="block text-xs font-semibold text-gray-700">Catatan Tambahan (Opsional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Contoh: Ingin reservasi gazebo untuk 10 orang di hari Minggu pagi."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSuccess}
                  className="w-full py-4 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-sans font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSuccess ? (
                    <>
                      <CheckCircle size={18} className="animate-bounce" />
                      Mengarahkan ke WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Hubungi Kami via WhatsApp
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

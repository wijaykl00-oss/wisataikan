import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds to grab attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '6281388364632';
    const text = message ? encodeURIComponent(message) : encodeURIComponent('Halo Wisata Ikan Tarumajaya, saya tertarik untuk berkunjung bersama keluarga. Bisakah dibantu informasi lebih lanjut?');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleDirectClick = () => {
    setIsOpen(true);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {/* Tooltip Alert */}
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-2 w-72 bg-white rounded-2xl shadow-xl border border-emerald-100 p-4"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={14} />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-800">Customer Service</p>
                <p className="text-xs text-gray-500 mt-0.5">Halo! Ada yang bisa kami bantu hari ini untuk rencana liburan Anda?</p>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button 
                onClick={() => {
                  setIsOpen(true);
                  setShowTooltip(false);
                }}
                className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1.5 px-3 rounded-lg shadow-sm transition-all"
              >
                Tanya Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      <User size={20} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Wisata Ikan Tarumajaya</h4>
                    <p className="text-xs text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping"></span>
                      Online • Siap membantu
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white bg-white/10 p-1.5 rounded-full transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gray-50 h-48 overflow-y-auto text-xs space-y-3">
              <div className="bg-emerald-100 text-emerald-950 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                <p className="font-semibold text-[10px] text-emerald-800 mb-0.5">Admin Wisata Ikan</p>
                Selamat datang di Wisata Ikan Tarumajaya! 🎣 

Silakan sampaikan pertanyaan Anda mengenai reservasi tempat, harga tiket, kuliner saung, atau kolam pemancingan di bawah ini.
              </div>
              <div className="text-gray-400 text-center text-[10px] my-2">
                Hari ini
              </div>
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                placeholder="Tulis pesan ke WhatsApp..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-gray-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-gray-800"
              />
              <button
                type="submit"
                className="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 transition-colors"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        id="floating-whatsapp-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDirectClick}
        className="relative w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
        </span>
        <MessageCircle size={28} className="animate-pulse" />
      </motion.button>
    </div>
  );
}

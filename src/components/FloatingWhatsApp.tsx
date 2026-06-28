import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { openWhatsApp } from '../utils/whatsapp';


const WA_NUMBER = '6287760943079';
const DEFAULT_MESSAGE = 'Halo Wisata Ikan Sungai Rindu 🌿, saya tertarik untuk berkunjung bersama keluarga. Bisakah dibantu informasi lebih lanjut?';

interface FloatingWhatsAppProps {
  message?: string;
}

export default function FloatingWhatsApp({ message }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMessage.trim()
      ? inputMessage
      : (message || DEFAULT_MESSAGE);
    openWhatsApp(WA_NUMBER, text);
    setIsOpen(false);
    setInputMessage('');
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
                <p className="text-xs text-gray-500 mt-0.5">Halo! Ada yang bisa kami bantu untuk rencana wisata Anda?</p>
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
                    <h4 className="font-semibold text-sm">Wisata Ikan Sungai Rindu</h4>
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
                <p className="font-semibold text-[10px] text-emerald-800 mb-0.5">Admin Wisata Ikan Sungai Rindu</p>
                Selamat datang di Wisata Ikan Sungai Rindu! 🌿🎣{'\n\n'}
                Silakan sampaikan pertanyaan Anda mengenai kunjungan, harga, fasilitas, atau reservasi tempat di bawah ini.
              </div>
              <div className="bg-emerald-100 text-emerald-950 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                <p className="text-[10px] leading-relaxed">
                  📍 Kp. Sembilangan RT 06/RW 04, Hurip Jaya, Babelan, Bekasi<br />
                  ⏰ Buka 24 Jam Setiap Hari
                </p>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-100 flex gap-2 bg-white">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tulis pesan Anda..."
                className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-gray-700"
              />
              <button
                type="submit"
                className="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={handleDirectClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center text-white hover:shadow-emerald-500/50 transition-shadow"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full border-2 border-emerald-400 animate-ping opacity-30"></span>
      </motion.button>
    </div>
  );
}

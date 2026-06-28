import { useState, useEffect } from 'react';

/**
 * Normalizes phone number into international format without any non-digit characters.
 */
export const normalizePhoneNumber = (phoneNumber: string): string => {
  let clean = phoneNumber.replace(/\D/g, '');
  // If starts with '0', replace with '62' (Indonesia standard country code)
  if (clean.startsWith('0')) {
    clean = '62' + clean.slice(1);
  }
  return clean;
};

/**
 * Custom React hook to dynamically construct WhatsApp links based on client device.
 * On mobile devices, this returns the `whatsapp://send` URI scheme to directly launch the application.
 * On desktop, it returns the standard `https://wa.me` universal link.
 */
export function useWhatsAppLink(phoneNumber: string, text?: string) {
  const [link, setLink] = useState(() => {
    const cleanNumber = normalizePhoneNumber(phoneNumber);
    const query = text ? `?text=${encodeURIComponent(text)}` : '';
    return `https://wa.me/${cleanNumber}${query}`;
  });

  useEffect(() => {
    const cleanNumber = normalizePhoneNumber(phoneNumber);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      const query = text ? `&text=${encodeURIComponent(text)}` : '';
      setLink(`whatsapp://send?phone=${cleanNumber}${query}`);
    }
  }, [phoneNumber, text]);

  return link;
}

/**
 * Programmatically opens WhatsApp.
 * On mobile devices, setting window.location.href avoids browser popup blockers.
 * On desktop, we open the link in a new window.
 */
export const openWhatsApp = (phoneNumber: string, text?: string) => {
  const cleanNumber = normalizePhoneNumber(phoneNumber);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    const query = text ? `&text=${encodeURIComponent(text)}` : '';
    window.location.href = `whatsapp://send?phone=${cleanNumber}${query}`;
  } else {
    const query = text ? `?text=${encodeURIComponent(text)}` : '';
    window.open(`https://wa.me/${cleanNumber}${query}`, '_blank', 'noopener,noreferrer');
  }
};

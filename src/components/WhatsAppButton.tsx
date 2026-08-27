import React from 'react';
import { MessageCircle, Phone, Ruler } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';

interface WhatsAppButtonProps {
  onOpenQuoteModal: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenQuoteModal }) => {
  const waUrl = createWhatsAppLink("Merhaba, Sistem Marangoz'dan özel ölçü mobilya ve marangozluk hizmeti hakkında bilgi ve fiyat teklifi almak istiyorum.");

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Widget */}
      <div className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-40 hidden sm:flex flex-col items-end space-y-2 group">
        <div className="bg-[#1A1A1A] text-stone-200 text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          💬 Salih Usta'ya WhatsApp'tan Yazın
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
          aria-label="WhatsApp İletişim"
        >
          <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F0F0F]/95 backdrop-blur-md border-t border-white/10 p-2.5 sm:hidden shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          
          {/* Mobile Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 bg-[#1A1A1A] active:bg-[#222222] text-white font-bold uppercase tracking-wider py-3 border border-white/10 text-xs"
          >
            <Phone className="w-4 h-4 text-[#C89D76]" />
            <span>0535 316 19 50</span>
          </a>

          {/* Mobile WhatsApp Button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20bd5a] text-white font-extrabold py-3 rounded-full text-xs shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Ölçü Al</span>
          </a>

        </div>
      </div>
    </>
  );
};

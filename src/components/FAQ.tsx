import React, { useState } from 'react';
import { FAQS, FAQItem, createWhatsAppLink } from '../data/siteData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-16 sm:py-24 bg-[#0F0F0F] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Aklınızdaki Soruların Cevapları
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Sık Sorulan <span className="font-extrabold not-italic text-[#C89D76] uppercase">Sorular</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Özel ölçü mobilya imalatı, tamirat, ölçü alımı ve teslimat süreçleriyle ilgili merak edilenler.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq: FAQItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg font-serif uppercase tracking-wide hover:text-[#C89D76] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C89D76] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C89D76]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-stone-300 text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                      <span>Başka bir sorunuz mu var?</span>
                      <a
                        href={createWhatsAppLink(`Merhaba, SSS sayfanızdaki "${faq.question}" konusuyla ilgili detay öğrenmek istiyorum.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C89D76] font-bold uppercase text-[11px] tracking-wider hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp'tan Sor</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra help box */}
        <div className="mt-12 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-2xl text-center space-y-3">
          <h3 className="text-lg font-bold text-white font-serif uppercase tracking-wide">
            Sorunuza yanıt bulamadınız mı?
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto">
            Usta ekibimize WhatsApp üzerinden direkt mesaj atabilir, projenizin fotoğrafını veya ölçüsünü paylaşarak anında bilgi alabilirsiniz.
          </p>
          <a
            href={createWhatsAppLink("Merhaba, Sistem Marangoz ekibine özel bir soru sormak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ustaya Direkt WhatsApp Mesajı Gönder</span>
          </a>
        </div>

      </div>
    </section>
  );
};

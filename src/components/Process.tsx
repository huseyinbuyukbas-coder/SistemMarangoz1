import React from 'react';
import { PROCESS_STEPS, BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';
import { MessageCircle, Ruler, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenQuoteModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="surec" className="py-16 sm:py-24 bg-[#141414] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Sıfır Hata Politikamız
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Özel Ölçü Mobilya <span className="font-extrabold not-italic text-[#C89D76] uppercase">Sürecimiz</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Sistem Marangoz'da sürprizlere yer yok. İlk fikirden montaja kadar şeffaf ve adım adım ilerliyoruz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-xl flex flex-col justify-between hover:border-[#C89D76]/60 transition-all group"
            >
              <div>
                {/* Step Counter Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-[#C89D76] italic font-serif">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300 bg-[#0F0F0F] px-2.5 py-1 border border-white/10">
                    Aşama {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-serif uppercase tracking-wide mb-2 group-hover:text-[#C89D76] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-stone-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D76] shrink-0" />
                <span>Müşteri Onaylı İlerleme</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-base font-bold text-white font-serif uppercase tracking-wide">
              Ev veya iş yeriniz için ölçü randevusu oluşturmak ister misiniz?
            </h4>
            <p className="text-stone-400 text-xs">
              Bahçelievler, Soğanlı ve çevre ilçeler için aynı gün veya size uygun tarihte yerinde keşif.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="bg-[#C89D76] hover:bg-[#b88c65] text-[#0F0F0F] font-black uppercase text-xs tracking-widest px-6 py-3.5 shadow-lg shrink-0 flex items-center gap-2 transition-all"
          >
            <span>Ölçü Randevusu Al</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

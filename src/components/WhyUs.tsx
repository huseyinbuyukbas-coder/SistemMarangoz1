import React from 'react';
import { WHY_US_POINTS, BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';
import { ShieldCheck, Star, Award, Ruler, Wrench, CheckCircle, ThumbsUp, MessageCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="neden-biz" className="py-16 sm:py-24 bg-[#0F0F0F] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Gerçek Müşteri Yorumlarından Doğan Güven
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Neden <span className="font-extrabold not-italic text-[#C89D76] uppercase">Sistem Marangoz?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Müşterilerimizin Google ve Yandex yorumlarında en çok vurguladığı, 2004'ten beri vazgeçmediğimiz ilkelerimiz.
          </p>
        </div>

        {/* Why Us Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-xl hover:border-[#C89D76]/60 transition-all space-y-3"
            >
              <div className="w-12 h-12 bg-[#0F0F0F] border border-[#C89D76]/30 flex items-center justify-center text-[#C89D76]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white font-serif uppercase tracking-wide">
                {point.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Examples Callout Card based on Customer Feedback */}
        <div className="mt-14 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C89D76] uppercase tracking-wider">
                <ThumbsUp className="w-4 h-4" />
                <span>Müşterilerimizin Gerçek Deneyimleri</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif uppercase tracking-wide">
                Zor Alanlar ve Özel Ölçüler İçin Çözüm Atölyesi
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic font-serif">
                "Çatı katındaki eğimli tavan dolabından, 253 cm milimetrik duvardan duvara çalışma masasına, neme dayanıklı kombi dolabından bozulan çekmece ray tamirine kadar her işte usta dürüstlüğüyle hareket ediyoruz."
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-stone-300 pt-2">
                <span className="bg-[#0F0F0F] px-3 py-1 border border-white/10">✓ Salih Usta & Bozo Usta</span>
                <span className="bg-[#0F0F0F] px-3 py-1 border border-white/10">✓ Çatı Katı Eğimli Dolap</span>
                <span className="bg-[#0F0F0F] px-3 py-1 border border-white/10">✓ 253 cm Masa İmalatı</span>
                <span className="bg-[#0F0F0F] px-3 py-1 border border-white/10">✓ Amerikan Kapı Tamiri</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F0F0F] p-5 border border-white/10 space-y-4 text-center">
              <div className="space-y-1">
                <div className="text-[#C89D76] font-black text-3xl italic font-serif">4.9 / 5.0</div>
                <div className="text-white font-bold text-sm uppercase tracking-wider">Google & Yandex Puan Ortalamamız</div>
                <p className="text-stone-400 text-xs">123 Google Yorumu • 11 Yandex Yorumu</p>
              </div>

              <a
                href={createWhatsAppLink("Merhaba, Salih Usta ile özel ölçü mobilyam hakkında görüşmek istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Salih Usta İle WhatsApp'tan Görüş</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

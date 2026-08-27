import React from 'react';
import { MessageCircle, Phone, Star, ShieldCheck, Ruler, Wrench, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const defaultWaUrl = createWhatsAppLink("Merhaba, Sistem Marangoz'dan özel ölçü mobilya hakkında bilgi ve fiyat teklifi almak istiyorum.");

  return (
    <section className="relative bg-[#0F0F0F] text-[#F5F2ED] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5 font-sans">
      {/* Background ambient skew element from Sophisticated Dark theme */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A] opacity-50 skew-x-[-12deg] translate-x-32 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pills & Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
              <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1.5 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.15em] uppercase">
                İstanbul • Bahçelievler • 2004'ten Beri
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-white/10 text-stone-200">
                <div className="flex items-center text-[#C89D76]">
                  <Star className="w-3.5 h-3.5 fill-[#C89D76] text-[#C89D76]" />
                  <span className="ml-1 font-bold text-white">{BUSINESS_INFO.googleRating}</span>
                </div>
                <span className="text-gray-600">|</span>
                <span className="text-stone-300 font-medium">123 Google Yorumu</span>
              </div>
            </div>

            {/* Main Hero Headline - Sophisticated Dark typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white italic font-serif">
              2004'ten Beri <br className="hidden sm:inline" />
              <span className="font-black not-italic text-white uppercase">Ahşabın Ruhu,</span> <br />
              <span className="text-[#C89D76] not-italic font-bold">Usta İşçilik.</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Mutfak dolabından gardıroba, portmantodan çalışma odanıza kadar her alanı hayalinizdeki milimetrik ölçülerle yeniden inşa ediyor ve onarıyoruz.
            </p>

            {/* Core Promise Banner with Sophisticated Dark Left Border Accent */}
            <div className="bg-[#1A1A1A] border-l-4 border-[#C89D76] p-4 shadow-xl text-stone-200 text-xs sm:text-sm flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#C89D76] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Sistem Marangoz Sözü:</strong> Ölçünüzü alıyoruz, ihtiyacınıza göre tasarlıyoruz, atölyemizde üretiyor ve zamanında temiz şekilde monte ediyoruz.
              </span>
            </div>

            {/* High-Converting CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary WhatsApp CTA */}
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg px-6 py-4 rounded-full shadow-xl shadow-green-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
                <span>WhatsApp'tan Ölçü Talep Et</span>
              </a>

              {/* Secondary Phone CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-[#1A1A1A] hover:bg-[#222222] text-white font-bold text-base sm:text-lg px-5 py-4 rounded-xl border border-white/10 transition-all hover:border-[#C89D76]/50"
              >
                <Phone className="w-5 h-5 text-[#C89D76]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* Quick Quote Modal Launcher */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="sm:hidden inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#C89D76] underline py-1"
              >
                <span>Veya formu doldurarak hızlı teklif al</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Feature Checkmarks */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C89D76] shrink-0" />
                <span>Milimetrik Ölçü</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C89D76] shrink-0" />
                <span>Zamanında Teslim</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#C89D76] shrink-0" />
                <span>Usta İşçiliği</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C89D76] shrink-0" />
                <span>Uygun Fiyat</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase in Sophisticated Dark Theme */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Card Wrapper */}
              <div className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-5 sm:p-6 shadow-2xl space-y-5">
                
                {/* Image Showcase Header */}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                    alt="Sistem Marangoz Bahçelievler Özel Ölçü Mutfak ve Mobilya Üretimi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/95 via-[#0F0F0F]/40 to-transparent flex flex-col justify-end p-4">
                    <span className="bg-[#C89D76] text-[#0F0F0F] font-black text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm w-max mb-1">
                      Atölyeden Doğrudan Evinize
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-lg uppercase font-serif tracking-wide">
                      Bahçelievler Soğanlı Atölyemiz
                    </h3>
                    <p className="text-stone-400 text-xs">
                      Soğanlı, Yalaz Sk. 9B, Bahçelievler / İstanbul
                    </p>
                  </div>
                </div>

                {/* Ratings & Stats Grid in Sophisticated Dark style */}
                <div className="grid grid-cols-2 gap-3 bg-[#0F0F0F] p-3.5 border border-white/5">
                  <div className="text-center border-r border-white/10 pr-2">
                    <div className="flex items-center justify-center gap-1 text-[#C89D76] font-black text-xl italic">
                      <Star className="w-4 h-4 fill-[#C89D76]" />
                      <span>{BUSINESS_INFO.googleRating}</span>
                      <span className="text-xs text-gray-500 font-normal not-italic">/ 5</span>
                    </div>
                    <div className="text-[11px] text-gray-300 font-medium mt-0.5 uppercase tracking-wider">
                      123 Google Yorumu
                    </div>
                  </div>

                  <div className="text-center pl-2">
                    <div className="flex items-center justify-center gap-1 text-red-400 font-black text-xl italic">
                      <Star className="w-4 h-4 fill-red-400" />
                      <span>{BUSINESS_INFO.yandexRating}</span>
                      <span className="text-xs text-gray-500 font-normal not-italic">/ 5</span>
                    </div>
                    <div className="text-[11px] text-gray-300 font-medium mt-0.5 uppercase tracking-wider">
                      11 Yandex Yorumu
                    </div>
                  </div>
                </div>

                {/* Popular Services Quick Pills */}
                <div>
                  <div className="text-[10px] font-bold text-[#C89D76] mb-2 uppercase tracking-[0.2em]">
                    Popüler Özel Ölçüler
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Mutfak Dolabı', 'Gardırop & Portmanto', '253 cm Masa', 'Çatı Katı Dolabı', 'Kombi Dolabı', 'Kapı & Ray Tamiri'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => onOpenQuoteModal(tag)}
                        className="bg-[#222222] hover:bg-[#C89D76] hover:text-[#0F0F0F] text-stone-200 text-xs px-2.5 py-1 rounded border border-white/5 transition-all flex items-center gap-1 font-medium"
                      >
                        <span>{tag}</span>
                        <span className="text-[#C89D76] hover:text-[#0F0F0F] text-[10px]">+</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Interactive Button */}
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full bg-[#C89D76] hover:bg-[#b88c65] text-[#0F0F0F] font-black uppercase text-xs tracking-widest py-3.5 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Ölçünüze Özel Fiyat Hesaapla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SERVICE_AREAS, BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';
import { MapPin, Navigation, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  return (
    <section id="bolgeler" className="py-16 sm:py-24 bg-[#141414] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Yerel SEO & Mobil Ekip Servisi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Bahçelievler & İstanbul <span className="font-extrabold not-italic text-[#C89D76] uppercase">Hizmet Bölgelerimiz</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Atölyemiz Bahçelievler Soğanlı Mahallesi'ndedir. Ana hizmet sahamız olan Bahçelievler ve çevre ilçeler başta olmak üzere tüm İstanbul genelinde projelere marangozluk ve mobilya hizmeti sunuyoruz.
          </p>
        </div>

        {/* Areas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-xl hover:border-[#C89D76]/60 transition-all space-y-3"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-serif uppercase tracking-wide">
                    {area.name}
                  </h3>
                </div>

                {area.primary && (
                  <span className="bg-[#0F0F0F] text-[#C89D76] text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest border border-[#C89D76]/30">
                    Ana Bölge
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {area.desc}
              </p>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                <span>Hızlı Ölçü İmkanı</span>
                <a
                  href={createWhatsAppLink(`Merhaba, ${area.name} bölgesinden özel ölçü mobilya ve keşif talebim var.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C89D76] font-bold uppercase text-[11px] tracking-wider hover:underline flex items-center gap-1"
                >
                  <span>Randevu Al</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Address Card & Map info */}
        <div className="mt-14 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[#C89D76] text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-4 h-4" />
              <span>Atölye & Merkez Adresimiz</span>
            </div>

            <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-wide">
              Sistem Marangoz — Soğanlı Atölyemiz
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed">
              <strong>Adres:</strong> {BUSINESS_INFO.address}<br />
              <strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi: 08:30 - 19:00 (Açık)<br />
              <strong>Telefon:</strong> {BUSINESS_INFO.phoneDisplay}
            </p>

            <p className="text-stone-400 text-xs">
              Mutfak dolabı, gardırop, kapak renkleri ve ahşap numunelerimizi yerinde görmek için atölyemizi ziyaret edebilirsiniz.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.name + " " + BUSINESS_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F0F0F] hover:bg-[#222222] text-white font-bold py-3.5 px-4 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              <MapPin className="w-4 h-4 text-[#C89D76]" />
              <span>Google Haritalar'da Yol Tarifi Al</span>
            </a>

            <a
              href={createWhatsAppLink("Merhaba, atölyenizin konumunu gönderebilir misiniz?")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-full transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp'tan Konum İste</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { BUSINESS_INFO, SERVICES, createWhatsAppLink } from '../data/siteData';
import { Phone, MapPin, Clock, Instagram, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-stone-400 font-sans border-t border-white/5 pt-16 pb-24 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#C89D76] text-[#0F0F0F] font-black text-lg flex items-center justify-center font-serif">
                S
              </div>
              <span className="font-extrabold text-xl text-white font-serif tracking-tight">
                SİSTEM <span className="text-[#C89D76]">MARANGOZ</span>
              </span>
            </div>

            <p className="text-stone-300 leading-relaxed text-xs">
              <strong>Sistem Marangoz — 2004'ten beri ahşap ve mobilya işleri.</strong><br />
              Bahçelievler, Soğanlı ve İstanbul genelinde evinizin milimetrik ölçülerine özel mutfak dolabı, gardırop, portmanto imalatı ve mobilya tamiratı.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <span className="bg-[#1A1A1A] border border-white/10 text-stone-300 text-xs px-3 py-1 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D76]" />
                <span>Google 4.9 / 5 (123 Yorum)</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm font-serif uppercase tracking-wider border-b border-white/10 pb-2">
              Öne Çıkan Hizmetler
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Özel Ölçü Mutfak Dolabı</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Portmanto & Vestiyer İmalatı</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Gardırop & Köşe Dolapları</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• 253 cm Özel Çalışma Masası</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Çatı Katı Eğimli Dolaplar</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Çekmece & Ray Tamiratı</a></li>
              <li><a href="#hizmetler" className="hover:text-[#C89D76] transition-colors">• Oda & Amerikan Kapı Tamiri</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas SEO */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm font-serif uppercase tracking-wider border-b border-white/10 pb-2">
              Hizmet Bölgelerimiz
            </h4>
            <ul className="space-y-1 text-xs">
              <li>Bahçelievler / Soğanlı</li>
              <li>Şirinevler / Yenibosna</li>
              <li>Kocasinan / Güngören</li>
              <li>Bakırköy / Bağcılar</li>
              <li>Küçükçekmece / Zeytinburnu</li>
              <li className="text-[#C89D76] font-semibold pt-1">İstanbul Geneli Servis</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm font-serif uppercase tracking-wider border-b border-white/10 pb-2">
              İletişim & Konum
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89D76] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C89D76] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white font-bold hover:text-[#C89D76]">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C89D76] shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </p>

              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#C89D76] shrink-0" />
                <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#C89D76]">
                  @_sistem_mobilya
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Local SEO keywords bar */}
        <div className="border-t border-white/5 pt-6 text-[11px] text-stone-500 space-y-2">
          <div className="font-semibold text-stone-400 uppercase tracking-wider text-[10px]">Yerel SEO Anahtar Kelimeler:</div>
          <p className="leading-relaxed">
            Bahçelievler marangoz • İstanbul marangoz ustası • Bahçelievler özel ölçü mobilya imalatı • Soğanlı marangoz atölyesi • Şirinevler mutfak dolabı • Kocasinan gardırop portmanto imalatı • Yenibosna mobilya tamiri • Bakırköy marangoz tamirat • Bağcılar kombi dolabı • Güngören Amerikan kapı tamiri • 253 cm masa imalatı • çatı katı dolabı • çekmece ray değişimi.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Sistem Marangoz. Tüm hakları saklıdır.
          </div>

          <div className="flex items-center space-x-4">
            <a href="#hizmetler" className="hover:text-[#C89D76]">Hizmetler</a>
            <a href="#yorumlar" className="hover:text-[#C89D76]">Yorumlar</a>
            <a href="#iletisim" className="hover:text-[#C89D76]">İletişim</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

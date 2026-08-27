import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Nasıl Çalışıyoruz?', href: '#surec' },
    { name: 'Neden Biz?', href: '#neden-biz' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Hizmet Bölgeleri', href: '#bolgeler' },
    { name: 'S.S.S.', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="w-full font-sans bg-[#0F0F0F] text-[#F5F2ED]">
      {/* Top bar for corporate info */}
      <div className="bg-[#141414] text-stone-300 text-xs py-2 px-4 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C89D76]" />
              <span>{BUSINESS_INFO.addressDistrict}</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#C89D76]" />
              <span>{BUSINESS_INFO.workingHoursShort}</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#C89D76] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>2004'ten Beri Usta Güvencesi</span>
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-1 bg-[#1A1A1A] px-2.5 py-1 rounded text-[11px] border border-white/10">
              <span className="font-bold text-[#C89D76]">Google:</span>
              <div className="flex items-center text-[#C89D76]">
                <Star className="w-3 h-3 fill-[#C89D76] text-[#C89D76]" />
                <span className="ml-1 font-semibold text-white">{BUSINESS_INFO.googleRating}</span>
              </div>
              <span className="text-stone-400">({BUSINESS_INFO.googleReviewCount} Yorum)</span>
            </div>

            <div className="flex items-center gap-1 bg-[#1A1A1A] px-2.5 py-1 rounded text-[11px] border border-white/10">
              <span className="font-bold text-red-400">Yandex:</span>
              <div className="flex items-center text-[#C89D76]">
                <Star className="w-3 h-3 fill-[#C89D76] text-[#C89D76]" />
                <span className="ml-1 font-semibold text-white">{BUSINESS_INFO.yandexRating}</span>
              </div>
              <span className="text-stone-400">({BUSINESS_INFO.yandexReviewCount} Yorum)</span>
            </div>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#C89D76] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89D76]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav
        className={`w-full transition-all duration-300 z-40 ${
          isScrolled
            ? 'sticky top-0 bg-[#0F0F0F]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3'
            : 'bg-[#0F0F0F] text-white py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#C89D76] flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform">
              <span className="text-[#0F0F0F] font-black text-xl italic">S</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-serif uppercase">
                  SİSTEM <span className="text-[#C89D76]">MARANGOZ</span>
                </span>
                <span className="bg-[#C89D76]/10 text-[#C89D76] text-[10px] font-semibold px-2 py-0.5 rounded border border-[#C89D76]/30 hidden sm:inline-block">
                  2004'ten Beri
                </span>
              </div>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-semibold">
                Bahçelievler / İstanbul • Mobilya & Tasarım
              </p>
            </div>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-[#C89D76] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C89D76] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#222222] text-[#F5F2ED] px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#C89D76]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hızlı Ölçü Al</span>
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2 bg-[#1A1A1A] text-[#C89D76] rounded-lg sm:hidden border border-white/10"
              aria-label="Telefon et"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-[#1A1A1A] text-stone-200 rounded-lg hover:bg-[#222222] focus:outline-none border border-white/10"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C89D76]" /> Bahçelievler / İstanbul
              </span>
              <span className="flex items-center gap-1 text-[#C89D76] font-medium">
                <Star className="w-3.5 h-3.5 fill-[#C89D76]" /> 4.9 (123 Yorum)
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-stone-200 hover:text-[#C89D76] hover:bg-[#1A1A1A] px-3 py-2.5 rounded-md text-base font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3 rounded-lg font-bold text-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C89D76]" />
                <span>Ara</span>
              </a>

              <a
                href={createWhatsAppLink("Merhaba, Sistem Marangoz'dan özel ölçü mobilya hakkında bilgi ve fiyat teklifi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

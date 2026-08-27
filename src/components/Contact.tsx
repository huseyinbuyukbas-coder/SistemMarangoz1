import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES, createWhatsAppLink } from '../data/siteData';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Özel Ölçü Mobilya');
  const [district, setDistrict] = useState('Bahçelievler');
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Merhaba Sistem Marangoz,\n\nBen ${name || 'Müşteri'}.\nTelefon: ${phone || 'Belirtilmedi'}\nHizmet: ${service}\nİlçe/Bölge: ${district}\n\nNot / İstek: ${note || 'Ölçü ve fiyat bilgisi almak istiyorum.'}`;
    const url = createWhatsAppLink(formattedMsg);
    window.open(url, '_blank');
  };

  return (
    <section id="iletisim" className="py-16 sm:py-24 bg-[#0F0F0F] text-[#F5F2ED] font-sans relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Hızlı İletişim & Randevu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Bizimle İletişime <span className="font-extrabold not-italic text-[#C89D76] uppercase">Geçin</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Bahçelievler atölyemize uğrayabilir, telefonla arayabilir veya WhatsApp üzerinden hemen ölçü & fiyat teklifi alabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Business Details Card */}
          <div className="lg:col-span-5 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 space-y-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-wide border-b border-white/10 pb-4">
              İşletme Bilgilerimiz
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#C89D76] uppercase tracking-wider">Atölye Adresi</div>
                <div className="text-sm font-semibold text-white">{BUSINESS_INFO.address}</div>
                <p className="text-xs text-stone-400">Bahçelievler / İstanbul</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#C89D76] uppercase tracking-wider">Telefon & Usta Hattı</div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-base font-bold text-white hover:text-[#C89D76] transition-colors block"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <p className="text-xs text-stone-400">Salih Usta & Bozo Usta Ekibi</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#C89D76] uppercase tracking-wider">Çalışma Saatleri</div>
                <div className="text-sm font-semibold text-white">{BUSINESS_INFO.workingHours}</div>
                <p className="text-xs text-emerald-400 font-semibold">● Açık / 19:00'a kadar</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30 shrink-0">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#C89D76] uppercase tracking-wider">Sosyal Medya</div>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-[#C89D76] transition-colors flex items-center gap-1"
                >
                  <span>@_sistem_mobilya</span>
                  <span>↗</span>
                </a>
                <p className="text-xs text-stone-400">Instagram'da güncel projelerimiz</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-[#0F0F0F] hover:bg-[#222222] text-white font-bold uppercase tracking-wider py-3 border border-white/10 text-xs"
              >
                <Phone className="w-4 h-4 text-[#C89D76]" />
                <span>Hemen Ara</span>
              </a>

              <a
                href={createWhatsAppLink("Merhaba, Sistem Marangoz'dan atölye adresinize gelmek için konum bilgisi almak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 text-xs shadow-md rounded-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konum İste</span>
              </a>
            </div>

          </div>

          {/* Right Column: WhatsApp Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4 space-y-1">
              <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-wide">
                Anında WhatsApp Teklif Formu
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm">
                Aşağıdaki bilgileri doldurun, sistem otomatik olarak WhatsApp mesajınızı hazırlayıp ustamıza bağlasın.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Ahmet Yılmaz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C89D76]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    placeholder="Örn: 053X XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C89D76]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    İhtiyacınız Olan Hizmet
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C89D76]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                    Bulunduğunuz İlçe / Mahalle
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C89D76]"
                  >
                    <option value="Bahçelievler (Soğanlı / Merkez)">Bahçelievler (Soğanlı / Merkez)</option>
                    <option value="Şirinevler / Yenibosna / Kocasinan">Şirinevler / Yenibosna / Kocasinan</option>
                    <option value="Bakırköy">Bakırköy</option>
                    <option value="Güngören">Güngören</option>
                    <option value="Bağcılar">Bağcılar</option>
                    <option value="Küçükçekmece">Küçükçekmece</option>
                    <option value="Zeytinburnu">Zeytinburnu</option>
                    <option value="Diğer İstanbul İlçesi">Diğer İstanbul İlçesi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                  Ölçü, Detay veya Özel Notunuz
                </label>
                <textarea
                  rows={3}
                  placeholder="Örn: 2 metre genişliğinde mutfak dolabı yaptırmak istiyorum. Yaklaşık fiyat nedir?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-[#0F0F0F] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C89D76]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-full text-base shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp İle Ustaya Mesaj Gönder</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D76]" />
                <span>Mesajınız doğrudan Salih Usta & Bozo Usta WhatsApp hattına iletilir.</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

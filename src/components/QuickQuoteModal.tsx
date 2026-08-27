import React, { useState } from 'react';
import { X, MessageCircle, Ruler, Phone, ShieldCheck, Check } from 'lucide-react';
import { SERVICES, createWhatsAppLink } from '../data/siteData';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [selectedService, setSelectedService] = useState(initialService || 'Özel Ölçü Mobilya');
  const [dimensions, setDimensions] = useState('');
  const [district, setDistrict] = useState('Bahçelievler');
  const [photoInfo, setPhotoInfo] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Merhaba Sistem Marangoz,\n\nHizmet: ${selectedService}\nBölge: ${district}\nTahmini Ölçü / Detay: ${dimensions || 'Belirtilmedi'}\nFotoğraf Eklenecek mi: ${photoInfo ? 'Evet, WhatsApp sohbetinde göndereceğim' : 'Hayır'}\n\nÖlçü ve tahmini fiyat bilgisi talep ediyorum.`;
    const url = createWhatsAppLink(msg);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn font-sans">
      <div className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/10 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white">
        
        {/* Header */}
        <div className="bg-[#0F0F0F] p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#0F0F0F] text-[#C89D76] border border-[#C89D76]/30">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg font-serif uppercase tracking-wide">
                Hızlı Ölçü & Fiyat Talebi
              </h3>
              <p className="text-stone-400 text-xs">
                Sistem Marangoz — 2004'ten Beri Usta Güvencesi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-[#1A1A1A] focus:outline-none border border-white/5"
          >
            <X className="w-5 h-5 text-[#C89D76]" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              İhtiyaç Duyduğunuz Hizmet
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#0F0F0F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C89D76]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              İlçe / Mahalle
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-[#0F0F0F] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C89D76]"
            >
              <option value="Bahçelievler (Soğanlı / Şirinevler / Kocasinan / Yenibosna)">Bahçelievler (Tüm Mahalleler)</option>
              <option value="Bakırköy">Bakırköy</option>
              <option value="Güngören">Güngören</option>
              <option value="Bağcılar">Bağcılar</option>
              <option value="Küçükçekmece">Küçükçekmece</option>
              <option value="Zeytinburnu">Zeytinburnu</option>
              <option value="Diğer İstanbul">Diğer İstanbul</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1">
              Tahmini Ölçünüz veya Açıklama (Opsiyonel)
            </label>
            <input
              type="text"
              placeholder="Örn: 250 cm mutfak dolabı veya 3 kapaklı gardırop"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full bg-[#0F0F0F] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C89D76]"
            />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="photoCheck"
              checked={photoInfo}
              onChange={(e) => setPhotoInfo(e.target.checked)}
              className="w-4 h-4 border-white/10 bg-[#0F0F0F] text-[#C89D76] focus:ring-[#C89D76]"
            />
            <label htmlFor="photoCheck" className="text-xs text-stone-300 cursor-pointer">
              Mevcut alanın fotoğrafını WhatsApp sohbetinde göndermek istiyorum.
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-full text-sm shadow-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp İle Ölçü / Fiyat Al</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C89D76]" />
            <span>Bilgileriniz WhatsApp üzerinden güvenle ulaştırılır.</span>
          </p>

        </form>

      </div>
    </div>
  );
};

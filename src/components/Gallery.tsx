import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, createWhatsAppLink } from '../data/siteData';
import { Layers, MessageCircle, X, Maximize2, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['Tümü', 'Mutfak & Banyo', 'Portmanto & Gardırop', 'Özel Masalar & Ofis', 'Tamirat & Tadilat'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'Tümü' || item.category === selectedCategory
  );

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-[#0F0F0F] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            Atölye ve İmalat Kataloğumuz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Örnek Proje <span className="font-extrabold not-italic text-[#C89D76] uppercase">Görsellerimiz</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Bahçelievler atölyemizde imal ettiğimiz ve montajını tamamladığımız örnek çalışma modellerimiz.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C89D76] text-[#0F0F0F] shadow-lg'
                  : 'bg-[#1A1A1A] text-stone-300 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-[#1A1A1A] border border-white/5 hover:border-[#C89D76]/60 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0F0F0F]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <span className="absolute top-3 left-3 bg-[#0F0F0F] text-[#C89D76] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 border border-[#C89D76]/30">
                  {item.category}
                </span>

                <div className="absolute bottom-3 right-3 p-2 bg-[#0F0F0F] rounded text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                  <Maximize2 className="w-4 h-4 text-[#C89D76]" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-white text-sm font-serif uppercase tracking-wide group-hover:text-[#C89D76] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs text-[#C89D76] font-bold uppercase tracking-wider border-t border-white/5 mt-2">
                <span>Fiyat & Detay İste</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal preview when clicked */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#0F0F0F] text-stone-300 hover:text-white rounded-full focus:outline-none border border-white/10"
              >
                <X className="w-5 h-5 text-[#C89D76]" />
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="bg-[#0F0F0F] text-[#C89D76] text-xs font-bold uppercase tracking-widest px-2.5 py-1 border border-[#C89D76]/30">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif uppercase tracking-wide mt-2">
                    {activeItem.title}
                  </h3>
                  <p className="text-stone-300 text-sm">
                    {activeItem.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={createWhatsAppLink(`Merhaba, galerinideki "${activeItem.title}" projeniz hakkında fiyat ve ölçü alabilir miyim?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp'tan Benzer Fiyat Al</span>
                  </a>

                  <button
                    onClick={() => {
                      const title = activeItem.title;
                      setActiveItem(null);
                      onOpenQuoteModal(title);
                    }}
                    className="bg-[#0F0F0F] hover:bg-[#222222] text-stone-200 font-bold uppercase text-xs tracking-wider py-3 px-4 rounded-xl border border-white/10"
                  >
                    Teklif Formu Aç
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

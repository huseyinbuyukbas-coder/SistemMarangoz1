import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Sparkles, Ruler, Wrench, Building2, Layers, Search, ArrowRight } from 'lucide-react';
import { SERVICES, Service, createWhatsAppLink } from '../data/siteData';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Tüm Hizmetlerimiz', icon: Layers },
    { id: 'ozel-imalat', label: 'Özel Ölçü İmalat', icon: Ruler },
    { id: 'tamirat-montaj', label: 'Tamirat & Montaj', icon: Wrench },
    { id: 'kurumsal-ticari', label: 'Kurumsal & Ticari', icon: Building2 },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="hizmetler" className="py-16 sm:py-24 bg-[#0F0F0F] text-[#F5F2ED] font-sans relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] border border-[#C89D76]/30 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2004'ten Beri Kaliteli Usta İmalatı</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Ahşap & Mobilya <span className="font-extrabold not-italic text-[#C89D76] uppercase">Hizmetlerimiz</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Eviniz ve iş yeriniz için milimetrik ölçüde sıfırdan imalat yapıyor, bozulmuş mobilyalarınızı orijinal parçalarla onarıyor ve terazi ayarıyla monte ediyoruz.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#1A1A1A] p-3 rounded-2xl border border-white/5">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#C89D76] text-[#0F0F0F] shadow-lg'
                      : 'bg-[#0F0F0F] text-stone-300 hover:text-white border border-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C89D76]" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Hizmet veya ürün ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C89D76] transition-colors"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-[#1A1A1A] rounded-2xl border border-white/5">
            <p className="text-stone-400 text-base mb-3">Aradığınız kriterde hizmet bulunamadı.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="text-[#C89D76] font-semibold text-sm underline"
            >
              Tüm Hizmetleri Göster
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service: Service) => {
              const waUrl = createWhatsAppLink(service.waMessage);

              return (
                <div
                  key={service.id}
                  className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-xl flex flex-col justify-between group hover:border-[#C89D76]/60 transition-all"
                >
                  <div className="space-y-4">
                    {/* Badge & Title Header */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-white font-serif uppercase tracking-wide group-hover:text-[#C89D76] transition-colors">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="shrink-0 bg-[#0F0F0F] text-[#C89D76] text-[10px] font-bold px-2.5 py-0.5 border border-[#C89D76]/30 uppercase tracking-widest">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Short & Full Description */}
                    <p className="text-stone-300 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                      {service.fullDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-1">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C89D76] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-3 rounded-full transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp İle Ölçü Al</span>
                    </a>

                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="bg-[#0F0F0F] hover:bg-[#222222] text-[#F5F2ED] text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-1"
                      title="Teklif Formu"
                    >
                      <span>Form</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C89D76]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Global CTA Box */}
        <div className="mt-14 bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif uppercase tracking-wide">
              Listenizdeki özel bir ölçü veya tamir işi mi var?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              Salih Usta ve Bozo Usta ekibi olarak Bahçelievler ve tüm İstanbul'a hızlı dönüş yapıyoruz. Fotoğraf gönderin, anında fiyat ve fikir verelim.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={createWhatsAppLink("Merhaba, özel bir projem var, fotoğraf ve ölçü gönderip fiyat almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fotoğraf & Ölçü Gönder</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

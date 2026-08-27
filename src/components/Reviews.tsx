import React, { useState } from 'react';
import { Star, MessageCircle, CheckCircle, ShieldCheck, Filter, ThumbsUp } from 'lucide-react';
import { REVIEWS, Review, BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';

export const Reviews: React.FC = () => {
  const [platformFilter, setPlatformFilter] = useState<'all' | 'Google' | 'Yandex'>('all');

  const filteredReviews = REVIEWS.filter((rev) => {
    if (platformFilter === 'all') return true;
    return rev.platform === platformFilter;
  });

  return (
    <section id="yorumlar" className="py-16 sm:py-24 bg-[#141414] text-[#F5F2ED] font-sans border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block border border-[#C89D76]/40 px-3.5 py-1 rounded-full bg-[#C89D76]/10 text-[#C89D76] text-[11px] font-bold tracking-[0.2em] uppercase">
            %100 Şeffaf Sosyal Kanıt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-serif tracking-tight italic">
            Müşteri <span className="font-extrabold not-italic text-[#C89D76] uppercase">Yorumlarımız</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Bahçelievler ve İstanbul genelinde hizmet verdiğimiz müşterilerimizin Google Haritalar ve Yandex üzerindeki gerçek değerlendirmeleri.
          </p>
        </div>

        {/* Social Proof Hero Bar */}
        <div className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 mb-10 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Google Badge Box */}
          <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
            <div className="w-12 h-12 bg-[#C89D76]/10 border border-[#C89D76]/30 flex items-center justify-center shrink-0 text-[#C89D76] font-black text-xl italic">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold text-white text-lg">
                <Star className="w-4 h-4 fill-[#C89D76] text-[#C89D76]" />
                <span>{BUSINESS_INFO.googleRating}</span>
                <span className="text-stone-400 text-xs font-normal">/ 5.0</span>
              </div>
              <div className="text-xs font-semibold text-stone-300">123 Google Yorumu</div>
              <p className="text-[11px] text-stone-400">Haritalar İşletme Profili</p>
            </div>
          </div>

          {/* Yandex Badge Box */}
          <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
            <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400 font-black text-xl italic">
              Y
            </div>
            <div>
              <div className="flex items-center gap-1 font-bold text-white text-lg">
                <Star className="w-4 h-4 fill-red-400 text-red-400" />
                <span>{BUSINESS_INFO.yandexRating}</span>
                <span className="text-stone-400 text-xs font-normal">/ 5.0</span>
              </div>
              <div className="text-xs font-semibold text-stone-300">11 Yandex Yorumu</div>
              <p className="text-[11px] text-stone-400">Mükemmel Hizmet Puanı</p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="text-left md:border-l md:border-white/10 md:pl-6 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Doğrulanmış İşletme Profili</span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed">
              Tüm yorumlar atölyemizden hizmet alan gerçek müşterilerimiz tarafından Google & Yandex Haritalar servisine eklenmiştir.
            </p>
          </div>

        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setPlatformFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              platformFilter === 'all'
                ? 'bg-[#C89D76] text-[#0F0F0F] shadow-md'
                : 'bg-[#1A1A1A] text-stone-300 hover:text-white border border-white/5'
            }`}
          >
            Tüm Yorumlar (134)
          </button>
          <button
            onClick={() => setPlatformFilter('Google')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              platformFilter === 'Google'
                ? 'bg-[#C89D76] text-[#0F0F0F] shadow-md'
                : 'bg-[#1A1A1A] text-stone-300 hover:text-white border border-white/5'
            }`}
          >
            Google Yorumları (123)
          </button>
          <button
            onClick={() => setPlatformFilter('Yandex')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              platformFilter === 'Yandex'
                ? 'bg-[#C89D76] text-[#0F0F0F] shadow-md'
                : 'bg-[#1A1A1A] text-stone-300 hover:text-white border border-white/5'
            }`}
          >
            Yandex Yorumları (11)
          </button>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review: Review) => (
            <div
              key={review.id}
              className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 shadow-xl flex flex-col justify-between hover:border-[#C89D76]/60 transition-all"
            >
              <div className="space-y-3">
                
                {/* Review Header: Author + Rating + Platform badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white text-base font-serif uppercase tracking-wide">
                      {review.author}
                    </h3>
                    <div className="text-[11px] text-stone-400 font-medium">{review.date}</div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 border ${
                      review.platform === 'Google'
                        ? 'bg-[#C89D76]/10 text-[#C89D76] border-[#C89D76]/30'
                        : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {review.platform}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 text-[#C89D76]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C89D76] text-[#C89D76]" />
                  ))}
                </div>

                {/* Service Tag */}
                <div className="inline-block bg-[#0F0F0F] text-stone-300 text-[11px] font-medium px-2.5 py-1 border border-white/10">
                  Hizmet: {review.serviceTag}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic font-serif">
                  "{review.comment}"
                </p>

              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Doğrulanmış Müşteri</span>
                </span>
                <span className="text-stone-400">Bahçelievler / İstanbul</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppLink("Merhaba, Google/Yandex yorumlarınızı inceledim. Benim de bir mobilya ihtiyacım var, görüşebilir miyiz?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Siz de Memnun Müşterilerimiz Arasına Katılın</span>
          </a>
        </div>

      </div>
    </section>
  );
};

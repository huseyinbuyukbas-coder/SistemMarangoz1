import React from 'react';
import { Star, ShieldCheck, Award, ThumbsUp, MapPin, Users, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppLink } from '../data/siteData';

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-[#141414] text-[#F5F2ED] py-12 border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Trust Header Grid */}
        <div className="bg-[#1A1A1A] border-l-4 border-[#C89D76] border-y border-r border-white/5 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            {/* Stat 1: Google Rating */}
            <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
              <div className="w-12 h-12 bg-[#C89D76]/10 border border-[#C89D76]/30 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-[#C89D76] text-[#C89D76]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-black text-white italic">{BUSINESS_INFO.googleRating}</span>
                  <span className="text-xs text-gray-500 font-medium">/ 5.0</span>
                </div>
                <div className="text-[11px] font-bold text-[#C89D76] uppercase tracking-wider">123 Google Yorumu</div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Müşteri Deneyimi</p>
              </div>
            </div>

            {/* Stat 2: Yandex Rating */}
            <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-red-400 text-red-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl font-black text-white italic">{BUSINESS_INFO.yandexRating}</span>
                  <span className="text-xs text-gray-500 font-medium">/ 5.0</span>
                </div>
                <div className="text-[11px] font-bold text-red-400 uppercase tracking-wider">11 Yandex Yorumu</div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Tam Puan</p>
              </div>
            </div>

            {/* Stat 3: Experience */}
            <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
              <div className="w-12 h-12 bg-[#C89D76]/10 border border-[#C89D76]/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#C89D76]" />
              </div>
              <div>
                <div className="text-3xl font-black text-white italic">2004'ten</div>
                <div className="text-[11px] font-bold text-[#C89D76] uppercase tracking-wider">{BUSINESS_INFO.totalExperienceYears}+ Yıllık Deneyim</div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Yerli Atölye</p>
              </div>
            </div>

            {/* Stat 4: Precision */}
            <div className="flex items-center gap-4 p-4 bg-[#0F0F0F] border border-white/5">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-3xl font-black text-white italic">%100</div>
                <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Birebir Ölçü Uyum</div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Salih Usta Ekibi</p>
              </div>
            </div>

          </div>

          {/* Customer Feedback highlights */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C89D76] shrink-0" />
              <span>
                <strong className="text-white">Usta Özelliklerimiz:</strong> Titiz işçilik, zamanında teslim, temiz montaj ve acil tamirlerde hızlı çözüm.
              </span>
            </div>

            <a
              href="#yorumlar"
              className="text-[#C89D76] hover:text-[#b88c65] font-bold uppercase text-[11px] tracking-wider flex items-center gap-1"
            >
              <span>Müşteri Yorumlarını İncele</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

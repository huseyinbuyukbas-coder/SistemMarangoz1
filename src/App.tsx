import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F2ED] font-sans selection:bg-[#C89D76] selection:text-[#0F0F0F]">
      {/* Sticky Corporate Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with key conversion CTAs */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Social Proof & Ratings Bar */}
        <TrustSection />

        {/* Full Services Grid (23 items sales descriptions) */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4-Step Process */}
        <Process onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Sistem Marangoz (Attic closet, 253cm table, repair reviews) */}
        <WhyUs />

        {/* Verified Google 4.9 & Yandex 5.0 Reviews */}
        <Reviews />

        {/* Portfolio / Project Gallery */}
        <Gallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Service Areas (Bahçelievler & Istanbul districts) */}
        <ServiceAreas />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact & Interactive WhatsApp Quote Form */}
        <Contact initialService={selectedServiceForModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick Quote Modal Drawer */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedServiceForModal}
      />

      {/* Sticky Mobile & Desktop Floating WhatsApp Widget */}
      <WhatsAppButton onOpenQuoteModal={handleOpenQuoteModal} />
    </div>
  );
}

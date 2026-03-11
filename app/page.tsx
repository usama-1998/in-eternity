"use client";

import React, { useState, useEffect } from 'react';

import CinematicStackingSection from '@/components/CinematicStackingSection';
import DetailDrawer from '@/components/DetailDrawer';
import FooterReveal from '@/components/FooterReveal';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Navbar from '@/components/Navbar';
import ServiceModal from '@/components/ServiceModal';
import StickyNav from '@/components/StickyNav';
import { SERVICES_DATA } from '@/lib/data';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<any>(null);

  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCategory(null);
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleBook = () => {
    window.open('https://wa.me/6588153008', '_blank');
  };

  return (
    <>
      <Navbar />
      <div className="content-pusher shadow-2xl shadow-black/50 bg-white">
        <Hero onBook={handleBook} />
        <Intro onBook={handleBook} />

        {SERVICES_DATA.map((service, index) => (
          <CinematicStackingSection
            key={service.id}
            data={service}
            index={index}
            onOpenDrawer={setActiveCategory}
            onSelectService={setSelectedService}
            onBook={handleBook}
          />
        ))}
      </div>

      <FooterReveal onBook={handleBook} />

      <StickyNav />
      {/* <BookingCalendar /> - Temporarily hidden as requested */}

      {/* Drawers & Modals */}
      <DetailDrawer
        isOpen={!!activeCategory}
        onClose={() => setActiveCategory(null)}
        category={activeCategory}
        onSelectService={setSelectedService}
        onBook={() => {
          setActiveCategory(null);
          handleBook();
        }}
      />

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onBook={handleBook}
      />


    </>
  );
}

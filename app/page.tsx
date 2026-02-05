"use client";

import React, { useState, useEffect } from 'react';
import BookingModal from '@/components/BookingModal';
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
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCategory(null);
        setIsBookingOpen(false);
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-white">
        <Hero onBook={() => setIsBookingOpen(true)} />
        <Intro />

        {SERVICES_DATA.map((service, index) => (
          <CinematicStackingSection
            key={service.id}
            data={service}
            index={index}
            onOpenDrawer={setActiveCategory}
            onSelectService={setSelectedService}
          />
        ))}

        <FooterReveal />
      </div>

      <StickyNav />
      {/* <BookingCalendar /> - Temporarily hidden as requested */}

      {/* Drawers & Modals */}
      <DetailDrawer
        isOpen={!!activeCategory}
        onClose={() => setActiveCategory(null)}
        category={activeCategory}
        onBook={() => {
          setActiveCategory(null);
          setIsBookingOpen(true);
        }}
      />

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
        onBook={() => setIsBookingOpen(true)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}

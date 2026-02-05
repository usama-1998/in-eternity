"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import CinematicStackingSection from '@/components/CinematicStackingSection';
import DetailDrawer from '@/components/DetailDrawer';
import FooterReveal from '@/components/FooterReveal';
import StickyNav from '@/components/StickyNav';
import { SERVICES_DATA } from '@/lib/data';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCategory(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <Navbar />
      <StickyNav />

      {/* Content Pusher pushes the footer down and sits on top of it z-10 */}
      <div className="content-pusher shadow-2xl shadow-black/50">
        <Hero />
        <Intro />

        {/* Full Screen Cinematic Stacking Sections */}
        {SERVICES_DATA.map((data, index) => (
          <CinematicStackingSection
            key={index}
            data={data}
            index={index}
            onOpenDrawer={setActiveCategory as any}
          />
        ))}
      </div>

      <FooterReveal />

      <DetailDrawer
        isOpen={!!activeCategory}
        onClose={() => setActiveCategory(null)}
        category={activeCategory}
      />
    </>
  );
}

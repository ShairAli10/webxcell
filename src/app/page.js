'use client';

import AboutUs from '@/components/AboutUs/AboutUs';
import Header from '@/components/Header/Header';
import Hero from '@/components/HeroSection/HeroSection';
import ServicesSection from '@/components/Services/ServicesSection';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <ServicesSection />
    </>
  );
}

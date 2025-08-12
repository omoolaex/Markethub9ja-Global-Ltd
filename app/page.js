'use client';

import AboutSection from '@/components/Homepage/AboutSection';
import BrandStatement from '@/components/Homepage/BrandStatement';
import CallToAction from '@/components/Homepage/CallToAction';
import Ecosystem from '@/components/Homepage/Ecosystem';
import HeroSection from '@/components/Homepage/HeroSection';
import SubsidiariesSection from '@/components/Homepage/SubsidiariesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SubsidiariesSection />
      <BrandStatement />
      <Ecosystem />
      <CallToAction />
    </main>
  );
}
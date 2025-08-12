'use client';

import Head from 'next/head';
import AboutSection from '@/components/Homepage/AboutSection';
import BrandStatement from '@/components/Homepage/BrandStatement';
import CallToAction from '@/components/Homepage/CallToAction';
import Ecosystem from '@/components/Homepage/Ecosystem';
import HeroSection from '@/components/Homepage/HeroSection';
import SubsidiariesSection from '@/components/Homepage/SubsidiariesSection';

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Markethub9ja | Connecting Commerce, Logistics & Communities in Africa</title>
        <meta
          name="description"
          content="Markethub9ja connects African vendors, buyers, and partners through an integrated ecosystem of commerce, logistics, payments, and community development."
        />
        <meta name="keywords" content="African marketplace, e-commerce Nigeria, logistics Africa, digital payments Africa, Markethub9ja" />
        <meta name="author" content="Markethub9ja Global Ltd" />
        <link rel="canonical" href="https://markethub9ja.com" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Markethub9ja | Transforming Commerce in Africa" />
        <meta property="og:description" content="Join the Markethub9ja ecosystem — marketplace, logistics, payments, food, franchises, and community foundation." />
        <meta property="og:url" content="https://markethub9ja.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Markethub9ja Global Ltd",
            "url": "https://markethub9ja.com",
            "logo": "https://markethub9ja.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/markethub9ja",
              "https://www.instagram.com/markethub9ja",
              "https://twitter.com/markethub9ja"
            ],
            "description": "An integrated African commerce ecosystem with marketplace, logistics, payments, food services, and community initiatives."
          })}
        </script>
      </Head>

      {/* Main semantic wrapper */}
      <main className="min-h-screen bg-white overflow-x-hidden">
        
        {/* Hero - First impression */}
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>
        
        {/* About Us */}
        <section id="about-markethub9ja" aria-labelledby="about-heading" className="py-12">
          <h2 id="about-heading" className="sr-only">About Markethub9ja</h2>
          <AboutSection />
        </section>
        
        {/* Subsidiaries */}
        <section id="subsidiaries" aria-labelledby="subsidiaries-heading" className="py-12">
          <h2 id="subsidiaries-heading" className="sr-only">Markethub9ja Subsidiaries</h2>
          <SubsidiariesSection />
        </section>
        
        {/* Brand Statement */}
        <section id="brand-statement" aria-labelledby="brand-heading" className="py-12">
          <h2 id="brand-heading" className="sr-only">Our Brand Promise</h2>
          <BrandStatement />
        </section>
        
        {/* Ecosystem */}
        <section id="commerce-ecosystem" aria-labelledby="ecosystem-heading" className="py-12">
          <h2 id="ecosystem-heading" className="sr-only">Markethub9ja Business Ecosystem</h2>
          <Ecosystem />
        </section>
        
        {/* Call to Action */}
        <section id="get-started" aria-labelledby="cta-heading" className="py-12">
          <h2 id="cta-heading" className="sr-only">Get Started with Markethub9ja</h2>
          <CallToAction />
        </section>

      </main>
    </>
  );
}

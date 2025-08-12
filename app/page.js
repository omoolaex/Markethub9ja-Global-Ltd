
import Script from 'next/script';
import AboutSection from '@/components/Homepage/AboutSection';
import BrandStatement from '@/components/Homepage/BrandStatement';
import CallToAction from '@/components/Homepage/CallToAction';
import Ecosystem from '@/components/Homepage/Ecosystem';
import HeroSection from '@/components/Homepage/HeroSection';
import SubsidiariesSection from '@/components/Homepage/SubsidiariesSection';

export const metadata = {
  title: "Markethub9ja Global Ltd. | Africa’s Future Through Commerce",
  description:
    "Empowering vendors, connecting buyers, and building Africa’s future through commerce, logistics, and innovation.",
  keywords:
    "Markethub9ja, Nigeria e-commerce, online marketplace, African vendors, buy online Nigeria",
  metadataBase: new URL("https://markethub9ja.com"),
  openGraph: {
    title: "Markethub9ja Global Ltd.",
    description:
      "Building Africa’s Future Through Commerce, Logistics & Innovation",
    url: "https://markethub9ja.com",
    siteName: "Markethub9ja",
    images: [
      {
        url: "/assets/logos/markethub9ja.png",
        width: 1200,
        height: 630,
        alt: "Markethub9ja Marketplace",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@markethub9ja",
    creator: "@markethub9ja",
  },
  alternates: {
    canonical: "https://markethub9ja.com",
  },
  verification: {
    google: "xZGro4lB8lvz72WNGinTSoTOezqs4LSqp2jZrE8UXbU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NKPMXJ2W6X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NKPMXJ2W6X');
        `}
      </Script>

      {/* ✅ Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WX56MGKB');
        `}
      </Script>

      {/* ✅ Structured Data */}
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Markethub9ja Global Ltd.",
          url: "https://markethub9ja.com",
          logo: "https://markethub9ja.com/markethub9ja.png",
          sameAs: [
            "https://facebook.com/markethub9ja",
            "https://instagram.com/markethub9ja",
            "https://twitter.com/markethub9ja",
          ],
        })}
      </Script>

      {/* ✅ Main Content */}
      <main className="min-h-screen bg-white overflow-x-hidden">
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        <section id="about-markethub9ja" aria-labelledby="about-heading" className="py-12">
          <h2 id="about-heading" className="sr-only">About Markethub9ja</h2>
          <AboutSection />
        </section>

        <section id="subsidiaries" aria-labelledby="subsidiaries-heading" className="py-12">
          <h2 id="subsidiaries-heading" className="sr-only">Markethub9ja Subsidiaries</h2>
          <SubsidiariesSection />
        </section>

        <section id="brand-statement" aria-labelledby="brand-heading" className="py-12">
          <h2 id="brand-heading" className="sr-only">Our Brand Promise</h2>
          <BrandStatement />
        </section>

        <section id="commerce-ecosystem" aria-labelledby="ecosystem-heading" className="py-12">
          <h2 id="ecosystem-heading" className="sr-only">Markethub9ja Business Ecosystem</h2>
          <Ecosystem />
        </section>

        <section id="get-started" aria-labelledby="cta-heading" className="py-12">
          <h2 id="cta-heading" className="sr-only">Get Started with Markethub9ja</h2>
          <CallToAction />
        </section>
      </main>
    </>
  );
}

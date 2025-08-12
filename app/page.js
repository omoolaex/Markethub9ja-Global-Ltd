
import Script from 'next/script';
import Head from 'next/head';
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
};

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/* Google Analytics */}
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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WX56MGKB');`,
          }}
        />

        {/* Viewport & Icons */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="xZGro4lB8lvz72WNGinTSoTOezqs4LSqp2jZrE8UXbU"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data (JSON-LD for Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
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

// File: app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WX56MGKB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

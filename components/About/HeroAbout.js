'use client';

import { motion } from 'framer-motion';

export default function HeroAbout() {
  return (
    <header className="relative bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/africa-commerce-innovation.jpg')", // Replace with actual path
        }}
        aria-hidden="true"
      />

      {/* Optional background glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 xl:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Our Story is Africa’s Story of Possibility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 px-4 md:px-6"
          >
            Markethub9ja Global Ltd is pioneering a new wave of digital, logistics, and commerce
            solutions — built in Africa, for Africans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8"
          >
            <a
              href="#our-journey"
              className="inline-block bg-[#1F2937] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-full hover:bg-[#111827] transition duration-300"
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg
          className="relative block w-full h-16 sm:h-20 md:h-24 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,112C672,128,768,160,864,181.3C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
}
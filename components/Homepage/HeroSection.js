'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center 
                 px-4 sm:px-6 
                 pt-15 pb-15 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 
                 min-h-[35vh] md:min-h-[40vh] lg:min-h-screen"
      style={{
        backgroundImage: "url('/assets/global-ecosystem.jpg')",
      }}
    >
      {/* Transparent Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.35))]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight mb-4 sm:mb-6 px-2">
          Building Africa’s Future <br />
          Through Commerce, Logistics & Innovation.
        </h1>
        <p className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl px-4">
          Markethub9ja Global Ltd. is the mother company behind Africa-driven ventures across
          e-commerce, food systems, logistics, fintech, and community-led innovation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/partnerships"
            className="px-6 py-3 bg-green-700 text-white rounded-xl text-sm font-semibold hover:bg-green-800 transition duration-300 transform hover:scale-105"
          >
            Partner With Us
          </Link>
          <Link
            href="/ecosystem"
            className="text-white border border-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-green-800 transition"
          >
            Explore Our Ecosystem
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
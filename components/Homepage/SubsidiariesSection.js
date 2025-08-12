'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const subsidiaries = [
  {
    name: 'Markethub9ja Marketplace',
    description:
      'Our flagship Nigerian e-commerce marketplace empowering local vendors to list, sell, and scale across Africa.',
    cta: { text: 'Visit Marketplace', link: 'https://markethub9ja.com.ng' },
    image: '/assets/showcase/marketplace.avif',
    alt: 'Markethub9ja Marketplace - Nigeria e-commerce platform',
  },
  // ... other subsidiaries
];

export default function SubsidiariesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-20 px-6 sm:px-10 lg:px-20"
      aria-labelledby="ecosystem-title"
    >
      <h2
        id="ecosystem-title"
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Our Ecosystem of Brands
      </h2>

      {/* Tabs */}
      <nav className="overflow-x-auto scrollbar-hide flex gap-3 justify-center">
        {subsidiaries.map((subsidiary, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
              index === activeIndex
                ? 'bg-green-700 text-white'
                : 'bg-white border text-gray-600 hover:border-green-500'
            }`}
            aria-selected={index === activeIndex}
            role="tab"
          >
            {subsidiary.name}
          </button>
        ))}
      </nav>

      {/* Content */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="tabpanel"
        className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto mt-12"
      >
        <div className="w-full lg:w-1/2 h-64 sm:h-80 relative rounded-xl overflow-hidden shadow-md">
          <Image
            src={subsidiaries[activeIndex].image}
            alt={subsidiaries[activeIndex].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            {subsidiaries[activeIndex].name}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {subsidiaries[activeIndex].description}
          </p>
          <a
            href={subsidiaries[activeIndex].cta.link}
            className="inline-block px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
          >
            {subsidiaries[activeIndex].cta.text}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

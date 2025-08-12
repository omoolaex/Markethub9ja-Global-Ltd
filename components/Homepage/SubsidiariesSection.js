'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const subsidiaries = [
  {
    name: 'Markethub9ja Marketplace',
    description:
      'Our flagship e-commerce platform empowering vendors to list, sell, and scale across Nigeria...',
    cta: { text: 'Visit Marketplace', link: 'https://markethub9ja.com.ng' },
    image: '/assets/showcase/marketplace.avif',
  },
  {
    name: 'Hub9ja Logistics',
    description:
      'Hub9ja Logistics ensures fast, affordable, and secure last-mile delivery...',
    cta: { text: 'Explore Logistics', link: '/hub9ja-logistics' },
    image: '/assets/showcase/logistics.avif',
  },
  {
    name: 'HubPay',
    description:
      'HubPay offers innovative digital payment solutions tailored to Africa...',
    cta: { text: 'Discover HubPay', link: '/hubpay' },
    image: '/assets/showcase/hubpay.jpg',
  },
  {
    name: 'Hub9ja Foods',
    description:
      'We bridge the gap between farmers and consumers using technology and logistics...',
    cta: { text: 'View Agri Distribution', link: '/hub9ja-foods' },
    image: '/assets/showcase/food.jpg',
  },
  {
    name: 'Hub9ja Franchise',
    description:
      'Empowering local entrepreneurs with branded franchise opportunities...',
    cta: { text: 'Join as Franchise Partner', link: '/hub9ja-franchise' },
    image: '/assets/showcase/franchise.jpg',
  },
  {
    name: 'Hub9ja Foundation',
    description:
      'A nonprofit initiative dedicated to digital literacy and grassroots innovation...',
    cta: { text: 'Learn About Our Impact', link: '/foundation' },
    image: '/assets/showcase/foundation.jpg',
  },
];

export default function SubsidiariesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isReversed = activeIndex % 2 !== 0;

  return (
    <section
      className="py-20 px-6 sm:px-10 lg:px-20 relative"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, #f3f4f6 20%, #ffffff 100%)',
      }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Our Ecosystem of Brands
      </h2>

      {/* Tabs - Scrollable, no overflow */}
      <div className="relative -mx-4 px-4 sm:mx-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div className="flex gap-3 min-w-max">
          {subsidiaries.map((subsidiary, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 text-sm sm:text-base font-medium border rounded-full snap-start whitespace-nowrap transition ${
                index === activeIndex
                  ? 'bg-green-700 text-white border-green-700'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-green-500'
              }`}
            >
              {subsidiary.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab Content */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-10 max-w-7xl mx-auto mt-12`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-[400px] relative rounded-xl overflow-hidden shadow-md bg-gray-100">
          <Image
            src={subsidiaries[activeIndex].image}
            alt={subsidiaries[activeIndex].name}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            {subsidiaries[activeIndex].name}
          </h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            {subsidiaries[activeIndex].description}
          </p>
          <a
            href={subsidiaries[activeIndex].cta.link}
            className="inline-block px-6 py-3 bg-green-700 text-white text-sm font-medium rounded-xl hover:bg-green-800 transition duration-300 hover:scale-105"
          >
            {subsidiaries[activeIndex].cta.text}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
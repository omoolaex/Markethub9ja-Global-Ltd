'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Truck,
  Utensils,
  CreditCard,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: ShoppingCart, label: 'E-commerce' },
  { icon: Truck, label: 'Logistics' },
  { icon: Utensils, label: 'Agri-Food' },
  { icon: CreditCard, label: 'Fintech' },
  { icon: Users, label: 'Community' },
];

export default function AboutSection() {
  const [radius, setRadius] = useState(160);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(100);
      else if (width < 768) setRadius(130);
      else setRadius(160);
    };

    updateRadius();
    setIsMounted(true);
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-20 px-6 sm:px-10 lg:px-20"
    >
      {/* Section Heading */}
      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
      >
        About <span className="text-green-700">Markethub9ja Global Ltd</span>
      </motion.h2>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <strong>Markethub9ja Global Ltd.</strong> is an African-driven holding company
            innovating across <em>e-commerce</em>, <em>logistics</em>, <em>agri-food systems</em>,
            <em> fintech</em>, and <em>community development</em>.  
            We build ventures that solve local challenges, enable market access, and create
            sustainable opportunities for African entrepreneurs.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our mission is to <strong>empower vendors</strong>, simplify supply chains, and foster
            an integrated ecosystem that is <strong>built by Africans, for Africa</strong>.  
            Through strategic partnerships and technology, we connect people, goods, and ideas
            across the continent.
          </p>

          <div>
            <Link
              href="/about-us"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow hover:bg-green-800 transition"
              aria-label="Learn more about Markethub9ja Global Ltd"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>

        {/* Right - Visual Nodes */}
        <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
          {/* Center Core */}
          <div
            className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-green-700 text-white flex items-center justify-center text-center text-sm sm:text-base font-semibold rounded-full shadow-lg z-10 hover:scale-105 transition"
            aria-label="Markethub9ja at the center of African commerce"
          >
            Markethub9ja
          </div>

          {/* Dashed Circle */}
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-2 border-dashed border-green-300 rounded-full animate-pulse"
            role="presentation"
          />

          {/* Orbiting Features */}
          {isMounted &&
            features.map((item, index) => {
              const angle = (index / features.length) * 360;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute flex flex-col items-center text-center"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                    aria-label={item.label}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 mt-2">{item.label}</span>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

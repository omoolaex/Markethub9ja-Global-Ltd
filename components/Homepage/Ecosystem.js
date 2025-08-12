'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaStore,
  FaTruck,
  FaMoneyBillWave,
  FaSeedling,
  FaHandshake,
  FaHandsHelping,
} from 'react-icons/fa';

const ecosystemItems = [
  { name: 'Marketplace', icon: FaStore, angle: 0 },
  { name: 'Logistics', icon: FaTruck, angle: 60 },
  { name: 'HubPay', icon: FaMoneyBillWave, angle: 120 },
  { name: 'Foods', icon: FaSeedling, angle: 180 },
  { name: 'Franchise', icon: FaHandshake, angle: 240 },
  { name: 'Foundation', icon: FaHandsHelping, angle: 300 },
];

export default function Ecosystem() {
  const radius = 140;

  return (
    <section
      role="region"
      aria-labelledby="ecosystem-title"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col-reverse lg:flex-row gap-12 items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 id="ecosystem-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            One Brand. Multiple Engines of Impact.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The <strong>Markethub9ja Ecosystem</strong> is a connected network of brands 
            working together to simplify commerce, empower communities, and scale 
            digital access across Africa.
          </p>

          {/* Pill Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-800 text-sm font-medium hover:bg-green-100 transition-all cursor-default"
                >
                  <Icon aria-hidden="true" className="text-green-600 text-base" />
                  <span>{item.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="pt-6"
          >
            <Link
              href="/ecosystem"
              aria-label="Learn more about the Markethub9ja Ecosystem"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-md transition-all duration-300"
            >
              Learn More About the Ecosystem
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Orbit */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-square rounded-full">
            
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_15px_rgba(34,197,94,0.15)] z-0" />

            {/* Orbit Container */}
            <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-white rounded-full z-10 flex justify-center items-center overflow-visible">
              
              {/* Inner pulse */}
              <div className="absolute w-[70%] h-[70%] bg-green-100/30 rounded-full animate-pulse blur-3xl" aria-hidden="true" />

              {/* Orbit Icons */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
                style={{ willChange: 'transform' }}
              >
                {ecosystemItems.map((item, index) => {
                  const Icon = item.icon;
                  const rad = (item.angle * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                      }}
                    >
                      <div
                        className="bg-white rounded-full shadow-md p-3 border border-gray-200 hover:border-green-500 transition-all duration-200"
                        aria-label={item.name}
                      >
                        <Icon aria-hidden="true" className="text-green-700 text-2xl" />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{item.name}</p>
                    </div>
                  );
                })}
              </motion.div>

              {/* Core Label */}
              <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-5 border-4 border-green-600">
                <p className="text-green-700 font-bold text-sm sm:text-base text-center leading-tight">
                  Markethub9ja<br />Global Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

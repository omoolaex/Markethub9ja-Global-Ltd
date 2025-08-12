'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CompanyStory() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image Column - always first on mobile & tablet, second on large screen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="/assets/about/company-journey.jpg"
            alt="Markethub9ja Founding Story"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Text Column - always second on mobile & tablet, first on large screen */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Our Journey — Rooted in Local Need, Built for Africa’s Future
          </h2>

          <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              Markethub9ja Global Ltd. was born from a simple but powerful observation — local
              entrepreneurs and small vendors across Nigeria were struggling to access a digital
              market that truly understood them.
            </p>
            <p>
              From our early days as a lean startup with grassroots connections, to now evolving into
              a parent company with bold subsidiaries in logistics, fintech, food systems, and
              more — our mission has remained clear: simplify commerce, empower people, and build
              for long-term impact.
            </p>
            <p>
              We’re proudly African. We believe solutions must be local-first but globally relevant.
              That’s why everything we build is designed with resilience, culture, and
              scalability in mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
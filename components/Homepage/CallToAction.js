'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section
      id="partnership-call"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-green-50 via-white to-gray-100"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
        >
          Let&apos;s Build the Future of African Commerce — Together
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed"
        >
          Markethub9ja is seeking partners to empower local commerce, drive innovation, 
          and create lasting community impact. Whether you&apos;re in logistics, 
          investment, NGOs, or grassroots movements — we&apos;re ready to collaborate.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/partnerships"
            title="Learn more about partnering with Markethub9ja"
            aria-label="Learn more about partnering with Markethub9ja"
            className="inline-block bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Partner with Markethub9ja
          </Link>
          <Link
            href="/contact"
            title="Contact Markethub9ja team"
            aria-label="Contact Markethub9ja team"
            className="inline-block border border-green-700 text-green-700 hover:bg-green-100 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-sm transition-all duration-300"
          >
            Contact Markethub9ja
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

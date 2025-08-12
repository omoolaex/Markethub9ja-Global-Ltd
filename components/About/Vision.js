'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Vision2030() {
  return (
    <section className="bg-indigo-50 py-20 px-4 sm:px-6 md:px-10 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vision 2030
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            By 2030, we aim to become Africa’s most trusted platform for enabling local commerce — a digital ecosystem where vendors, buyers, and communities thrive together. Through innovation, collaboration, and empowerment, we envision a future where e-commerce isn’t just global — it’s inclusive, sustainable, and deeply local.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-64 md:h-96"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/vision-2030.jpg" // Replace with your image path
            alt="Vision 2030 Illustration"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </motion.div>
      </div>

      {/* Decorative Blurred Shape */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
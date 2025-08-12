'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHero from '@/components/global/PageHero';
import {
  Building2,
  Truck,
  UtensilsCrossed,
  Wallet2,
  Network,
  HeartHandshake,
} from 'lucide-react';

// Reusable data
const subsidiaries = [
  {
    title: 'Markethub9ja Marketplace',
    description: 'Digital commerce for vendors across Africa.',
    icon: <Building2 className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/marketplace',
  },
  {
    title: 'Hub9ja Logistics',
    description: 'Reliable and fast delivery infrastructure.',
    icon: <Truck className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/logistics',
  },
  {
    title: 'Hub9ja Foods',
    description: 'Local food production and delivery.',
    icon: <UtensilsCrossed className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/foods',
  },
  {
    title: 'HubPay',
    description: 'Simplified and inclusive digital payments.',
    icon: <Wallet2 className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/hubpay',
  },
  {
    title: 'Hub9ja Franchise',
    description: 'Structured growth via local franchising.',
    icon: <Network className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/franchise',
  },
  {
    title: 'Hub9ja Foundation',
    description: 'Social impact and community elevation.',
    icon: <HeartHandshake className="w-8 h-8 text-indigo-600" />,
    href: '/subsidiaries/foundation',
  },
];

export default function Subsidiaries() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <PageHero
        title="Our Subsidiaries"
        subtitle="Building Africa’s future through multiple interconnected businesses."
        breadcrumb={[
          { label: 'Subsidiaries', href: '/subsidiaries' }
        ]}
      />

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            Overview
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Markethub9ja Global Ltd is more than an e-commerce company. Our ecosystem spans core sectors that power trade, logistics, food systems, digital finance, social enterprise, and inclusive economic growth across Africa.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-10"
          >
            Our Expertise
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Cross-sector Integration',
                text: 'Our businesses work together seamlessly, creating end-to-end value for customers and communities.',
              },
              {
                title: 'Market Accessibility',
                text: 'We build solutions that make commerce and digital services accessible to underserved markets.',
              },
              {
                title: 'Inclusive Innovation',
                text: 'Every subsidiary is tailored to solve real African problems using tech, people, and cultural insight.',
              },
              {
                title: 'Operational Efficiency',
                text: 'We apply proven frameworks and smart technology to run lean, scalable operations.',
              },
              {
                title: 'Community-Driven',
                text: 'Our foundation and franchise arms ensure that our growth benefits the people we serve.',
              },
              {
                title: 'Scalable Infrastructure',
                text: 'From logistics to payments, our infrastructure is built to handle scale across the continent.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Explore Our Subsidiaries
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Each unit drives value within our ecosystem and extends impact across industries.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {subsidiaries.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={sub.href} className="block bg-gray-50 hover:bg-gray-100 transition rounded-2xl shadow p-6">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0">{sub.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{sub.title}</h3>
                      <p className="mt-1 text-gray-600 text-sm">{sub.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
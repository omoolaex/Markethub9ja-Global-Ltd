"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/global/PageHero";

const ecosystemItems = [
  {
    title: "Digital Commerce",
    description: "Empowering local vendors through technology-driven marketplaces.",
    brand: "Markethub9ja Marketplace",
  },
  {
    title: "Logistics Infrastructure",
    description: "Efficient delivery and smart logistics powering African trade.",
    brand: "Hub9ja Logistics",
  },
  {
    title: "Inclusive Finance",
    description: "Simple, accessible digital payments for everyone.",
    brand: "HubPay",
  },
  {
    title: "Food Systems",
    description: "Local food production, processing, and delivery redefined.",
    brand: "Hub9ja Foods",
  },
  {
    title: "Franchise Network",
    description: "Structured growth through regional business partnerships.",
    brand: "Hub9ja Franchise",
  },
  {
    title: "Social Impact",
    description: "Uplifting communities through programs, education, and empowerment.",
    brand: "Hub9ja Foundation",
  },
];

export default function EcosystemPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PageHero
        title="Our Ecosystem"
        subtitle="Discover the integrated ecosystem driving digital commerce, logistics, finance,
          food, and impact across Africa."
        breadcrumb={[
          { label: 'Ecosystem', href: '/ecosystem' }
        ]}
      />
      <div className="px-6 md:px-12 py-16">
            {/* Ecosystem Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {ecosystemItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                >
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <span className="text-sm font-medium text-gray-900 block mt-2">
                    {item.brand}
                    </span>
                </motion.div>
                ))}
            </section>

            {/* Ecosystem Diagram */}
            <section className="mb-24 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                How Our Ecosystem Connects
                </h2>
                <Image
                src="/ecosystem-diagram.png"
                alt="Ecosystem Flow Diagram"
                width={1000}
                height={600}
                className="mx-auto rounded-xl border"
                />
                <p className="text-sm text-gray-500 mt-4">
                Each unit supports and amplifies the other to power business and impact.
                </p>
            </section>

            {/* Impact Statement */}
            <section className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                We’re not just building businesses — we’re building Africa’s future.
                </h3>
                <p className="text-gray-600 text-lg">
                At Markethub9ja, every brand, every service, and every innovation works together
                to drive inclusive growth. Our ecosystem is a platform for transformation —
                for people, for businesses, and for the continent.
                </p>
            </section>
      </div>
    </div>
  );
}
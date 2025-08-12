"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const journeyData = [
  {
    year: "2023",
    title: "The Vision Was Born",
    description:
      "The idea of Markethub9ja was conceived — a platform to empower vendors and modernize African commerce."
  },
  {
    year: "2024",
    title: "MVP Development & Launch",
    description:
      "A minimum viable product (MVP) was developed, tested, and launched to gather early adopters and feedback."
  },
  {
    year: "2025",
    title: "Company Structure & Expansion",
    description:
      "Markethub9ja Global Ltd was incorporated, built out its core team, and expanded into logistics and ecosystem development."
  },
  {
    year: "2026",
    title: "Regional Growth Phase",
    description:
      "Focused on capturing key regional markets, integrating financial services, and expanding vendor offerings."
  },
  {
    year: "Future",
    title: "Pan-African Impact",
    description:
      "Our vision is to build a truly pan-African commerce, logistics, and innovation network that empowers millions."
  }
];

export default function OurJourneySection() {
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    setActive((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNext = () => {
    setActive((prev) => (prev < journeyData.length - 1 ? prev + 1 : prev));
  };

  return (
    <section id="our-journey" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10"
        >
          Our Journey
        </motion.h2>

        {/* Timeline Navigation */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            disabled={active === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            disabled={active === journeyData.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Items */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 w-max">
            {journeyData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`relative flex-shrink-0 w-72 p-4 rounded-lg cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                  active === index
                    ? "bg-white border-blue-500"
                    : "bg-gray-100 border-transparent"
                }`}
              >
                <h4 className="text-sm font-medium text-blue-600 mb-1">{item.year}</h4>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
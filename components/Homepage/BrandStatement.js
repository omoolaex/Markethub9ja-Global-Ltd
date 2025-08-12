'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaLeaf,
} from 'react-icons/fa';

const tabs = ['Vision', 'Mission', 'Core Values'];

const tabContent = {
  Vision: {
    text: "To become Africa’s leading digital ecosystem empowering commerce, innovation, and communities through technology.",
    icon: <FaRocket className="text-green-700 text-4xl mb-4 mx-auto" />,
  },
  Mission: {
    text: "To simplify buying and selling, strengthen local economies, and build sustainable infrastructure for digital commerce across Africa.",
    icon: <FaLightbulb className="text-green-700 text-4xl mb-4 mx-auto" />,
  },
  'Core Values': [
    {
      title: 'Integrity',
      description: 'We operate with transparency, fairness, and accountability in everything we do.',
      icon: <FaCheckCircle className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
    {
      title: 'Innovation',
      description: 'We leverage creativity and technology to build practical solutions that scale.',
      icon: <FaLightbulb className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
    {
      title: 'Empowerment',
      description: 'We support people, partners, and communities to reach their full potential.',
      icon: <FaUsers className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
    {
      title: 'Simplicity',
      description: 'We make commerce intuitive and accessible for everyone.',
      icon: <FaRocket className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
    {
      title: 'Collaboration',
      description: 'We achieve more together through partnerships and shared purpose.',
      icon: <FaHandshake className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
    {
      title: 'Sustainability',
      description: 'We build systems and solutions that ensure long-term growth and impact.',
      icon: <FaLeaf className="text-green-700 text-2xl mb-2 mx-auto" />,
    },
  ],
};

export default function BrandStatement() {
  const [activeTab, setActiveTab] = useState('Vision');

  return (
    <section
      className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Purpose & Principles
        </h2>
      </div>

      {/* Horizontal Tabs */}
      <div className="flex justify-center gap-4 mb-10 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm font-medium rounded-full border transition whitespace-nowrap focus:outline-none ${
              activeTab === tab
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-600 border-gray-300 hover:border-green-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        {activeTab === 'Core Values' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tabContent['Core Values'].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition text-center"
              >
                {value.icon}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center px-4 sm:px-6 md:px-10">
            {tabContent[activeTab].icon}
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {tabContent[activeTab].text}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
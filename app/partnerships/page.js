'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import PageHero from '@/components/global/PageHero';

export default function PartnershipPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); // Replace with actual form handler later
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <PageHero
        title="Partnerships"
        subtitle="Discover the integrated ecosystem driving digital commerce, logistics, finance, food, and impact across Africa."
        breadcrumb={[
          { label: 'Partnerships', href: '/partnerships' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#040720] to-[#0f172a] text-white py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold">
          Together, We Scale Impact
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-4 text-lg max-w-2xl mx-auto">
          Join us in building Africa’s future through commerce, logistics, food, finance, and impact. Explore meaningful partnerships that create shared value.
        </motion.p>
        <motion.a href="#form" className="mt-8 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition duration-300">
          Become a Partner
        </motion.a>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Partner With Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: '🚀', title: 'Scalable Infrastructure' },
            { icon: '🤝', title: 'Mutual Value Creation' },
            { icon: '🌍', title: 'Pan-African Vision' },
            { icon: '📈', title: 'Traction-Driven & Transparent' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Models */}
      <section className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Partnership Models</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Corporate Collaborations',
            'Logistics & Fulfilment',
            'Technology Integration',
            'Food & Agro Partnerships',
            'Community & NGO Programs',
            'Franchise & Expansion Partners',
            'Investor Relations',
          ].map((type, idx) => (
            <div key={idx} className="bg-white border p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold">{type}</h3>
              <p className="text-sm text-gray-600 mt-2">Let’s build value together in the {type.toLowerCase()} space.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Form */}
      <section id="form" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Ready to Partner With Markethub9ja?</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 rounded-lg" />
          <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 rounded-lg" />
          <input name="organization" type="text" placeholder="Organization Name" value={form.organization} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 rounded-lg" />
          <input name="partnershipType" type="text" placeholder="Type of Partnership" value={form.partnershipType} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 rounded-lg" />
          <textarea name="message" placeholder="Tell us about your interest" rows={5} value={form.message} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 rounded-lg" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">Submit</button>
        </form>
      </section>
    </main>
  );
}
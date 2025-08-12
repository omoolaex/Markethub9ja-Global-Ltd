// Contact Us Page - React Component (Next.js + Tailwind CSS)

'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/global/PageHero';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Future: Integrate API or email service
  };

  return (
    <div className="bg-white text-gray-800">
          {/* Hero Section */}
          <PageHero
            title="Contact Us"
            subtitle="Discover the integrated ecosystem driving digital commerce, logistics, finance,
              food, and impact across Africa."
            breadcrumb={[
              { label: 'Contact', href: '/contact' }
            ]}
          />
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you. Whether you have a question about our solutions, business partnership, or anything else — our team is ready to answer all your questions.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary" />
              <span>+234 000 000 0000</span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary" />
              <span>hello@markethub9ja.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="Markethub9ja Logo" className="h-10 w-auto mb-4" />
          <p className="text-sm leading-relaxed text-gray-600">
            Building Africa’s future through commerce, logistics, food systems, fintech, and community-led innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sm:border-l-0 lg:border-l border-gray-200 lg:pl-6">
          <h4 className="text-md font-semibold mb-3 text-gray-800">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-green-700 transition">About</Link></li>
            <li><Link href="/subsidiaries" className="hover:text-green-700 transition">Subsidiaries</Link></li>
            <li><Link href="/ecosystem" className="hover:text-green-700 transition">Ecosystem</Link></li>
            <li><Link href="/partnerships" className="hover:text-green-700 transition">Partnerships</Link></li>
            <li><Link href="/contact" className="hover:text-green-700 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="sm:border-l-0 lg:border-l border-gray-200 lg:pl-6">
          <h4 className="text-md font-semibold mb-3 text-gray-800">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 1/2, Sanyaolu Street, Off Old Olowora Rd.,
                  Berger, Lagos Nigeria</li>
            <li>
              ✉️ <a href="mailto:corp@markethub9ja.com" className="hover:text-green-700">
                corp@markethub9ja.com
              </a>
            </li>
            <li>🏢 RC: 1234567</li>
          </ul>
        </div>

        {/* Newsletter / Engagement */}
        <div className="sm:border-l-0 lg:border-l border-gray-200 lg:pl-6">
          <h4 className="text-md font-semibold mb-3 text-gray-800">Stay Connected</h4>
          <p className="text-sm mb-3 text-gray-600">
            Coming soon: Newsletters and insights from across the Hub9ja ecosystem.
          </p>
          {/* Future newsletter form or social links can go here */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-4 px-6 text-xs text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Markethub9ja Global Ltd. All rights reserved.
          <span className="mx-2">|</span>
          <Link href="/privacy-policy" className="hover:text-green-700">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:text-green-700">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
}
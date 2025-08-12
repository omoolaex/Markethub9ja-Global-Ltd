'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <img
            src="/logo.png" // Replace with actual logo path
            alt="Markethub9ja Global Ltd."
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 items-center text-gray-800 font-medium">
          <Link href="/about-us" className="hover:text-green-700">About</Link>
          <Link href="/subsidiaries" className="hover:text-green-700">Subsidiaries</Link>
          <Link href="/ecosystem" className="hover:text-green-700">Ecosystem</Link>
          <Link href="/partnerships" className="hover:text-green-700">Partnerships</Link>
          <Link href="/contact" className="hover:text-green-700">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/partnerships"
            className="px-5 py-2 bg-green-700 text-white rounded-xl text-sm font-semibold hover:bg-green-800"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-6 space-y-6 text-gray-800 font-medium">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-gray-700"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <Link href="/about-us" className="block hover:text-green-700" onClick={closeMenu}>About</Link>
          <Link href="/subsidiaries" className="block hover:text-green-700" onClick={closeMenu}>Subsidiaries</Link>
          <Link href="/ecosystem" className="block hover:text-green-700" onClick={closeMenu}>Ecosystem</Link>
          <Link href="/partnerships" className="block hover:text-green-700" onClick={closeMenu}>Partnerships</Link>
          <Link href="/contact" className="block hover:text-green-700" onClick={closeMenu}>Contact</Link>

          <Link
            href="/partnerships"
            className="inline-block mt-4 px-4 py-2 bg-green-700 text-white rounded-xl text-sm font-semibold hover:bg-green-800"
            onClick={closeMenu}
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
'use client';

import Link from 'next/link';

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <section
      className="relative text-white px-4 sm:px-6 md:px-10 lg:px-16 flex items-center"
      style={{
        backgroundImage: "url('/assets/hero-default.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '15vh',
        height: 'auto',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full py-12 sm:py-14 md:py-16 lg:py-20 text-center max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav
          className="text-xs sm:text-sm text-gray-200 mb-3 flex flex-wrap justify-center gap-x-1 gap-y-1"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:underline text-gray-300">Home</Link>
          {breadcrumb.map((crumb, index) => (
            <span key={index} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:underline text-gray-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-snug px-2">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-100 px-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
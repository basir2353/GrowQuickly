'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      category: 'DIGITAL DESIGN',
      description: 'WEBSITE, MOBILE APP, INTERACTIVE EXPERIENCES'
    },
    {
      category: 'BRANDING',
      description: 'IDENTITY, STRATEGY, EVOLUTION'
    },
    {
      category: 'PRINT DESIGN',
      description: 'BROCHURE & CATALOG, PACKAGING, POSTER'
    },
    {
      category: 'ART DIRECTION',
      description: 'CAMPAIGN CONCEPTS, PHOTOSHOOTS, CONSULTING'
    },
    {
      category: 'SEO/GEO',
      description: 'SEARCH VISIBILITY GROWTH'
    },
    {
      category: 'ORGANIC MARKETING',
      description: 'AUTHENTIC REACH BUILDING'
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Header Section */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Heading */}
          <div className="mb-16">
            <h1 className="font-glacial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight max-w-4xl">
              WHAT WE
              <br />
              CAN DO FOR YOU
            </h1>
          </div>

          {/* CTA Link */}
          <div className="flex justify-end mb-20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-courier text-base sm:text-lg text-white/80 uppercase tracking-wide hover:text-white transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              <span>SEE MORE OF OUR</span>
              <ArrowRight className="w-5 h-5 text-brand-teal" />
              <span>SERVICES</span>
            </Link>
          </div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 py-6 border-t border-white/20">
                  <div className="font-courier text-base sm:text-lg uppercase tracking-wide text-white">
                    {service.category}
                  </div>
                  <div className="font-courier text-sm sm:text-base uppercase tracking-wide text-white/80 sm:text-right">
                    {service.description}
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-t border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Section - Smart Marketing Growth */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-black">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="font-glacial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center">
            SMART MARKETING GROWTH.
            <br />
            DESIGN, &
            <br />
            STRATEGIC SUSTAINABLE
          </h2>
        </div>
      </section>
    </div>
  );
}

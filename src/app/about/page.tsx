'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-beige">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-glacial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-dark leading-tight">
              WE CALL OURSELVES
              <br />
              <span className="block mt-4">GROWQUICKLY</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="space-y-4">
            <p className="font-courier text-xl sm:text-2xl lg:text-3xl text-brand-dark uppercase tracking-wide leading-relaxed">
              BECAUSE WE REFUSE TO STAY
              <br />
              STILL.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-courier text-lg sm:text-xl text-brand-dark uppercase tracking-wide hover:opacity-80 transition-opacity underline group"
            >
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              <span>LET'S DISCUSS SOMETHING QUICKLY</span>
              <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

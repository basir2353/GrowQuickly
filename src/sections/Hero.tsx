'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Generate pixelated graphic data
const generatePixels = () => {
  const pixels = [];
  const colors = ['#FF5C3D', '#00ED8D', '#F5FAED'];
  
  for (let i = 0; i < 400; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() > 0.7 ? 1 : 0;
    pixels.push({ color: randomColor, opacity });
  }
  
  return pixels;
};

export default function Hero() {
  const pixels = generatePixels();

  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col justify-center h-full py-20 lg:py-0">
            <h1 className="font-glacial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-white">
              GROWTH
              <br />
              NEVER COMES
              <br />
              QUICKLY
            </h1>
          </div>

          {/* Right Column - Pixelated Graphic & Services Link */}
          <div className="relative flex flex-col justify-between h-full py-20 lg:py-0">
            {/* Pixelated Graphic */}
            <div className="relative w-full h-96 lg:h-[500px] mb-8">
              <div 
                className="absolute inset-0"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(20, 1fr)',
                  gap: '2px',
                }}
              >
                {pixels.map((pixel, i) => (
                  <div
                    key={i}
                    className="transition-opacity duration-300 aspect-square"
                    style={{
                      backgroundColor: pixel.color,
                      opacity: pixel.opacity,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Services Link */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              <Link href="/services" className="font-courier text-base sm:text-lg text-white uppercase tracking-wide hover:opacity-80 transition-opacity">
                SERVICES
              </Link>
              <ArrowRight className="w-5 h-5 text-brand-teal" />
            </div>

            {/* Tagline */}
            <div className="font-courier text-base sm:text-lg lg:text-xl text-white uppercase tracking-wide text-right">
              DIGITAL MARKETING WITH
              <br />
              PURPOSE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

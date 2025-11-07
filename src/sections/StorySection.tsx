'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Generate pixelated graphic with gradient effect
const generateGradientPixels = () => {
  const pixels = [];
  
  for (let i = 0; i < 400; i++) {
    const row = Math.floor(i / 20);
    const isTop = row < 10;
    const isMiddle = row >= 10 && row < 20;
    const isBottom = row >= 20;
    
    let color = '#F5FAED';
    let opacity = 0;
    
    if (isTop) {
      color = Math.random() > 0.5 ? '#00ED8D' : '#F5FAED';
      opacity = Math.random() > 0.6 ? 1 : 0;
    } else if (isMiddle) {
      const rand = Math.random();
      if (rand > 0.6) color = '#00ED8D';
      else if (rand > 0.3) color = '#FF5C3D';
      else color = '#F5FAED';
      opacity = Math.random() > 0.5 ? 1 : 0;
    } else {
      color = Math.random() > 0.5 ? '#FF5C3D' : '#F5FAED';
      opacity = Math.random() > 0.6 ? 1 : 0;
    }
    
    pixels.push({ color, opacity });
  }
  
  return pixels;
};

export default function StorySection() {
  const pixels = generateGradientPixels();

  return (
    <section className="relative min-h-screen flex items-center bg-brand-beige text-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center h-full py-20 lg:py-0 space-y-12">
            {/* Main Heading */}
            <h2 className="font-glacial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-brand-dark">
              WHERE IMAGINATION
              <br />
              MEETS STRATEGY
            </h2>

            {/* CTA Link */}
            <Link 
              href="/about" 
              className="flex items-center gap-3 font-courier text-base sm:text-lg text-brand-dark uppercase tracking-wide hover:opacity-80 transition-opacity group w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Story Section */}
            <div className="space-y-4 pt-8">
              <h3 className="font-courier text-base sm:text-lg uppercase tracking-wide text-brand-dark">
                OUR STORY
              </h3>
              <p className="font-courier text-sm sm:text-base leading-relaxed text-brand-dark max-w-2xl">
                FOUNDED IN CANADA, GROWQUICKLY IS A CREATIVE MARKETING COMPANY THAT FOCUSES ON INNOVATIVE STRATEGY.
              </p>
            </div>
          </div>

          {/* Right Column - Pixelated Graphic */}
          <div className="relative w-full h-full min-h-[500px] hidden lg:block">
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
        </div>
      </div>
    </section>
  );
}

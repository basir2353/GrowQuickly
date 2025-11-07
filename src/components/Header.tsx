'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'WORK', href: '/work' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Placeholder for pixelated bird icon */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-teal rounded-sm"></div>
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-brand-teal"></div>
              <div className="w-2 h-2 bg-brand-teal"></div>
              <div className="w-2 h-2 bg-brand-teal"></div>
              <div className="w-2 h-2 bg-brand-teal"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <span className="font-courier text-sm text-white/80 uppercase tracking-wide">
              CANADA
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
              <span className="font-courier text-sm text-white/80 uppercase tracking-wide">MENU</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 font-courier text-sm text-white/80 hover:text-white uppercase tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

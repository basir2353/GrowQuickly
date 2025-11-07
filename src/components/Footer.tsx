import Link from 'next/link';

export default function Footer() {
  const sitemap = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const socials = [
    { name: 'INSTAGRAM', href: 'https://instagram.com' },
    { name: 'LINKEDIN', href: 'https://linkedin.com' },
    { name: 'FACEBOOK', href: 'https://facebook.com' },
  ];

  return (
    <footer className="bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Separator Line */}
        <div className="border-t border-brand-dark/30 mb-16 mt-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Left Column (Wider) */}
          <div className="md:col-span-1">
            <h3 className="font-glacial text-4xl sm:text-5xl font-bold mb-8 text-brand-dark">
              CONTACT US
            </h3>
            <div className="space-y-4 font-courier text-base sm:text-lg">
              <a
                href="mailto:INFO@GROWQUICKLY.CA"
                className="block text-brand-dark hover:opacity-80 transition-opacity underline"
              >
                INFO@GROWQUICKLY.CA
              </a>
              <a
                href="tel:+17784860021"
                className="block text-brand-dark hover:opacity-80 transition-opacity underline"
              >
                +1 778-486-0021
              </a>
            </div>
          </div>

          {/* Sitemap - Middle Column */}
          <div>
            <h3 className="font-courier text-base font-normal mb-8 text-brand-dark uppercase tracking-wide">
              SITEMAP
            </h3>
            <ul className="space-y-3">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-courier text-base text-[#e06666] hover:opacity-80 transition-opacity uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials - Right Column */}
          <div>
            <h3 className="font-courier text-base font-normal mb-8 text-brand-dark uppercase tracking-wide">
              SOCIALS
            </h3>
            <ul className="space-y-3">
              {socials.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-courier text-base text-brand-dark hover:opacity-80 transition-opacity uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

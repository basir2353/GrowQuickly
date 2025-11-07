import type { Metadata } from "next";
import { Montserrat, Courier_Prime, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Using Montserrat as alternative to Glacial Indifference (similar bold sans-serif)
const glacialIndifference = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-glacial',
  display: 'swap',
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
  display: 'swap',
});

// Using Inter as fallback for Aileron (similar sans-serif)
const aileron = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-aileron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GrowQuickly - Digital Marketing Agency | Grow Your Business Online",
  description: "Leading digital marketing agency specializing in SEO, social media marketing, PPC advertising, content marketing, and web design. Grow your business with proven strategies.",
  keywords: "digital marketing, SEO, social media marketing, PPC advertising, content marketing, web design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${glacialIndifference.variable} ${courierPrime.variable} ${aileron.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

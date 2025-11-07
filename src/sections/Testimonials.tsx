import TestimonialCard from '@/components/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc',
      content: 'GrowQuickly transformed our online presence. Our traffic increased by 300% in just 3 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'RetailPro',
      content: 'Their SEO strategies are outstanding. We\'re ranking #1 for all our target keywords now.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Boutique Brand',
      content: 'The team at GrowQuickly is professional, creative, and results-driven. Highly recommended!',
      rating: 5
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}


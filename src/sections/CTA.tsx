import Button from '@/components/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your marketing goals and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Free Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


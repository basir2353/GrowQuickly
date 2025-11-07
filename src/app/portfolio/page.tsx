import PortfolioCard from '@/components/PortfolioCard';
import Button from '@/components/Button';
import { ShoppingCart, Laptop, Store, Heart, Rocket, Home } from 'lucide-react';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'E-commerce Success Story',
      description: 'Helped an online retailer increase sales by 250% through comprehensive digital marketing strategies including SEO, PPC, and social media.',
      category: 'E-commerce',
      image: <ShoppingCart className="w-16 h-16 text-white" />,
      results: [
        '250% increase in online sales',
        '180% ROI improvement',
        '50% reduction in customer acquisition cost',
        '300% growth in organic traffic'
      ],
      link: '#'
    },
    {
      title: 'SaaS Platform Growth',
      description: 'Scaled a B2B SaaS company from startup to industry leader in just 12 months through strategic marketing campaigns.',
      category: 'SaaS',
      image: <Laptop className="w-16 h-16 text-white" />,
      results: [
        '400% user base growth',
        '300% increase in qualified leads',
        '200% improvement in conversion rate',
        '150% increase in MRR'
      ],
      link: '#'
    },
    {
      title: 'Local Business Expansion',
      description: 'Transformed a local business into a regional powerhouse through targeted local SEO and digital marketing.',
      category: 'Local Business',
      image: <Store className="w-16 h-16 text-white" />,
      results: [
        '500% increase in local visibility',
        '350% growth in website traffic',
        '200% expansion of customer base',
        'Top 3 rankings for all target keywords'
      ],
      link: '#'
    },
    {
      title: 'Healthcare Provider Growth',
      description: 'Helped a healthcare provider reach more patients through HIPAA-compliant digital marketing strategies.',
      category: 'Healthcare',
      image: <Heart className="w-16 h-16 text-white" />,
      results: [
        '280% increase in patient inquiries',
        '200% growth in appointment bookings',
        '150% improvement in online reviews',
        'Top local search rankings'
      ],
      link: '#'
    },
    {
      title: 'Tech Startup Launch',
      description: 'Successfully launched a tech startup with a comprehensive go-to-market digital marketing strategy.',
      category: 'Technology',
      image: <Rocket className="w-16 h-16 text-white" />,
      results: [
        '5000+ beta users in first month',
        '300% above target user acquisition',
        '200% improvement in brand awareness',
        'Successful product launch campaign'
      ],
      link: '#'
    },
    {
      title: 'Real Estate Agency Success',
      description: 'Boosted a real estate agency\'s online presence and generated high-quality leads through targeted campaigns.',
      category: 'Real Estate',
      image: <Home className="w-16 h-16 text-white" />,
      results: [
        '400% increase in property inquiries',
        '250% growth in qualified leads',
        '180% improvement in conversion rate',
        'Top rankings for local real estate keywords'
      ],
      link: '#'
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies across various industries achieve remarkable growth.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200%</div>
                <div className="text-blue-100">Average ROI</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to achieve similar results for your business
          </p>
          <Button href="/contact" variant="gradient" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}

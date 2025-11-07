import PortfolioCard from '@/components/PortfolioCard';
import Button from '@/components/Button';
import { ShoppingCart, Laptop, Store, Heart, Rocket, Home } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Success Story',
      description: 'Helped an online retailer increase sales by 250% through comprehensive digital marketing.',
      category: 'E-commerce',
      image: <ShoppingCart className="w-16 h-16 text-white" />,
      results: [
        '250% increase in sales',
        '180% ROI improvement',
        '50% reduction in CAC'
      ],
      link: '/portfolio/ecommerce-case'
    },
    {
      title: 'SaaS Platform Growth',
      description: 'Scaled a B2B SaaS company from startup to industry leader in 12 months.',
      category: 'SaaS',
      image: <Laptop className="w-16 h-16 text-white" />,
      results: [
        '400% user growth',
        '300% lead generation',
        '200% conversion rate'
      ],
      link: '/portfolio/saas-case'
    },
    {
      title: 'Local Business Expansion',
      description: 'Transformed a local business into a regional powerhouse through digital marketing.',
      category: 'Local',
      image: <Store className="w-16 h-16 text-white" />,
      results: [
        '500% local visibility',
        '350% website traffic',
        '200% customer base'
      ],
      link: '/portfolio/local-case'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Real results from real businesses we've helped succeed
          </p>
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

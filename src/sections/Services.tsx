import ServiceCard from '@/components/ServiceCard';
import { Search, Share2, FileText, TrendingUp, Mail, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings and drive organic traffic to your website.',
      features: [
        'Keyword Research & Analysis',
        'On-Page & Technical SEO',
        'Link Building Strategy',
        'SEO Audit & Reporting'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand awareness across all social platforms.',
      features: [
        'Content Strategy & Creation',
        'Community Management',
        'Paid Social Advertising',
        'Analytics & Reporting'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your audience.',
      features: [
        'Blog Writing & Strategy',
        'Video Content Creation',
        'Email Marketing Campaigns',
        'Content Calendar Management'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click advertising campaigns.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'Keyword Research & Bidding',
        'Conversion Optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: 'Email Marketing',
      description: 'Nurture leads and convert customers with personalized email campaigns.',
      features: [
        'Email Campaign Design',
        'Automation & Workflows',
        'A/B Testing',
        'Performance Analytics'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-optimized websites that drive results.',
      features: [
        'Responsive Web Design',
        'UI/UX Design',
        'E-commerce Solutions',
        'Performance Optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business thrive online
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

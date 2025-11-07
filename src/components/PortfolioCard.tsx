import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  image: React.ReactNode;
  results: string[];
  link?: string;
}

export default function PortfolioCard({ title, description, category, image, results, link }: PortfolioCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <div className="text-6xl">{image}</div>
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
          {category}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          {results.map((result, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <TrendingUp className="text-green-500 mr-2" size={16} />
              <span>{result}</span>
            </div>
          ))}
        </div>
        {link && (
          <Link
            href={link}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
          >
            View Case Study
            <ExternalLink className="ml-2" size={16} />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

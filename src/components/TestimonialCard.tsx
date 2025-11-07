import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export default function TestimonialCard({ name, role, company, content, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{content}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-gray-600 text-sm">{role} at {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

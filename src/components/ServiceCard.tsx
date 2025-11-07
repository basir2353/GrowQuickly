import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export default function ServiceCard({ icon, title, description, features, color }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader>
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-3xl mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

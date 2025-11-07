export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  category: string;
  image: string;
  results: string[];
  link?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  emoji: string;
}


import Link from 'next/link';
import Button from '@/components/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Share2, FileText, TrendingUp, Mail, Palette, Calendar, Clock } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: '10 Essential SEO Tips for 2024',
      excerpt: 'Discover the latest SEO strategies that will help you rank higher in search engine results.',
      category: 'SEO',
      date: 'March 15, 2024',
      readTime: '5 min read',
      icon: Search
    },
    {
      title: 'Social Media Marketing Trends to Watch',
      excerpt: 'Stay ahead of the curve with these emerging social media marketing trends.',
      category: 'Social Media',
      date: 'March 10, 2024',
      readTime: '7 min read',
      icon: Share2
    },
    {
      title: 'How to Create Content That Converts',
      excerpt: 'Learn the secrets of creating content that not only engages but also drives conversions.',
      category: 'Content Marketing',
      date: 'March 5, 2024',
      readTime: '6 min read',
      icon: FileText
    },
    {
      title: 'PPC Advertising Best Practices',
      excerpt: 'Maximize your PPC campaigns with these proven strategies and optimization techniques.',
      category: 'PPC',
      date: 'February 28, 2024',
      readTime: '8 min read',
      icon: TrendingUp
    },
    {
      title: 'Email Marketing Automation Guide',
      excerpt: 'Streamline your email campaigns with automation and boost your ROI.',
      category: 'Email Marketing',
      date: 'February 20, 2024',
      readTime: '5 min read',
      icon: Mail
    },
    {
      title: 'Web Design Trends for Modern Businesses',
      excerpt: 'Explore the latest web design trends that can help your business stand out online.',
      category: 'Web Design',
      date: 'February 15, 2024',
      readTime: '6 min read',
      icon: Palette
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and insights
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Link
                  key={index}
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 border-0">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest digital marketing tips and insights delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

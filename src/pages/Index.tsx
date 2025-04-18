
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Bell, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import NewsFeed from '@/components/NewsFeed';

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`pt-24 md:pt-32 pb-16 bg-[#F6F6F7] transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1F2C] mb-2 leading-tight">
                Crypto Grant Wire
              </h1>
              <h2 className="font-serif text-2xl text-[#403E43] mb-6">
                Web3 Grants & DAO Governance News
              </h2>
              <Separator className="w-16 h-0.5 bg-brand mx-auto" />
              <p className="text-xl text-[#403E43] mx-auto font-serif leading-relaxed max-w-2xl">
                Bringing you up-to-date with the latest web3 grants, 
                DAO governance decisions, and funding opportunities across the blockchain ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link to="/news">
                  <Button size="lg" className="font-serif px-6 bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                    Browse Latest News <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="newspaper-section-title text-center mb-8">Featured Updates</h2>
              <NewsFeed limit={3} />
              <div className="text-center mt-8">
                <Link to="/news">
                  <Button variant="outline" className="font-serif">
                    View All Updates <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-12 bg-[#F9F9F9] transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="newspaper-section-title text-center mb-8">Why Crypto Grant Wire?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="newspaper-card p-6 text-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Curated News</h3>
                  <p className="text-[#403E43] font-serif">Stay updated with carefully selected and verified grant opportunities and governance updates.</p>
                </div>
                
                <div className="newspaper-card p-6 text-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Real-time Alerts</h3>
                  <p className="text-[#403E43] font-serif">Get timely notifications about new grant programs and funding opportunities in the web3 space.</p>
                </div>
                
                <div className="newspaper-card p-6 text-center">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Community Insights</h3>
                  <p className="text-[#403E43] font-serif">Access expert opinions and community discussions about governance decisions and grant allocations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

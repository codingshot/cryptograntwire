
import { useState, useEffect } from 'react';
import NewsFeed from '@/components/NewsFeed';
import { Separator } from '@/components/ui/separator';

const News = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-24 md:pt-28 pb-12 bg-[#F9F9F9]">
        <div className="container-narrow">
          <section className={`mb-8 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-3 tracking-tight">
                Latest in Web3 Grants & Governance
              </h1>
              <Separator className="w-16 h-0.5 bg-brand mx-auto" />
              <p className="text-lg text-[#403E43] max-w-2xl mx-auto font-serif leading-relaxed">
                An update feed detailing the happenings across Web3 grants, DAO Governance, and insightful analysis.
              </p>
            </div>
          </section>
          
          <section className={`transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-semibold text-[#1A1F2C] border-l-4 border-brand pl-3">Latest Updates</h2>
                <span className="text-sm text-[#8E9196] italic font-serif">Real-time RSS feed</span>
              </div>
              <NewsFeed />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default News;

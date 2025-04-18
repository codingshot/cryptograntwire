
import { useState, useEffect } from 'react';
import NewsFeed from '@/components/NewsFeed';

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
      <main className="flex-grow pt-24 md:pt-32 pb-12 bg-[#F6F6F7]">
        <div className="container-narrow">
          <section className={`mb-16 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2C] mb-3">
                Crypto Grant Wire
              </h1>
              <div className="w-16 h-0.5 bg-brand mx-auto"></div>
              <p className="text-xl text-[#403E43] max-w-2xl mx-auto font-serif leading-relaxed">
                An update feed detailing the happenings across Web3 grants, DAO Governance, insightful thoughts, and tools we think you might find interesting.
              </p>
            </div>
          </section>
          
          <section className={`transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-[#1A1F2C] border-b pb-2">Latest Updates</h2>
              <NewsFeed limit={3} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default News;

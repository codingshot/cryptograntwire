
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
      <main className="flex-grow pt-24 md:pt-32 pb-12">
        <div className="container-narrow">
          <section className={`mb-16 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-center">
              <span className="text-brand">Crypto Grant Wire</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
              An update feed detailing the happenings across Web3 grants, DAO Governance, insightful thoughts, and tools we think you might find interesting.
            </p>
          </section>
          
          <section className={`transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Latest Updates</h2>
              <NewsFeed limit={3} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default News;

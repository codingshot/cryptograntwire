
import { useState, useEffect } from 'react';
import NewsFeed from '@/components/NewsFeed';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

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
      <main className="flex-grow pt-24 md:pt-28 pb-12 bg-background">
        <div className="container-narrow">
          <section className={`mb-8 transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center space-y-4 notion-block p-8">
              <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                📰 Latest in Web3 Grants & Governance
              </h1>
              <Separator className="w-16 h-0.5 bg-accent mx-auto" />
              <p className="text-lg text-secondary max-w-2xl mx-auto font-sans leading-relaxed">
                An update feed detailing the happenings across Web3 grants, DAO Governance, and insightful analysis.
              </p>
              <div className="pt-4">
                <Button 
                  className="font-sans flex items-center gap-2"
                  variant="outline"
                  asChild
                >
                  <a 
                    href="https://t.me/cryptograntwire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Subscribe to updates <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
          <section className={`transition-opacity duration-700 delay-100 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-12 notion-block p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-sans font-semibold text-foreground border-l-4 border-accent pl-3">Latest Updates</h2>
                <span className="text-sm text-secondary italic font-mono">Real-time Grants Feed</span>
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

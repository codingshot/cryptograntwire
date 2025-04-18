import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import NewsFeed from '@/components/NewsFeed';
import { NewsTicker } from '@/components/NewsTicker';
import { FeaturesSection } from '@/components/FeaturesSection';
import { StatsSection } from '@/components/StatsSection';
import { PoweredBySection } from '@/components/PoweredBySection';
import { TeamSection } from '@/components/TeamSection';
import { FAQSection } from '@/components/FAQSection';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

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
        <section className={`pt-24 md:pt-32 pb-16 bg-background transition-opacity duration-700 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6 notion-block p-8">
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 leading-tight">
                Every Crypto Grant in Real Time
              </h1>
              <h2 className="font-sans text-xl md:text-2xl text-secondary mb-6">
                Every crypto grant opportunity, program updates, and the latest decentralized funding initiatives
              </h2>
              <Separator className="w-16 h-0.5 bg-accent mx-auto" />
              <p className="text-xl text-secondary mx-auto font-sans leading-relaxed max-w-2xl">
                Stay updated on the latest grants, DAO governance decisions, and funding opportunities across the blockchain ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button 
                  size="lg" 
                  className="font-sans px-6 bg-accent hover:bg-accent/90 flex items-center gap-2"
                  asChild
                >
                  <a 
                    href="https://t.me/cryptograntwire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Subscribe <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-sans px-6 border-foreground text-foreground hover:bg-muted"
                  asChild
                >
                  <Link to="/news" className="flex items-center gap-2">
                    See News <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Ticker */}
        <NewsTicker />

        {/* Features Section */}
        <FeaturesSection />

        {/* Featured News */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-sans text-3xl font-bold mb-10">📰 Latest Updates</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full relative"
              >
                <CarouselContent className="-ml-4">
                  <NewsFeed limit={6} />
                </CarouselContent>
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Powered By Section */}
        <PoweredBySection />

        {/* Team Section */}
        <TeamSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>
    </div>
  );
};

export default Index;

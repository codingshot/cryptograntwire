
import { useEffect, useState } from "react";
import { fetchNews } from "@/services/api";
import { NewsItem } from "@/types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData.slice(0, 6)); // Get top 6 for the ticker
      } catch (error) {
        console.error("Failed to fetch news for ticker:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % news.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [news]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % news.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + news.length) % news.length);
  };

  if (loading || news.length === 0) {
    return (
      <div className="w-full py-4 bg-muted text-center animate-pulse">
        <p className="text-secondary">📰 Loading latest updates...</p>
      </div>
    );
  }

  const visibleNews = [
    news[currentIndex],
    news[(currentIndex + 1) % news.length]
  ];

  return (
    <div className="w-full py-3 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={goToPrev}
            className="p-1 rounded-full hover:bg-card transition-colors hidden sm:flex"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex-1 mx-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleNews.map((item, index) => (
              <TooltipProvider key={item.tweetId || index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://twitter.com/${item.username}/status/${item.tweetId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <p className="truncate flex-1 font-sans hover:underline">
                          {item.content}
                        </p>
                        <span className="text-xs text-secondary ml-2 whitespace-nowrap font-mono">
                          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-md bg-card border-border">
                    <p className="font-sans">{item.content}</p>
                    <p className="text-sm text-secondary mt-1 font-mono">@{item.username}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={goToNext}
              className="p-1 rounded-full hover:bg-card transition-colors hidden sm:flex"
              aria-label="Next news"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <Link 
              to="/news" 
              className="text-xs text-accent hover:underline font-medium"
            >
              See all news →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

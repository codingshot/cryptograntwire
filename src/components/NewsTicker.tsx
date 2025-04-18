import { useEffect, useState } from "react";
import { fetchNews } from "@/services/api";
import { NewsItem } from "@/types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
        setNews(newsData.slice(0, 5)); // Get top 5 for the ticker
      } catch (error) {
        console.error("Failed to fetch news for ticker:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  useEffect(() => {
    // Auto-rotate the news items
    if (news.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [news]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  const truncateWords = (text: string, wordCount: number) => {
    const words = text.split(' ');
    if (words.length <= wordCount) return text;
    return `${words.slice(0, wordCount).join(' ')}...`;
  };

  if (loading || news.length === 0) {
    return (
      <div className="w-full py-4 bg-gray-100 text-center animate-pulse">
        <p className="text-gray-500">📰 Loading latest updates...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-3 bg-[#F6F6F7] border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={goToPrev}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors hidden sm:flex"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="overflow-hidden flex-1 mx-2">
            <div className="flex items-center">
              <span className="text-news-dark font-serif font-bold mr-2">📰</span>
              <div className="overflow-hidden w-full">
                <div 
                  className="whitespace-nowrap transition-transform duration-500 font-serif text-sm md:text-base"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {news.map((item, index) => (
                    <TooltipProvider key={item.tweetId || index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={`https://twitter.com/${item.username}/status/${item.tweetId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full px-2 truncate hover:underline"
                            aria-label={item.content}
                          >
                            {truncateWords(item.content, 6)}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-md">
                          <p className="font-serif">{item.content}</p>
                          <p className="text-sm text-gray-500 mt-1">@{item.username}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={goToNext}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors hidden sm:flex"
              aria-label="Next news"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <Link 
              to="/news" 
              className="text-xs text-brand hover:underline font-medium"
            >
              See all news →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

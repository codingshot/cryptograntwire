
import { useEffect, useState } from "react";
import { fetchNews } from "@/services/api";
import { NewsItem } from "@/types";
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
        setNews(newsData.slice(0, 6));
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [news]);

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
    <div className="w-full py-3 bg-muted border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleNews.map((item, index) => (
              <TooltipProvider key={item.tweetId || index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`https://twitter.com/${item.username}/status/${item.tweetId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-2 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <p className="truncate flex-1 font-sans group-hover:underline text-foreground transition-colors">
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
        </div>
      </div>
    </div>
  );
}

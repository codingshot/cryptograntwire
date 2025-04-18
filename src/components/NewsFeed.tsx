import { useState, useEffect, useMemo } from 'react';
import { NewsItem } from '@/types';
import { fetchNews } from '@/services/api';
import NewsCard from './NewsCard';
import { Loader2 } from 'lucide-react';
import { defaultNewsData } from '@/utils/defaultData';
import { toast } from 'sonner';
import SearchFilters, { TimeFilter, SortOption } from './SearchFilters';
import EmptyState from './EmptyState';
import { CarouselItem } from '@/components/ui/carousel';

interface NewsFeedProps {
  limit?: number;
}

const NewsFeed = ({ limit }: NewsFeedProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingFallbackData, setIsUsingFallbackData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCuratorNotes, setShowCuratorNotes] = useState(true);
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [sortOrder, setSortOrder] = useState<SortOption>('newest');
  const [searchBy, setSearchBy] = useState<'all' | 'content' | 'username' | 'curator'>('all');

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching news from API...');
        const data = await fetchNews();
        console.log('Fetched news data:', data);
        setNews(data);
        setError(null);
        setIsUsingFallbackData(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Unable to load news from API. Showing fallback data.');
        setNews(defaultNewsData);
        setIsUsingFallbackData(true);
        toast.error('Unable to load latest news from API. Showing fallback data.');
      } finally {
        setIsLoading(false);
      }
    };

    getNews();
  }, []);

  const resetFilters = () => {
    setSearchTerm('');
    setShowCuratorNotes(true);
    setTimeFilter('all');
    setSortOrder('newest');
    setSearchBy('all');
  };

  const hasActiveFilters = useMemo(() => {
    return (
      searchTerm !== '' ||
      !showCuratorNotes ||
      timeFilter !== 'all' ||
      sortOrder !== 'newest' ||
      searchBy !== 'all'
    );
  }, [searchTerm, showCuratorNotes, timeFilter, sortOrder, searchBy]);

  const filteredNews = useMemo(() => {
    if (news.length === 0) return [];

    let filtered = [...news];
    
    if (timeFilter !== 'all') {
      const now = new Date();
      const timeThreshold = new Date();
      
      switch (timeFilter) {
        case 'hour':
          timeThreshold.setHours(now.getHours() - 1);
          break;
        case 'day':
          timeThreshold.setDate(now.getDate() - 1);
          break;
        case 'week':
          timeThreshold.setDate(now.getDate() - 7);
          break;
        case 'month':
          timeThreshold.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          timeThreshold.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(item => new Date(item.createdAt) >= timeThreshold);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => {
        if (searchBy === 'all') {
          return (
            item.content.toLowerCase().includes(term) ||
            item.username.toLowerCase().includes(term) ||
            (item.curatorUsername && item.curatorUsername.toLowerCase().includes(term)) ||
            (item.curatorNotes && item.curatorNotes.toLowerCase().includes(term))
          );
        } else if (searchBy === 'content') {
          return item.content.toLowerCase().includes(term);
        } else if (searchBy === 'username') {
          return item.username.toLowerCase().includes(term);
        } else if (searchBy === 'curator') {
          return (
            (item.curatorUsername && item.curatorUsername.toLowerCase().includes(term)) ||
            (item.curatorNotes && item.curatorNotes.toLowerCase().includes(term))
          );
        }
        return false;
      });
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return limit ? filtered.slice(0, limit) : filtered;
  }, [news, searchTerm, timeFilter, sortOrder, showCuratorNotes, searchBy, limit]);

  const renderNewsContent = () => {
    if (filteredNews.length === 0) {
      return <EmptyState resetFilters={resetFilters} searchTerm={searchTerm} />;
    }

    if (limit) {
      return filteredNews.map((item) => (
        <CarouselItem key={item.tweetId} className="md:basis-1/3 sm:basis-1/2 basis-full pl-4">
          <NewsCard 
            item={item} 
            showCuratorNotes={showCuratorNotes}
          />
        </CarouselItem>
      ));
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item) => (
          <div key={item.tweetId}>
            <NewsCard 
              item={item} 
              showCuratorNotes={showCuratorNotes}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {!limit && (
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showCuratorNotes={showCuratorNotes}
          setShowCuratorNotes={setShowCuratorNotes}
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
          resetFilters={resetFilters}
          hasActiveFilters={hasActiveFilters}
          curatorLabel="Show Curator Notes"
        />
      )}

      {renderNewsContent()}

      {isUsingFallbackData && (
        <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-500 text-amber-800 text-sm font-serif">
          Note: Showing fallback data due to API issues. Some content may not be current.
        </div>
      )}
    </div>
  );
};

export default NewsFeed;

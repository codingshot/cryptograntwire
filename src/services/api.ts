
import { NewsItem } from '@/types';
import { defaultNewsData } from '@/utils/defaultData';

export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    console.log('Starting API request to RSS feed');
    const response = await fetch('https://grants-rss.up.railway.app/api/items');
    
    if (!response.ok) {
      console.error(`API responded with status: ${response.status}`);
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Raw RSS data:', data);
    
    return data.map((item: any) => ({
      tweetId: item.guid?.split('/').pop() || `fallback-${Date.now()}`,
      userId: item.author?.[0]?.link?.split('/').pop() || '',
      username: item.author?.[0]?.name || 'anonymous',
      content: item.content || item.description || 'No content available',
      curatorNotes: item.curatorNotes || null,
      curatorId: item.curatorId || '',
      curatorUsername: item.author?.[0]?.name || '',
      curatorTweetId: item.guid?.split('/').pop() || '',
      createdAt: item.published || item.date || new Date().toISOString(),
      submittedAt: item.date || new Date().toISOString(),
      moderationHistory: item.moderationHistory || [],
      status: item.status || 'approved',
      moderationResponseTweetId: item.moderationResponseTweetId || '',
    }));
  } catch (error) {
    console.error('API Error:', error);
    console.log('Returning fallback data');
    return defaultNewsData;
  }
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

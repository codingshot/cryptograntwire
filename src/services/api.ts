
import { NewsItem } from '@/types';
import { defaultNewsData } from '@/utils/defaultData';

export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch('https://cryptograntwire-rss.up.railway.app/api/items');
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.map((item: any) => ({
      tweetId: item.guid?.split('/').pop() || '',
      userId: item.author?.[0]?.link?.split('/').pop() || '',
      username: item.author?.[0]?.name || 'anonymous',
      content: item.content || item.description || '',
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
    return defaultNewsData;
  }
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

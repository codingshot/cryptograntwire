
import { NewsItem } from '@/types';

export const defaultNewsData: NewsItem[] = [
  {
    "tweetId": "default1",
    "userId": "12345",
    "username": "web3foundation",
    "content": "Excited to announce our latest round of grants focusing on developer tooling and infrastructure improvements. Stay tuned for more details on how to apply!",
    "curatorNotes": "Major Web3 foundation grant announcement",
    "curatorId": "curator1",
    "curatorUsername": "crypto_grants",
    "curatorTweetId": "curator_tweet1",
    "createdAt": new Date().toISOString(),
    "submittedAt": new Date().toISOString(),
    "moderationHistory": [],
    "status": "approved",
    "moderationResponseTweetId": "response1"
  },
  {
    "tweetId": "default2",
    "userId": "67890",
    "username": "gitcoindao",
    "content": "New governance proposal live! Community to vote on expanded grant categories for next funding round.",
    "curatorNotes": "Important DAO governance update",
    "curatorId": "curator2",
    "curatorUsername": "crypto_grants",
    "curatorTweetId": "curator_tweet2",
    "createdAt": new Date().toISOString(),
    "submittedAt": new Date().toISOString(),
    "moderationHistory": [],
    "status": "approved",
    "moderationResponseTweetId": "response2"
  }
];

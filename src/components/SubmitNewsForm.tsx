
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SendHorizontal, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitNewsForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [tweetUrl, setTweetUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [isValidTweet, setIsValidTweet] = useState(false);
  const [tweetPreview, setTweetPreview] = useState<{
    username: string;
    content: string;
  } | null>(null);
  
  const submissionText = "!submit @curatedotfun #grants";
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(submissionText);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const validateTweetUrl = (url: string) => {
    // Basic validation for Twitter/X URLs
    const regex = /^https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/\d+/;
    return regex.test(url);
  };

  const handleTweetUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setTweetUrl(url);
    const isValid = validateTweetUrl(url);
    setIsValidTweet(isValid);
    
    // Simulate tweet preview (in a real app, you'd fetch the tweet data)
    if (isValid) {
      const username = url.split('/')[3];
      setTweetPreview({
        username,
        content: "Preview of the tweet content would appear here. In a production environment, this would fetch the actual tweet content."
      });
    } else {
      setTweetPreview(null);
    }
  };

  const handleSubmitTweet = () => {
    if (!isValidTweet) return;
    
    // Construct tweet intent URL with reply to the tweet and predefined text
    const replyText = `${submissionText}\n\n${notes}`;
    const tweetId = tweetUrl.split('/').pop();
    const intentUrl = `https://twitter.com/intent/tweet?in_reply_to=${tweetId}&text=${encodeURIComponent(replyText)}`;
    
    // Open in new tab
    window.open(intentUrl, '_blank');
    
    // Reset form
    setTweetUrl("");
    setNotes("");
    setTweetPreview(null);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-1">
          <SendHorizontal className="h-4 w-4" />
          <span>Submit News</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submit News</DialogTitle>
          <DialogDescription>
            Share Web3 grant and DAO governance updates with our community
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">How to Submit:</h3>
            <ol className="list-decimal pl-4 space-y-2 text-sm">
              <li>Enter the URL of a newsworthy tweet about Web3 grants or DAO governance</li>
              <li>Add optional notes or context</li>
              <li>Submit for review</li>
            </ol>
          </div>
          
          <div className="space-y-3">
            <div>
              <label htmlFor="tweet-url" className="text-sm font-medium block mb-1">Tweet URL</label>
              <Input 
                id="tweet-url" 
                placeholder="https://twitter.com/username/status/123456789"
                value={tweetUrl}
                onChange={handleTweetUrlChange}
              />
            </div>
            
            {tweetPreview && (
              <div className="border rounded-md p-3 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <Twitter size={16} />
                  </div>
                  <span className="font-medium">@{tweetPreview.username}</span>
                </div>
                <p className="text-sm">{tweetPreview.content}</p>
              </div>
            )}
            
            <div>
              <label htmlFor="notes" className="text-sm font-medium block mb-1">Your Notes (Optional)</label>
              <Textarea 
                id="notes" 
                placeholder="Add context or reason for submitting this tweet"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <div className="p-3 bg-gray-100 rounded flex-1 overflow-hidden">
              <code className="text-sm">{submissionText}</code>
            </div>
            <Button onClick={handleCopy} variant="outline" size="sm">
              Copy
            </Button>
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleSubmitTweet} 
              disabled={!isValidTweet}
              className="flex items-center gap-2"
            >
              <Twitter size={16} />
              Submit as Reply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}


import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface NewsCardProps {
  item: NewsItem;
  showCuratorNotes?: boolean;
}

const NewsCard = ({ item, showCuratorNotes = true }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-card border border-border rounded-lg">
      <CardContent className="p-0">
        <div className="border-b border-border bg-muted/50 px-4 py-2 flex justify-between items-center">
          <div className="text-secondary text-sm font-mono">
            {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
          </div>
          <a
            href={`https://x.com/${item.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm hover:underline font-mono flex items-center"
          >
            @{item.username} <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
        
        <div className="p-5">
          <p className="font-sans text-foreground leading-relaxed text-base mb-4">{item.content}</p>
          
          {showCuratorNotes && item.curatorNotes && (
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-sm text-secondary italic font-sans">
                <span className="font-semibold not-italic">📝 Note:</span> {item.curatorNotes}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

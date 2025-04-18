
import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { formatDate } from "@/services/api";
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  item: NewsItem;
  showCuratorNotes?: boolean;
}

const NewsCard = ({ item, showCuratorNotes = true }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white border border-gray-200">
      <CardContent className="p-0">
        <div className="border-b border-gray-100 bg-gray-50 px-4 py-2 flex justify-between items-center">
          <div className="text-[#8E9196] text-sm font-serif">
            {formatDate(new Date(item.createdAt))}
          </div>
          <a
            href={`https://x.com/${item.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand text-sm hover:underline font-serif flex items-center"
          >
            @{item.username} <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </div>
        
        <div className="p-5">
          <p className="font-serif text-[#1A1F2C] leading-relaxed text-base mb-4">{item.content}</p>
          
          {showCuratorNotes && item.curatorNotes && (
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-sm text-[#403E43] italic font-serif">
                <span className="font-semibold not-italic">Editor's Note:</span> {item.curatorNotes}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

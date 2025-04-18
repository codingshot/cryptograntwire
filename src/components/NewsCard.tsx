
import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { formatDate } from "@/services/api";

interface NewsCardProps {
  item: NewsItem;
  showCuratorNotes?: boolean;
}

const NewsCard = ({ item, showCuratorNotes = true }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow bg-white border-gray-200">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <p className="font-serif text-[#1A1F2C] leading-relaxed">{item.content}</p>
          </div>

          <div className="flex items-center justify-between text-sm border-t pt-4">
            <div className="text-[#8E9196] font-serif italic">
              {formatDate(new Date(item.createdAt))}
            </div>
            <div className="text-brand">
              <a
                href={`https://x.com/${item.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-serif"
              >
                {item.username}
              </a>
            </div>
          </div>

          {showCuratorNotes && item.curatorNotes && (
            <div className="pt-4 border-t">
              <p className="text-sm text-[#403E43] italic font-serif">
                {item.curatorNotes}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;

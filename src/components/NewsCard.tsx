
import { Card, CardContent } from "@/components/ui/card";
import { NewsItem } from "@/types";
import { formatDate } from "@/services/api";

interface NewsCardProps {
  item: NewsItem;
  showCuratorNotes?: boolean;
}

const NewsCard = ({ item, showCuratorNotes = true }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">{item.content}</p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-500">
              {formatDate(new Date(item.createdAt))}
            </div>
            <div className="text-brand">
              <a
                href={`https://x.com/${item.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.username}
              </a>
            </div>
          </div>

          {showCuratorNotes && item.curatorNotes && (
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600 italic">
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

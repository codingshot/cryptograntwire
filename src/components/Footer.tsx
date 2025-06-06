
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Twitter, Send, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 bg-card mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4601136e-22c8-49fc-a4fc-1a70ec652ade.png" 
                alt="Crypto Grant Wire logo" 
                className="h-10 w-10"
              />
              <span className="font-sans font-semibold text-xl">
                Crypto Grant Wire
              </span>
            </Link>
            <p className="text-sm text-secondary max-w-xs">
              📢 Every crypto grant opportunity, program updates, and the latest decentralized funding initiatives
            </p>
            
            <div className="flex space-x-4 items-center">
              <a 
                href="https://x.com/sovereignsignal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/cryptograntwire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80"
                aria-label="Join our Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/sovereignsignal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans font-bold text-lg">📊 Feeds</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://sovs.notion.site/d24bc00e3ed14139beb44b82a5e145c5?v=50ae5a8b531641e0b78f39a710f3ffa6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  Complete Archive
                </a>
              </li>
              <li>
                <a 
                  href="https://app.x23.ai/feeds/cryptograntwire" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  x23 Feed
                </a>
              </li>
              <li>
                <a 
                  href="https://app.curate.fun/feed/grants" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-foreground transition-colors"
                >
                  Curate Feed
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans font-bold text-lg">🧭 Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/news" className="text-secondary hover:text-foreground transition-colors">News</Link>
              </li>
              <li>
                <Link to="/learn" className="text-secondary hover:text-foreground transition-colors">Learn</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary">
            © {currentYear} Crypto Grant Wire. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

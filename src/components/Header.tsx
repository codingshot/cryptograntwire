
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SubmitNewsForm from "./SubmitNewsForm";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "frosted-glass shadow-sm" : "frosted-glass"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2" aria-label="Crypto Grant Wire Home">
            <img 
              src="/lovable-uploads/4601136e-22c8-49fc-a4fc-1a70ec652ade.png" 
              alt="Crypto Grant Wire logo" 
              className="h-10 md:h-12" 
              width="48"
              height="48"
            />
            <span className="font-sans font-semibold text-xl text-foreground hidden sm:inline-block">
              Crypto Grant Wire
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 font-sans">
            <Link to="/news" className="magic-line text-secondary hover:text-foreground transition-colors">
              News
            </Link>
            <SubmitNewsForm />
            <Button 
              variant="outline" 
              size="sm" 
              className="border-accent text-accent hover:bg-accent hover:text-white transition-colors"
              asChild
            >
              <a
                href="https://t.me/cryptograntwire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Subscribe <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </nav>

          <Button 
            variant="outline" 
            size="sm" 
            className="border-accent text-accent hover:bg-accent hover:text-white transition-colors md:hidden"
            asChild
          >
            <a
              href="https://t.me/cryptograntwire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              Subscribe <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

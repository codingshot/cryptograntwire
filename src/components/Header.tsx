
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
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
    } border-b`}>
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
            <span className="font-serif font-semibold text-xl text-[#1A1F2C] hidden sm:inline-block">
              Crypto Grant Wire
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 font-serif">
            <Link to="/news" className="text-[#403E43] hover:text-[#1A1F2C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              News
            </Link>
            <Link to="/learn" className="text-[#403E43] hover:text-[#1A1F2C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Learn
            </Link>
            <SubmitNewsForm />
            <Button 
              variant="outline" 
              size="sm" 
              className="border-brand text-brand hover:bg-brand hover:text-white transition-colors"
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
            className="border-brand text-brand hover:bg-brand hover:text-white transition-colors md:hidden"
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

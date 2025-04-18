
import { Link } from "react-router-dom";
import SubmitNewsForm from "./SubmitNewsForm";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4601136e-22c8-49fc-a4fc-1a70ec652ade.png" 
              alt="Crypto Grant Wire logo" 
              className="h-10 md:h-12" 
            />
            <span className="font-serif font-semibold text-xl text-[#1A1F2C]">
              Crypto Grant Wire
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 font-serif">
            <Link to="/news" className="text-[#403E43] hover:text-[#1A1F2C] transition-colors">
              News
            </Link>
            <Link to="/learn" className="text-[#403E43] hover:text-[#1A1F2C] transition-colors">
              Learn
            </Link>
            <SubmitNewsForm />
            <a
              href="https://t.me/cryptograntwire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#403E43] hover:text-[#1A1F2C] transition-colors"
            >
              Telegram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

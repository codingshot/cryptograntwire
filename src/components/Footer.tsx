
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/4601136e-22c8-49fc-a4fc-1a70ec652ade.png" 
                alt="Crypto Grant Wire logo" 
                className="h-8 w-8"
              />
              <span className="font-semibold">
                Crypto Grant Wire
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://t.me/cryptograntwire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Telegram
            </a>
          </div>

          <div className="text-sm text-gray-500">
            © {currentYear} Crypto Grant Wire. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

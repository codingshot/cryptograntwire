
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import News from "./pages/News";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

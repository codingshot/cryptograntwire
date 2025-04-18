
import { useEffect, useState } from "react";
import { TrendingUp, Eye, Users, FileText } from "lucide-react";

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

function Counter({ end, label, icon, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepValue = end / steps;
    const stepTime = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current > end) {
        current = end;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return (
    <div className="bg-card p-4 md:p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow flex-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-secondary text-sm font-sans mb-1">{label}</p>
          <h3 className="text-xl md:text-3xl font-bold font-sans flex items-center gap-1">
            {count.toLocaleString()}{suffix}
          </h3>
        </div>
        <div className="bg-accent/10 p-2 md:p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-secondary text-lg font-sans">
            Growing the Web3 grants ecosystem through curation and distribution
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Counter 
            end={874} 
            label="Total Updates" 
            icon={<FileText className="h-5 w-5 md:h-6 md:w-6 text-brand" />} 
            suffix="+"
          />
          <Counter 
            end={4} 
            label="Curators" 
            icon={<Users className="h-5 w-5 md:h-6 md:w-6 text-brand" />} 
          />
          <Counter 
            end={1300000} 
            label="Post Views" 
            icon={<Eye className="h-5 w-5 md:h-6 md:w-6 text-brand" />} 
            suffix="+"
          />
          <Counter 
            end={2450} 
            label="Subscribers" 
            icon={<TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-brand" />} 
          />
        </div>
      </div>
    </section>
  );
}

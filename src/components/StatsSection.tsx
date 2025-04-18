
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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
          <h3 className="text-3xl font-bold font-serif flex items-center gap-1">
            {count.toLocaleString()}{suffix}
          </h3>
        </div>
        <div className="bg-brand/10 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 text-lg">
            Growing the Web3 grants ecosystem through curation and distribution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter 
            end={874} 
            label="Total Updates" 
            icon={<FileText className="h-6 w-6 text-brand" />} 
            suffix="+"
          />
          <Counter 
            end={4} 
            label="Curators" 
            icon={<Users className="h-6 w-6 text-brand" />} 
          />
          <Counter 
            end={1300000} 
            label="Post Views" 
            icon={<Eye className="h-6 w-6 text-brand" />} 
            suffix="+"
          />
          <Counter 
            end={2450} 
            label="Subscribers" 
            icon={<TrendingUp className="h-6 w-6 text-brand" />} 
          />
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { ArrowLeft, ArrowRight, Twitter, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  twitter?: string;
  website?: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sov",
    role: "Lead Curator",
    avatar: "/lovable-uploads/9db227a7-1560-4567-9f71-0eedd2d5e8f0.png",
    twitter: "https://twitter.com/sovs_notion",
    website: "https://sovs.notion.site",
    bio: "Founder of Crypto Grant Wire and curator of Web3 grants information. Building community around decentralized funding."
  },
  {
    name: "Curator 2",
    role: "Governance Specialist",
    avatar: "/lovable-uploads/bcf84bec-3fde-4e6c-acd7-65e52fbbaaab.png",
    twitter: "https://twitter.com",
    bio: "Focuses on governance proposals and DAO treasury decisions across major ecosystems."
  },
  {
    name: "Curator 3",
    role: "Developer Relations",
    avatar: "/lovable-uploads/2d4ceafd-1824-4085-bac7-a50af005350d.png",
    twitter: "https://twitter.com",
    bio: "Tracks developer grants and technical documentation from major protocols."
  },
  {
    name: "Curator 4",
    role: "Thought Leadership",
    avatar: "/lovable-uploads/603d52e2-2c07-43a9-80a0-67ce5195aa2b.png",
    website: "https://example.com",
    bio: "Curates opinion pieces and analysis on the future of Web3 funding models."
  }
];

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the curators behind Crypto Grant Wire
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Avatar className="h-24 w-24 md:h-32 md:w-32">
                  <AvatarImage src={currentMember.avatar} alt={currentMember.name} />
                  <AvatarFallback className="text-2xl">{currentMember.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold">{currentMember.name}</h3>
                <p className="text-brand mb-3">{currentMember.role}</p>
                
                <p className="text-gray-600 mb-4 font-serif">{currentMember.bio}</p>
                
                <div className="flex gap-3 justify-center md:justify-start">
                  {currentMember.twitter && (
                    <a 
                      href={currentMember.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand"
                      aria-label={`${currentMember.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  
                  {currentMember.website && (
                    <a 
                      href={currentMember.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand"
                      aria-label={`${currentMember.name}'s Website`}
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-brand" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show team member ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevMember}
                className="flex items-center gap-1"
              >
                <ArrowLeft className="h-4 w-4" /> Previous
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextMember}
                className="flex items-center gap-1"
              >
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

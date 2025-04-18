
import { Twitter, Globe } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  }
];

export function TeamSection() {
  const showControls = teamMembers.length > 1;
  const showCarousel = teamMembers.length > 3;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 text-lg">
            Meet the curators behind Crypto Grant Wire
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {showCarousel ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="md:basis-1/3">
                    <TeamMemberCard member={member} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          ) : (
            <div className={`grid ${teamMembers.length > 1 ? 'grid-cols-1 md:grid-cols-3 gap-6' : 'place-items-center'}`}>
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
      <div className="flex flex-col items-center gap-6">
        <Avatar className="h-24 w-24 md:h-32 md:w-32">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold">{member.name}</h3>
          <p className="text-brand mb-3">{member.role}</p>
          <p className="text-gray-600 mb-4 font-serif">{member.bio}</p>
          
          <div className="flex gap-3 justify-center">
            {member.twitter && (
              <a 
                href={member.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            
            {member.website && (
              <a 
                href={member.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand"
                aria-label={`${member.name}'s Website`}
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

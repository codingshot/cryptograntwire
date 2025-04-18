
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function PoweredBySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Powered By</h2>
          <p className="text-gray-600 text-lg">
            Leveraging best-in-class platforms to deliver curated grants information
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://x23.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/4e26afd0-1b77-4b26-91ac-35227728a9d1.png" 
                      alt="x23.ai logo" 
                      className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-3 object-contain"
                    />
                    <p className="font-medium">x23.ai</p>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm max-w-xs">x23.ai scrapes DAO proposals and governance updates from across the ecosystem</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://curate.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/c132fcc6-50c3-4fdd-8a33-8e0cbbe18965.png" 
                      alt="curate.fun logo" 
                      className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-3 object-contain"
                    />
                    <p className="font-medium">curate.fun</p>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm max-w-xs">Curate.fun handles social submissions and AI summaries</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://metagov.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/1c9d6b9c-06af-4319-a7a8-9f1384d3c746.png" 
                      alt="MetaGov logo" 
                      className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-3 object-contain"
                    />
                    <p className="font-medium">MetaGov</p>
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm max-w-xs">MetaGov is a non-profit that powers governance initiatives</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function FeaturesSection() {
  const features = [{
    title: "Grants & Incentives",
    description: "Bounties, grants, and incentives across Web3",
    content: "This section includes information on bounties and grants and incentives across Web3 and various updates from DAOs, Ecosystem Funds, and Foundations. We track new programs, deadlines, and important announcements from major funding sources.",
    emoji: "🤝"
  }, {
    title: "DAO Governance",
    description: "Latest updates on decentralized governance",
    content: "Stay informed about major decisions, proposals, and votes happening across DAO ecosystems. We track significant treasury allocations, strategy shifts, and governance innovations that impact the funding landscape.",
    emoji: "🏦"
  }, {
    title: "Thoughts and Opinions",
    description: "Commentary on building in Web3",
    content: "Commentary on building in Web3 and discussions about grants and incentives programs. We feature insightful perspectives from leaders, builders, and community members about the evolving landscape of decentralized funding.",
    emoji: "🧠"
  }, {
    title: "Tools and Resources",
    description: "Resources to help you navigate grants and funding",
    content: "Tools and resources related to grants, incentives programs, and funds. You can always stop by Sov's Compendium for a massive list of resources.",
    emoji: "🛠️"
  }];

  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">📰 What We Report On</h2>
          <p className="text-secondary text-lg">
            Comprehensive coverage of the Web3 grants ecosystem
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-2">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="gap-2">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-1">
                  <Card className="h-full notion-block">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl" role="img" aria-label={feature.title}>{feature.emoji}</span>
                        <CardTitle className="font-sans text-xl">{feature.title}</CardTitle>
                      </div>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="font-sans p-4 pt-0">
                      {feature.content}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>;
}

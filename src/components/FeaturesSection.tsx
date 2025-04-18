
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandHelping, LandPlot, BrainCircuit, Wrench } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What We Report On 📰</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive coverage of the Web3 grants ecosystem
          </p>
        </div>

        <Tabs defaultValue="grants" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-transparent">
            <TabsTrigger 
              value="grants" 
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gray-100 rounded-lg border data-[state=active]:border-brand"
            >
              <HandHelping className="h-6 w-6 text-brand" />
              <span>Grants & Incentives</span>
            </TabsTrigger>
            <TabsTrigger 
              value="dao" 
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gray-100 rounded-lg border data-[state=active]:border-brand"
            >
              <LandPlot className="h-6 w-6 text-brand" />
              <span>DAO Governance</span>
            </TabsTrigger>
            <TabsTrigger 
              value="thoughts" 
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gray-100 rounded-lg border data-[state=active]:border-brand"
            >
              <BrainCircuit className="h-6 w-6 text-brand" />
              <span>Thoughts & Opinions</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tools" 
              className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gray-100 rounded-lg border data-[state=active]:border-brand"
            >
              <Wrench className="h-6 w-6 text-brand" />
              <span>Tools & Resources</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="grants" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl md:text-2xl">Grants & Incentives 🤝</CardTitle>
                <CardDescription>Bounties, grants, and incentives across Web3</CardDescription>
              </CardHeader>
              <CardContent className="font-serif">
                <p>This section includes information on bounties and grants and incentives across Web3 and various updates from DAOs, Ecosystem Funds, and Foundations. We track new programs, deadlines, and important announcements from major funding sources.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="dao" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl md:text-2xl">DAO Governance 🏦</CardTitle>
                <CardDescription>Latest updates on decentralized governance</CardDescription>
              </CardHeader>
              <CardContent className="font-serif">
                <p>Stay informed about major decisions, proposals, and votes happening across DAO ecosystems. We track significant treasury allocations, strategy shifts, and governance innovations that impact the funding landscape.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="thoughts" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl md:text-2xl">Thoughts and Opinions 🧠</CardTitle>
                <CardDescription>Commentary on building in Web3</CardDescription>
              </CardHeader>
              <CardContent className="font-serif">
                <p>Commentary on building in Web3 and discussions about grants and incentives programs. We feature insightful perspectives from leaders, builders, and community members about the evolving landscape of decentralized funding.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl md:text-2xl">Tools and Resources 🛠️</CardTitle>
                <CardDescription>Resources to help you navigate grants and funding</CardDescription>
              </CardHeader>
              <CardContent className="font-serif">
                <p>Tools and resources related to grants, incentives programs, and funds. You can always stop by <a href="https://www.notion.so/41f097d28dae4d09801f10cde1b2d03b" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Sov's Compendium</a> for a massive list of resources.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export function FAQSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary text-lg font-sans">
            Everything you need to know about Crypto Grant Wire
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-sans text-lg text-left">
                Do you provide grants?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  We have run grant programs previously with Thank Arbitrum with Cartography Syndicate. While we primarily focus on reporting on grant opportunities, we occasionally partner with organizations to offer funding directly.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-sans text-lg text-left">
                Do you only post grant information?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  No, we post major DAO funding updates, thought leadership pieces, and relevant field information. Our coverage extends to the broader Web3 funding ecosystem, including governance decisions and resources.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-sans text-lg text-left">
                Where can I find all historical posts?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  Complete history is available at{" "}
                  <a 
                    href="https://sovs.notion.site/d24bc00e3ed14139beb44b82a5e145c5?v=50ae5a8b531641e0b78f39a710f3ffa6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Sov's Notion site
                  </a>
                  , the x23 feed at{" "}
                  <a 
                    href="https://app.x23.ai/feeds/cryptograntwire" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    x23.ai
                  </a>
                  , and the curate.fun feed at{" "}
                  <a 
                    href="https://app.curate.fun/feed/grants" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    curate.fun
                  </a>.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-sans text-lg text-left">
                Do you have an open API?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  Coming soon. For now, check our historical data page for comprehensive information about past updates and announcements.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-sans text-lg text-left">
                How do I submit information?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  Follow submission guidelines on our <Link to="/learn" className="text-brand hover:underline">Learn</Link> page. The basic process is to reply to a newsworthy tweet to submit it for consideration.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-sans text-lg text-left">
                Can I become a curator?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  Yes, see our <Link to="/learn" className="text-brand hover:underline">Learn</Link> page for details on becoming a curator. Our curation program is powered by curate.fun.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-sans text-lg text-left">
                What is Crypto Grant Wire's future?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-sans">
                  We're focused on advancing the grants ecosystem. Join Cartography Syndicate to learn more about our vision and upcoming initiatives in the Web3 funding space.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

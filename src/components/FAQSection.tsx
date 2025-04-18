
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

export function FAQSection() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-sans text-3xl font-bold mb-4 text-foreground tracking-tight">Frequently Asked Questions</h2>
          <p className="text-secondary text-lg">
            Everything you need to know about Crypto Grant Wire
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Do you provide grants?",
                a: "We have run grant programs previously with Thank Arbitrum with Cartography Syndicate. While we primarily focus on reporting on grant opportunities, we occasionally partner with organizations to offer funding directly."
              },
              {
                q: "Do you only post grant information?",
                a: "No, we post major DAO funding updates, thought leadership pieces, and relevant field information. Our coverage extends to the broader Web3 funding ecosystem, including governance decisions and resources."
              },
              {
                q: "Where can I find all historical posts?",
                a: <>Complete history is available at <a href="https://sovs.notion.site/d24bc00e3ed14139beb44b82a5e145c5?v=50ae5a8b531641e0b78f39a710f3ffa6" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Sov's Notion site</a>, the x23 feed at <a href="https://app.x23.ai/feeds/cryptograntwire" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">x23.ai</a>, and the curate.fun feed at <a href="https://app.curate.fun/feed/grants" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">curate.fun</a>.</>
              },
              {
                q: "Do you have an open API?",
                a: "Coming soon. For now, check our historical data page for comprehensive information about past updates and announcements."
              },
              {
                q: "How do I submit information?",
                a: <>Follow submission guidelines on our <Link to="/learn" className="text-accent hover:underline">Learn</Link> page. The basic process is to reply to a newsworthy tweet to submit it for consideration.</>
              },
              {
                q: "Can I become a curator?",
                a: <>Yes, see our <Link to="/learn" className="text-accent hover:underline">Learn</Link> page for details on becoming a curator. Our curation program is powered by curate.fun.</>
              },
              {
                q: "What is Crypto Grant Wire's future?",
                a: "We're focused on advancing the grants ecosystem. Join Cartography Syndicate to learn more about our vision and upcoming initiatives in the Web3 funding space."
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="font-sans text-lg hover:no-underline px-6 py-4 text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-secondary border-t border-border">
                  <p className="font-sans pt-4">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

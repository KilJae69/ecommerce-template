import { Container } from "@/components/shared/Container";
import GlareCTA from "@/components/shared/GlareCTA";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqData } from "@/constants/faqData";



export default function FaqPage() {
  
  return (
    <section className="relative py-12 mt-42 lg:pb-24 ">
      
      <Container>
        <div className="flex mx-auto text-center flex-col justify-center items-center py-6 gap-4 max-w-3xl">
          <h1 className="text-h1 text-gradient">Frequently Asked Questions</h1>
          <p className="text-paragraph">
            Find answers to the most common questions about shipping, products,
            payments, and returns. Select a category below to get started.
          </p>
        </div>

        <div className="space-y-8 mt-12 max-w-3xl mx-auto">
          {/* Tabs list */}
          <Tabs defaultValue={faqData[0].id}>
            <TabsList className="flex justify-between gap-4 flex-wrap w-full">
              {faqData.map((category) => (
                <TabsTrigger
                  className="text-md py-3 font-bold group relative overflow-hidden"
                  key={category.id}
                  value={category.id}
                >
                  <span className="relative z-10">{category.label}</span>
                  <span className="absolute bg-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] w-full h-[10px] -rotate-45 -translate-x-full group-hover:translate-x-full transition duration-300" />
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs content panes */}
            {faqData.map((category) => (
              <TabsContent
                className="mt-12"
                key={category.id}
                value={category.id}
              >
                <div className="space-y-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-4 "
                  >
                    {category.items.map(({ question, answer }, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`item-${category.id}-${idx}`}
                      >
                        <AccordionTrigger className="text-md md:text-xl cursor-pointer ">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-paragraph">
                          <p>{answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <GlareCTA/>
      </Container>
    </section>
  );
}

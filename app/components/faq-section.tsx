import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import type { FAQSectionProps } from "./faq-data";
import faqData from "./faq-data";

export default function FAQSection({
  faqList = faqData,
  title = "Frequently Asked Questions",
  subtitle = "Have questions? Our FAQs might just have the answers. Let's unlock your website's full potential.",
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-[80px]">
        <div className="text-center mb-16">
          <h2 className="lg:text-4xl  md:text-3xl font-medium text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-xl  mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqList.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="rounded-[10.834px] border-2 border-[#F1F1F3] bg-white"
              >
                <Button
                  variant="ghost"
                  className="w-full text-left justify-between hover:bg-gray-50 h-auto px-7 py-5 focus:outline-none focus:ring-0 focus:border-transparent hover:bg-transparent cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-[#262626] font-bold text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <div className="w-8 h-8  bg-[#E3FED0] flex items-center justify-center">
                        <Minus className="h-4 w-4 text-gray-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-[#E3FED0] flex items-center justify-center">
                        <Plus className="h-4 w-4 text-gray-600" />
                      </div>
                    )}
                  </div>
                </Button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-7"
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                  >
                    <div className="text-[#1B1B1F] py-6 leading-relaxed border-t-2 border-[#F1F1F3] pt-6">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

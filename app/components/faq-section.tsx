import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "~/components/ui/button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Will an expert actually review my site, or is this automated?",
    answer:
      "Every audit is manually done by experienced SEO professionals having 15 years of experience. We don't rely on automated tools alone; we dig in, analyze context, and provide human insights you won't get elsewhere.",
  },
  {
    id: "2",
    question: "Can you help with implementation too?",
    answer:
      "Not directly. Our audits are meant to guide your team or SEO partner with a clear and actionable roadmap.",
  },
  {
    id: "3",
    question: "Can I purchase more than one audit for the same website?",
    answer:
      "We limit it to one audit per website per plan. They're intended to provide a strategic snapshot, so there's no need to stack them.",
  },
  {
    id: "4",
    question:
      "How quickly will I see results after applying the audit recommendations?",
    answer:
      "Most clients begin to see positive changes within 4—8 weeks, with more substantial results typically appearing in 6-8 months. SEO is a long game, but the right moves pay off.",
  },
  {
    id: "5",
    question: "Do you work with non-English websites?",
    answer:
      "Unfortunately, no. Language plays a big role in SEO, especially for content analysis. We recommend hiring a native-language SEO specialist in those cases.",
  },
  {
    id: "6",
    question: "Are there any websites or industries you don't audit?",
    answer:
      "Yes. We do not audit sites related to adult content, gambling, or anything illegal due to legal and ethical constraints.",
  },
  {
    id: "7",
    question: "Can I order an audit for a client site I don't own?",
    answer:
      "Absolutely. Many SEOs and agencies use our audits as a second opinion or to strengthen their internal strategy.",
  },
  {
    id: "8",
    question: "Are your audit recommendations 'white-hat'?",
    answer:
      "Yes. All of our advice is aligned with Google's Guidelines. We don't recommend anything risky or manipulative, just proven strategies based on real-world experience.",
  },
  {
    id: "9",
    question: "Can I ask specific questions about my site?",
    answer:
      "Yes! After you order, you'll get a form where you can list specific concerns or areas you want us to focus on. We tailor the audit around your input.",
  },
  {
    id: "10",
    question: "Do you offer refunds?",
    answer:
      "For the Essential Audit, we offer a 100% no-questions-asked money-back guarantee if you're not satisfied. (We rarely have to use it.)",
  },
];

interface FAQSectionProps {
  data?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  data = faqData,
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg  mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {data.map((item) => {
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

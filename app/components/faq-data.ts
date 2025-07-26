export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export interface FAQSectionProps {
  data?: FAQItem[];
  title?: string;
  subtitle?: string;
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
export default faqData;

import { TestimonialCard } from '../TestimonialCard/TestimonialCard';
import { FeaturePoint } from '../FeaturePoint/FeaturePoint';

const featurePoints = [
  {
    iconSrc: "http://localhost:3845/assets/01a5cfdf5970c01683d2d88ce02ed041caf4028a.svg",
    title: "Results-Focused, Not Buzzword-Filled",
    description: "We believe in action, not jargon. Every audit, article, and backlink we deliver is engineered for tangible SEO gains — more visibility, more clicks, and more conversions."
  },
  {
    iconSrc: "http://localhost:3845/assets/41542e98169be277af6a6719b14c97f17c27e64d.svg",
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees. No locked-in contracts. We offer entry-level audits at $49 and publish all our pricing clearly so you always know what you’re paying for — and why it matters."
  },
  {
    iconSrc: "http://localhost:3845/assets/f441cddb6afd80a1bf3c8b9bbea4fe780453b3ba.svg",
    title: "Real Communication, Real People",
    description: "You won’t get stuck with generic chatbots or slow responses. Our team is responsive, human, and here to help — whether you’re a solopreneur or an enterprise."
  },
  {
    iconSrc: "http://localhost:3845/assets/1005a97bd4edf3f442a4ddc80959a64b3c9e0c95.svg",
    title: "Modular, Scalable Services",
    description: "Need just a quick fix? Or a full-blown SEO campaign? You pick what you need: audits, content, WordPress care, or link building — and scale as your business grows."
  },
  {
    iconSrc: "http://localhost:3845/assets/2fdaab268e98b8f7044ce5c9261c9caf14a05d65.svg",
    title: "Long-Term Partnerships",
    description: "We’re in it for the long haul. Many of our clients start with a small audit and stay with us for years"
  }
];

const TestimonialSection = () => {
  return (
    <section
      className="box-border flex flex-col lg:flex-row items-start justify-between gap-12 px-6 lg:px-[120px] py-10 lg:py-20 relative size-full"
      style={{
        backgroundImage: "linear-gradient(148.716deg, rgb(255, 248, 227) 0%, rgb(239, 246, 255) 100%)",
      }}
    >
      <div className="flex flex-col gap-[30px] w-full lg:w-[442px]">
        <div className="flex flex-col justify-center">
          <h2 className="font-satoshi-black text-[48px] text-black">
            Why Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" style={{ WebkitTextFillColor: "transparent" }}>Love Us</span>
          </h2>
          <p className="font-satoshi-medium text-[18px] text-gray-600 leading-[28px]">
            Discover why businesses trust WebGeeksMedia for innovative, reliable, and tailored SEO solutions. From exceptional quality to timely delivery and lasting partnerships, we deliver measurable results that drive success.
          </p>
        </div>
        <TestimonialCard />
      </div>
      <div className="flex flex-col gap-[47px] w-full lg:w-[657px]">
        {featurePoints.map((feature, index) => (
          <FeaturePoint
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
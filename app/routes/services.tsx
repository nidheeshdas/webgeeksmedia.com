import Hero from "~/components/hero";
import WhyChooseUs from "~/components/why-choose-us";
import SeoWorkflow from "~/components/seo-workflow";
import Pricing from "~/components/pricing-section";
import FAQ from "~/components/faq-section";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { Quote } from "lucide-react";
import ServiceHeaderTestimonialCard from "~/components/ServiceHeaderTestimonialCard";

export function meta() {
  return [
    { title: "Your Page Title" },
    { name: "description", content: "Description of your page" },
    // Add more meta tags as needed
  ];
}


export default function Services() {
  return (
    <main className="min-h-screen">
      <Hero>
        <div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Fix. Improve. Grow — With Expert Eyes on Your Website.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-[51px] mt-[25px] leading-tight">
            SEO Services{" "}
          </h1>
          <ServiceHeaderTestimonialCard />
        </div>
      </Hero>
      <div className="relative flex justify-center items-center">
        <div className="absolute"><a href="#why-us">
          <svg width="70" height="84" viewBox="0 0 70 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_82_476)">
          <rect x="15" y="11" width="40" height="54" rx="20" fill="white" shape-rendering="crispEdges"/>
          <rect x="15.5" y="11.5" width="39" height="53" rx="19.5" stroke="url(#paint0_linear_82_476)" shape-rendering="crispEdges"/>
          <path d="M29 40L35 46L41 40" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <filter id="filter0_d_82_476" x="0" y="0" width="70" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_82_476"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_82_476" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_82_476" x1="15" y1="38" x2="55" y2="38" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E67474"/>
          <stop offset="1" stop-color="#AA3FFE"/>
          </linearGradient>
          </defs>
          </svg>
        </a></div>
      </div>
      <WhyChooseUs id="why-us" />
      <SeoWorkflow />
      <Pricing />
      <FAQ />
      <CTA
        buttonText={"Start Now"}
        price={49}
        showIcon={false}
        priceText={"Starting With Just "}
        content="Ready to See What’s Really Holding Your Website Back?"
      />
      <Footer />
    </main>
  );
}

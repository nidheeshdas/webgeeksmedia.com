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
        <div className="absolute">
          <a href="#why-us">
            <div className="p-[1px] h-[54px] w-[40px] rounded-[30px] flex justify-center items-center bg-gradient-to-r from-[#E67474] to-[#AA3FFE] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
              <div className="bg-white h-full w-full rounded-[30px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4 12L10 18L16 12"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
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

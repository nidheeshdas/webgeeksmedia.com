import Hero from "~/components/hero";
import WhyChooseUs from "~/components/why-choose-us";
import SeoWorkflow from "~/components/seo-workflow";
import Pricing from "~/components/pricing-section";
import FAQ from "~/components/faq-section";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { Quote } from "lucide-react";
import ServiceHeaderTestimonialCard from "~/components/ServiceHeaderTestimonialCard";

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
      <WhyChooseUs />
      <SeoWorkflow />
      <Pricing />
      <FAQ />
      <CTA
        buttonText={`Get Started for $49`}
        price={49}
        showIcon={true}
        priceText={"Starting With Just "}
        content="Ready to See What’s Really Holding Your Website Back?"
      />
      <Footer />
    </main>
  );
}

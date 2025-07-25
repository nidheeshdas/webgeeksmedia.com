import Header from "~/components/header";
import Hero from "~/components/hero";
import WhyChooseUs from "~/components/why-choose-us";
import SeoWorkflow from "~/components/seo-workflow";
import Pricing from "~/components/pricing-section";
import FAQ from "~/components/faq-section";
import CTA from "~/components/cta";
import Footer from "~/components/footer";

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero>
        <div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Fix. Improve. Grow — With Expert Eyes on Your Website.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SEO Services{" "}
          </h1>
          <p className="text-lg md:text-sm text-gray-700 max-w-2xl mx-auto">
            Their audit uncovered issues we didn’t even know existed. The level
            of detail and thought put into it was impressive – totally worth it.{" "}
          </p>
        </div>
      </Hero>
      <WhyChooseUs />
      <SeoWorkflow />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

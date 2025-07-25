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
      <Hero />
      <WhyChooseUs />
      <SeoWorkflow />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

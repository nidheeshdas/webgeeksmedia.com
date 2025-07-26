import Header from "~/components/header";
import Hero from "~/components/hero";
import Services from "~/components/services";
import WhyClients from "~/components/why-clients";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Rocket } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Unlock Your
            <br />
            Website's True Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We're not just another SEO agency — we're your digital growth
            partner.
          </p>
        </div>
        <a href="/services">
          <Button className="cursor-ponter bg-white text-gray-900 p-4 rounded-[30px] border-2 border-[#E67474] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15) hover:bg-[#E67474]/10 transition-colors">
            <Rocket className="mr-1 text-pink-500" />
            Explore Services
          </Button>
        </a>
      </Hero>
      <Services />
      <WhyClients />
      <CTA />
      <Footer />
    </main>
  );
}

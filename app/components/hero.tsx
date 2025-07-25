import { Button } from "~/components/ui/button";
import { Rocket } from "lucide-react";
import Header from "./header";

export default function Hero() {
  return (
    <section
      // className="min-h-screen"
      style={{
        backgroundImage: `
      url("/images/Noise.png"),
      linear-gradient(106deg, #E1E4FE 0%, #E3FED0 100%)
    `,
        backgroundPosition: "0% 0%",
        backgroundSize: "100% 100%",
        backgroundBlendMode: "overlay",
      }}
    >
      <Header />
      <div className="flex flex-col items-center gap-[50px] mt-16 pb-16 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Your
            <br />
            Website's True Potential
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We're not just another SEO agency — we're your digital growth
            partner.
          </p>
        </div>
        <Button className="cursor-ponter bg-white text-gray-900 p-4 rounded-[30px] border-2 border-[#E67474] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.15) hover:bg-[#E67474]/10 transition-colors">
          <Rocket className="mr-1 text-pink-500" />
          Explore Services
        </Button>
      </div>
    </section>
  );
}

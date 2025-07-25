import Header from "~/components/header";
import Hero from "~/components/hero";
import Contact from "~/components/contact-form";
import CTA from "~/components/cta";
import Footer from "~/components/footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Contact us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We're not just another SEO agency — we’re your digital growth
            partner.
          </p>
        </div>
      </Hero>
      <Contact />
      {/* <CTA /> */}
      <Footer />
    </main>
  );
}

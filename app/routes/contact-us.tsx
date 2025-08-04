import Header from "~/components/header";
import Hero from "~/components/hero";
import Contact from "~/components/contact-form";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { JsonLd } from "~/components/jsonld";

export function meta() {
  return [
    { title: "Contact WebGeeksMedia • Get in Touch for SEO Services" },
    { name: "description", content: "Contact WebGeeksMedia today for expert SEO services like website audits, and optimization solutions. Let’s discuss how we can grow your business online." },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://webgeeksmedia.com/contact-us/",
    },

    // ✅ Add favicon & app icons
    {
      tagName: "link",
      rel: "icon",
      href: "https://webgeeksmedia.com/images/site-icon-32x32.png",
      sizes: "32x32",
    },
    {
      tagName: "link",
      rel: "icon",
      href: "https://webgeeksmedia.com/images/site-icon-192x192.png",
      sizes: "192x192",
    },
    {
      tagName: "link",
      rel: "apple-touch-icon",
      href: "https://webgeeksmedia.com/images/site-icon-180x180.png",
    },
    {
      tagName: "meta",
      name: "msapplication-TileImage",
      content: "https://webgeeksmedia.com/images/site-icon-270x270.png",
    },    
  ];
}

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://webgeeksmedia.com/#organization",
              "name": "WebGeeksMedia",
              "url": "https://webgeeksmedia.com/",
              "logo": "https://webgeeksmedia.com/images/webgeeksmedia-logo.svg",
              "image": "https://webgeeksmedia.com/images/site-icon.png",
              "description":
                "WebGeeksMedia provides expert SEO services including website audits and digital growth strategies.",
              "sameAs": [
                "https://www.facebook.com/WebGeeksMedia",
                "https://x.com/webgeeksmedia",
                "https://www.linkedin.com/company/webgeeksmedia/"
              ]
            },
            {
              "@type": "WebPage",
              "@id": "https://webgeeksmedia.com/contact-us/#webpage",
              "url": "https://webgeeksmedia.com/contact-us/",
              "name": "Contact WebGeeksMedia • Get in Touch for SEO Services",
              "description":
                "Contact WebGeeksMedia today for expert SEO services like website audits, and optimization solutions. Let’s discuss how we can grow your business online.",
              "isPartOf": {
                "@id": "https://webgeeksmedia.com/#website"
              },
              "about": {
                "@id": "https://webgeeksmedia.com/#organization"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://webgeeksmedia.com/images/site-icon.png"
              },
              "inLanguage": "en"
            }
          ]
        }}
      />
      {/* <Header /> */}
      <Hero>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
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

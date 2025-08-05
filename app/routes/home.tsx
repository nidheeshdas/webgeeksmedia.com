import Hero from "~/components/hero";
import Services from "~/components/services";
import WhyClients from "~/components/why-clients";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { Link } from "react-router";
import { JsonLd } from "~/components/jsonld";

export function meta() {
  return [
    { title: "WebGeeksMedia • Professional SEO Services" },
    {
      name: "description",
      content:
        "Boost your website's visibility with WebGeeksMedia. Expert SEO audits, and strategies to grow your business online.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://webgeeksmedia.com/",
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
    // ✅ Add Google Site Verification
    {
      tagName: "meta",
      name: "google-site-verification",
      content: "KS5DAoUVO2WNTnP5VrL5-dJqgpAWizxysDc479SkogE",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
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
              "description": "WebGeeksMedia provides expert SEO services including website audits, and digital growth strategies.",
              "sameAs": [
                "https://www.facebook.com/WebGeeksMedia",
                "https://x.com/webgeeksmedia",
                "https://www.linkedin.com/company/webgeeksmedia/"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://webgeeksmedia.com/#website",
              "url": "https://webgeeksmedia.com/",
              "name": "WebGeeksMedia",
              "description": "Professional SEO services to increase website visibility and traffic.",
              "publisher": {
                "@id": "https://webgeeksmedia.com/#organization"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://webgeeksmedia.com/#webpage",
              "url": "https://webgeeksmedia.com/",
              "name": "WebGeeksMedia | Professional SEO Services",
              "description": "Boost your website's visibility with WebGeeksMedia. Expert SEO audits and digital marketing strategies for business growth.",
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
        <Link to="/audit-service/">
          <div className="p-[2px] rounded-[30px] bg-gradient-to-r from-[#E67474] to-[#AA3FFE] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
            <button className="flex flex-row gap-[10px] text-[#333] text-center font-medium text-[16px] leading-[16px] cursor-pointer bg-white rounded-[28px] px-[21px] py-[17px] transition-colors hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M16.7368 1.00282C16.7368 1.00282 13.2368 0.602816 10.0368 3.80282C8.4368 5.30282 7.1368 7.30282 6.1368 9.10282L3.6368 8.50282L2.0368 10.1028L4.8368 11.5028C4.5368 12.1028 4.4368 12.5028 4.4368 12.5028L5.2368 13.3028C5.2368 13.3028 5.6368 13.1028 6.2368 12.9028L7.6368 15.7028L9.2368 14.1028L8.7368 11.6028C10.4368 10.6028 12.5368 9.30282 14.0368 7.80282C17.1368 4.60282 16.7368 1.00282 16.7368 1.00282ZM13.5368 5.80282C13.1368 6.20282 12.4368 6.20282 11.9368 5.80282C11.5368 5.40282 11.5368 4.70282 11.9368 4.20282C12.3368 3.80282 13.0368 3.80282 13.5368 4.20282C13.9368 4.60282 13.9368 5.30282 13.5368 5.80282Z"
                  fill="black"
                />
                <path
                  d="M16.7368 1.00282C16.7368 1.00282 13.2368 0.602816 10.0368 3.80282C8.4368 5.30282 7.1368 7.30282 6.1368 9.10282L3.6368 8.50282L2.0368 10.1028L4.8368 11.5028C4.5368 12.1028 4.4368 12.5028 4.4368 12.5028L5.2368 13.3028C5.2368 13.3028 5.6368 13.1028 6.2368 12.9028L7.6368 15.7028L9.2368 14.1028L8.7368 11.6028C10.4368 10.6028 12.5368 9.30282 14.0368 7.80282C17.1368 4.60282 16.7368 1.00282 16.7368 1.00282ZM13.5368 5.80282C13.1368 6.20282 12.4368 6.20282 11.9368 5.80282C11.5368 5.40282 11.5368 4.70282 11.9368 4.20282C12.3368 3.80282 13.0368 3.80282 13.5368 4.20282C13.9368 4.60282 13.9368 5.30282 13.5368 5.80282Z"
                  fill="url(#paint0_linear_82_198)"
                />
                <path
                  d="M4.7368 15.2027C3.9368 16.0027 2.1368 15.6027 2.1368 15.6027C2.1368 15.6027 1.7368 13.8027 2.5368 13.0027C3.3368 12.2027 4.0368 12.1027 4.0368 12.1027C4.0368 12.1027 2.7368 11.8027 1.9368 12.7027C0.336803 14.3027 0.936803 16.9027 0.936803 16.9027C0.936803 16.9027 3.5368 17.5027 5.1368 15.9027C6.0368 15.0027 5.7368 13.7027 5.7368 13.7027C5.7368 13.7027 5.5368 14.4027 4.7368 15.2027Z"
                  fill="black"
                />
                <path
                  d="M4.7368 15.2027C3.9368 16.0027 2.1368 15.6027 2.1368 15.6027C2.1368 15.6027 1.7368 13.8027 2.5368 13.0027C3.3368 12.2027 4.0368 12.1027 4.0368 12.1027C4.0368 12.1027 2.7368 11.8027 1.9368 12.7027C0.336803 14.3027 0.936803 16.9027 0.936803 16.9027C0.936803 16.9027 3.5368 17.5027 5.1368 15.9027C6.0368 15.0027 5.7368 13.7027 5.7368 13.7027C5.7368 13.7027 5.5368 14.4027 4.7368 15.2027Z"
                  fill="#E67474"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_82_198"
                    x1="2.52835"
                    y1="15.2121"
                    x2="16.2628"
                    y2="1.47823"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E67474" />
                    <stop offset="1" stop-color="#AA3FFD" />
                  </linearGradient>
                </defs>
              </svg>
              Explore Services
            </button>
          </div>
        </Link>
      </Hero>
      <Services />
      <WhyClients />
      <CTA
        price={49}
        showIcon={false}
        buttonText={"Start Now"}
        content="Let us earn your trust"
        priceText={"Starting With Just "}
        buttonNavigateTo="/mailer/pay.php?plan=essential"
      />
      <Footer />
    </main>
  );
}

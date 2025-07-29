import Hero from "~/components/hero";
import Services from "~/components/services";
import WhyClients from "~/components/why-clients";
import CTA from "~/components/cta";
import Footer from "~/components/footer";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const msg = sp.get('message');
    setMessage(msg || 'Failed');
  }, []);

  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Payment Failed
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {message}
          </p>
        </div>
      </Hero>
    </main>
  );
}

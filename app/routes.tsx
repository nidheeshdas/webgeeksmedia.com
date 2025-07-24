import Header from "~/components/header"
import Hero from "~/components/hero"
import Services from "~/components/services"
import WhyClients from "~/components/why-clients"
import CTA from "~/components/cta"
import Footer from "~/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyClients />
      <CTA />
      <Footer />
    </main>
  )
}

import Header from "~/components/header";
import Hero from "~/components/hero";
import Contact from "~/components/contact-form"
import CTA from "~/components/cta"
import Footer from "~/components/footer"

export default function ContactUs() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero/>
            <Contact />
            <CTA />
            <Footer />
        </main>
    );
}

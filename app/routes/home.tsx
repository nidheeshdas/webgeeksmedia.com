import Cta from '../components/Cta/Cta';
import Services from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import WhyUs from '../components/WhyUs/WhyUs';

export function meta() {
  return [
    { title: "WGM Website" },
    { name: "description", content: "A better way to build." },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <Services />
        <TestimonialSection />
        <WhyUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

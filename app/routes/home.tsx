import Cta from '../components/Cta/Cta';
import Services from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import { WhyUs } from '../components/WhyUs/WhyUs';

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
        <WhyUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex h-[400px] sm:h-[450px] lg:h-[510px] flex-col items-center justify-center bg-cover bg-center text-center px-5 sm:px-10 lg:px-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #fff8e3, #eff6ff), url('/noise.png')",
      }}
    >
      <div className="absolute inset-0 bg-noise-texture opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[36px] sm:text-[48px] lg:text-60 font-bold text-text-primary leading-tight">
          Unlock Your Website's True Potential
        </h1>
        <p className="text-[18px] sm:text-[22px] lg:text-26 mt-4 text-text-secondary">
          We're not just another SEO agency — we're your digital growth partner.
        </p>
        <div className="mt-8">
          <Button>
            <div className="flex items-center gap-2">
              <Icon name="rocket" className="h-5 w-5" />
              <span>Explore Services</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

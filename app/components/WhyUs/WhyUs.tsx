import React from 'react';
import Icon from '../Icon/Icon';

const features = [
  {
    title: "Proven Results",
    description: "We deliver measurable success with data-driven strategies.",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent and competitive pricing to fit your budget.",
  },
  {
    title: "Expert Communication",
    description: "Direct access to our team for clear and timely updates.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored services that align with your unique business goals.",
  },
  {
    title: "Long-term Partnership",
    description: "We are committed to your growth and success.",
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-5 sm:px-[60px] lg:px-[120px] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 lg:mb-12">Why Choose WebGeeks Media?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-2.5 sm:p-3 mb-3 sm:mb-4">
                <Icon name="check" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
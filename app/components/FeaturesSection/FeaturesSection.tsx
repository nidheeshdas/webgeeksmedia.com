import React from 'react';
import ServiceCard from '../Card/Card';
interface Service {
  icon: string;
  title: string;
  description: string;
  upcoming?: boolean;
}

const services: Service[] = [
  {
    icon: 'seo-audit',
    title: 'SEO Audit Services',
    description: 'Get expert eyes on your website. Start with our $49 entry-level audit and discover what’s holding back your rankings.',
  },
  {
    icon: 'wordpress-care',
    title: 'WordPress Care Plans',
    description: 'From essential updates to elite care for eCommerce, we keep your site secure, fast, and worry-free — starting at just $49/month.',
    upcoming: true,
  },
  {
    icon: 'content-writing',
    title: 'SEO Content Writing',
    description: 'Scale your content the right way. Choose between high-quality human-written authority content or affordable AI-assisted bulk publishing.',
    upcoming: true,
  },
  {
    icon: 'link-building',
    title: 'Link Building Services',
    description: 'Gain high-authority, niche-relevant backlinks to grow your visibility, trust, and traffic. Tailored campaigns for startups and tough niches like CBD or Forex.',
    upcoming: true,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#f8f8f8] box-border content-stretch flex flex-col gap-[40px] sm:gap-[50px] lg:gap-[60px] items-center justify-start px-5 sm:px-[60px] lg:px-[120px] py-16 sm:py-18 lg:py-20 relative size-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[15px] lg:gap-[18px] items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-center">
          <h2 className="flex flex-col font-['Satoshi-Medium',_sans-serif] justify-center relative shrink-0 text-[#000000] text-[28px] sm:text-[34px] lg:text-[40px] w-full leading-tight">Our Core Services</h2>
          <p className="flex flex-col font-['Satoshi-Regular',_sans-serif] justify-center relative shrink-0 text-[#333333] text-[16px] sm:text-[18px] lg:text-[20px] w-full max-w-3xl">
            Comprehensive solutions tailored to boost your online presence and drive sustainable growth.
          </p>
        </div>
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              upcoming={service.upcoming}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
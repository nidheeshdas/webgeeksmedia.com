import React from 'react';
import ServiceCard from '../Card/Card';
import type { IconName } from '../Icon/Icon';

interface Service {
  icon: IconName;
  title: string;
  description: string;
  upcoming?: boolean;
}

const services: Service[] = [
  {
    icon: 'search',
    title: 'SEO Audit Services',
    description: "Get a super in-depth audit of your website for just $49 and receive actionable insights on what's holding back your rankings.",
  },
  {
    icon: 'wordpress',
    title: 'WordPress Care Plans',
    description: 'From essential updates to daily backups for a WooCommerce, we have a plan that lets you run your worry-free site. Starting at just $79/month.',
  },
  {
    icon: 'document',
    title: 'SEO Content Writing',
    description: 'Soon, you can receive the right kind of content for your specific needs. Our writers focus on quality, content and affordability. At launch we\'ll be providing...',
    upcoming: true,
  },
  {
    icon: 'link',
    title: 'Link Building Services',
    description: 'Get high-authority, niche-relevant backlinks that move your website up in the SERPs. Tailored campaigns for medium and large businesses. Regional or France.',
    upcoming: true,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Core Services</h2>
          <p className="text-lg text-gray-500 mt-4">
            Comprehensive solutions tailored to boost your online presence and drive sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
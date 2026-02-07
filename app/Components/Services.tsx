"use client";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const Services = ({
  title = "Our Services",
  subtitle = "Comprehensive solutions tailored to your business needs",
  services = [],
}: ServicesSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full text-white overflow-hidden py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-widest mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              title={service.title}
              description={service.description}
              image={service.image}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

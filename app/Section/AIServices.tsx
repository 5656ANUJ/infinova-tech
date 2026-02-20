"use client";
import { useState } from "react";
import { services } from "../data";
import ServiceTabs from "../Components/AIServiceTabs";
import ServiceCard from "../Components/ServiceCard";

export default function AIServices() {
  const [active, setActive] = useState("ai");

  return (
    <section className="mt-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-6 ml-[auto]">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Services</h2>
        <p className="text-gray-300">
          Explore our comprehensive suite of AI automation services tailored to
          meet your unique business needs.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start px-6">
        {/* Tabs */}
        <ServiceTabs active={active} setActive={setActive} />

        {/* Card */}
        <div className="flex justify-center lg:justify-end w-full lg:max-w-xl text-justify">
          <ServiceCard {...services[active as keyof typeof services]} />
        </div>
      </div>
    </section>
  );
}

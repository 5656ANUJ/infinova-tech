import dynamic from "next/dynamic";
import LandingHerosection from "./Section/LandingHerosection";

const HowWeDoIt = dynamic(() => import("./Section/HowWeDoIt"));
const ProjectSec = dynamic(() => import("./Section/ProjectSec"));
const Whoweare = dynamic(() => import("./Section/whowearesec"));
const CTAsec = dynamic(() => import("./Section/CTAsec"));
const PriceCardContainer = dynamic(() => import("./Section/PricingComp"));
const TestimonialSec = dynamic(() => import("./Section/TestimonialSec"));
const ServicesSec = dynamic(() => import("./Section/ServicesSec"));

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex mt-20 pt-2 pb-2 px-5 md:pt-5 md:pb-4 md:px-10 lg:pt-10 lg:pb-14 lg:px-16.25 justify-center items-center">
        <LandingHerosection />
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Whoweare />
        </div>
      </section>
      <section>
        <ServicesSec />
      </section>
      {/* Our Process - How We Do It */}
      <section className="py-16 md:py-20 lg:py-24">
        <HowWeDoIt />
      </section>

      {/* Project Showcase */}
      <section className="py-16 md:py-20 lg:py-24">
        <ProjectSec />
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-20 lg:py-24">
        <PriceCardContainer />
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 lg:py-24">
        <TestimonialSec />
      </section>

      {/* Final CTA */}

    </>
  );
}

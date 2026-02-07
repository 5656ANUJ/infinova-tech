import HowWeDoIt from "./Section/HowWeDoIt";
import LandingHerosection from "./Section/LandingHerosection";
import ProjectSec from "./Section/ProjectSec";
import Whoweare from "./Section/whowearesec";
import CTAsec from "./Section/CTAsec";
import PriceCardContainer from "./Section/PricingComp";
import TestimonialSec from "./Section/TestimonialSec";
import ServicesSec from "./Section/ServicesSec";

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
      <section className="py-16 md:py-20 lg:py-24">
        <CTAsec />
      </section>
    </>
  );
}

import HowWeDoIt from "./Section/HowWeDoIt";
import LandingHerosection from "./Section/LandingHerosection";
import ProjectSec from "./Section/ProjectSec";
import Whoweare from "./Section/whowearesec";
import CTAsec from "./Section/CTAsec";
import WhatWeBuildSec from "./Section/WhatWeBuildSec";
import WhyChooseUsSec from "./Section/WhyChooseUsSec";
import AIServices from "./Section/AIServices";
import PriceCardContainer from "./Section/PricingComp";
import TestimonialSec from "./Section/TestimonialSec";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <LandingHerosection />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <Whoweare />
        </div>
      </section>

      {/* Digital Solutions - What We Build */}
      <section className="py-16 md:py-20 lg:py-24">
        <WhatWeBuildSec />
      </section>

      {/* Our Process - How We Do It */}
      <section className="py-16 md:py-20 lg:py-24">
        <HowWeDoIt />
      </section>

      {/* Project Showcase */}
      <section className="py-16 md:py-20 lg:py-24">
        <ProjectSec />
      </section>

      {/* Services Section with Tabs */}
      <section className="py-16 md:py-20 lg:py-24">
        <AIServices />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 lg:py-24">
        <WhyChooseUsSec />
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

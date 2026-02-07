"use client";
import PricingCard from "../Components/PricingCard";

export default function PriceCardContainer() {
  return (
    <div className="lg:h-[100vh]  h-full w-full py-12 px-6 mb-36 ">
      <div className="grid place-items-center lg:mb-12">
        <h1 className="lg:text-6xl md:text-6xl font-black text-center text-7xl text-purple-700/70  lg:mb-16 mb-40 mt-20">The <span className="text-white">Perfect</span>  Plan for Your Needs</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 md:gap-8 place-items-center">
        <PricingCard
          title="Basic Plan"
          price="$19/mo"
          features={[
            "Responsive website",
            "Basic SEO",
            "Email support",
            "Responsive website",
            "Basic SEO",
            "Email support",
            "Basic SEO",


          ]}
          buttonLabel="Get Started"
          buttonLink="/signup/basic"
        />
        <PricingCard
          title="Pro Plan"
          price="$49/mo"
          features={[
            "Everything in Basic",
            "Advanced SEO",
            "Priority support",
            "Analytics dashboard",
          ]}
          buttonLabel="Choose Pro"
          buttonLink="/signup/pro"
          isPopular={true}
        />

      </div>
    </div>
  );
}
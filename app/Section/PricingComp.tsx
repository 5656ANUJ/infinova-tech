"use client";
import PricingCard from "../Components/PricingCard";

export default function PriceCardContainer() {
  return (
    <div className="w-full min-h-screen h-full py-12 px-6 mb-36 lg:mb-0">
      <div className="grid place-items-center lg:mb-12">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-black text-center  lg:mb-16 mb-40 mt-20">
          The Perfect Plan for Your Needs
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 md:gap-8 justify-items-center items-stretch">
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

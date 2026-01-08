

import { use } from "react";
import PremiumCard from "../Components/premiumCard";
const tiers = [
  {
    title: "Starter",
    price: "$99",
    features: ["Unlimited access", "Priority support", "Exclusive content", "Community access", "Regular updates", "Customizable features", "Basic analytics"]
  },
  {
    title: "Pro",
    price: "$199",
    features: ["All Starter features", "Personal Coach", "Offline Access", "Advanced analytics", "Early access to new features", "Ad-free experience", "Premium support"]
  }
];
export default function PremiumPlanSec() {
  return (
    <section className="flex flex-col w-full h-auto m-10 gap-8 justify-center items-center">
      <h1 className="text-white text-center font-['Sora'] font-bold capitalize text-xm md:text-2xl lg:text-4xl leading-normal">
        The Perfect Plan for Your Needs
      </h1>
      <div className="flex flex-col md:flex-row justify-center  w-full h-auto gap-3">
        {tiers.map((tier, index) => (
            <PremiumCard
                key={index}
                title={tier.title}
                price={tier.price}
                features={tier.features}
            />
        ))}
        </div>
    </section>
  );
}

import { marqueeData } from "../data";

export default function MarqueeSection({
  active,
}: {
  active: "ai" | "workflow";
}) {
  
  const items = marqueeData[active];

  return (
    <div className="mt-28 overflow-hidden">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 mr-5">
        What You Get
      </h2>

      {/* Row 1 → Left */}
      <div className="overflow-hidden whitespace-nowrap mb-8 ">
        <div className="inline-flex gap-16 animate-marquee-left  ">
          {[...items, ...items].map((item, i) => (
            <span
              key={`left-${i}`}
              className="text-lg font-semibold tracking-widest opacity-90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 → Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-16 animate-marquee-right">
          {[...items, ...items].map((item, i) => (
            <span
              key={`right-${i}`}
              className="text-lg font-semibold tracking-widest opacity-90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

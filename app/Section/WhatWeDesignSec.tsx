import WhatwedesignCard from "../Components/WhatwedesignCard";

export default function WhatWeDesignSec() {
  const whatWeDesignData = [
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Material Design",
      image:
        "https://images.unsplash.com/photo-1768158984380-5071c359070f?q=80&w=687&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center text-center mt-5 px-5 md:px-10">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        What We Design
      </h1>

      <p className="text-xs md:text-md lg:text-lg max-w-2xl mb-10 text-gray-400">
        We craft visually consistent, bold and thoughtful graphics tailored to
        your brand.
      </p>

      {/* Cards Wrapper */}
      <div
        className="
          /* Mobile: Horizontal Scroll */
          flex gap-5 w-full overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10

          /* Tablet & up: Grid layout */
          md:grid md:overflow-visible md:w-auto md:mx-auto md:gap-6

          /* Tablet Portrait: 2 columns */
          md:portrait:grid-cols-2

          /* Tablet Landscape: 3 columns */
          md:landscape:grid-cols-3

          /* Desktop */
          lg:grid-cols-3 lg:gap-[65px] lg:px-[65px]
        "
      >
        {whatWeDesignData.map((item, index) => (
          <div
            key={index}
            className="
              shrink-0 snap-center
              w-[260px] sm:w-[280px]

              md:w-auto md:shrink md:snap-none
              flex justify-center
            "
          >
            <WhatwedesignCard
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutusInfoSec1() {
  return (
    <section className="w-full"> {/* Added a background color for context */}
      <div className="
        max-w-7xl mx-auto 
        flex flex-col md:flex-row 
        justify-center items-center md:items-start 
        /* Padding to prevent hitting borders */
        px-6 py-12 
        md:px-12 md:py-20 
        lg:px-20 
        gap-10 lg:gap-24"
      >
        
        {/* Text Container */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="
              text-[#FFFFFF] text-end md:text-right 
              font-['Sora'] font-bold 
              /* Optimized sizes: Mobile -> Tablet -> Laptop */
              text-xl 
              md:text-3xl 
              lg:text-[55px] lg:leading-[127.919%]"
            >
              We make sure your idea & creation delivered properly
            </h1>

            <p className="
              text-white/80 text-justify 
              /* Optimized sizes: Mobile -> Tablet -> Laptop */
              text-sm 
              md:text-base 
              lg:text-xl leading-relaxed"
            >
              We help you turn ideas into clear, well-crafted digital experiences.
              Our team works across web development, UI/UX design, product design,
              graphic design, and SEO to build solutions that feel thoughtful and
              look professional. Everything we create is shaped around your goals
              and your audience.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
            <img
              src="https://images.unsplash.com/photo-1767749559743-d2e4d8031d4f?q=80&w=687&auto=format&fit=crop"
              alt="Creative process"
              className="
                w-full object-cover
                /* Tablet specific height to prevent the image from being too tall */
                h-64 
                md:h-100 
                lg:h-137.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function AboutusInfoSec2() {
  return (
    <section className="w-full "> {/* Light gray bg to match image */}
      <div className="
        max-w-7xl mx-auto 
        flex flex-col md:flex-row 
        items-center md:items-start 
        px-6 py-12 
        md:px-12 md:py-20 
        lg:px-24 
        gap-12 lg:gap-20"
      >
        
        {/* Image Container (Left Side) */}
        <div className="w-full md:w-[40%] flex justify-center">
          <div className="rounded-[30px] overflow-hidden shadow-xl w-full max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1767749559743-d2e4d8031d4f?q=80&w=687&auto=format&fit=crop"
              alt="Small Business Owner"
              className="w-full h-100 md:h-137.5 object-cover"
            />
          </div>
        </div>

        {/* Content Container (Right Side) */}
        <div className="flex flex-col w-full md:w-[60%] text-left">
          <div className="flex flex-col gap-6">
            {/* Main Heading */}
            <h1 className="
              text-[#FFFFFF] 
              font-['Sora'] font-bold 
              text-3xl md:text-4xl lg:text-[50px] 
              leading-tight"
            >
              We Empower Small <br className="hidden lg:block" /> Business Owners
            </h1>

            {/* Description Paragraph */}
            <p className="
              text-white/90 text-left 
              text-base md:text-lg lg:text-xl 
              leading-relaxed font-light"
            >
              We help small businesses build a strong online presence with design, 
              development, and digital solutions that actually make a difference. 
              Our goal is to give you the tools, clarity, and support you need to grow. 
              Whether you're launching a new idea or improving what you already have, 
              we make the digital side of your business easier, smarter, and more effective.
            </p>

            {/* Quote Component */}
            <div className="mt-8 pl-6 border-l-4 border-blue-700 py-2">
              <h3 className="text-white font-['Sora'] font-semibold text-xl md:text-2xl">
                “Making an Impact Together”
              </h3>
              <p className="text-white/70 font-['Sora'] text-sm md:text-base mt-1">
                ~Infinova Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
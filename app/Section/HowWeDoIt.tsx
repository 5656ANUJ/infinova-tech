import React from "react";
import GlassContainer from "../Components/GlassContainer";
import PrimaryButton from "../Components/borderBtn";

export default function HowWeDoIt() {
  
  const GlassContainerInput = [
    {
      title: "Inital Consultaion",
      description: "We listen deeply to understand your unique business challenges and technological requirements.",
    },
    {
      title: "strategic planning",
      description: "Our experts craft a tailored digital strategy that aligns precisely with your business objectives.",
    },
    {
      title: "technical execution",
      description: "We deploy cutting-edge technologies with precision, transforming your digital vision into reality.",
    },
    {
      title: "final delivery",
      description: "We ensure seamless implementation and provide ongoing support to drive continuous digital innovation.",
    },
  ];

  return (
    <main className="min-h-screen text-white px-6 md:px-10 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Content Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 lg:sticky lg:top-20">
          <h4 className="text-blue-400 font-medium uppercase tracking-widest text-sm">
            How we do
          </h4>
          <h1 className="font-['Sora'] text-4xl md:text-5xl lg:text-6xl font-extrabold capitalize leading-tight tracking-tight">
            Our proven path to digital transformation
          </h1>
          <div className="pt-4">
            <PrimaryButton text="Start Your Journey" />
          </div>
        </div>

        {/* Right Timeline/Cards Section */}
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
          {GlassContainerInput.map((item, index) => (
            <React.Fragment key={index}>
              <GlassContainer
                title={item.title}
                description={item.description}
                // Pass the index so the card can display "01", "02", etc.
                index={index + 1} 
              />
              
              {/* JOINING LINE: Only render if it's NOT the last item */}
              {index !== GlassContainerInput.length - 1 && (
                <div className="w-[1.157px] h-12 bg-gradient-to-b from-white/40 to-transparent ml-[31px] md:ml-[60px]"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </main>
  );
}
import ProjectContainer from "../Components/projectContainer";

export default function ProjectSec() {
  // Example data array to simulate multiple projects
  const projects = [
    {
      title: "Project Alpha",
      description: "A cutting-edge solution leveraging AI and IoT.",
      images: ["/images/p1_1.jpg", "/images/p1_2.jpg"],
    },
    {
      title: "Project Beta",
      description: "Next-gen e-commerce platform with 3D previews.",
      images: ["/images/p2_1.jpg", "/images/p2_2.jpg"],
    },
    {
      title: "Project Gamma",
      description: "Decentralized finance dashboard for real-time tracking.",
      images: ["/images/p3_1.jpg", "/images/p3_2.jpg"],
    },
  ];

  return (
    <div className="mt-10 mb-10 px-4">
      <h4 className="text-white text-xs md:text-xm lg:text-xl font-inter font-[277] capitalize leading-12 wrap-break-wordbreak">
        Case Studies
      </h4>
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl pb-8 font-sora  font-bold leading-[1.2] capitalize">
        Project Showcase
      </h1>

      {/* Scrollable Parent Container */}
      <div
        className="flex flex-col items-center
          w-full max-w-332 
          h-125 md:h-150 
          p-3 md:px-17.75 md:py-15 
          rounded-[20px] md:rounded-[30px] 
          bg-[#120131] 
          shadow-[0_0_10px_2px_#FFF,0_0_40px_10px_#0017FF] 
          md:shadow-[0_0_10.8px_8px_#FFF,0_0_96px_18px_#0017FF]
          
          /* Key Scrolling Classes */
          // overflow-y-auto 
          //  scrollbar-thumb-blue-500 scrollbar-track-transparent"
      >
        <div className="w-full space-y-10">
          {projects.map((proj, index) => (
            <ProjectContainer key={index} project={proj} />
          ))}
        </div>
      </div>
    </div>
  );
}

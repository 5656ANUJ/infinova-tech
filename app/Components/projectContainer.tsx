import WhiteBtn from "./WhiteBtn";

interface ProjectData {
  title: string;
  description: string;
  images: string[];
}

export default function ProjectContainer({ project }: { project: ProjectData }) {
  return (
    /* The 'relative' class here defines the boundaries for the sticky text */
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 p-4 mb-20">
      
      {/* 1. STICKY TEXT BLOCK */}
      <div className="md:sticky md:top-10 self-start w-full h-auto flex flex-col justify-center z-10">
        <h1 className="text-white font-['Sora'] text-[28px] md:text-[40px] font-semibold leading-[120%] capitalize px-4 md:px-7 mb-2">
          {project.title}
        </h1>
        <p className="text-white font-['McLaren'] text-sm md:text-[20px] font-normal leading-[150%] text-justify px-4 md:px-7 mb-6">
          {project.description}
        </p>
        <div className="flex justify-start px-4 md:px-7">
          <WhiteBtn text="--Live--"/>
        </div>
      </div>

      {/* 2. SCROLLING IMAGES COLUMN */}
      <div className="grid grid-cols-1 gap-3">
        
        {/* Top Image */}
        <div className="w-full h-65.75 rounded-lg border-2 border-white overflow-hidden">
          <img src={project.images[0]} alt="Project 1" className="object-cover w-full h-full" />
        </div>

        {/* Middle Image */}
        <div className="w-full h-65.75 rounded-lg border-2 border-white overflow-hidden">
          <img src={project.images[1]} alt="Project 2" className="object-cover w-full h-full" />
        </div>

        {/* Bottom Left Image Style */}
        <div className="w-full h-65.75 rounded-lg border-2 border-white overflow-hidden">
          <img src={project.images[2]} alt="Project 3" className="object-cover w-full h-full" />
        </div>

        {/* Tall Double Image Style */}
        <div className="flex w-full h-65.75 rounded-lg border-2 border-white flex-row justify-between gap-3 overflow-hidden">
          <div className="w-1/2">
            <img src={project.images[3]} alt="Sub 1" className="object-cover w-full h-full" />
          </div>
          <div className="w-1/2">
            <img src={project.images[4]} alt="Sub 2" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
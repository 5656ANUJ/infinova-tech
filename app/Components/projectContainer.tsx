import WhiteBtn from "./WhiteBtn";


interface ProjectData {
  title: string;
  description: string;
  images: string[];
}

export default function ProjectContainer({ project }: { project: ProjectData }) {
  return (<>
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-3 p-4">
      
      {/* 1. Text Content Block */}
      <div className="w-full h-auto md:h-65.75 flex flex-col justify-center">
        <h1 className="text-white font-['Sora'] text-[28px] md:text-[40px] font-semibold leading-[120%] capitalize px-4 md:px-7 mb-2">
          {project.title}
        </h1>
        <p className="text-white font-['McLaren'] text-sm md:text-[20px] font-normal leading-[150%] text-justify px-4 md:px-7">
          {project.description}
        </p>
      </div>

      {/* 2. Top Right Image */}
      <div className="hidden md:block col-start-2 row-start-1 w-full h-65.75 rounded-lg border-2 border-white overflow-hidden">
        <img src={project.images[0]} alt="Project 1" className="object-cover w-full h-full" />
      </div>

      {/* 3. Middle Left Image */}
      <div className="w-full h-65.75 col-start-1 row-start-2 rounded-lg border-2 border-white overflow-hidden">
        <img src={project.images[1]} alt="Project 2" className="object-cover w-full h-full" />
      </div>

      {/* 4. Bottom Left Image */}
      <div className="w-full h-65.75 col-start-1 row-start-3 rounded-lg border-2 border-white overflow-hidden">
        <img src={project.images[2]} alt="Project 3" className="object-cover w-full h-full" />
      </div>

      {/* 5. Tall Double Image Block (Spans 2 rows) */}
      <div className="hidden md:flex row-span-2 col-start-2 row-start-2 w-full rounded-lg border-2 border-white flex-row justify-between gap-3 overflow-hidden">
        <div className="w-1/2">
          <img src={project.images[3]} alt="Sub 1" className="object-cover w-full h-full" />
        </div>
        <div className="w-1/2">
          <img src={project.images[4]} alt="Sub 2" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <WhiteBtn text="--Live--"/>
    </div>
  </>
  );
}
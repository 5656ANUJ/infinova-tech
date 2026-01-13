"use client";
import ProjectContainer from "../Components/projectContainer";
import { motion } from "framer-motion";

export default function ProjectSec() {
  // Example data array to simulate multiple projects
  const projects = [
    {
      title: "Project Alpha",
      description:
        "A cutting-edge solution leveraging AI and IoT to transform manufacturing processes.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1535378437321-20e977369346?auto=format&fit=crop&q=80&w=800",
      ],
    },
    {
      title: "Project Beta",
      description:
        "Next-gen e-commerce platform with 3D previews and real-time inventory tracking.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1556742111-a3010dbbbe48?auto=format&fit=crop&q=80&w=800",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20 mb-20 px-5 md:px-10 lg:px-16"
    >
      <div className="flex flex-col gap-2 mb-10 w-full max-w-7xl mx-auto">
        <h4 className="text-blue-400 text-sm md:text-base font-['Inter'] uppercase tracking-widest font-medium">
          Case Studies
        </h4>
        <h1 className="text-white text-3xl md:text-5xl font-['Sora'] font-bold leading-tight capitalize">
          Project Showcase
        </h1>
      </div>

      {/* Scrollable Parent Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center
          w-full max-w-7xl mx-auto
          min-h-[600px]
          p-5 md:p-10
          rounded-[30px] 
          bg-[#120131] 
          shadow-[0_0_20px_5px_rgba(255,255,255,0.1),0_0_60px_10px_rgba(0,23,255,0.3)]
          border border-white/10"
      >
        <div className="w-full space-y-20">
          {projects.map((proj, index) => (
            <ProjectContainer key={index} project={proj} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

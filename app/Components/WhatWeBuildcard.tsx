export default function WhatWeBuildCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="
      flex flex-col w-auto max-w-80 h-auto p-5 md:p-7 lg:p-10 justify-center items-center gap-2 md:gap-4 
      rounded-[30px] bg-white/10 backdrop-blur-[15.2px] border border-white/20
      
      /* Base Shadow - Subtle Glow */
      shadow-[0_0_10px_0px_rgba(255,255,255,0.3),0_-5px_20px_-10px_#FFF]
      
      /* Animation & Hover Effects */
      transition-all duration-500 ease-in-out cursor-pointer
      hover:scale-[1.03] 
      hover:bg-white/20
      /* Hover Shadow - Just a slight increase in intensity, no massive spread */
      hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.4),0_-7px_25px_-8px_#FFF]
    ">
      <img 
        src={icon} 
        alt={title} 
        className="w-20 h-20 object-contain transition-transform duration-500 hover:scale-105" 
      />
      <h1 className="text-xl lg:text-2xl font-medium text-white tracking-tight">{title}</h1>
      <p className="text-sm font-normal text-justify lg:text-center text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
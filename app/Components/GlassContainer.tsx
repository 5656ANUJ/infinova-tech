interface GlassContainerProps {
    title: string;
    description: string;
}
export default function GlassContainer({ title, description }: GlassContainerProps) {
  
  
    return (
    <div
      className="/* Layout & Sizing */
  flex flex-col 
  w-full max-w-124.5 min-h-29.5
  
  /* Spacing (Mobile -> Desktop) */
  p-4 md:p-[18px_31px_17px_31px] 
  gap-1.75
  
  /* Alignment */
  justify-center md:justify-end 
  items-start md:items-start
  
  /* Glassmorphism Styles */
  bg-white/10 
  backdrop-blur-[15.36px]
  rounded-[23.042px] 
  border-[1.157px] border-white/50 "
    >
      <h1 className="text-white font-['Sora'] text-[20px] md:text-xl lg:text-2xl font-semibold uppercase leading-[140%]">{title}</h1>
      <p className="text-white text-justify md:text-left font-['Roboto'] text-[16px] md:text-lg lg:text-xl font-normal leading-[150%]">
        {description}
      </p>
    </div>
  );
}

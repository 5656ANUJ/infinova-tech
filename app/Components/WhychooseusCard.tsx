export default function WhychooseusCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
      flex flex-col w-auto max-w-70 h-auto  justify-center items-center gap-1 md:gap-4 rounded-[20px] backdrop-blur-[15.2px] 
      
      /* Animation & Hover Effects */
      transition-all duration-500 ease-in-out cursor-pointer
      hover:scale-[1.03]"
    >
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 md:w-20 md:h-20 object-contain transition-transform duration-500 hover:scale-105"
      />
      <h1 className="text-[16px] md:text-2xl font-medium text-center text-white tracking-tight">
        {title}
      </h1>
      <p className="text-[12px] md:text-lg font-normal text-center md:text-center text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

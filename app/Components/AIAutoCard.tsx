export default function AIAutoCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 md:py-5 max-w-90 max-h-60 aspect-4/3 rounded-[7px] border-[3px] border-[#683FFF]">
      <div className="flex flex-row justify-center items-center gap-5 px-10">
        <img
          src={icon}
          alt=""
          className="w-15 h-15 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
        <h1 className="font-medium text-lg md:text-xl lg:text-2xl">{title}</h1>
      </div>
      <div>
        <p className="text-justify lg:text-center text-xs md:text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

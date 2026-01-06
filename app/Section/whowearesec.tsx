import PrimaryButton from "../Components/borderBtn";

export default function Whoweare() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <h3 className="line-clamp-1 overflow-hidden text-white text-xs md:text-xm lg:text-2xm font-[277] leading-normal capitalize font-['Inter']">
        Who We Are
      </h3>
      <h1 className="text-white text-center font-['Sora'] text-[20px] md:text-[36px] lg:text-[40px]  font-bold leading-[1.2] capitalize">
        Innovative Technology Meets Human Creativity
      </h1>
      <p className="text-white text-justify md:text-center font-['McLaren'] text-[12px] md:text-sm lg:text-xl leading-normal font-normal px-5 md:px-10 lg:px-30 ">
        Infinova Technologies is a future-focused innovation company operating
        at the intersection of IT, automation, and advanced engineering —
        partnering with industries and visionaries to build what’s next in
        robotics, 3D manufacturing, EVs, and space technologies.
      </p>
      <div>
      <PrimaryButton text="Learn More" variant="outline" />
      </div>
    </div>
  );
}

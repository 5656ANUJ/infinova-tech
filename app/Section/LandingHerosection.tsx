import PrimaryButton from "../Components/borderBtn";
import WhiteBtn from "../Components/WhiteBtn";


export default function LandingHerosection() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-white text-center font-['Sora'] text-[36px] md:text-[65px] lg:text-[85px] font-bold leading-[120%] capitalize">
        Transform your digital potential with precision
      </h1>
     <p className="text-white text-center font-['McLaren'] text-xs md:text-xl lg:text-[20px] font-normal leading-normal capitalizen px-3 md:px-10 lg:px-20">
    We craft innovative technological solutions that drive business performance.
    <br className="hidden md:block" />
    Our team turns complex challenges into streamlined digital experiences.
  </p>
      <div className="flex flex-row gap-3 md:gap-5 lg:gap-8">
        <WhiteBtn text="Start Project" />
        <PrimaryButton text="Learn More" variant="outline" />
      </div>
    </div>
  );
}

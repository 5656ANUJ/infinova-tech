
import AboutusfeaturesCard from "../Components/aboutusfeaturesCard";
import { AboutcardInput } from "../data";

export default function AboutusInfoSec3() {

    
  return (
    
    <div className="w-full p-5 md:p-10">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-[#FFF] font-['Sora'] text-xl md:text-2xl lg:text-3xl font-bold leading-normal capitalize text-center">
          We help bussiness to grow faster and bigger
        </h1>
        <p className="text-[#FFF] font-['Sora'] text-sm md:text-base lg:text-lg font-normal leading-normal text-justify md:text-center ">
          Boost your brand with designs, strategy, and technology that work
          together.We focus on growth, clarity, and results that move your
          business forward.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-5 mt-5 md:mt-10 p-5">
        {AboutcardInput.map((item, index) => (
          <AboutusfeaturesCard key={index} title={item.title} description={item.description} src={item.src} />
        ))}
      </div>
    </div>
  );
}

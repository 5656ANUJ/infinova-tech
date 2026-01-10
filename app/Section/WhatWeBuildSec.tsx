import WhatWeBuildCard from "../Components/WhatWeBuildcard";

export default function WhatWeBuildSec() {
    const WhatWeBuildInput = [
        {
            title: "Corporate Website",
            description: "Professional, responsive websites that build brand credibility, communicate your message, and generate leads.",
            icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75"
        },
        {
            title: "Corporate Website",
            description: "Professional, responsive websites that build brand credibility, communicate your message, and generate leads.",
            icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75"
        },
        {
            title: "Corporate Website",
            description: "Professional, responsive websites that build brand credibility, communicate your message, and generate leads.",
            icon: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-pri3DOVpzgeVvruiQZLb6NooNGyxyV.png&w=1000&q=75"
        }
    ]
  return (
    <div className="w-full p-5 md:p-10">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-[#FFF] font-['Sora'] text-2xl md:text-3xl lg:text-[48px] font-bold leading-normal capitalize text-center">
          What we build
        </h1>
        <p className="text-[#FFF] font-['Sora'] text-sm md:text-base lg:text-lg font-normal leading-normal text-justify md:text-center ">
          We specialize in a wide range of web development services tailored to
          your business needs.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-7 lg:gap-10 mt-5 md:mt-10">
        {WhatWeBuildInput.map((item,index) => (
            <WhatWeBuildCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

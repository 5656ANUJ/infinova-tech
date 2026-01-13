interface WhatwedesignCardProps {
    image:string;
    title:string;
}


export default function WhatwedesignCard({image,title}:WhatwedesignCardProps) {
  return (
    <div className="flex max-w-72 max-h-96 p-3 md:p-5 flex-col items-center gap-3 md:gap-5 rounded-[20px] bg-[#3E6FFF]">
         <img
        src={image}
        alt="" className="w-full h-44 md:h-50 lg:h-60 rounded-[20px] object-cover"
        
      />
     
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:px-10 ">{title}</h1>
    </div>
  );
}

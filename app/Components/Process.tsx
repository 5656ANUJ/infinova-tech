"use client";

interface Service {
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const Process = ({
  title = " Our Process",
  subtitle = "Our trusted way to build your digital future",
  services = [],
}: ServicesSectionProps) => {
  return (
    <section className="w-full  text-white overflow-hidden py-20 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-8xl lg:text-6xl font-black uppercase tracking-widest bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
          {title}
        </h1>
        <p className="text-4xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-0 ">
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // 1,3,5... (0-indexed even positions)

            return (
              <div
                key={index}
                className={`
                //   flex items-center lg:py-12 lg:px-30  
                
                  ${isEven ? "lg:flex-row-reverse" : ""}
                  relative
                `}
              >
                {/* Number Badge */}
                <div
                  className={`
                                        hidden lg:flex flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24
                                        items-center justify-center 
                                        rounded-full bg-[#4F00DF] 
                                        text-white font-semibold text-4xl lg:text-[40px] shadow-2xl
                                        ring-8 ring-[#4F46E5]/30 lg:ring-12 lg:ring-[#4F46E5]/20
                                        mx-6 lg:mx-8 
                                        z-10
                                        `}
                >
                  {index + 1}
                </div>

                {/* Content Card */}
                <div
                  className={`
                                    w-full lg:max-w-4xl h-fit lg:h-fit mx-8 lg:mx-0 
                                    relative rounded-3xl  backdrop-blur-xl border border-white
                                    p-8 lg:p-10 flex-1 shadow-2xl
                                
                                    transition-all duration-500 cursor-pointer
                                    hover:scale-[1.02] hover:-translate-y-2
                                    before:absolute before:inset-0 before:rounded-3xl
                                    before:bg-gradient-to-r before:from-[#4F46E5]/10 before:to-[#7C3AED]/10
                                    before:opacity-0 hover:before:opacity-100
                                    before:transition-all before:duration-500
                                    flex flex-col justify-center items-center text-center gap-4
                                    `}
                >
                  <div
                    className="
                                        lg:hidden flex justify-center items-center mb-8 
                                        [&>div]:flex-shrink-0 [&>div]:w-48 [&>div]:h-48 md:[&>div]:w-32 md:[&>div]:h-32
                                        [&>div]:flex [&>div]:items-center [&>div]:justify-center
                                        [&>div]:rounded-full [&>div]:bg-[#4F00DF]
                                        [&>div]:text-white [&>div]:font-black [&>div]:text-[70px] shadow-2xl
                                        [&>div]:ring-8 [&>div]:ring-[#4F46E5]/30
                                        z-10
                                        "
                  >
                    <div>{index + 1}</div>
                  </div>

                  <h3 className="text-6xl lg:text-3xl grid place-items-center w-full  font-bold mb-6 text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-5xl mb-10 lg:mb-0 lg:text-xl grid place-items-center text-gray-300 leading-relaxed lg:leading-loose">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

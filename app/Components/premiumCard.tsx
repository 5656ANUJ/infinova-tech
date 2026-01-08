export default function PremiumCard({ title = "Plan", price = "$0", features = [] }) {
  return (
    <div
      className="
        /* Mobile: Takes up 90% of screen width */
        w-[90%] 
        /* Laptop/Desktop: Limits width to a slim profile */
        md:w-[320px] 
        /* General styling */
        h-fit rounded-[26.773px] border-[2.677px] border-[#683FFF] bg-white/10 
        md:rounded-[30px] md:border-[3px] flex flex-col mx-auto
      "
    >
      <div className="flex flex-col justify-start items-start p-6 md:p-10 gap-6">
        
        {/* Header Section */}
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-white font-['Sora'] text-[24px] md:text-[32.128px] font-bold leading-normal capitalize">
            {title}
          </h1>
          <h2 className="text-[#B7A4FF] font-['Inter'] text-[22px] md:text-[28.558px] font-bold leading-[150%]">
            {price}/-
          </h2>
        </div>

        {/* Features Section */}
        <div className="flex flex-col gap-4">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-row justify-start items-start gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-[15.833px] h-[15.833px]shrink-0 translate-y-0.5"
                fill="none"
              >
                <path
                  d="M6.80833 11.5583L12.3896 5.97708L11.2812 4.86875L6.80833 9.34167L4.55208 7.08542L3.44375 8.19375L6.80833 11.5583ZM7.91667 15.8333C..."
                  fill="#00A018"
                />
              </svg>
              <p className="text-white font-['McLaren'] text-[10.709px] md:text-[12px] font-normal leading-normal">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
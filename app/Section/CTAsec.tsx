import PrimaryButton from "../Components/borderBtn";
import GlowButton from "../Components/WhiteBtn";

export default function CTAsec() {
  return (
    <div className="flex flex-col justify-center items-start text-left md:flex-row gap-3 md:gap-6 mx-5  md:mx-10 lg:mx-16.25">
      <div>
        <h1 className="text-white font-['Sora'] text-[20px] md:text-[24px] lg:text-[32px] font-semibold leading-[120%]">Ready to Transform your Digital landscape?</h1>
      </div>
      <div className="md:w-0.5 md:h-15 md:bg-white md:translate-y-2.5 "></div>
      <div className="flex flex-col gap-6">
        <p className="text-white font-['Roboto'] text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-[150%]">Let's discuss how our innovative solutions can drive your business forward.</p>
        <div className="flex gap-4">
            <GlowButton text="Get quote" /> 
            <PrimaryButton text="Contact Us" />
        </div>
      </div>
    </div>
  );
}
import ServicesHeroSec from "../Section/servicesHeroSec";
import ScrollReveal from "../Components/textReveal";
import WhyAi from "../Section/WhyAi";
import AIServices from "../Section/AIServices";
import AiProces from "../Section/AiProces";
import PriceCardContainer from "../Section/PricingComp";
import Testimonial from "../Components/testimonial";
import { testimonialData } from "../data";



export default async function AiAutomationPage() {
  return (
    <section>
      <ServicesHeroSec
        heroTitle="Automate Your Success"
        heroMessage="Unlock unprecedented efficiency and innovation with our cutting-edge Al automation solutions, designed to propel your business into the future."
        typewriterStrings={[
          "AI Automation",
          "AI Chatbots",
          "AI Content",
          "AI Image",
        ]}
        heroImage="/AiBot.png"
        reactImg="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000"
        mongoImg="https://img.icons8.com/?size=100&id=by7K6EO4PeHT&format=png&color=000000"
        jsImg="/n8n_pink+white_logo.png"
      />

      <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
        className="mt-20 px-20 text-center text-md md:text-xl lg:text-4xl "
      >
       AI automation is transforming industries by simplifying complex tasks, reducing manual work, and enabling smarter, data-driven decisions. It is now essential for businesses that want to stay competitive and scale efficiently.
      </ScrollReveal>

      <WhyAi/>
      <AIServices/>
      <AiProces/>
      <PriceCardContainer/>
      <Testimonial items={testimonialData}/>
    </section>
  );
}

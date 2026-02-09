import { testimonialData } from "../data";
import PriceCardContainer from "../Section/PricingComp";
import ServicesHeroSec from "../Section/servicesHeroSec";
import UiUxProcess from "../Section/UiUxProcess";
import Testimonial from "../Components/testimonial";

export default function UiUxPage() {
  return (
    <section>
      <ServicesHeroSec
        heroTitle="Creating Intuitive Interfaces That Engage"
        heroMessage="We specialize in creating user-centric UI designs that are not only beautiful but also drive engagement and deliver seamless digital experiences."
        typewriterStrings={[
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
        ]}
        heroImage="/heroimg.png"
        reactImg="https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000"
        mongoImg="https://img.icons8.com/?size=100&id=13631&format=png&color=000000"
        jsImg="https://img.icons8.com/?size=100&id=4VVL78edhbW9&format=png&color=000000"
      />
      <UiUxProcess />
      <PriceCardContainer />
      <Testimonial items={testimonialData} />
    </section>
  );
}

import { testimonialData } from "../data";
import WebDev from "../Section/servicesHeroSec";
import WhatWeBuildSec from "../Section/WhatWeBuildSec";
import WebProcess from "../Section/webProcess";
import PriceCardContainer from "../Section/PricingComp";
import Testimonial from "../Components/testimonial";

export default async function WebDevPage() {
  return (
    <section>
      <WebDev
        heroMessage="From sleek corporate sites to complex e-commerce platforms, we build fast, secure, and scalable web solutions that drive growth and deliver exceptional user experiences."
        typewriterStrings={["Your Startup", "Your Business", "Your Shop"]}
        heroImage="https://github.com/5656ANUJ/infinova-tech/blob/master/Public/hero-img.png?raw=true"
        reactImg="https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000"
        mongoImg="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
        jsImg="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
        heroTitle="Website For"
      />

      <section className="w-full mt-10">
        <WhatWeBuildSec />
      </section>
      <section className="w-full mt-10">
        <WebProcess />
      </section>
      <section className="w-full mt-10">
        <PriceCardContainer />
      </section>
      <section className="w-full mt-10">
        <Testimonial items={testimonialData} />
      </section>
    </section>
  );
}

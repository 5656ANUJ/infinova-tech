import ServicesHeroSec from "../Section/servicesHeroSec";
import TextScrollMarquee from "../Components/lightswind/text-scroll-marquee";
import ContentResearchProcess from "../Section/contentprocess";
import WhyChooseUsSec from "../Section/WhyChooseUsSec";
import PriceCardContainer from "../Section/PricingComp";
import Testimonial from "../Components/testimonial";
import { testimonialData } from "../data";

export default function ContentResearch() {
  return (
    <div>
      <ServicesHeroSec
        heroTitle="Research that reveals"
        heroMessage="For busy startup owners and clients who don’t have time to prepare website data. We research and organize your website content — headings, subheadings, descriptions, images, SEO keywords, and structure — so your project moves forward without delay."
        typewriterStrings={[
          "Insights",
          "Trends",
          "Competitor Gaps",
          "Content Gap",
        ]}
        heroImage="https://github.com/5656ANUJ/infinova-tech/blob/master/Public/hero-img.png?raw=true"
        reactImg="/bulb.png"
        mongoImg="https://img.icons8.com/?size=100&id=ST8UX0wozRY9&format=png&color=000000"
        jsImg="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-QPl7zSOxUKmFrWf7nOJIZNsfnurbAG.png&w=1000&q=75"
      />

      {/* <MarqueeSection active="workflow" /> */}

      <TextScrollMarquee className="text-4xl font-bold mt-20">
        {[
          "Insights",
          "Trends",
          "Competitor Gaps",
          "Content Gap",
          "High-Impact Keywords ",
          "Ranking Opportunities ",
          "Topical Coverage ",
          "Organic Growth ",
          "Search Demand ",
          "Content Priorities ",
        ].join("  *  ")}
      </TextScrollMarquee>
      <ContentResearchProcess />
      <WhyChooseUsSec />
      <PriceCardContainer />
      <Testimonial items={testimonialData} />
    </div>
  );
}

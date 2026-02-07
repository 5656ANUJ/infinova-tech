import WebDev from "../Section/webDevSec";

export default function WebDevPage() {
  return (
    <section>
      <WebDev
        heroMessage="From sleek corporate sites to complex e-commerce platforms, we build fast, secure, and scalable web solutions that drive growth and deliver exceptional user experiences."
        typewriterStrings={[
          "Your Startup",
          "Your Business",
          "Your Shop",
        ]}
        heroImage="/hero.svg"
        reactImg="/react.svg"
        mongoImg="/mongo.svg"
        jsImg="/js.svg"
      />
    </section>
    
  );
}

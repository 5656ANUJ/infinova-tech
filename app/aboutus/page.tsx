import AboutusHeroSec from "../Section/AboutusHeroSec";
import AboutusInfoSec1 from "../Section/AboutusInfoSec1";
import AboutusInfoSec2 from "../Section/AboutusInfoSec2";
import AboutusInfoSec3 from "../Section/AboutusInfoSec3";

export default async function AboutUs() {
  return (
    <>
      <section className="m-5 md:m-8 lg:m-10">
        <AboutusHeroSec />
      </section>
      <section className="m-5 md:m-8 lg:m-10">
        <AboutusInfoSec1 />
      </section>
      <section className="m-5 md:m-8 lg:m-10">
        <AboutusInfoSec2 />
      </section>
      <section className="m-5 md:m-8 lg:m-10">
        <AboutusInfoSec3 />
      </section>
    </>
  );
}

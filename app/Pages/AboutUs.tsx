import AboutusHeroSec from "../Section/AboutusHeroSec";
import AboutusInfoSec1 from "../Section/AboutusInfoSec1";
import AboutusInfoSec2 from "../Section/AboutusInfoSec2";
import AboutusInfoSec3 from "../Section/AboutusInfoSec3";


export default function AboutUs() {
  return (
    <>
      <section className="m-5 md:m-8 lg:m-10">
        <AboutusHeroSec/>
      </section>
      <section>
        <AboutusInfoSec1/>
      </section>
      <section>
        <AboutusInfoSec2/>
      </section>
      <section>
        <AboutusInfoSec3/>
      </section>

      
    </>
  );
}

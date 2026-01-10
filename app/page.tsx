import HowWeDoIt from "./Section/HowWeDoIt";
import LandingHerosection from "./Section/LandingHerosection";
import ProjectSec from "./Section/ProjectSec";
import Whoweare from "./Section/whowearesec";
import CTAsec from "./Section/CTAsec";
import WhatWeBuildCard from "./Components/WhatWeBuildcard";
import WhatWeBuildSec from "./Section/WhatWeBuildSec";
import WhychooseusCard from "./Components/WhychooseusCard";
import WhyChooseUsSec from "./Section/WhyChooseUsSec";





export default function Home() {
  return (
    <>
    <section className="flex mt-20 pt-2 pb-2 px-5 md:pt-5 md:pb-4 md:px-10 lg:pt-10 lg:pb-14 lg:px-16.25 justify-center items-center">
            <LandingHerosection />
          </section>
          <section className="flex flex-col justify-center items-start pt-10 px-5 md:px-10 lg:px-10 ">
            <Whoweare />
          </section>
          <section>
            <HowWeDoIt />
          </section>
          <section>
            <ProjectSec/>
          </section>
          <section  className="mt-5 md:mt-20">
            <CTAsec/>
          </section>
          <section>
            <WhatWeBuildSec/>
          </section>
          <section>
            <WhyChooseUsSec/>
          </section>
    </>
  );
}
import LandingHerosection from "../Section/LandingHerosection";
import Whoweare from "../Section/whowearesec";


export default function Home() {
  return (
    <>
      <section className="flex mt-20 pt-10 pb-14 px-16.25 justify-center items-center">
        <LandingHerosection/>
      </section>
      <section className="flex flex-col justify-center items-start w-full max-w-360 mx-auto mt-20">
        <Whoweare/>
      </section>
    </>
  );
}

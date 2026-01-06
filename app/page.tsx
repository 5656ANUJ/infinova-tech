import LandingHerosection from "./Section/LandingHerosection";
import Whoweare from "./Section/whowearesec";
import ProjectContainer from "./Components/projectContainer";

export default function Home() {
  return (
    <>
      <section className="flex mt-20 pt-2 pb-2 px-5 md:pt-5 md:pb-4 md:px-10 lg:pt-10 lg:pb-14 lg:px-16.25 justify-center items-center">
        <LandingHerosection />
      </section>
      <section className="flex flex-col justify-center items-start pt-10 px-5 md:px-10 lg:px-10 ">
        <Whoweare />
      </section>
      <ProjectContainer project={{
        title: "Project Alpha",
        description: "A cutting-edge solution leveraging AI and IoT to revolutionize smart home technology.",
        images: [
          "/images/project1_img1.jpg",
          "/images/project1_img2.jpg",
          "/images/project1_img3.jpg",
          "/images/project1_img4.jpg",
          "/images/project1_img5.jpg",
        ],
      }} />
      
    </>
  );
}

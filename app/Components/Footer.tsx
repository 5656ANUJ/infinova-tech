"use client";
import Link from "next/link";

export default function Footer() {
  return (
    // bg-[#120033]"
    <footer className="w-full py-10 px-6  lg:px-24 md:mt-24 lg:mt-0">
      <hr className="" />

      {/* main footer */}
      {/* left div */}
      <div className=" p-10 grid lg:grid-cols-2 mt-16 lg:mt-6">
        <div className=" place-items-center lg:place-items-stretch h-full w-full grid grid-cols-1 lg:grid-cols-1">
          <img
            src="./company_logo.svg"
            alt="logo"
            className="w-90 h-fit lg:h-fit lg:w-70  pb-3  "
          />
          <p className="text-3xl lg:text-[18px]">
            Stay ahead with our latest tech insights and service updates
          </p>
          {/* email */}
          <div className="flex gap-4 lg:gap-2 mt-10  w-full lg:pr-10 lg:px-0 px-20 ">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="h-22 lg:h-12 w-full border border-white rounded-[50px] mt-2 pl-4 placeholder:text-[30px] pt-2 lg:pt-0 lg:placeholder:text-[16px] focus:bg-white/10 focus:border-amber-200 "
            />
            <button
              type="submit"
              className="text-black font-semibold text-2xl lg:text-[16px] h-22 lg:h-12 w-fit bg-white  border border-white rounded-[20px] mt-2 p-8 lg:p-2 flex items-center justify-center"
            >
              Subscribe
            </button>
          </div>
          <p className=" w-fit  lg:w-135 mt-2 lg:text-sm text-[24px] ">
            By subscribing, you agree to our privacy policy and email
            communications
          </p>
        </div>

        {/* right div */}
        <div className=" max-h-full w-full grid grid-cols-2 lg:grid-cols-3 mb-10 lg:mb-0 mt-10 lg:mt-0 ">
          {/* Quick links */}
          <div className="pt-16 lg:pt-0">
            <h3 className="font-semibold text-[36px] md:text-[30px] lg:text-lg text-white pb-8 lg:pb-4 lg:text-center md:text-left text-left">
              Quick Links
            </h3>
            <ul className="space-y-5 text-white/90 text-[32px] md:text-[28px] lg:text-sm  ">
              {" "}
              {/* List BELOW header */}
              <li className="hover:text-white cursor-pointer transition-all py-1 px-2 rounded hover:bg-white/20 w-full lg:w-[150px] text-left md:text-left lg:text-center  lg:ml-6 ">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-all py-1 px-2 rounded hover:bg-white/20 w-full lg:w-[150px] text-left md:text-left lg:text-center lg:ml-6 ">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-all py-1 px-2 rounded hover:bg-white/20 w-full lg:w-[150px] text-left md:text-left lg:text-center lg:ml-6 ">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="hover:text-white  cursor-pointer transition-all py-1 px-2 rounded hover:bg-white/20 w-full lg:w-[150px] text-left md:text-left lg:text-center lg:ml-6 ">
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* company */}
          <div className="pt-16  lg:pt-0   place-items-center  ">
            <h3 className="font-semibold text-white text-[36px] md:text-[30px] lg:text-lg pb-8 lg:pb-4 text-left w-full pl-18 lg:pl-0 md:pl-24  lg:text-center">
              Company
            </h3>
            <ul className="space-y-5 text-white/80 md:text-[28px]  text-[32px] lg:text-sm text-left lg:text-center">
              <li className="hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all w-full lg:w-[150px] lg:text-center  md:text-left">
                <Link href="/careers">Careers</Link>
              </li>
              <li className="hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all w-full lg:w-[150px] lg:text-center md:text-left">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all w-full  lg:w-[150px] lg:text-center md:text-left">
                <Link href="/privacy">Privacy Policies</Link>
              </li>
              <li className="hover:text-white cursor-pointer py-1 px-2  rounded hover:bg-white/20 transition-all  w-full  lg:w-[150px] lg:text-center md:text-left">
                <Link href="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* connect with us */}
          <div className="pt-16 lg:pt-0 place-items-center lg:place-items-start  col-span-2 lg:col-span-1 ">
            <h3 className="font-semibold text-white text-[36px] md:text-[30px] lg:text-lg pb-8 lg:pb-4  lg:w-full text-center">
              Connect with Us
            </h3>

            <ul className="space-y-5 text-white/80 md:text-[28px] text-[32px] lg:text-sm text-center w-full lg:w-fit grid lg:grid-cols-1 grid-cols-2 pl-20 lg:pl-0 gap-x-60 items-center justify-items-center ">
              <li className=" w-full lg:w-[150px] text-center lg:ml-6 lg:pl-7  transition-all hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-white/20  flex flex-row gap-2">
                <img
                  src="./Instagram.svg"
                  alt="instagram"
                  className="lg:h-fit md:h-fit h-12 w-12 md:w-10 lg:w-fit h-12 w-12 "
                />
                Instagram
              </li>
              <li className="w-full lg:w-[150px] text-center lg:ml-6 lg:pl-7 hover:text-white transition-allcursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all  flex flex-row gap-2">
                <img
                  src="./X.svg"
                  alt="instagram"
                  className="lg:h-fit h-12 w-12 lg:w-fit h-12 w-12 md:w-10 "
                />
                X
              </li>
              <li className="w-full lg:w-[150px] text-center lg:ml-6 lg:pl-7 hover:text-white transition-allcursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all  flex flex-row gap-2">
                <img
                  src="./LinkedIn.svg"
                  alt="instagram"
                  className="lg:h-fit h-12 w-12 lg:w-fit h-12 w-12 md:w-10 "
                />
                LinkedIn
              </li>
              <li className="w-full lg:w-[150px]  lg:ml-6 lg:pl-7 hover:text-white transition-allcursor-pointer py-1 px-2 rounded hover:bg-white/20 transition-all flex flex-row gap-2">
                <img
                  src="./Youtube.svg"
                  alt="instagram"
                  className="lg:h-fit h-12 w-12 lg:w-fit h-12 w-12 md:w-10 "
                />
                Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-10" />
      <div className="flex flex-col  lg:flex-row justify-between items-center gap-6 pt-8">
        <p className="text-2xl text-gray-400 text-center lg:text-left order-2 lg:order-1 lg:text-sm">
          © 2026 Startup Service. All rights reserved
        </p>
        <div className="flex flex-wrap gap-4 lg:gap-8 justify-between lg:justify-end order-1 lg:order-2">
          <p className="underline cursor-pointer hover:text-white transition-colors text-2xl lg:text-sm">
            Privacy policy
          </p>
          <p className="underline cursor-pointer hover:text-white transition-colors text-2xl lg:text-sm">
            Terms of service
          </p>
          <p className="underline cursor-pointer hover:text-white transition-colors text-2xl lg:text-sm">
            Cookie settings
          </p>
        </div>
      </div>
    </footer>
  );
}

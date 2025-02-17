import React from "react";
import HeroSection from "../../Component/herosection/HeroSection";
import AboutUs from "../../Component/Homepage/AboutUs";



export default function Home() {
  return (
    <>
<HeroSection />

      <div className=" w-[100%]">
        <div className=" 2xl:w-[1400px] !bg-[#]   flex flex-col gap-[62px] h-[100%] mx-auto">
<AboutUs />
 

        </div>
      </div>
    </>
  );
}

import React from "react";
import HeroSection from "../../Component/herosection/HeroSection";
import AboutUs from "../../Component/Homepage/AboutUs";
import Services from "../../Component/Homepage/Services";
import BlogSection from "../../Component/Homepage/BlogSection";

import Fetures from "../../Component/Homepage/fetures";
import NewAbout from "../../Component/Homepage/NewAbout";
import WhatweDo from "../../Component/Homepage/WhatweDo";
import WorkingMorning from "../../Component/Homepage/WorkingMorning";
import FeedBack from "../../Component/Homepage/FeedBack";
import Countersection from "../../Component/Homepage/countersection";



export default function Home() {
  return (
    <>
<HeroSection />

      <div className=" w-[100%]">
        <div className=" 2xl:w-[1400px] !bg-[#]   flex flex-col gap-[62px] h-[100%] mx-auto">

 


        </div>

        <Fetures />
        <NewAbout />
        <WhatweDo />
        <WorkingMorning />
        <FeedBack />
        <Countersection />
        <div className=" 2xl:w-[1400px] !bg-[#]   flex flex-col gap-[62px] h-[100%] mx-auto">
          <BlogSection />
        </div>
      </div>
    </>
  );
}

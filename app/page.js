"use client";
import Collection from "@/components/Collection";
import HeroBanner from "@/components/HeroBanner";
import Bg_img from "@/components/HomePage/bg-img/Bg_img";
import BG_Card from "@/components/HomePage/Bg_card/BG_Card";
import Carousel_card from "@/components/HomePage/Carousel/Carousel_card";
import Coming_soon_2 from "@/components/HomePage/coming_soon2/Coming_soon_2";
import Foter from "@/components/HomePage/coming_soon2/foter/Foter";
import TrackingID from "@/components/HomePage/coming_soon2/trackingId/TrackingID";
import Country_card from "@/components/HomePage/country_card/Country_card";
import Fist_nav from "@/components/HomePage/navbar/Fist_nav";
import Main_nav from "@/components/HomePage/navbar/Main_nav";
import Sec_nav from "@/components/HomePage/navbar/Sec_nav";
import HomeProducts from "@/components/HomeProducts";
import { useState, useContext } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Context } from "@/Context/Context";
// import Carousels from "@/components/HomePage/Carousels";
export default function Home() {
  const [show] = useState(true);
  const { tracking, setTracking, TrackingData, setTrackingData } =
    useContext(Context);
  return (
    <div className="flex flex-col w-full">
      {/* <HeroBanner />
      <Collection />
      <span className="text-2xl font-bold text-center mt-10 mb-10">
        Recent Products List
      </span>
      <HomeProducts show={show} /> */}
      <ThemeProvider>
        <Fist_nav />
        <Sec_nav />
        {/* <Main_nav /> */}
        <Bg_img />
        <BG_Card />
        <Coming_soon_2 />
        {/* <Country_card /> */}
        <Carousel_card />
       
        {/* <HomeProducts show={show} /> */}
        <Foter />
      </ThemeProvider>
    </div>
  );
}

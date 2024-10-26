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
import { useState, useContext } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Context } from "@/Context/Context";
import Contact from "./contact/Contact";
import Smart_Phone from "./category/smartPhone/Smart_Phone";
import Categories_carousel from "@/components/HomePage/Carousel/Categories_carousel";
import Carousel_card_fist from "@/components/HomePage/Carousel/Carousel_card_fist";
import Carousel_card_sec from "@/components/HomePage/Carousel/Carousel_card_sec";
import Carousel_img from "@/components/HomePage/Carousel/carousel_img/Carousel_img";
import Footer_contact from "@/components/Footer/Footer_contact";
// import Carousels from "@/components/HomePage/Carousels";
export default function Home() {
  const [show] = useState(true);
  const { tracking, setTracking, TrackingData, setTrackingData } =
    useContext(Context);
  return (
    <div className="flex flex-col w-full ">

      <ThemeProvider>
        <Sec_nav />
        <Bg_img />
        <Categories_carousel />
        <BG_Card />
        <Carousel_card_fist />
        <Carousel_img />
        <Carousel_card_sec />
        <Footer_contact />
        <Foter />
      </ThemeProvider>
    </div>
  );
}

"use client";

import CardImageLeft from "@/components/Cards/CardImageLeft";
import ProductCard from "@/components/Cards/ProductCard";
import Marquee from "@/components/Marquee/Marquee";
import Slider from "@/components/Slider/Slider";
import Tabs from "@/components/Tabs/Tabs";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex-row h-screen">
        <Slider />
        <h1 className="text-6xl text-center mt-9">Menu</h1>
        {/* <div className="w-64 h-64 relative">
          <div className="object-center w-16 h-16 bg-blue-500 rounded-full absolute animate-flyingObject"></div>
        </div> */}

        {/* <Marquee /> */}

        <Tabs />
        <div className="flex flex-row">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </>
  );
}

"use client";

import ModalMenuItem from "@/components/Modal/ModalMenuItem";
import Slider from "@/components/Slider/Slider";
import Tabs from "@/components/Tabs/Tabs";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";
import { MockRestaurants, IRestaurant, IDish } from "@/data/restaurant";
import { useWindowSize } from "@react-hook/window-size";
import MarqueeFramerMotion from "@/components/Marquee/MarqueeFramerMotion";
import Brands from "@/components/ImageCloud/Brands";
import Marquee from "@/components/Marquee/Marquee";
import ProductHero from "@/components/ProductHero/ProductHero";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { cn } from "@/lib/utils";

export default function Home() {
  const catagory = useSelector((state: RootState) => state.category.catagory);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [width, height] = useWindowSize();

  console.log("catagory: ", catagory);

  const filterByCategory = (category: string, dishes: IDish[]): IDish[] => {
    return dishes.filter((dish) => dish.category === category);
  };

  useEffect(() => {
    // setRestaurants(MockRestaurants);
    setDishes(MockRestaurants[0].dishes);
  }, [dishes]);

  // useEffect(() => {
  //   // setRestaurants(MockRestaurants);
  //   setDishes(MockRestaurants[0].dishes);
  // }, [dishes]);

  const filtereddishes = filterByCategory(catagory.name, dishes);
  console.log(filtereddishes);

  return (
    <>
      {/* <ModalMenuItem open={isOpen} onClose={() => setIsOpen(false)} /> */}
      <div className="flex-row items-center justify-center m-4 border-4 rounded-xl border-white">
        {/* <Slider /> */}
        {/* <Brands />
        <MarqueeFramerMotion /> */}
        <ProductHero />

        <div
          className={cn(
            "relative text-8xl text-center text-white mt-32",
            "font-beLoveYaLikeASister"
          )}
        >
          Menu
        </div>

        {/* <div>
          <span>{width}</span>
          <span>{height}</span>
        </div> */}
        {/* <Marquee /> */}
        <Tabs />
        {/* <Tab /> */}
        <div className="grid grid-cols-3 grid-rows-6 gap-4 mx-6">
          {filtereddishes.map((dish) => {
            return (
              <MenuItem
                key={dish.id}
                dish={dish}
                // onClick={() => setIsOpen(true)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

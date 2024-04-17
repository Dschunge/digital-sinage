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
import StartHero from "@/components/ProductHero/StartHero";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Home() {
  const catagory = useSelector((state: RootState) => state.category.catagory);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [width, height] = useWindowSize();
  const [isPending, setPending] = useState(false);
  const router = useRouter();
  const [isTransitionStarted, startTransition] = useTransition();

  const isMutating = isPending || isTransitionStarted;

  console.log("catagory: ", catagory);

  const filterByCategory = (category: string, dishes: IDish[]): IDish[] => {
    return dishes.filter((dish) => dish.category === category);
  };

  const handleRefresh = () => {
    // Trigger page refresh
    console.log("handleRefresh");
    // alert("hola");
    setPending(true);
    // update server data here
    // redirect.push("#/");
    router.replace("/");
    // then, start a transition
    // startTransition(router.refresh);

    setPending(false);
  };

  useEffect(() => {
    // setRestaurants(MockRestaurants);
    setDishes(MockRestaurants[0].dishes);
  }, [dishes]);

  const filtereddishes = filterByCategory(catagory.name, dishes);
  console.log(filtereddishes);

  return (
    <>
      {/* <ModalMenuItem open={isOpen} onClose={() => setIsOpen(false)} /> */}
      <div className="flex-row items-center justify-center w-screen">
        {/* <div className="mt-10 text-2x text-white">
          {width} / {height}
        </div> */}
        {/* {catagory.id === 0 ? <StartHero /> : <ProductHero />} */}
        <StartHero />
        <div
          className={cn(
            "relative text-8xl text-center text-white mt-20",
            "font-beLoveYaLikeASister"
          )}
          onClick={handleRefresh}
        >
          Menu
        </div>
        <Tabs />
        {/* <Tab /> */}
        <div className="grid grid-cols-3 grid-rows-6 gap-4 mx-6">
          {filtereddishes.map((dish) => {
            return <MenuItem key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    </>
  );
}

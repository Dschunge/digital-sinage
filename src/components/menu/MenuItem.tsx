import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IDish } from "@/data/restaurant";
import { useDispatch } from "react-redux";
import { setDish } from "../../features/counter/dishSlice";

type Props = {
  dish: IDish;
  // onClick: () => void;
};

export default function MenuItem({ dish }: Props) {
  const controls = useAnimation();
  const dispatch = useDispatch();
  const { name, name_esp, description, price, image } = dish;

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 3 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="relative ml-10 mt-14 flex-row"
      whileTap={{ scale: 0.95, rotate: "4.5deg" }}
      onClick={() => {
        console.log("MenuItem onClick");
        dispatch(setDish(dish));
      }}
    >
      <div className="absolute -left-10 -top-10 h-0 shadow-2xl shadow-black">
        <Image src={image} width={150} height={150} alt="dish" />
      </div>
      <div className="flex flex-col pl-28 pt-6 h-44 w-full bg-[#4ca94c] border-2 border-slate-50 rounded-xl shadow-2xl">
        <h1 className="text-white text-2xl">{name + " | " + name_esp}</h1>
        {/* <h1 className="text-white text-2xl">{name_esp}</h1> */}
        <p className="text-white">{description}</p>
        {/* <div className="flex flex-row justify-end pr-4">
          <h1 className="text-white text-4xl bottom-4 absolute">${price}</h1>
        </div> */}
      </div>
    </motion.div>
  );
}

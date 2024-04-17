"use client";
import React from "react";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./style.css";

export default function StartHero() {
  // const dish = useSelector((state: RootState) => state.dish.dish);
  return (
    <>
      <div className="h-[30vh] flex flex-row pt-16 pl-8">
        <div className="relative w-1/3 flex flex-row  p-0">
          <img
            src={"/img3.png"}
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 -right-10 w-44 h-44 rotate-12">
            <img className="" src="basil.png" alt="basil" />
          </div>
        </div>

        <div className="px-4 flex flex-col items-start justify-start w-2/3 text-center">
          <div className="text-7xl font-beLoveYaLikeASister text-white ">
            Bienvenidos at Pelicano
          </div>
          <div className="mt-10 text-4xl font-belleza text-white">
            The Diria Hotel welcome you at our Restaurant.
          </div>
        </div>
      </div>
    </>
  );
}

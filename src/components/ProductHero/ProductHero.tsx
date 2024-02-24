"use client";
import React from "react";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./style.css";

export default function ProductHero() {
  const dish = useSelector((state: RootState) => state.dish.dish);
  return (
    <>
      {/* <div className="border-4 rounded-xl border-white h-[70vh] flex flex-row "> */}
      <div className=" h-[70vh] flex flex-row ">
        <div className="w-1/2 flex flex-row items-center justify-center">
          <img
            src={dish.image}
            className=" w-[600px] object-cover rounded-l-xl"
          />
        </div>
        <div className="relative w-72 h-72 rotate-12">
          <img
            className="absolute  bottom-20 top-96"
            src="basil.png"
            alt="basil"
          />
        </div>
        <div className="relative w-1/2 mt-24 mr-10 rounded-lg text-white flex flex-col items-start justify-start">
          <div className="mb-8">
            <h1 className="text-6xl font-belleza">{dish.name}</h1>

            <p className="text-4xl mt-6 text-left border-l-4 pl-4 font-crimson border-white ">
              {dish.description}
            </p>
          </div>
          <div className="mt-12">
            <h1 className="text-6xl font-belleza">{dish.name_esp}</h1>
            <p className="text-4xl mt-6 text-left border-l-4 pl-4 font-crimson border-white ">
              {dish.description_esp}
            </p>
          </div>
          <div className="absolute -bottom-28 flex flex-row items-end justify-end text-right w-full">
            <div className="text-[3rem] text-end w-32 bg-[#4ca94c] pr-2 rounded-xl">
              $ {dish.price}
            </div>
          </div>
          {/* <span className="price-tag absolute bottom-6 mt-12 flex flex-row items-end justify-end text-right w-full">
            <span className="text-6xl text-end">$ {dish.price}</span>
          </span> */}
        </div>
      </div>
    </>
  );
}

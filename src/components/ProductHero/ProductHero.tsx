"use client";
import React from "react";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./style.css";

export default function ProductHero() {
  const dish = useSelector((state: RootState) => state.dish.dish);
  return (
    <>
      {/* <div className="relative h-[30vh] flex flex-row "> */}
      <div className="h-[30vh] flex flex-row pt-24 pl-24">
        <div className="mt-10 w-1/2 flex flex-row items-center justify-center">
          <img
            src={dish.image}
            className="absolute w-[600px] object-cover rounded-l-xl"
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
          <div className="absolute -bottom-20 flex flex-row items-end justify-end text-right w-full">
            <div className="mr-8 text-8xl font-beLoveYaLikeASister font-extrabold text-end w-40  border-b-8 border-double border-white">
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

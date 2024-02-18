import React from "react";
import SliderItem from "./SliderItem";
import SliderThumbnail from "./SliderThumbnail";
import { sliders } from "@/data/slideritems";
import Script from "next/script";
import "./style.css";

/*
    Inspired by this Video
    https://www.youtube.com/watch?v=j7GG009J9uc

*/

export default function Slider() {
  return (
    <>
      <Script src="./slider.js" async />
      {/* <div className="relative w-32 h-32 flex-row items-end justify-center z-50">
            <Image src="/el-pelicano-logo.jpg" width={32} height={32} alt="logo" />
          </div> */}
      <div className="carousel">
        <div className="list">
          {sliders.map((slider) => {
            return <SliderItem key={slider.id} item={slider} />;
          })}
        </div>
        <div className="thumbnail">
          {sliders.map((slider) => {
            return <SliderThumbnail key={slider.id} item={slider} />;
          })}
        </div>

        <div className="arrows">
          <button className="hidden" id="prev">
            {"<"}
          </button>
          <button className="hidden" id="next">
            {">"}
          </button>
        </div>
        <div className="time"></div>
      </div>
    </>
  );
}

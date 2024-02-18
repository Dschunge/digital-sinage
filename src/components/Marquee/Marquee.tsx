import React from "react";
import CardImageLeft from "../Cards/CardImageLeft";

export default function Marquee() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="py-4 animate-marquee whitespace-nowrap flex flex-row">
        <CardImageLeft />
        <CardImageLeft />
        <CardImageLeft />
      </div>
    </div>
  );
}

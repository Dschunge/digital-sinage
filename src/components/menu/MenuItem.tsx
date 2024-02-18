import React from "react";
import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="ml-14 mt-20 w-96 h-40 flex-row items-start justify-center">
      <div className="relative -left-8 -top-10 h-0">
        <Image src="/plate1.png" width={130} height={130} alt="dish" />
      </div>
      <div className="flex flex-col pl-28 pt-6 h-40 w-96 bg-stone-600 border-2 border-slate-50 rounded-xl shadow-2xl">
        <h1 className="text-white text-2xl">Grilled Octopus Salad</h1>
        <p className="text-white">dasdasdadasd</p>
        <h1 className="text-white text-4xl text-right pr-4 pt-6">14$</h1>
      </div>
    </div>
  );
}

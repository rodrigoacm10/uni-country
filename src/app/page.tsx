import { fetchCountrys } from "@/lib/fetchCountrys";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="w-full  flex justify-center min-h-screen pt-32 pb-20   relative ">
      <div className="z-10 absolute min-h-screen bg-dot-black/[0.2] top-0 w-full"></div>
      <div className="z-10 min-h-screen top-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  bg-white w-full absolute"></div>
      {/* [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  */}
      <div className="z-20  max-w-[1000px] flex-1 h-full flex flex-col     items-center  ">
        <div className="text-center text-[40px] self-center justify-self-center leading-[44px] font-bold">
          <p> Encontre qualquer pais </p>
          <p>que você pensar</p>
        </div>

        <div className="w-[300px] relative  self-center  flex mt-20   ">
          <input
            placeholder="sla"
            className="w-full   border-2 rounded-full px-6 py-2 "
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-black absolute -top-[28%] translate-y-1/2 right-[6px] w-[33px] p-[5px] rounded-full"
          >
            a
          </button>
          <button className="border bg-black top-0 -right-12 p-2 w-[42px] rounded-full absolute ">
            a
          </button>

          <button className="border bg-black top-0 -right-[94px] p-2 w-[42px] rounded-full absolute ">
            a
          </button>
        </div>

        <div className="bg-black w-full   mt-40 grid grid-cols-8 justify-items-center gap-1 gap-y-5">
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>

          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>

          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
          <div className="bg-blue-100 w-[95px] h-[120px]"></div>
        </div>
      </div>
    </div>
  );
}

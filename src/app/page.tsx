"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CountryList } from "@/components/CountryList";
import { SearchFilter } from "@/components/SearchFilter";

export default function Home() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      {/* <TracingBeam className="h-[200%] px-6"> */}
      <div className="w-full bg-[#ffffff]  flex justify-center min-h-screen pt-32 pb-20   relative ">
        <div className="z-10 absolute min-h-screen bg-dot-black/[0.2] top-0 w-full"></div>
        <div className="z-10 min-h-screen top-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  bg-[#ffffff] w-full absolute"></div>
        {/* [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  */}
        <div className="z-20  max-w-[1000px] flex-1 h-full flex flex-col     items-center  ">
          <div className="text-center text-[40px] self-center justify-self-center leading-[44px] font-bold">
            <p> Encontre qualquer pais </p>
            <p>que você pensar</p>
          </div>

          <SearchFilter />

          <CountryList />
        </div>
      </div>
      {/* </TracingBeam> */}
    </QueryClientProvider>
  );
}

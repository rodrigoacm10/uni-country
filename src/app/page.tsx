"use client";

import { CountryList } from "@/components/CountryList";
import { SearchFilter } from "@/components/SearchFilter";
import { BackgroundStyled } from "@/components/BackgroundStytled";

export default function Home() {
  // const client = new QueryClient();

  return (
    // <QueryClientProvider client={client}>
    <>
      {/* <TracingBeam className="h-[200%] px-6"> */}

      <div className="w-full   flex justify-center min-h-screen pt-32 pb-20   relative ">
        <BackgroundStyled />
        {/* [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  */}
        <div className="z-20  sm:max-w-[800px] max-w-[470px] flex-1 h-full flex flex-col     items-center  ">
          <div className="text-center  sm:text-[40px] lit:text-[36px] text-[26px] self-center justify-self-center leading-[44px] font-bold">
            <p>
              {" "}
              Encontre{" "}
              <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500  ">
                qualquer
              </span>{" "}
              pais{" "}
            </p>

            <p>que você pensar</p>
          </div>
          <SearchFilter />

          <CountryList />
        </div>
      </div>
      {/* </TracingBeam> */}
    </>
    // </QueryClientProvider>
  );
}

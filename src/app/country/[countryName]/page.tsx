"use client";

import { useCountry } from "@/hooks/useCountry";
import { CurrencyType } from "@/types/currencyType";
import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Country({
  params,
}: {
  params: { countryName: string };
}) {
  const router = useRouter();

  const { data, isFetching } = useCountry(params.countryName);

  console.log(data);

  const country = data?.results[0];

  const languages = country?.languages ? Object.values(country.languages) : [];

  const currencies: string[] = [];

  if (country?.currencies) {
    Object.keys(country.currencies).forEach((key) => {
      // O valor padrão é um objeto do tipo Currency, não um objeto aninhado ou um array
      const currency: CurrencyType = country?.currencies
        ? country?.currencies[key]
        : { name: "none", symbol: "none" };

      // Verifica se currency possui as propriedades necessárias antes de acessá-las
      if (currency.name && currency.symbol) {
        currencies.push(
          `${key ? key : "none"}: ${currency.name} (${currency.symbol})`
        );
      }
    });
  }

  return (
    <>
      {/* <TracingBeam className="h-[200%] px-6"> */}
      <div className="w-full bg-[#f7f7f7]  flex justify-center min-h-screen    p-10   relative ">
        <div className="z-10 absolute min-h-screen bg-dot-black/[0.2] top-0 w-full"></div>
        <div className="z-10 min-h-screen top-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  bg-[#f7f7f7] w-full absolute"></div>
        {/* [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  */}
        <div className="z-20 border rounded-xl max-w-[1000px] flex-1   flex px-10 py-5 flex-col                                         ">
          <div>
            <button
              onClick={() => {
                router.push("/");
              }}
              className="text-[#7B7B7B] flex items-center gap-2 hover:gap-3 duration-500 font-semibold "
            >
              <FaLongArrowAltLeft size={18} />
              countries list
            </button>
          </div>
          <div className="grid justify-center md:grid-cols-[200px_1fr] h-full mt-5 gap-10">
            <div className="  w-full h-full">
              <img src={country?.flags.png} alt={country?.name.common} />
            </div>
            <div className="       ">
              <div className="leading-[30px]">
                <h2 className="uppercase md:text-[32px] text-[28px] text-[#7C05B5] font-bold">
                  {country?.name.common}
                </h2>
                <h3 className="font-bold md:text-[20px] text-[18px]">
                  {country?.name.official}
                </h3>
              </div>
              <ul className=" flex flex-col gap-1 mt-2">
                <li className="flex md:text-[18px] text-[16px] text-[#7B7B7B] font-semibold items-center gap-2">
                  <span>bb</span> {country?.area} km²
                </li>
                <li className="flex md:text-[18px] text-[16px] text-[#7B7B7B] font-semibold items-center gap-2">
                  <span>bb</span>
                  {country?.population}
                </li>
                <li className="flex md:text-[18px] text-[16px] text-[#7B7B7B] font-semibold items-start gap-2">
                  <span>bb</span>
                  <div className="grid lit:grid-cols-3 grid-cols-2 gap-x-2">
                    {country?.timezones.map((e, i) => {
                      if (i === country.timezones.length - 1) {
                        return <p> {e}</p>;
                      } else {
                        return <p>{e}, </p>;
                      }
                    })}
                  </div>
                </li>
              </ul>

              <h3 className="py-6 text-[16px] font-semibold">
                Informações gerais
              </h3>

              <div className="flex gap-x-10 flex-col gap-5">
                <ul className="  grid grid-cols-2    mt-2 max-w-[400px]">
                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span> discagem
                    </p>
                    <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              flex items-center">
                      {country?.idd?.root || "---"}
                      {country?.idd?.suffixes?.map((e) => (
                        <p>{e}</p>
                      ))}
                    </p>
                  </li>

                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span> TLD
                    </p>
                    <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                      {country?.tld || "---"}
                    </p>
                  </li>
                </ul>

                <ul className="leading-[26px] grid grid-cols-2 sm:grid-cols-3 gap-y-6 mt-2 max-w-[400px]">
                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span>capital
                    </p>
                    <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                      {country?.capital || "---"}
                    </p>
                  </li>
                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span>region
                    </p>
                    <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                      {country?.region || "---"}
                    </p>
                  </li>
                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span>sub-region
                    </p>
                    <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                      {country?.subregion || "---"}
                    </p>
                  </li>
                </ul>

                <ul className="leading-[26px] grid grid-cols-2 mt-2 max-w-[400px]">
                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span>Idiomas
                    </p>
                    {languages.length > 0
                      ? languages.map((e) => {
                          return (
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {e}
                            </p>
                          );
                        })
                      : "---"}
                  </li>

                  <li className="  md:text-[18px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
                    <p className="flex items-center gap-2">
                      <span className="hidden lit:block">bb</span>Moedas
                    </p>
                    {currencies.length > 0
                      ? currencies.map((e) => {
                          return (
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {e}
                            </p>
                          );
                        })
                      : "---"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </TracingBeam> */}
    </>
  );
}

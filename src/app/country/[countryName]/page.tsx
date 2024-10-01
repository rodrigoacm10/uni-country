"use client";

import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";
import { BackgroundStyled } from "@/components/BackgroundStytled";
import { InfosLi } from "@/components/InfosLi";
import { CountriesContext } from "@/contexts/CountriesContext";
import { useCountry } from "@/hooks/useCountry";
import { CurrencyType } from "@/types/currencyType";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { formatPopulation } from "@/utils.ts/formatPopulation";
import { corRegions } from "@/utils.ts/corRegions";

import { IoLocationOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { SiTldraw } from "react-icons/si";
import { BsChatLeftDots } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { PiMapPinArea } from "react-icons/pi";
import { PrinciInfosLi } from "@/components/PrinciInfosLi";
import { IoEarthOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";

export default function Country({
  params,
}: {
  params: { countryName: string };
}) {
  const { setCountryIndex } = useContext(CountriesContext);

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
      {isFetching ? (
        <div className="w-full z-50 fixed   top-0 right-0 h-full flex items-center justify-center">
          <p className=" flex justify-center w-full mt-32">
            <FiLoader className="animate-spin" size={26} />
          </p>
        </div>
      ) : (
        ""
      )}
      {/* <TracingBeam className="h-[200%] px-6"> */}
      <div className="w-full  bg-[#e6e6e6] z-30 flex justify-center min-h-screen    p-10   relative ">
        <BackgroundStyled />
        {/* [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]  */}

        <div className="z-20   relative bg-white rounded-xl max-w-[1000px] flex-1 overflow-hidden flex   flex-col ">
          {/* mx-10 my-5 */}
          <AnimatedBorderTrail
            className="z-10  p-[3px] w-full h-full "
            trailSize="sm"
          >
            {" "}
            <BackgroundStyled white={true} />
            <div
              className="z-40 relative  mx-10 my-5 "
              style={{ transform: "translateZ(0)" }}
            >
              <div>
                <button
                  onClick={() => {
                    router.push("/");
                    setCountryIndex(-1);
                  }}
                  className="text-[#7B7B7B] flex items-center gap-2 hover:gap-3 duration-500 font-semibold "
                >
                  <FaLongArrowAltLeft size={18} />
                  Listagem de Países
                </button>
              </div>
              <div className="grid justify-center md:grid-cols-[200px_1fr] h-full mt-5 gap-10">
                <div className="  w-full h-full">
                  <img src={country?.flags.png} alt={country?.name.common} />
                </div>
                <div className="       ">
                  {isFetching ? (
                    ""
                  ) : (
                    <>
                      {" "}
                      <div className="leading-[30px]">
                        <h2 className="uppercase md:text-[32px] text-[28px]  relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500  font-bold">
                          {country?.translations?.por.common}
                        </h2>
                        <h3 className="font-bold md:text-[20px] text-[18px]">
                          {country?.translations?.por.official}
                        </h3>
                      </div>
                      <ul className=" flex flex-col gap-1 mt-2">
                        <PrinciInfosLi
                          icon={<IoEarthOutline />}
                          title={`${country?.area} km²`}
                        />

                        <PrinciInfosLi
                          icon={<GoPeople />}
                          title={`${formatPopulation(
                            country?.population || 0
                          )}`}
                        />

                        <PrinciInfosLi
                          icon={<FaRegClock />}
                          component={
                            <div className="grid lit:grid-cols-3 grid-cols-2 gap-x-2">
                              {country?.timezones.map((e, i) => {
                                if (i === country.timezones.length - 1) {
                                  return <p key={i}> {e}</p>;
                                } else {
                                  return <p key={i}>{e}, </p>;
                                }
                              })}
                            </div>
                          }
                        />
                      </ul>
                      <h3 className="py-6 text-[16px] font-semibold">
                        Informações gerais
                      </h3>
                      <div className="flex gap-x-10 flex-col gap-5">
                        <ul className=" gap-x-4 grid grid-cols-2    mt-2 max-w-[400px]">
                          <InfosLi icon={<BsTelephone />} title={"discagem"}>
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              flex items-center">
                              {country?.idd?.root || "---"}
                              {country?.idd?.suffixes?.map((e, i) => (
                                <p key={i}>{e}</p>
                              ))}
                            </p>
                          </InfosLi>

                          <InfosLi icon={<SiTldraw />} title={"TLD"}>
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {country?.tld || "---"}
                            </p>
                          </InfosLi>
                        </ul>

                        <ul className="gap-x-4  leading-[26px] grid grid-cols-2 sm:grid-cols-3 gap-y-6 mt-2 max-w-[400px]">
                          <InfosLi icon={<RiHome2Line />} title={"capital"}>
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {country?.capital || "---"}
                            </p>
                          </InfosLi>

                          <InfosLi
                            icon={<IoLocationOutline />}
                            title={"região"}
                          >
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {country?.region
                                ? corRegions("region", country?.region)
                                : "---"}
                            </p>
                          </InfosLi>

                          <InfosLi icon={<PiMapPinArea />} title={"sub-região"}>
                            <p className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-">
                              {country?.subregion
                                ? corRegions("subregion", country?.subregion)
                                : "---"}
                            </p>
                          </InfosLi>
                        </ul>

                        <ul className="gap-x-4  leading-[26px] grid grid-cols-2 mt-2 max-w-[400px]">
                          <InfosLi icon={<BsChatLeftDots />} title={"Idiomas"}>
                            {languages.length > 0
                              ? languages.map((e, i) => {
                                  return (
                                    <p
                                      key={i}
                                      className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-"
                                    >
                                      {e}
                                    </p>
                                  );
                                })
                              : "---"}
                          </InfosLi>

                          <InfosLi icon={<CiMoneyBill />} title={"moedas"}>
                            {currencies.length > 0
                              ? currencies.map((e, i) => {
                                  return (
                                    <p
                                      key={i}
                                      className="md:text-[15px] text-[13px] lit:pl-[30px] pt-2              font-"
                                    >
                                      {e}
                                    </p>
                                  );
                                })
                              : "---"}
                          </InfosLi>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </AnimatedBorderTrail>
        </div>
      </div>
      {/* </TracingBeam> */}
    </>
  );
}

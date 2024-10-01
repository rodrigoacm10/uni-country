import { fetchCountries } from "@/lib/fetchCountries";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useContext, useRef, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { FiLoader } from "react-icons/fi";
import { CountriesContext } from "@/contexts/CountriesContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { corRegions } from "@/utils.ts/corRegions";

export function CountryList() {
  const {
    countrySearch,
    subRegion,
    region,
    population,
    nameOrde,
    populationOrderDesc,
    populationOrderAsc,
    areaOrde,
    countryIndex,
    setCountryIndex,
  } = useContext(CountriesContext);

  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = (index: number) => ({
    hidden: {
      opacity: 0,
      y: 250,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });

  const {
    data,
    // error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [
      "projects",
      countrySearch,
      region.value,
      subRegion.value,
      population,
      `${nameOrde}`,
      `${populationOrderDesc}`,
      `${populationOrderAsc}`,
      `${areaOrde}`,
    ],
    queryFn: fetchCountries,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  // Cria uma referência para o sentinela
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Configura o Intersection Observer para detectar o final da lista
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="w-full">
      {status === "error" && (
        <p className="text-center mt-32 font-bold">Nenhum país encontrado</p>
      )}

      {data?.pages[0].data.length === undefined && isFetching && (
        <p className="flex justify-center w-full mt-32">
          <FiLoader className="animate-spin" size={26} />
        </p>
      )}

      {data?.pages[0].data.length === 0 && (
        <p className="text-center mt-32 font-bold">Nenhum país encontrado</p>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flag-container w-full mt-40 px-4 grid md:grid-cols-6 sm:grid-cols-4 lit:grid-cols-3 grid-cols-2 justify-items-center gap-1 gap-y-6"
      >
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.data.map((country, index) => (
              <motion.div
                key={index}
                variants={item(index)}
                className={`group w-[97px]  bg-white  border border-[#ebdfdf] rounded-md overflow-hidden    `}
              >
                <div className="relative ">
                  {index == countryIndex ? (
                    <div className="absolute z-50 w-[100px] h-[181px] flex items-center justify-center  -bottom-[181px] right-0 bg-black bg-opacity-50  ">
                      <FiLoader
                        className="animate-spin "
                        color="#7C05B5"
                        size={26}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  onClick={() => {
                    router.push(
                      `/country/${country.name.common.toLowerCase()}`
                    );
                    setCountryIndex(index);
                  }}
                  className="  transition duration-200 "
                >
                  <div className="w-full bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 px-2 overflow-hidden h-[95px]   flex items-center   ">
                    <img src={country.flags.png} alt={country.name.common} />
                  </div>

                  <div className="mx-2 mb-1">
                    <p className="truncate mt-2 text-[#7B7B7B] font-semibold">
                      {/* {country.name.common} */}
                      {country?.translations?.por.common}
                    </p>
                    <div className="grid grid-cols-[16px_1fr] items-center gap-1 text-[#7B7B7B]">
                      <RiHome2Line color="#7B7B7B" />
                      <p className="truncate">
                        {country?.capital?.[0] ? country.capital[0] : "nenhuma"}
                      </p>
                    </div>

                    <div className="grid grid-cols-[16px_1fr] items-center gap-1 text-[#7B7B7B]">
                      <IoLocationOutline color="#7B7B7B" />
                      <p className="truncate">
                        {country?.region
                          ? corRegions("region", country.region)
                          : "nenhuma"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </motion.div>

      {/* Sentinela para o Intersection Observer */}
      <div ref={observerRef} className="h-10"></div>

      {isFetchingNextPage && (
        <div className="flex justify-center mt-8">
          <FiLoader className="animate-spin" size={26} />
        </div>
      )}
    </div>
  );
}

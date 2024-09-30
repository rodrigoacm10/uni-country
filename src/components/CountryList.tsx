import { fetchCountries } from "@/lib/fetchCountries";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useContext, useRef, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { FiLoader } from "react-icons/fi";
import { CountriesContext } from "@/contexts/CountriesContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flag-container w-full mt-40 px-4 grid md:grid-cols-6 sm:grid-cols-4 lit:grid-cols-3 grid-cols-2 justify-items-center gap-1 gap-y-6"
      >
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.data.map((country, countryIndex) => (
              <motion.div
                key={countryIndex}
                variants={item(countryIndex)}
                className=" w-[95px]  "
              >
                <div
                  onClick={() => {
                    router.push(
                      `/country/${country.name.common.toLowerCase()}`
                    );
                  }}
                  className="transition duration-200 group"
                >
                  <div className="w-full  h-[95px]   flex items-center overflow-hidden firstChild">
                    <img src={country.flags.png} alt={country.name.common} />
                  </div>

                  <p className="truncate mt-2 text-[#7B7B7B] font-semibold">
                    {country.name.common}
                  </p>
                  <div className="grid grid-cols-[16px_1fr] items-center gap-1 text-[#7B7B7B]">
                    <RiHome2Line color="#7B7B7B" />
                    <p className="truncate">
                      {country?.capital?.[0] ? country.capital[0] : "none"}
                    </p>
                  </div>

                  <div className="grid grid-cols-[16px_1fr] items-center gap-1 text-[#7B7B7B]">
                    <IoLocationOutline color="#7B7B7B" />
                    <p className="truncate">
                      {country?.region ? country.region : "none"}
                    </p>
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

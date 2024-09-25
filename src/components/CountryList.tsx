import { fetchCountries } from "@/lib/fetchCountrys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { CountriesContext } from "@/contexts/CountriesContext";
import { motion } from "framer-motion";

export function CountryList() {
  const { countrySearch, subRegion, region, population } =
    useContext(CountriesContext);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Define o atraso entre os elementos para criar o efeito de onda
        delayChildren: 0.2, // Atraso antes de iniciar a animação
      },
    },
  };

  const item = (index: any) => ({
    hidden: {
      opacity: 0,
      y: 250,
    }, // Começa abaixo com opacidade 0
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15, // Atraso crescente para efeito de onda
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });
  const {
    data,
    error,
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
    ],
    queryFn: fetchCountries,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  console.log(data?.pages[0].data);

  return (
    <div className="w-full">
      {status === "error" && (
        <p className="text-center mt-32">
          Ocorreu um erro ao carregar os dados.
        </p>
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
        className="flag-container w-full mt-40 grid grid-cols-8 justify-items-center gap-1 gap-y-5"
      >
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.data.map((country, countryIndex) => (
              <motion.div
                key={countryIndex}
                variants={item(countryIndex)}
                className="w-[95px] "
              >
                {/* hover:-translate-y-4 */}
                <div className="transition duration-200  group ">
                  <div className="w-full h-[95px] flex items-center overflow-hidden firstChild">
                    <img src={country.flags.png} alt={country.name.common} />
                  </div>

                  <p className="truncate mt-2 text-[#7B7B7B] font-semibold">
                    {country.name.common}
                  </p>
                  <p className="flex items-center gap-1 text-[#7B7B7B]">
                    <RiHome2Line color="#7B7B7B" /> capital
                  </p>

                  <p className="flex items-center gap-1 text-[#7B7B7B]">
                    <IoLocationOutline color="#7B7B7B" /> local
                  </p>
                </div>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-center">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="bg-red-100 flex items-center justify-center w-[40px] h-[40px] rounded-full"
          >
            {isFetching ? (
              <FiLoader className="animate-spin" />
            ) : hasNextPage && !isFetching ? (
              <FaPlus />
            ) : (
              ""
            )}
          </button>
        )}
      </div>
    </div>
  );
}

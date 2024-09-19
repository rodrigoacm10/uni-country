"use client";

import { fetchCountries } from "@/lib/fetchCountrys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useContext, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { CountriesContext } from "@/contexts/CountriesContext";

export function CountryList() {
  const { countrySearch } = useContext(CountriesContext);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects", countrySearch],
    // criar um contexto com search consumir o contexto aki e passar no fetch
    queryFn: fetchCountries,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  console.log(data?.pages[0].data);

  // if (status === "error") return <p>Ocorreu um erro ao carregar os dados.</p>;

  return (
    <div className=" w-full">
      {status === "error" ? (
        <p className="text-center mt-32">
          Ocorreu um erro ao carregar os dados.
        </p>
      ) : (
        ""
      )}

      {data?.pages[0].data.length === undefined && isFetching ? (
        <p className="flex justify-center w-full mt-32">
          <FiLoader className="animate-spin" size={26} />
        </p>
      ) : (
        ""
      )}
      <div className="  w-full   mt-40 grid grid-cols-8 justify-items-center gap-1 gap-y-5">
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={pageIndex}>
            {page.data.map((country, countryIndex) => (
              <div className="  w-[95px]  " key={countryIndex}>
                <div className="w-full h-[95px] flex items-center overflow-hidden">
                  <img src={country.flags.png} />
                </div>

                <p className="truncate mt-2 text-[#7B7B7B] font-semibold">
                  {country.name.common}
                </p>
                <p className="flex items-center  gap-1 text-[#7B7B7B]">
                  <RiHome2Line color="#7B7B7B" /> capital
                </p>

                <p className="flex items-center  gap-1 text-[#7B7B7B]">
                  <IoLocationOutline color="#7B7B7B" /> local
                </p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className="mt-8 flex justify-center ">
        {hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="bg-red-100 flex items-center justify-center w-[40px] h-[40px] rounded-full"
          >
            {/* {isFetching ? <FiLoader className="animate-spin" /> : ""}

          {isFetchingNextPage && !isFetching ? (
            "a"
          ) : hasNextPage && !isFetching ? (
            <FaPlus />
          ) : (
            ""
          )} */}
            {isFetching ? (
              <FiLoader className="animate-spin" />
            ) : hasNextPage && !isFetching ? (
              <FaPlus />
            ) : (
              ""
            )}

            {/* {isFetching ? <FiLoader className="animate-spin" /> : <FaPlus />} */}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

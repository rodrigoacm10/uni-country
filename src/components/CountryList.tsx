"use client";

import { fetchCountries } from "@/lib/fetchCountrys";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

export function CountryList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchCountries,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  console.log(data);

  if (status === "error") return <p>Ocorreu um erro ao carregar os dados.</p>;

  return (
    <div className="  w-full">
      <div className="bg-black w-full   mt-40 grid grid-cols-8 justify-items-center gap-1 gap-y-5">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.data.map((country, countryIndex) => (
              <div
                className="bg-blue-100 w-[95px] h-[120px]"
                key={countryIndex}
              >
                <p>{country.name.common}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Carregando mais..."
            : hasNextPage
            ? "Carregar Mais"
            : "Todos os países carregados"}
        </button>
      </div>
    </div>
  );
}

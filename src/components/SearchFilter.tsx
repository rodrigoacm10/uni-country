import { CountriesContext } from "@/contexts/CountriesContext";
import { useCallback, useContext, useState } from "react";
import { debounce } from "lodash";
import { FilterContainer } from "./FilterContainer";
import { OrderingContainer } from "./OrderingContainer";
import { VscSettings } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";

export function SearchFilter() {
  const {
    countrySearch,
    setCountrySearch,
    filtersVisible,
    setFiltersVisible,
    ordenationVisible,
    setOrdenationVisible,
  } = useContext(CountriesContext);

  // Debounce para aguardar 500ms após o usuário parar de digitar
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setCountrySearch(value);
      // setCurPage(0);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="w-[300px]   gap-2 self-center flex-col  flex mt-20   ">
      <form className="relative">
        <input
          defaultValue={countrySearch}
          onChange={handleChange}
          placeholder="sla"
          className="w-full font-[600]  border-2 rounded-full px-6 py-2 "
        />
        {/* <button
          onClick={(e) => {
            // e.preventDefault();
          }}
          type="submit"
          className="flex items-center justify-center bg-black absolute -top-[28%] translate-y-1/2 right-[6px] w-[33px] p-[5px] rounded-full"
        >
          a
        </button> */}

        <div className="  flex    gap-1 items-center justify-end absolute  bottom-[50%] translate-y-1/2  right-[6px]">
          {/* top-0 -right-12 */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setOrdenationVisible(false);
              setFiltersVisible(!filtersVisible);
            }}
            className="border flex items-center justify-center bg-black  w-[32px] h-[32px] rounded-full   "
          >
            {filtersVisible ? (
              <IoClose className="filterOrdenationInput" color="white" />
            ) : (
              <VscSettings className="filterOrdenationInput" color="white" />
            )}
          </button>
          {/* top-0 -right-[94px] */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setFiltersVisible(false);
              setOrdenationVisible(!ordenationVisible);
            }}
            className="border bg-black flex items-center justify-center w-[32px] h-[32px] rounded-full   "
          >
            {ordenationVisible ? (
              <IoClose className="filterOrdenationInput" color="white" />
            ) : (
              <FaSortAmountDown
                size={14}
                className="filterOrdenationInput"
                color="white"
              />
            )}
          </button>

          <FilterContainer />

          <OrderingContainer />
        </div>
      </form>
    </div>
  );
}

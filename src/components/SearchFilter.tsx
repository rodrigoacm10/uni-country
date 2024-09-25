import { CountriesContext } from "@/contexts/CountriesContext";
import { useCallback, useContext, useState } from "react";
import { debounce } from "lodash";
import { FilterContainer } from "./FilterContainer";

export function SearchFilter() {
  const { countrySearch, setCountrySearch } = useContext(CountriesContext);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [ordenationVisible, setOrdenationVisible] = useState(false);

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
            className="border bg-black  w-[32px] h-[32px] rounded-full   "
          >
            a
          </button>
          {/* top-0 -right-[94px] */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setFiltersVisible(false);
              setOrdenationVisible(!ordenationVisible);
            }}
            className="border bg-black  w-[32px] h-[32px] rounded-full   "
          >
            a
          </button>

          {filtersVisible ? <FilterContainer /> : ""}
        </div>
      </form>
    </div>
  );
}

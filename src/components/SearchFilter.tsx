import { CountriesContext } from "@/contexts/CountriesContext";
import { useCallback, useContext, useState } from "react";
import { debounce } from "lodash";

export function SearchFilter() {
  const { countrySearch, setCountrySearch } = useContext(CountriesContext);

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
        <button
          onClick={(e) => {
            // e.preventDefault();
          }}
          type="submit"
          className="flex items-center justify-center bg-black absolute -top-[28%] translate-y-1/2 right-[6px] w-[33px] p-[5px] rounded-full"
        >
          a
        </button>
      </form>

      <div className="w-full flex gap-2 items-center justify-end">
        {/* top-0 -right-12 */}
        <button className="border bg-black  p-2 w-[42px] rounded-full   ">
          a
        </button>
        {/* top-0 -right-[94px] */}
        <button className="border bg-black  p-2 w-[42px] rounded-full   ">
          a
        </button>
      </div>
    </div>
  );
}

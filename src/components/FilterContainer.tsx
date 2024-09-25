"use client";

import { CountriesContext } from "@/contexts/CountriesContext";
import { regionArr } from "@/utils.ts/regionArr";
import { subRegionArr } from "@/utils.ts/subRegionArr";
import { useContext, useState } from "react";

import { SelectComport } from "./SelectCompost";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function FilterContainer() {
  const {
    subRegion,
    setSubRegion,
    region,
    setRegion,
    population,
    setPopulation,
  } = useContext(CountriesContext);

  const [openSubReg, setOpenSubReg] = useState(false);
  const [openReg, setOpenReg] = useState(false);
  const [valueSubReg, setValueSubReg] = useState("");
  const [valueReg, setValueReg] = useState("");

  return (
    <div className="absolute top-11 h-[330px] w-[275px] bg-black/0   ">
      <div className="absolute w-[200px]  right-10 bg-white rounded-3xl py-4 px-5 border z-auto ">
        <h3 className="font-semibold">Filtrar por:</h3>
        <form className="mt-2 flex flex-col gap-2 z-40">
          <div>
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="subregion"
            >
              sub-region
            </label>

            <SelectComport
              open={openSubReg}
              setOpen={setOpenSubReg}
              value={valueSubReg}
              setValue={setValueSubReg}
              arrValues={subRegionArr}
              especif={subRegion}
              setEspecific={setSubRegion}
              text="choose sub-region"
              findText="Find sub-region"
            />
          </div>

          <div>
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="subregion"
            >
              region
            </label>

            <SelectComport
              open={openReg}
              setOpen={setOpenReg}
              value={valueReg}
              setValue={setValueReg}
              arrValues={regionArr}
              especif={region}
              setEspecific={setRegion}
              text="choose region"
              findText="Find region"
            />
          </div>

          <div>
            <label className="ml-2 font-semibold text-[14px] text-[#7B7B7B]">
              population
            </label>
            <Select
              onValueChange={(e) => {
                setPopulation(e);
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="min population" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="none">none</SelectItem>
                  <SelectItem value="1m">under 1M</SelectItem>
                  <SelectItem value="1m10">1M to 10M</SelectItem>
                  <SelectItem value="10m100">10M to 100M</SelectItem>
                  <SelectItem value="100m">under 100M</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </div>
  );
}

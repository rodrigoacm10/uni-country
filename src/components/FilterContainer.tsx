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
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function FilterContainer() {
  const {
    setSubRegion,
    setRegion,
    setPopulation,
    filtersVisible,
    setFiltersVisible,
  } = useContext(CountriesContext);

  const [openSubReg, setOpenSubReg] = useState(false);
  const [openReg, setOpenReg] = useState(false);
  const [valueSubReg, setValueSubReg] = useState("");
  const [valueReg, setValueReg] = useState("");

  return (
    <div
      className={`${
        filtersVisible ? "" : "filterOrdenationClose"
      } absolute top-11 h-[330px] w-[275px] bg-black/0  `}
    >
      <div
        className={`${
          filtersVisible ? "" : "filterOrdenationClose"
        } filterOrdenation absolute w-[200px]  right-10 bg-white rounded-3xl py-4 px-5 border z-auto `}
      >
        <h3 className="font-semibold">Filtrar por:</h3>
        <div className="mt-2 flex flex-col gap-2 z-40">
          <div>
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="subregion"
            >
              sub-região
            </label>

            <SelectComport
              open={openSubReg}
              setOpen={setOpenSubReg}
              value={valueSubReg}
              setValue={setValueSubReg}
              arrValues={subRegionArr}
              // especif={subRegion}
              setEspecific={setSubRegion}
              text="escolher sub-região"
              findText="Procurar sub-região"
              close={setFiltersVisible}
            />
          </div>

          <div>
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="subregion"
            >
              região
            </label>

            <SelectComport
              open={openReg}
              setOpen={setOpenReg}
              value={valueReg}
              setValue={setValueReg}
              arrValues={regionArr}
              // especif={region}
              setEspecific={setRegion}
              text="escolher região"
              findText="Procurar região"
              close={setFiltersVisible}
            />
          </div>

          <div>
            <label className="ml-2 font-semibold text-[14px] text-[#7B7B7B]">
              população
            </label>
            <Select
              onValueChange={(e) => {
                setPopulation(e);
                setFiltersVisible(false);
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="none">todos</SelectItem>
                  <SelectItem value="1m">abaixo de 1M</SelectItem>
                  <SelectItem value="1m10">1M - 10M</SelectItem>
                  <SelectItem value="10m100">10M - 100M</SelectItem>
                  <SelectItem value="100m">abaixo de 100M</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

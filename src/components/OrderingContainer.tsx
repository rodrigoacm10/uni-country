"use client";

import { CountriesContext } from "@/contexts/CountriesContext";

import { useContext } from "react";

import { Switch } from "./ui/switch";

export function OrderingContainer() {
  const {
    nameOrde,
    setNameOrder,
    populationOrderDesc,
    setPopulationOrderDesc,
    populationOrderAsc,
    setPopulationOrderAsc,
    areaOrde,
    setAreaOrder,
    ordenationVisible,
    setOrdenationVisible,
  } = useContext(CountriesContext);

  return (
    <div
      className={`${
        ordenationVisible ? "" : "filterOrdenationClose"
      } absolute top-11 h-[330px] -right-8 w-[275px] bg-black/0`}
    >
      <div className="absolute w-[150px] filterOrdenation  right-8 bg-white rounded-3xl py-4 px-5 border z-auto ">
        <h3 className="font-semibold">Ordernar por:</h3>
        <div className="mt-2 flex flex-col gap-2 z-40">
          <div className="flex flex-col">
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="subregion"
            >
              name
            </label>

            <Switch
              className="ml-2 mt-2"
              checked={nameOrde}
              onClick={() => {
                setNameOrder(!nameOrde);
                setPopulationOrderDesc(false);
                setPopulationOrderAsc(false);
                setAreaOrder(false);
              }}
              onCheckedChange={() => {
                setOrdenationVisible(false);
              }}
              id="subregion"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="populationDesc"
            >
              population Desc
            </label>

            <Switch
              className="ml-2 mt-2"
              checked={populationOrderDesc}
              onClick={() => {
                setNameOrder(false);
                setPopulationOrderDesc(!populationOrderDesc);
                setPopulationOrderAsc(false);
                setAreaOrder(false);
              }}
              onCheckedChange={() => {
                setOrdenationVisible(false);
              }}
              id="populationDesc"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="populationAsc"
            >
              population Asc
            </label>

            <Switch
              className="ml-2 mt-2"
              checked={populationOrderAsc}
              onClick={() => {
                setNameOrder(false);
                setPopulationOrderDesc(false);
                setPopulationOrderAsc(!populationOrderAsc);
                setAreaOrder(false);
              }}
              onCheckedChange={() => {
                setOrdenationVisible(false);
              }}
              id="populationAsc"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="ml-2 font-semibold text-[14px] text-[#7B7B7B]"
              htmlFor="area"
            >
              area
            </label>

            <Switch
              className="ml-2 mt-2"
              checked={areaOrde}
              onClick={() => {
                setNameOrder(false);
                setPopulationOrderDesc(false);
                setPopulationOrderAsc(false);
                setAreaOrder(!areaOrde);
              }}
              onCheckedChange={() => {
                setOrdenationVisible(false);
              }}
              id="area"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

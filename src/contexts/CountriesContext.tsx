"use client";

import { createContext, ReactNode, useState } from "react";

// Criando o contexto corretamente
export const CountriesContext = createContext({
  countrySearch: "",
  setCountrySearch: (val: string) => {},
  subRegion: {
    value: "",
    name: "",
  },
  setSubRegion: (val: any) => {},
  region: {
    value: "",
    name: "",
  },
  setRegion: (val: any) => {},
  population: "",
  setPopulation: (val: string) => {},
  nameOrde: false,
  setNameOrder: (val: boolean) => {},
  populationOrderDesc: false,
  setPopulationOrderDesc: (val: boolean) => {},
  populationOrderAsc: false,
  setPopulationOrderAsc: (val: boolean) => {},
  areaOrde: false,
  setAreaOrder: (val: boolean) => {},
  filtersVisible: false,
  setFiltersVisible: (val: boolean) => {},
  ordenationVisible: false,
  setOrdenationVisible: (val: boolean) => {},
});

interface CountriesContextProviderProps {
  children: ReactNode;
}

export function CountriesContextProvider({
  children,
}: CountriesContextProviderProps) {
  const [countrySearch, setCountrySearch] = useState("");
  const [subRegion, setSubRegion] = useState({ value: "", name: "" });
  const [region, setRegion] = useState({ value: "", name: "" });
  const [population, setPopulation] = useState("none");
  const [nameOrde, setNameOrder] = useState(false);
  const [populationOrderDesc, setPopulationOrderDesc] = useState(false);
  const [populationOrderAsc, setPopulationOrderAsc] = useState(false);
  const [areaOrde, setAreaOrder] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [ordenationVisible, setOrdenationVisible] = useState(false);

  return (
    // Corrigido para acessar o provider corretamente
    <CountriesContext.Provider
      value={{
        countrySearch,
        setCountrySearch,
        subRegion,
        setSubRegion,
        region,
        setRegion,
        population,
        setPopulation,
        nameOrde,
        setNameOrder,
        populationOrderDesc,
        setPopulationOrderDesc,
        populationOrderAsc,
        setPopulationOrderAsc,
        areaOrde,
        setAreaOrder,
        filtersVisible,
        setFiltersVisible,
        ordenationVisible,
        setOrdenationVisible,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

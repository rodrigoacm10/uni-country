"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Interfaces para subRegion e region
interface RegionType {
  value: string;
  name: string;
}

// Tipagem do contexto
interface CountriesContextType {
  countrySearch: string;
  setCountrySearch: Dispatch<SetStateAction<string>>;
  subRegion: RegionType;
  setSubRegion: Dispatch<SetStateAction<RegionType>>;
  region: RegionType;
  setRegion: Dispatch<SetStateAction<RegionType>>;
  population: string;
  setPopulation: Dispatch<SetStateAction<string>>;
  nameOrde: boolean;
  setNameOrder: Dispatch<SetStateAction<boolean>>;
  populationOrderDesc: boolean;
  setPopulationOrderDesc: Dispatch<SetStateAction<boolean>>;
  populationOrderAsc: boolean;
  setPopulationOrderAsc: Dispatch<SetStateAction<boolean>>;
  areaOrde: boolean;
  setAreaOrder: Dispatch<SetStateAction<boolean>>;
  filtersVisible: boolean;
  setFiltersVisible: Dispatch<SetStateAction<boolean>>;
  ordenationVisible: boolean;
  setOrdenationVisible: Dispatch<SetStateAction<boolean>>;
  countryIndex: number;
  setCountryIndex: Dispatch<SetStateAction<number>>;
}

// Criando o contexto corretamente com tipagem
export const CountriesContext = createContext<CountriesContextType>({
  countrySearch: "",
  setCountrySearch: () => {},
  subRegion: { value: "", name: "" },
  setSubRegion: () => {},
  region: { value: "", name: "" },
  setRegion: () => {},
  population: "",
  setPopulation: () => {},
  nameOrde: false,
  setNameOrder: () => {},
  populationOrderDesc: false,
  setPopulationOrderDesc: () => {},
  populationOrderAsc: false,
  setPopulationOrderAsc: () => {},
  areaOrde: false,
  setAreaOrder: () => {},
  filtersVisible: false,
  setFiltersVisible: () => {},
  ordenationVisible: false,
  setOrdenationVisible: () => {},
  countryIndex: -1,
  setCountryIndex: () => {},
});

interface CountriesContextProviderProps {
  children: ReactNode;
}

export function CountriesContextProvider({
  children,
}: CountriesContextProviderProps) {
  const [countrySearch, setCountrySearch] = useState<string>("");
  const [subRegion, setSubRegion] = useState<RegionType>({
    value: "",
    name: "",
  });
  const [region, setRegion] = useState<RegionType>({ value: "", name: "" });
  const [population, setPopulation] = useState<string>("none");
  const [nameOrde, setNameOrder] = useState<boolean>(false);
  const [populationOrderDesc, setPopulationOrderDesc] =
    useState<boolean>(false);
  const [populationOrderAsc, setPopulationOrderAsc] = useState<boolean>(false);
  const [areaOrde, setAreaOrder] = useState<boolean>(false);
  const [filtersVisible, setFiltersVisible] = useState<boolean>(false);
  const [ordenationVisible, setOrdenationVisible] = useState<boolean>(false);
  const [countryIndex, setCountryIndex] = useState<number>(-1);

  return (
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
        countryIndex,
        setCountryIndex,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

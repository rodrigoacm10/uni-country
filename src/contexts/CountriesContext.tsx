"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Definindo a tipagem correta para o contexto
interface SubRegionType {
  value: string;
  name: string;
}

interface RegionType {
  value: string;
  name: string;
}

interface CountriesContextType {
  countrySearch: string;
  setCountrySearch: Dispatch<SetStateAction<string>>;

  subRegion: SubRegionType;
  setSubRegion: Dispatch<SetStateAction<SubRegionType>>;

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
}

// Criando o contexto com tipagem correta
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
});

interface CountriesContextProviderProps {
  children: ReactNode;
}

export function CountriesContextProvider({
  children,
}: CountriesContextProviderProps) {
  const [countrySearch, setCountrySearch] = useState<string>("");
  const [subRegion, setSubRegion] = useState<SubRegionType>({
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
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

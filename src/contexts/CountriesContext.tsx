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
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

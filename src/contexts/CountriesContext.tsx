"use client";

import { createContext, ReactNode, useState } from "react";

// Criando o contexto corretamente
export const CountriesContext = createContext({
  countrySearch: "",
  setCountrySearch: (val: string) => {},
});

interface CountriesContextProviderProps {
  children: ReactNode;
}

export function CountriesContextProvider({
  children,
}: CountriesContextProviderProps) {
  const [countrySearch, setCountrySearch] = useState("");

  return (
    // Corrigido para acessar o provider corretamente
    <CountriesContext.Provider value={{ countrySearch, setCountrySearch }}>
      {children}
    </CountriesContext.Provider>
  );
}

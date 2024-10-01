"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { CountriesContextProvider } from "./CountriesContext";

export function PorvidersComponent({ children }: { children: ReactNode }) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CountriesContextProvider>{children}</CountriesContextProvider>
    </QueryClientProvider>
  );
}

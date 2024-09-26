import { Country } from "@/types/countryType";

export const sortCountries = (
  countries: Country[],
  nameOrde: boolean,
  populationOrderDesc: boolean,
  populationOrderAsc: boolean,
  areaOrde: boolean
): Country[] => {
  return countries.sort((a, b) => {
    if (nameOrde) {
      return a.name.common.localeCompare(b.name.common);
    }
    if (populationOrderDesc) {
      return b.population - a.population;
    }
    if (populationOrderAsc) {
      return a.population - b.population;
    }
    if (areaOrde) {
      return b.area - a.area;
    }
    return 0; // Sem mudança na ordem caso todos os parâmetros sejam falsos
  });
};

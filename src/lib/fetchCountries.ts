import { Country } from "@/types/countryType";
import { corPopuation } from "@/utils.ts/corPopulation";
import { sortCountries } from "@/utils.ts/sortCountries";
import { stringToBoolean } from "@/utils.ts/stringToBoolean";
import axios, { AxiosResponse } from "axios";

interface PopulationProps {
  type: string;
  min: number;
  max: number;
}

export const fetchCountries = async ({
  pageParam = 1,
  queryKey,
}: {
  pageParam: number;
  queryKey: string[];
}): Promise<{
  data: Country[];
  nextPage: number | undefined;
  nextCursor: number | undefined;
  hasNextPage: boolean;
}> => {
  const search = queryKey[1];
  const region = queryKey[2];
  const subRegion = queryKey[3];
  const population = corPopuation(queryKey[4]);
  const nameOrde = queryKey[5];
  const populationOrderDesc = queryKey[6];
  const populationOrderAsc = queryKey[7];
  const areaOrde = queryKey[8];

  console.log("population", population);

  const response: AxiosResponse<Country[]> = await axios.get(
    search
      ? `https://restcountries.com/v3.1/name/${search}`
      : `https://restcountries.com/v3.1/all`
  );

  const arrData = () => {
    return response.data?.filter((e: Country) => {
      // Verifica se o subRegion está selecionado e se corresponde ao valor
      const matchesSubRegion = subRegion ? e.subregion === subRegion : true;

      // Verifica se o region está selecionado e se corresponde ao valor
      const matchesRegion = region ? e.region === region : true;

      // Verifica se o population.type não é "none" e se está dentro da faixa especificada
      const matchesPopulation =
        population.type !== "none"
          ? e.population >= population.min && e.population <= population.max
          : true;

      // Retorna verdadeiro se todas as condições forem atendidas
      return matchesSubRegion && matchesRegion && matchesPopulation;
    });
  };

  const itemsPerPage = 24;
  const start = (pageParam - 1) * itemsPerPage;
  const sortedData = sortCountries(
    arrData(),
    stringToBoolean(nameOrde),
    stringToBoolean(populationOrderDesc),
    stringToBoolean(populationOrderAsc),
    stringToBoolean(areaOrde)
  );
  const paginatedData = sortedData.slice(start, start + itemsPerPage);
  // const paginatedData = response.data.slice(start, start + itemsPerPage);

  return {
    data: paginatedData,
    nextPage: paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
    hasNextPage: paginatedData.length === itemsPerPage,
    nextCursor:
      paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
  };
};

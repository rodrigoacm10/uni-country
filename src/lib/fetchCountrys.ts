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
  const corPopuation = (val: string) => {
    console.log(val);

    if (val === "none") {
      return { type: "none", min: 0, max: 0 };
    } else if (val === "1m") {
      return { type: "1m", min: 0, max: 1000000 };
    } else if (val === "1m10m") {
      return { type: "1m10m", min: 1000000, max: 10000000 };
    } else if (val === "10m100m") {
      return { type: "10m100m", min: 10000000, max: 100000000 };
    } else if (val === "100m") {
      return { type: "100m", min: 0, max: 100000000 };
    }

    return { type: "none", min: 0, max: 0 };
  };

  const search = queryKey[1];
  const region = queryKey[2];
  const subRegion = queryKey[3];
  const population = corPopuation(queryKey[4]);

  console.log(search);
  const response = await axios.get(
    search
      ? `https://restcountries.com/v3.1/name/${search}`
      : "https://restcountries.com/v3.1/all"
  );

  const arrData = () => {
    return response.data.filter((e: any) => {
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
  const paginatedData = arrData();

  return {
    data: paginatedData,
    nextPage: paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
    hasNextPage: paginatedData.length === itemsPerPage,
    nextCursor:
      paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
  };
};

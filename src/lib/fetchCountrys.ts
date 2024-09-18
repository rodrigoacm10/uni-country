import axios, { AxiosResponse } from "axios";

export const fetchCountries = async ({
  pageParam = 1,
}): Promise<{
  data: Country[];
  nextPage: number | undefined;
  nextCursor: number | undefined;
  hasNextPage: boolean;
}> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");

  const itemsPerPage = 20;
  const start = (pageParam - 1) * itemsPerPage;
  const paginatedData = response.data.slice(start, start + itemsPerPage);

  return {
    data: paginatedData,
    nextPage: paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
    hasNextPage: paginatedData.length === itemsPerPage,
    nextCursor:
      paginatedData.length === itemsPerPage ? pageParam + 1 : undefined,
  };
};

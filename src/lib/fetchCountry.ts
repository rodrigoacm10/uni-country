import { Country } from "@/types/countryType";
import axios, { AxiosResponse } from "axios";

export const fetchCountry = async (name: string) => {
  const response: AxiosResponse<Country[]> = await axios.get(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );

  console.log(response.data);

  return {
    results: response.data as Country[],
  };
};
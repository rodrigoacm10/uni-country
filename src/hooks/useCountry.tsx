import { useQuery } from "@tanstack/react-query";
import { fetchCountry } from "@/lib/fetchCountry";

export function useCountry(country: string) {
  const { data, isFetching } = useQuery({
    queryFn: () => fetchCountry(country), // Corrigido para fetchCountry
    queryKey: ["country", country],
  });

  return {
    isFetching,
    data: data, // Retorna um array vazio se 'data' estiver indefinido
    // data: data ?? [{}], // Retorna um array vazio se 'data' estiver indefinido
  };
}

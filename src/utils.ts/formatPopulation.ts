export function formatPopulation(population: number) {
  if (population >= 1_000_000_000) {
    return (population / 1_000_000_000).toFixed(1) + " bilhões";
  } else if (population >= 1_000_000) {
    return (population / 1_000_000).toFixed(1) + " milhões";
  } else if (population >= 1_000) {
    return population.toLocaleString() + " mil";
  } else {
    return population.toString();
  }
}

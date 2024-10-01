import { regionArr } from "./regionArr";
import { subRegionArr } from "./subRegionArr";

export function corRegions(type: "region" | "subregion", value: string) {
  if (type === "region") {
    return regionArr.find((e) => e.value === value)?.name;
  } else if (type === "subregion") {
    return subRegionArr.find((e) => e.value === value)?.name;
  }
}

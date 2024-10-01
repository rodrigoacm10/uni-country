export const corPopuation = (val: string) => {
  if (val === "none") {
    return { type: "none", min: 0, max: 0 };
  } else if (val === "1m") {
    return { type: "1m", min: 0, max: 1000000 };
  } else if (val === "1m10") {
    return { type: "1m10m", min: 1000000, max: 10000000 };
  } else if (val === "10m100") {
    return { type: "10m100", min: 10000000, max: 100000000 };
  } else if (val === "100m") {
    return { type: "100m", min: 0, max: 100000000 };
  } else {
    return { type: "none", min: 0, max: 0 };
  }
};

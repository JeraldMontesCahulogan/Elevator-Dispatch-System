// datasets.js
import lightTraffic from "./light_traffic.json";
import normalTraffic from "./normal_traffic.json";
import heavyTraffic from "./heavy_traffic.json";
import peakHours from "./peak_hours.json";

export const DATASETS = {
  light: {
    data: lightTraffic,
  },
  normal: {
    data: normalTraffic,
  },
  heavy: {
    data: heavyTraffic,
  },
  peak: {
    data: peakHours,
  },
};

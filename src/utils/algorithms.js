// algorithms.js
import { scanAlgorithm } from "../algorithms/scan";
import { sstfAlgorithm } from "../algorithms/sstf";
import { fcfsAlgorithm } from "../algorithms/fcfs";
import { cscanAlgorithm } from "../algorithms/cscan";
import { lookAlgorithm } from "../algorithms/look";
import { clookAlgorithm } from "../algorithms/clook";

export const ALGORITHMS = {
  SCAN: scanAlgorithm,
  SSTF: sstfAlgorithm,
  FCFS: fcfsAlgorithm,
  "C-SCAN": cscanAlgorithm,
  LOOK: lookAlgorithm,
  "C-LOOK": clookAlgorithm,
};

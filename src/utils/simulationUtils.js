// simulationUtils.js
export function runSimulation(algorithm, algorithms, dataset, startFloor) {
  const { data: requests, maxFloor } = dataset;
  const algoFunc = algorithms[algorithm];

  if (!algoFunc) throw new Error("Unknown algorithm selected!");

  const result =
    algorithm === "SCAN" || algorithm === "C-SCAN"
      ? algoFunc(requests, startFloor, maxFloor)
      : algoFunc(requests, startFloor);

  if (!result || !result.sequence) {
    throw new Error("Algorithm did not return a valid result.");
  }

  const chartData = result.sequence.map((r, i) => ({
    time: i,
    floor: r.floor,
  }));

  const totalDistance = result.totalDistance || 0;
  const averageWait = isNaN(result.averageWait) ? 0 : result.averageWait;

  return {
    chartData,
    metrics: {
      totalDistance,
      averageWait,
      throughput:
        totalDistance > 0 ? (requests.length / totalDistance).toFixed(2) : 0,
    },
  };
}

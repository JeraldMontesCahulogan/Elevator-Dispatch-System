// look.js
export function lookAlgorithm(requests, startFloor = 0) {
  const sorted = [...requests].sort((a, b) => a.floor - b.floor);
  const below = sorted.filter((r) => r.floor < startFloor).reverse();
  const above = sorted.filter((r) => r.floor >= startFloor);

  const sequence = [...above, ...below];
  let totalDistance = 0;
  let current = startFloor;
  let waitTimes = [];

  for (let req of sequence) {
    totalDistance += Math.abs(req.floor - current);
    waitTimes.push(totalDistance);
    current = req.floor;
  }

  const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

  return { sequence, totalDistance, averageWait, waitTimes };
}

// cscan.js
export function cscanAlgorithm(requests, startFloor = 0, maxFloor = 10) {
  const sorted = [...requests].sort((a, b) => a.floor - b.floor);
  const above = sorted.filter((r) => r.floor >= startFloor);
  const below = sorted.filter((r) => r.floor < startFloor);

  const sequence = [...above, ...below];
  let totalDistance = 0;
  let current = startFloor;
  let waitTimes = [];

  for (let req of above) {
    totalDistance += Math.abs(req.floor - current);
    waitTimes.push(totalDistance);
    current = req.floor;
  }

  // Jump from top back to bottom
  if (below.length > 0) {
    totalDistance += Math.abs(maxFloor - current); // move to top
    totalDistance += maxFloor; // jump back to floor 0
    current = 0;

    for (let req of below) {
      totalDistance += Math.abs(req.floor - current);
      waitTimes.push(totalDistance);
      current = req.floor;
    }
  }

  const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

  return { sequence, totalDistance, averageWait, waitTimes };
}

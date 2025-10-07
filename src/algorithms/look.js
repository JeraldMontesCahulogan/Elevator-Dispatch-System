// look.js
export function lookAlgorithm(requests, startFloor = 0) {
  const sorted = [...requests].sort((a, b) => a.floor - b.floor);
  const below = sorted.filter((r) => r.floor < startFloor).reverse();
  const above = sorted.filter((r) => r.floor >= startFloor);

  let sequence = [];
  let totalDistance = 0;
  let waitTimes = [];
  let current = startFloor;

  // Upward direction first
  for (const req of above) {
    totalDistance += Math.abs(req.floor - current);
    current = req.floor;
    sequence.push(req);
    waitTimes.push(totalDistance);
  }

  // Then reverse downwards
  for (const req of below) {
    totalDistance += Math.abs(req.floor - current);
    current = req.floor;
    sequence.push(req);
    waitTimes.push(totalDistance);
  }

  const averageWait =
    waitTimes.reduce((a, b) => a + b, 0) / (waitTimes.length || 1);

  return { sequence, totalDistance, averageWait, waitTimes };
}

// // look.js
// export function lookAlgorithm(requests, startFloor = 0) {
//   const sorted = [...requests].sort((a, b) => a.floor - b.floor);
//   const below = sorted.filter((r) => r.floor < startFloor).reverse();
//   const above = sorted.filter((r) => r.floor >= startFloor);

//   const sequence = [...above, ...below];
//   let totalDistance = 0;
//   let current = startFloor;
//   let waitTimes = [];

//   for (let req of sequence) {
//     totalDistance += Math.abs(req.floor - current);
//     waitTimes.push(totalDistance);
//     current = req.floor;
//   }

//   const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

//   return { sequence, totalDistance, averageWait, waitTimes };
// }

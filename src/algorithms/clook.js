// clook.js
export function clookAlgorithm(requests, startFloor = 0) {
  const sorted = [...requests].sort((a, b) => a.floor - b.floor);
  const above = sorted.filter((r) => r.floor >= startFloor);
  const below = sorted.filter((r) => r.floor < startFloor);

  let sequence = [];
  let totalDistance = 0;
  let waitTimes = [];
  let current = startFloor;

  // Serve upward requests first
  for (const req of above) {
    totalDistance += Math.abs(req.floor - current);
    current = req.floor;
    sequence.push(req);
    waitTimes.push(totalDistance);
  }

  // Jump directly to lowest request
  if (below.length > 0) {
    const highest = current;
    const lowest = below[0].floor;
    totalDistance += Math.abs(highest - lowest);
    current = lowest;

    for (const req of below) {
      totalDistance += Math.abs(req.floor - current);
      current = req.floor;
      sequence.push(req);
      waitTimes.push(totalDistance);
    }
  }

  const averageWait =
    waitTimes.reduce((a, b) => a + b, 0) / (waitTimes.length || 1);

  return { sequence, totalDistance, averageWait, waitTimes };
}

// // clook.js
// export function clookAlgorithm(requests, startFloor = 0) {
//   const sorted = [...requests].sort((a, b) => a.floor - b.floor);
//   const above = sorted.filter((r) => r.floor >= startFloor);
//   const below = sorted.filter((r) => r.floor < startFloor);

//   const sequence = [...above, ...below];
//   let totalDistance = 0;
//   let current = startFloor;
//   let waitTimes = [];

//   for (let req of above) {
//     totalDistance += Math.abs(req.floor - current);
//     waitTimes.push(totalDistance);
//     current = req.floor;
//   }

//   // Jump directly to lowest request (not floor 0)
//   if (below.length > 0) {
//     totalDistance += Math.abs(current - below[below.length - 1].floor);
//     for (let req of below) {
//       totalDistance += Math.abs(req.floor - current);
//       waitTimes.push(totalDistance);
//       current = req.floor;
//     }
//   }

//   const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

//   return { sequence, totalDistance, averageWait, waitTimes };
// }

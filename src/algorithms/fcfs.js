// fcfs.js
export function fcfsAlgorithm(requests, startFloor = 0) {
  let current = startFloor;
  let totalDistance = 0;
  let sequence = [];
  let waitTimes = [];

  for (const req of requests) {
    const distance = Math.abs(req.floor - current);
    totalDistance += distance;
    current = req.floor;
    sequence.push(req);
    waitTimes.push(totalDistance);
  }

  const averageWait =
    waitTimes.reduce((a, b) => a + b, 0) / (waitTimes.length || 1);

  return { sequence, totalDistance, averageWait, waitTimes };
}

// // fcfs.js
// export function fcfsAlgorithm(requests, startFloor = 0) {
//   let current = startFloor;
//   let totalDistance = 0;
//   let sequence = [];
//   let waitTimes = [];

//   for (let req of requests) {
//     totalDistance += Math.abs(req.floor - current);
//     sequence.push(req);
//     waitTimes.push(totalDistance);
//     current = req.floor;
//   }

//   const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

//   return { sequence, totalDistance, averageWait, waitTimes };
// }

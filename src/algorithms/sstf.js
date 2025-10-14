// sstf.js
export function sstfAlgorithm(requests, startFloor = 0) {
  let pending = [...requests];
  let current = startFloor;
  let totalDistance = 0;
  let sequence = [];
  let waitTimes = [];

  while (pending.length > 0) {
    // Find nearest request
    let nearestIndex = 0;
    let minDistance = Math.abs(pending[0].floor - current);

    for (let i = 1; i < pending.length; i++) {
      const distance = Math.abs(pending[i].floor - current);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = i;
      }
    }

    const next = pending.splice(nearestIndex, 1)[0];
    totalDistance += Math.abs(next.floor - current);
    current = next.floor;
    sequence.push(next);
    waitTimes.push(totalDistance);
  }

  const averageWait =
    waitTimes.reduce((a, b) => a + b, 0) / (waitTimes.length || 1);

  return { sequence, totalDistance, averageWait, waitTimes };
}

// // sstf.js
// export function sstfAlgorithm(requests, startFloor = 0) {
//   let pending = [...requests];
//   let current = startFloor;
//   let totalDistance = 0;
//   let sequence = [];
//   let waitTimes = [];

//   while (pending.length > 0) {
//     // Find nearest floor
//     let nearestIndex = 0;
//     let minDistance = Math.abs(pending[0].floor - current);

//     for (let i = 1; i < pending.length; i++) {
//       const distance = Math.abs(pending[i].floor - current);
//       if (distance < minDistance) {
//         minDistance = distance;
//         nearestIndex = i;
//       }
//     }

//     const next = pending.splice(nearestIndex, 1)[0];
//     totalDistance += Math.abs(next.floor - current);
//     waitTimes.push(totalDistance);
//     sequence.push(next);
//     current = next.floor;
//   }

//   const averageWait = waitTimes.reduce((a, b) => a + b, 0) / waitTimes.length;

//   return { sequence, totalDistance, averageWait, waitTimes };
// }

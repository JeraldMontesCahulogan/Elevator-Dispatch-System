// metrics.js
export function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function percentile(arr, p) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = Math.floor((p / 100) * sorted.length);
  return sorted[index];
}

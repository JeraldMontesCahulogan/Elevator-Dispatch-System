export default function MetricsDisplay({ metrics }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <h3 className="font-semibold text-lg mb-2">Metrics</h3>
      <ul className="space-y-1">
        <li>Total Distance: {metrics.totalDistance}</li>
        <li>Average Wait Time: {metrics.averageWait.toFixed(2)}</li>
        <li>Throughput: {metrics.throughput}</li>
      </ul>
    </div>
  );
}

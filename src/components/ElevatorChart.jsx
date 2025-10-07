import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function ElevatorChart({ data }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Elevator Movement</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          label={{ value: "Time", position: "insideBottom" }}
        />
        <YAxis label={{ value: "Floor", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="floor"
          stroke="#3b82f6"
          strokeWidth={2}
          dot
        />
      </LineChart>
    </div>
  );
}

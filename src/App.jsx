import React, { useState } from "react";

// Import datasets
import normalTraffic from "./data/normal_traffic.json";
import midBusyTraffic from "./data/mid_busy_traffic.json";
import superBusyTraffic from "./data/super_busy_traffic.json";

// Components
import ControlPanel from "./components/ControlPanel";
import ElevatorChart from "./components/ElevatorChart";
import MetricsDisplay from "./components/MetricsDisplay";

// Algorithms
import { scanAlgorithm } from "./algorithms/scan";
import { sstfAlgorithm } from "./algorithms/sstf";
import { fcfsAlgorithm } from "./algorithms/fcfs";
import { cscanAlgorithm } from "./algorithms/cscan";
import { lookAlgorithm } from "./algorithms/look";
import { clookAlgorithm } from "./algorithms/clook";

export default function App() {
  const [selectedDataset, setSelectedDataset] = useState("normal"); // default dataset
  const [chartData, setChartData] = useState([]);
  const [metrics, setMetrics] = useState({});

  // Dynamically load selected dataset
  const getRequests = () => {
    switch (selectedDataset) {
      case "normal":
        return normalTraffic;
      case "mid":
        return midBusyTraffic;
      case "super":
        return superBusyTraffic;
      default:
        return normalTraffic;
    }
  };

  const handleRun = (algorithm) => {
    const requests = getRequests();
    let result;

    switch (algorithm) {
      case "SCAN":
        result = scanAlgorithm(requests, 0, 10);
        break;
      case "SSTF":
        result = sstfAlgorithm(requests, 0);
        break;
      case "FCFS":
        result = fcfsAlgorithm(requests, 0);
        break;
      case "C-SCAN":
        result = cscanAlgorithm(requests, 0, 10);
        break;
      case "LOOK":
        result = lookAlgorithm(requests, 0);
        break;
      case "C-LOOK":
        result = clookAlgorithm(requests, 0);
        break;
      default:
        alert("Unknown algorithm selected!");
        return;
    }

    if (!result || !result.sequence) {
      alert("Error: Algorithm did not return a valid result.");
      return;
    }

    const chart = result.sequence.map((r, i) => ({
      time: i,
      floor: r.floor,
    }));

    setChartData(chart);
    setMetrics({
      totalDistance: result.totalDistance || 0,
      averageWait: isNaN(result.averageWait) ? 0 : result.averageWait,
      throughput:
        result.totalDistance > 0
          ? (requests.length / result.totalDistance).toFixed(2)
          : 0,
    });
  };

  const requests = getRequests(); // get dataset to display requests

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        🚪 Elevator Dispatch Simulation
      </h1>

      {/* Dataset selector */}
      <div className="mb-4 flex items-center gap-3">
        <label className="font-semibold text-lg">Select Traffic:</label>
        <select
          value={selectedDataset}
          onChange={(e) => setSelectedDataset(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="normal">Normal Traffic</option>
          <option value="mid">Mid-Busy Traffic</option>
          <option value="super">Super Busy Traffic</option>
        </select>
      </div>

      {/* Display list of requests */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">🧍 Passenger Requests</h2>
        <ul className="list-disc list-inside">
          {requests.map((req, index) => (
            <li key={req.id}>
              Person {index + 1} clicked floor <b>{req.floor}</b> at time{" "}
              <b>{req.timestamp}s</b>
            </li>
          ))}
        </ul>
      </div>

      {/* Control panel for algorithm selection */}
      <ControlPanel onRun={handleRun} />

      {/* Simulation results */}
      {chartData.length > 0 && (
        <>
          <ElevatorChart data={chartData} />
          <MetricsDisplay metrics={metrics} />
        </>
      )}
    </div>
  );
}

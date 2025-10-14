import React, { useState } from "react";
import { DATASETS } from "./data/datasets";
import { ALGORITHMS } from "./utils/algorithms";
import { runSimulation } from "./utils/simulationUtils";

import ControlPanel from "./components/ControlPanel";
import ElevatorChart from "./components/ElevatorChart";
import MetricsDisplay from "./components/MetricsDisplay";
import FloorRequestList from "./components/FloorRequestList";

import { ArrowUp } from "lucide-react";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function App() {
  const [selectedDataset, setSelectedDataset] = useState("normal");
  const [chartData, setChartData] = useState([]);
  const [metrics, setMetrics] = useState({});

  const handleRun = (algorithm, startFloor = 0) => {
    try {
      const dataset = DATASETS[selectedDataset];
      const { chartData, metrics } = runSimulation(
        algorithm,
        ALGORITHMS,
        dataset,
        startFloor
      );
      setChartData(chartData);
      setMetrics(metrics);
    } catch (error) {
      alert(error.message);
    }
  };

  const { data: requests } = DATASETS[selectedDataset];

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ArrowUp className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-balance">
              Elevator Dispatch Simulation
            </h1>
            <p className="text-muted-foreground">
              Optimize elevator routing with advanced algorithms
            </p>
          </div>

          <div className="ml-auto">
            <ThemeToggleButton />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column - Traffic & Requests */}
          <div className="space-y-6">
            <FloorRequestList
              requests={requests}
              selectedDataset={selectedDataset}
              setSelectedDataset={setSelectedDataset}
            />
          </div>

          {/* Right Column - Algorithm & Controls */}
          <div className="space-y-6">
            <ControlPanel onRun={handleRun} selectedDataset={selectedDataset} />

            {chartData.length > 0 && (
              <>
                <ElevatorChart data={chartData} />
              </>
            )}
            <MetricsDisplay metrics={metrics} chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}

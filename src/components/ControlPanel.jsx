import React from "react";

export default function ControlPanel({ onRun, selectedDataset }) {
  const [algorithm, setAlgorithm] = React.useState("FCFS");
  const [startFloor, setStartFloor] = React.useState(0);

  // ✅ Adjust the max input dynamically based on selected dataset
  const maxFloor =
    selectedDataset === "super"
      ? 12
      : selectedDataset === "mid" || selectedDataset === "normal"
      ? 9
      : 9;

  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100 rounded-xl">
      <label className="font-semibold">Choose Algorithm:</label>
      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option>FCFS</option>
        <option>SSTF</option>
        <option>SCAN</option>
        <option>C-SCAN</option>
        <option>LOOK</option>
        <option>C-LOOK</option>
      </select>

      <label className="font-semibold">Starting Floor:</label>
      <input
        type="number"
        value={startFloor}
        onChange={(e) => setStartFloor(Number(e.target.value))}
        className="p-2 border rounded-md"
        min="0"
        max={maxFloor} // ✅ dynamic maximum
      />
      <small className="text-gray-600">(Building floors: 0 - {maxFloor})</small>

      <button
        className="bg-blue-600 text-white p-2 rounded-lg mt-2 hover:bg-blue-700"
        onClick={() => onRun(algorithm, startFloor)}
      >
        Run Simulation
      </button>
    </div>
  );
}

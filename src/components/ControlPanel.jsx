import React from "react";

export default function ControlPanel({ onRun }) {
  const [algorithm, setAlgorithm] = React.useState("SCAN");

  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-xl">
      <label>Choose Algorithm:</label>
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
      <button
        className="bg-blue-600 text-white p-2 rounded-lg mt-2 hover:bg-blue-700"
        onClick={() => onRun(algorithm)}
      >
        Run Simulation
      </button>
    </div>
  );
}

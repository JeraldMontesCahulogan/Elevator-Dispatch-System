import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { toast } from "sonner";

export default function ControlPanel({ onRun }) {
  const [algorithm, setAlgorithm] = React.useState("FCFS");
  const [startingFloor, setStartingFloor] = React.useState(1);
  const [isError, setIsError] = React.useState(false);

  const handleRunSimulation = () => {
    const floor = Number(startingFloor);

    if (floor < 1 || floor > 12) {
      toast.error("Invalid starting floor. Must be between 1 and 12.");
      setIsError(true);
      return;
    }

    setIsError(false);
    onRun(algorithm, floor);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setStartingFloor(value);
    if (value >= 1 && value <= 12) setIsError(false);
    else setIsError(true);
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Algorithm Configuration</CardTitle>
        <CardDescription>
          Choose the dispatch algorithm and starting position
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="algorithm" className="text-sm font-medium">
            Dispatch Algorithm
          </Label>
          <Select value={algorithm} onValueChange={setAlgorithm}>
            <SelectTrigger id="algorithm" className="bg-secondary/50">
              <SelectValue placeholder="Select algorithm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FCFS">
                FCFS (First Come First Served)
              </SelectItem>
              <SelectItem value="SSTF">
                SSTF (Shortest Seek Time First)
              </SelectItem>
              <SelectItem value="SCAN">SCAN (Elevator Algorithm)</SelectItem>
              <SelectItem value="C-SCAN">C-SCAN</SelectItem>
              <SelectItem value="LOOK">LOOK</SelectItem>
              <SelectItem value="C-LOOK">C-LOOK</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            FCFS processes requests in the order they arrive
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="startingFloor" className="text-sm font-medium">
            Starting Floor
          </Label>
          <Input
            id="startingFloor"
            type="number"
            min="1"
            max="12"
            value={startingFloor}
            onChange={handleChange}
            className={`bg-secondary/50 font-mono transition-colors ${
              isError
                ? "border-red-500 ring-red-500 focus-visible:ring-red-500"
                : ""
            }`}
          />
          <p className="text-xs text-muted-foreground">
            Building floors: 1 - 12
          </p>
        </div>

        <Button
          onClick={handleRunSimulation}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          size="lg"
        >
          <Play className="mr-2 h-5 w-5" />
          Run Simulation
        </Button>
      </CardContent>
    </Card>
  );
}

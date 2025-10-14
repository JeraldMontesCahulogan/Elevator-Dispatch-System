import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Play } from "lucide-react";

export default function MetricsDisplay({ metrics, chartData }) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Simulation Results</CardTitle>
        <CardDescription>
          View the outcome of the dispatch algorithm
        </CardDescription>
      </CardHeader>
      <CardContent>
        {chartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Play className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No simulation has been run yet
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Click "Run Simulation" to see results
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
              <div className="mb-2 text-sm font-medium text-accent">
                Simulation Complete
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Total Distance:</span>
                  <span className="font-mono font-semibold text-foreground">
                    {metrics.totalDistance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Average Wait Time:</span>
                  <span className="font-mono font-semibold text-foreground">
                    {metrics.averageWait.toFixed(2)}s
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Throughput:</span>
                  <span className="font-mono font-semibold text-foreground">
                    {metrics.throughput}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

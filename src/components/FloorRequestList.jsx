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
import { Badge } from "@/components/ui/badge";
import { Settings, Users, MapPin, Clock } from "lucide-react";

export default function FloorRequestList({
  requests,
  selectedDataset,
  setSelectedDataset,
}) {
  return (
    <>
      {/* Traffic Configuration Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <CardTitle>Traffic Configuration</CardTitle>
          </div>
          <CardDescription>
            Select the traffic pattern for simulation
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="traffic" className="text-sm font-medium">
              Traffic Pattern
            </Label>
            <Select value={selectedDataset} onValueChange={setSelectedDataset}>
              <SelectTrigger id="traffic" className="bg-secondary/50">
                <SelectValue placeholder="Select traffic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Traffic</SelectItem>
                <SelectItem value="normal">Normal Traffic</SelectItem>
                <SelectItem value="heavy">Heavy Traffic</SelectItem>
                <SelectItem value="peak">Peak Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Passenger Requests Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            <CardTitle>Passenger Requests</CardTitle>
          </div>
          <CardDescription>Current queue of elevator requests</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {requests.map((request, index) => (
              <div
                key={request.id || index}
                className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/30 p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    P{index + 1}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Requested floor
                      </span>
                    </div>
                    <div className="text-lg font-semibold">
                      Floor {request.floor}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="secondary" className="font-mono">
                    {request.timestamp}s
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

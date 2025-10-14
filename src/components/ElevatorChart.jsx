import { TrendingUp, ArrowBigRightDash } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Dot } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function ElevatorChart({ data }) {
  const chartConfig = {
    floor: { label: "Floor", color: "var(--chart-3)" },
    time: { label: "Time", color: "var(--chart-1)" },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Elevator Movement</CardTitle>
        <CardDescription>Time vs Floor transitions</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={data}
            margin={{ top: 24, left: 24, right: 24, bottom: 24 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="floor"
                  hideLabel
                />
              }
            />
            <Line
              type="monotone"
              dataKey="floor"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={({ payload, ...props }) => (
                <Dot
                  key={payload.time}
                  r={4}
                  cx={props.cx}
                  cy={props.cy}
                  fill="var(--chart-1)"
                  stroke="var(--chart-1)"
                />
              )}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium uppercase mb-3">
          Simulation complete <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex gap-2 leading-none font-medium">
          Floor Sequence <ArrowBigRightDash className="h-4 w-4" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {data.map(({ floor }, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 ${index === 0 ? "ml-5" : ""}`}
            >
              {index > 0 && (
                <ArrowBigRightDash className="h-4 w-4 text-primary" />
              )}
              <div className="bg-primary/10 rounded-full p-2 min-w-17 text-center">
                <span className="font-medium">Floor {floor}</span>
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

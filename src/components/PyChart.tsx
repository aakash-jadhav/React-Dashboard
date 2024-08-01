"use client";

import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { goal: "Achieved", target: 70, fill: "#7195fd" },
  { goal: "Remaining", target: 30, fill: "#2a3267" },
];

const chartConfig = {
  target: {
    label: "Goals",
  },
  chrome: {
    label: "Achieved",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Remaining",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PyChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[120px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="target"
          nameKey="goal"
          innerRadius={30}
          strokeWidth={4}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-xl font-bold"
                    >
                      70%
                      {/* {totalVisitors.toLocaleString()} */}
                    </tspan>
                    {/* <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Goal Completed
                    </tspan> */}
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

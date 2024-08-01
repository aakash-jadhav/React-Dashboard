"use client";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartContainer } from "@/components/ui/chart";

export default function Activity() {
  const chartData = [
    { date: 1, revenue: 4000 },
    { date: 2, revenue: 6000 },
    { date: 3, revenue: 4000 },
    { date: 4, revenue: 3000 },
    { date: 5, revenue: 6000 },
    { date: 6, revenue: 6000 },
    { date: 7, revenue: 5500 },
    { date: 8, revenue: 6000 },
    { date: 9, revenue: 4500 },
    { date: 10, revenue: 2000 },
    { date: 11, revenue: 7000 },
    { date: 12, revenue: 8000 },
    { date: 13, revenue: 7500 },
    { date: 14, revenue: 10800 },
    { date: 15, revenue: 8500 },
    { date: 16, revenue: 10000 },
    { date: 17, revenue: 12700 },
    { date: 18, revenue: 15200 },
    { date: 19, revenue: 11500 },
    { date: 20, revenue: 10000 },
    { date: 21, revenue: 9200 },
    { date: 22, revenue: 6500 },
    { date: 23, revenue: 4800 },
    { date: 24, revenue: 3000 },
  ];
  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div className="min-h-[200px] bg-[#202028] rounded-lg mt-5 p-4">
      <h1 className="text-xl font-bold">Acitivity</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px]  w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="date"
            tickLine={true}
            tickMargin={10}
            axisLine={true}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={50} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

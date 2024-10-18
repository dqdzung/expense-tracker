import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import data from "@/expenses.json";
import { formatCurrency } from "@/lib/utils";
import { ExpenseItem } from "@/components/pages/Expense/types";

const chartConfig = {
	supplies: {
		label: "Office Supplies",
		color: "hsl(var(--chart-1))",
	},
	entertainment: {
		label: "Entertainment",
		color: "hsl(var(--chart-2))",
	},
	meals: {
		label: "Meals",
		color: "hsl(var(--chart-3))",
	},
	training: {
		label: "Training",
		color: "hsl(var(--chart-4))",
	},
	travel: {
		label: "Travel",
		color: "hsl(var(--chart-5))",
	},
} satisfies ChartConfig;

export function CategoryChart() {
	const totalExpenses = React.useMemo(
		() =>
			data.reduce((acc, expense) => {
				return acc + expense.amount;
			}, 0),
		[]
	);

	const chartData = React.useMemo(
		() =>
			(data as ExpenseItem[]).reduce(
				(acc, curr) => {
					const cat = curr.category
						.split(" ")
						.at(-1)
						?.toLocaleLowerCase() as string;
					const index = acc.findIndex((item) => item.category === cat);
					if (index === -1) {
						acc.push({
							category: cat,
							amount: curr.amount,
							fill: `var(--color-${curr.category
								.split(" ")
								?.at(-1)
								?.toLocaleLowerCase()})`,
						});
					} else {
						acc[index].amount += curr.amount;
					}
					return acc.map((item) => ({
						...item,
						amount: parseFloat(item.amount.toFixed(2)),
					}));
				},
				[] as {
					category: string;
					amount: number;
					fill: string;
				}[]
			),
		[]
	);

	return (
		<ChartContainer
			config={chartConfig}
			className="mx-auto aspect-square max-h-[350px]"
		>
			<PieChart>
				<Pie
					data={chartData}
					dataKey="amount"
					nameKey="category"
					innerRadius={60}
					strokeWidth={5}
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
											className="fill-foreground dark:fill-white text-lg font-bold"
										>
											{formatCurrency(totalExpenses)}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="fill-muted-foreground dark:fill-white"
										>
											spent
										</tspan>
									</text>
								);
							}
						}}
					/>
				</Pie>
				<ChartLegend
					content={<ChartLegendContent nameKey="category" />}
					className="flex-wrap gap-2"
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
					wrapperStyle={{ width: "200px" }}
				/>
			</PieChart>
		</ChartContainer>
	);
}

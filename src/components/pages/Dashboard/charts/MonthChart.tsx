import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, LabelList, XAxis } from "recharts";
import data from "@/expenses.json";
import { useMemo } from "react";
import { ExpenseItem } from "@/components/pages/Expense/types";

const months = [
	{ month: "January", amount: 0 },
	{ month: "February", amount: 0 },
	{ month: "March", amount: 0 },
	{ month: "April", amount: 0 },
	{ month: "May", amount: 0 },
	{ month: "June", amount: 0 },
	{ month: "July", amount: 0 },
	{ month: "August", amount: 0 },
	{ month: "September", amount: 0 },
	{ month: "October", amount: 0 },
	{ month: "November", amount: 0 },
	{ month: "December", amount: 0 },
];

const chartConfig = {
	amount: {
		label: "$",
		color: "#22c55e",
	},
} satisfies ChartConfig;

export function MonthChart() {
	const chartData = useMemo(() => {
		const res = months.map((item) => ({ ...item }));
		(data as ExpenseItem[]).forEach((item: ExpenseItem) => {
			const date = new Date(item.date);
			const month = date.getMonth();
			res[month].amount += item.amount;
		});
		return res.map((item) => ({
			...item,
			amount: parseFloat(item.amount.toFixed(0)),
		}));
	}, []);

	return (
		<ChartContainer
			config={chartConfig}
			className="min-h-[200px] max-h-[350px] w-full"
		>
			<BarChart
				accessibilityLayer
				data={chartData}
				margin={{
					top: 20,
				}}
			>
				<XAxis
					className="text-sm"
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<Bar dataKey="amount" fill="var(--color-amount)" radius={4}>
					<LabelList
						position="top"
						offset={10}
						fontSize={12}
						formatter={(value: number) => `$${value}`}
						className="fill-foreground dark:fill-white"
					/>
				</Bar>
			</BarChart>
		</ChartContainer>
	);
}

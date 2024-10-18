import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import data from "@/expenses.json";
import { useMemo } from "react";
import { formatCurrency } from "@/lib/utils";
import { CircleCheckBig, DollarSign, Sigma } from "lucide-react";
import { EnumStatus } from "@/components/pages/Expense/types";
import InfoCard from "./InfoCard";
import { MonthChart } from "./charts/MonthChart";
import { CategoryChart } from "./charts/CategoryChart";

const PageDashboard = () => {
	const totalExpenses = useMemo(
		() =>
			data.reduce((acc, expense) => {
				return acc + expense.amount;
			}, 0),
		[]
	);

	const needApproval = useMemo(
		() =>
			data.filter((expense) => expense.status === EnumStatus.PENDING).length,
		[]
	);

	return (
		<div className="w-full grid grid-cols-1 gap-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<InfoCard label="No. of entries" value={data.length} icon={<Sigma />} />
				<InfoCard
					label="Total spending"
					value={formatCurrency(totalExpenses)}
					icon={<DollarSign />}
				/>
				<InfoCard
					label="Needs approval"
					value={needApproval}
					icon={<CircleCheckBig />}
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card>
					<CardHeader className="p-4">
						<CardTitle>Spending by month</CardTitle>
					</CardHeader>
					<CardContent>
						<MonthChart />
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="p-4">
						<CardTitle>Spending by category</CardTitle>
					</CardHeader>
					<CardContent>
						<CategoryChart />
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default PageDashboard;

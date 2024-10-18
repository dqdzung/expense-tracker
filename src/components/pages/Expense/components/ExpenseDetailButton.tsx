import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { ExpenseItem } from "../types";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { formatCurrency } from "@/lib/utils";

const ExpenseDetailButton = ({ data }: { data: ExpenseItem }) => {
	const handleAction = (action: string) => {
		// API call
		console.log(action);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon" className="rounded-full">
					<Eye className="h-4 w-4" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Expense detail</DialogTitle>
					<DialogDescription aria-describedby="" />
				</DialogHeader>

				<div className="flex-col gap-5">
					<Item label="Employee" value={data.employeeName} />
					<Item label="Category" value={data.category} />
					<Item label="Date" value={data.date} />
					<Item label="Description" value={data.description} />

					<div className="text-3xl text-green-500 text-right my-3">
						{formatCurrency(data.amount)}
					</div>
				</div>
				<DialogFooter>
					<Button
						className="w-full"
						variant="destructive"
						onClick={() => handleAction("reject")}
					>
						Reject
					</Button>
					<Button
						className="w-full"
						variant="success"
						onClick={() => handleAction("approve")}
					>
						Approve
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ExpenseDetailButton;

const Item = ({ label, value }: { label: string; value: string }) => {
	return (
		<div className="flex justify-between dark:text-zinc-300">
			<div className="font-semibold">{label}</div>
			<div>{value}</div>
		</div>
	);
};

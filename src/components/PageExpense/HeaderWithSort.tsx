import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { Column } from "@tanstack/react-table";
import { ExpenseItem } from "./types";

const HeaderWithSort = ({
	column,
	label,
}: {
	column: Column<ExpenseItem, unknown>;
	label: string;
}) => {
	return (
		<Button
			className="font-bold"
			variant="ghost"
			onClick={() => {
				column.toggleSorting(column.getIsSorted() === "asc", true);
			}}
		>
			{label}
			{column.getIsSorted() === "asc" ? (
				<ArrowUp className="h-4 w-4" />
			) : (
				<ArrowDown className="h-4 w-4" />
			)}
		</Button>
	);
};

export default HeaderWithSort;

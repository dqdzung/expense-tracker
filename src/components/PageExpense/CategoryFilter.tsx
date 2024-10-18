import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { ExpenseItem } from "./types";
import { useMemo, useState } from "react";

const CategoryFilter = ({ table }: { table: Table<ExpenseItem> }) => {
	const [isChecked, setIsChecked] = useState<string[]>([]);

	const category = useMemo(() => {
		const arr = table
			.getCoreRowModel()
			.rows.map((row) => row.getValue("category"));
		return [...new Set(arr)];
	}, [table]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="ml-auto">
					Filter by Category <ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{category.map((cat: string) => {
					return (
						<DropdownMenuCheckboxItem
							key={cat}
							className="capitalize"
							// checked={cat}
							// onCheckedChange={(value) => column.toggleVisibility(!!value)}
						>
							{cat}
						</DropdownMenuCheckboxItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CategoryFilter;

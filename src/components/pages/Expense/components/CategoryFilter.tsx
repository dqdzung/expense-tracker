import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { ExpenseItem } from "../types";
import { Button } from "@/components/ui/button";

const CategoryFilter = ({ table }: { table: Table<ExpenseItem> }) => {
	const [isChecked, setIsChecked] = useState<string>("all");

	const category = useMemo(() => {
		const arr = table
			.getCoreRowModel()
			.rows.map((row) => row.getValue("category"));
		return [...new Set(arr)] as string[];
	}, [table]);

	useEffect(() => {
		table
			.getColumn("category")
			?.setFilterValue(isChecked === "all" ? "" : isChecked);
	}, [isChecked, table]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{isChecked === "all" ? "All Category" : `Filter by ${isChecked}`}
					<ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuCheckboxItem
					className="capitalize"
					checked={isChecked === "all"}
					onCheckedChange={(value) => value && setIsChecked("all")}
				>
					All
				</DropdownMenuCheckboxItem>
				{category.map((cat: string) => {
					return (
						<DropdownMenuCheckboxItem
							key={cat}
							className="capitalize"
							checked={isChecked === cat}
							onCheckedChange={(value) => value && setIsChecked(cat)}
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


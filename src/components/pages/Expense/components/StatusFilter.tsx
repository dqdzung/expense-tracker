import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { EnumStatus, ExpenseItem } from "../types";
import { Button } from "@/components/ui/button";

const StatusFilter = ({ table }: { table: Table<ExpenseItem> }) => {
	const [isChecked, setIsChecked] = useState<string>("all");
	const statuses = Object.keys(EnumStatus);

	useEffect(() => {
		table
			.getColumn("status")
			?.setFilterValue(isChecked === "all" ? "" : isChecked);
	}, [isChecked, table]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{isChecked === "all" ? "All Status" : `Filter by ${isChecked}`}
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
				{statuses.map((cat: string) => {
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

export default StatusFilter;

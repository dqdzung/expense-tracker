import {
	Table as TableComponent,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";
import { ExpenseItem } from "../types";
import { columns } from "../useExpenseTable";

const ExpenseTable = ({ table }: { table: Table<ExpenseItem> }) => {
	const rows = table.getRowModel().rows;

	return (
		<TableComponent className="bg-zinc-50 dark:bg-transparent">
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<TableRow key={headerGroup.id}>
						{headerGroup.headers.map((header) => {
							return (
								<TableHead key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</TableHead>
							);
						})}
					</TableRow>
				))}
			</TableHeader>
			<TableBody>
				{rows?.length ? (
					rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className="h-24 text-center">
							No results.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</TableComponent>
	);
};

export default ExpenseTable;


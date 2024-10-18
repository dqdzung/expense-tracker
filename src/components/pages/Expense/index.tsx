import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useExpenseTable } from "./useExpenseTable";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseTable from "./components/ExpenseTable";
import ColumnVisibility from "./components/ColumnVisibility";
import StatusFilter from "./components/StatusFilter";

const PageExpense = () => {
	const table = useExpenseTable();

	return (
		<div className="w-full text-zinc-900 dark:text-zinc-300">
			<span className="text-xl font-bold">Expenses</span>
			{/* Filter */}
			{/* <div className="flex items-center justify-between py-4 gap-2"> */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
				<Input
					placeholder="Filter employee..."
					value={
						(table.getColumn("employeeName")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("employeeName")?.setFilterValue(event.target.value)
					}
					className="flex-1 max-w-xs bg-zinc-50 dark:bg-transparent"
				/>
				<div className="flex justify-start md:justify-end gap-2">
					<CategoryFilter table={table} />
					<StatusFilter table={table} />
					<ColumnVisibility table={table} />
				</div>
			</div>

			{/* Table */}
			<div className="rounded-md border max-h-900 overflow-auto">
				<ExpenseTable table={table} />
			</div>
			<div className="flex items-center justify-between space-x-2 py-4">
				<span>{table.getFilteredRowModel().rows.length} record(s)</span>
				<div className="space-x-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PageExpense;



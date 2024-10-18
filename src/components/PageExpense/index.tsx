import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ExpenseTable from "./ExpenseTable";
import { useExpenseTable } from "./useExpenseTable";
import ColumnVisibility from "./ColumnVisibility";
import CategoryFilter from "./CategoryFilter";

const PageExpense = () => {
	const table = useExpenseTable();

	return (
		<div className="w-full text-gray-900 dark:text-gray-200">
			<span className="text-xl font-bold">Expenses</span>
			{/* Filter */}
			<div className="flex items-center justify-between py-4 gap-2">
				<Input
					placeholder="Filter employee..."
					value={
						(table.getColumn("employeeName")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("employeeName")?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<div className="flex gap-2">
					<CategoryFilter table={table} />
					<ColumnVisibility table={table} />
				</div>
			</div>

			{/* Table */}
			<div className="rounded-md border">
				<ExpenseTable table={table} />
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
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

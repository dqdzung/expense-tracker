import {
	SortingState,
	ColumnFiltersState,
	VisibilityState,
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	getFilteredRowModel,
	ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";
import { Eye } from "lucide-react";
import { ExpenseItem } from "./types";
import HeaderWithSort from "./HeaderWithSort";
import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

// Replace import with api call
import data from "../../expenses.json";

export const useExpenseTable = () => {
	const [sorting, setSorting] = useState<SortingState>([
		{
			desc: false,
			id: "employeeName",
		},
	]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data: data as ExpenseItem[],
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		enableSortingRemoval: true,
		enableMultiSort: true,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});
	return table;
};

export const columns: ColumnDef<ExpenseItem>[] = [
	{
		accessorKey: "category",
		header: () => <span className="font-bold">Category</span>,
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("category")}</div>
		),
	},
	{
		accessorKey: "employeeName",
		header: ({ column }) => <HeaderWithSort column={column} label="Employee" />,
		cell: ({ row }) => <div>{row.getValue("employeeName")}</div>,
	},
	{
		accessorKey: "amount",
		header: ({ column }) => <HeaderWithSort column={column} label="Amount" />,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount);

			return <div className=" text-green-500">{formatted}</div>;
		},
	},
	{
		accessorKey: "detail",
		header: () => <span className="font-bold">Detail</span>,
		cell: ({ row }) => (
			<div className="flex-col items-center space-y-1">
				<div className="font-semibold text-xs italic">{row.original.date}</div>
				<div>{row.original.description}</div>
			</div>
		),
	},
	{
		accessorKey: "status",
		header: () => <span className="font-bold">Status</span>,
		cell: ({ row }) => <StatusBadge value={row.getValue("status")} />,
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const expense = row.original;

			return (
				<Link to={`/expenses/${expense.id}`}>
					<Eye className="h-4 w-4" />
				</Link>
			);
		},
	},
];

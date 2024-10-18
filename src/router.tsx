import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PageSettings from "./components/PageSettings";
import PageDashboard from "./components/PageDashboard";
import PageExpense from "./components/PageExpense";
import PageExpenseDetail from "./components/PageExpenseDetail";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <PageDashboard />,
			},
			{
				path: "/expenses",
				element: <PageExpense />,
			},
			{
				path: "/expenses/:expenseId",
				element: <PageExpenseDetail />,
			},
			{
				path: "/settings",
				element: <PageSettings />,
			},
		],
	},
]);

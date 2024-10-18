import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout";
import PageDashboard from "./components/pages/Dashboard";
import PageExpense from "./components/pages/Expense";

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
		],
	},
]);


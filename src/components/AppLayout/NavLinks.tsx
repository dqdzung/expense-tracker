import { CreditCard, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const NavLinks = () => (
	<ul className="space-y-4">
		<li>
			<Link
				to="/"
				className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
			>
				<Home className="h-5 w-5" />
				<span>Dashboard</span>
			</Link>
		</li>
		<li>
			<Link
				to="/expenses"
				className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
			>
				<CreditCard className="h-5 w-5" />
				<span>Expenses</span>
			</Link>
		</li>
		<li>
			<Link
				to="/settings"
				className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
			>
				<Settings className="h-5 w-5" />
				<span>Settings</span>
			</Link>
		</li>
	</ul>
);

export default NavLinks;

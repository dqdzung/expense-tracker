import { CreditCard, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NavLinks = () => (
	<ul className="space-y-4">
		{links.map((link) => (
			<li key={link.href}>
				<Link
					to={link.href}
					className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
				>
					{link.icon}
					<span>{link.label}</span>
				</Link>
			</li>
		))}
	</ul>
);

export default NavLinks;

const iconClassName = "h-5 w-5";

const links = [
	{
		label: "Dashboard",
		href: "/",
		icon: <Home className={iconClassName} />,
	},
	{
		label: "Expenses",
		href: "/expenses",
		icon: <CreditCard className={iconClassName} />,
	},
];


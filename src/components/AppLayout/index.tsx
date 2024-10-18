import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavLinks from "./NavLinks";

export default function AppLayout() {
	const [darkMode, setDarkMode] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode.toString());
	}, [darkMode]);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode.toString());
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className="flex h-screen flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
			<header className="flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-4 shadow">
				<div className="flex items-center">
					<button
						onClick={toggleMobileMenu}
						className="mr-4 rounded-md lg:hidden"
						aria-label="Toggle mobile menu"
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
						) : (
							<Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
						)}
					</button>
					<h1 className="text-2xl font-bold text-gray-800 dark:text-white">
						Expense Tracker
					</h1>
				</div>
				<div className="flex items-center space-x-4">
					<button
						onClick={toggleDarkMode}
						className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
					>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>
				</div>
			</header>
			<div className="flex flex-1 overflow-hidden">
				<nav
					className={`${
						mobileMenuOpen ? "block" : "hidden"
					} lg:block w-64 bg-white dark:bg-gray-800 p-6 shadow absolute lg:relative z-10 h-full lg:h-auto`}
				>
					<NavLinks />
				</nav>
				<main className="flex-1 overflow-y-auto p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

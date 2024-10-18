import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const modeFromStorage = localStorage.getItem("darkMode");

	const [darkMode, setDarkMode] = useState(modeFromStorage === "true" || false);

	useEffect(() => {
		const isDarkMode = modeFromStorage === "true";
		if (darkMode !== isDarkMode) {
			setDarkMode(isDarkMode);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
		localStorage.setItem("darkMode", darkMode.toString());
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (darkMode && modeFromStorage === "true") {
			localStorage.setItem("darkMode", "false");
		} else {
			localStorage.setItem("darkMode", "true");
		}
	};

	return (
		<button
			onClick={toggleDarkMode}
			className="rounded-full bg-gray-200 dark:bg-gray-700 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
		>
			{darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	);
};

export default ThemeToggle;

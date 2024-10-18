import { RouterProvider } from "react-router-dom";
import "./index.css";

import { appRouter } from "./router";

export default function App() {
	return <RouterProvider router={appRouter} />;
}
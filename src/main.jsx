import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import "./index.css";
import { router } from "./mainRouter.jsx";
import { mainTheme } from "./mainTheme.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={mainTheme}>
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	</StrictMode>
);

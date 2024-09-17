import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import "./index.css";
import { router } from "./mainRouter.jsx";
import { mainTheme } from "./mainTheme.jsx";

createRoot(document.getElementById("root")).render(
	<ThemeProvider theme={mainTheme}>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<RouterProvider router={router}></RouterProvider>
		</LocalizationProvider>
	</ThemeProvider>
);

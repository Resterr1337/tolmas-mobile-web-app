import { createTheme } from "@mui/material";

const mainTheme = createTheme({
    palette:{
		primary: {
			main: "#1F2024",
		},
		secondary: {
			main: "#000000"
		},
		text:{
			primary: "#1F2024",
			secondary: "#000000"
		}
    },
	typography: {
		fontFamily: ["Onest", "sans-serif"].join(","),
		h1: {
			fontSize: "1.75rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "1.35rem",
			fontWeight: 700,
		},
		h3: {
			fontSize: "1rem",
			fontWeight: 700,
		},
		h5: {
			fontSize: "0.625rem",
			fontWeight: 400,
		},
		h6: {
			fontSize: "0.5rem",
			fontWeight: 700,
		},
		subtitle1: {
			fontSize: "0.75rem",
			fontWeight: 400,
		},
		suptitle2: {
			fontSize: "1rem",
			fontWeight: 400,
		},

		price: {
			fontFamily: ["Onest", "sans-serif"].join(","),
			fontSize: "1rem",
			fontWeight: 400,
			fontStyle: "normal",
			lineHeight: "normal",
		},
		
		discount: {
            color: "red",
            fontFamily: ["Onest", "sans-serif"].join(","),
            fontSize: "0.75rem",
			fontStyle: "normal",
			fontWeight: 400,
			lineHeight: "normal",
		},
	},
});

export { mainTheme };

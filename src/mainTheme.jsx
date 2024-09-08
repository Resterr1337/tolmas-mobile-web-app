import { createTheme } from "@mui/material";

const mainTheme = createTheme({
    palette:{
        text: {
            primary: "#000000",
            secondary: "#1F2024",
        }
    },
	typography: {
		fontFamily: ["Onest", "sans-serif"].join(","),
		h1: {
			fontSize: "1.5rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "1.25rem",
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
			fontSize: "0.625rem",
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

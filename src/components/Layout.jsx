import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./Header/Header";
import { NavigationPanel } from "./NavigationPanel/NavigationPanel";

const Layout = () => {
	return (
		<>
			<Header></Header>
			<main
				style={{
					position: "absolute",
					top: "50px",
					width: "100vw",
					padding: "18px 10px",
				}}
			>
				<Outlet></Outlet>

				{/* Компенсация Панели навигации снизу */}
				<Box
					sx={{
						width: "100%",
						height: "55px",
						opacity:"0.0",
					}}
				></Box>
			</main>
			<NavigationPanel></NavigationPanel>
		</>
	);
};

export { Layout };

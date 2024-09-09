import { Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

//
const Header = () => {
	// ***Сделать функцию которая будет менять хидер
	// const currentLocation = useLocation();

	return (
		<>
			<Box
				sx={{
					width: "100vw",
					background: "#FFFFFF50",
					backdropFilter: "blur(3px)",
					position: "fixed",
					px: "0.35rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottom: "1px solid #00000050",
					zIndex:"20",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography
						color="text.secondary"
						fontWeight={700}
						variant="h1"
					>
						Tolmas market
					</Typography>
					<Typography color="text.secondary" variant="subtitle1">
						Магазин аксессуаров и парфюмерии
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { Header };

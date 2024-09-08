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
					mx: "0.35rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
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
					<Typography color="text.secondary" variant="h6">
						Магазин аксессуаров и парфюмерии
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export { Header };

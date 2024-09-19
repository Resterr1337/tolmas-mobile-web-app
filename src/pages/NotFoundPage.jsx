import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLanguage } from "../store";

const NotFoundPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	return (
		<>
			<Box>
				<Typography fontWeight={700} variant="h1">
					404 Not Found
				</Typography>
				<Link to={"/"}>
					<Typography variant="h6">
						{currentLanguage == "rus"
							? "Вернуться на главную страницу"
							: "Bosh sahifaga qaytish"}
					</Typography>
				</Link>
			</Box>
		</>
	);
};

export { NotFoundPage };

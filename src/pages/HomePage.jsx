import { Typography , Box } from "@mui/material";
import { PromoSlider } from "../components/HomePage/PromoSlider.jsx";
import { SearchInput } from "../components/SearchInput/SearchInput.jsx";

const HomePage = () => {
	return (
		<>
			<PromoSlider></PromoSlider>
			<Box sx={{my:"1rem"}}>
				<SearchInput></SearchInput>
			</Box>
		</>
	);
};

export { HomePage };

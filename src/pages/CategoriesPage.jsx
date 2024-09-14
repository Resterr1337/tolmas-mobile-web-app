import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { SearchInput } from "../components/SearchInput/SearchInput";
import { useCategories } from "../store";
import { useLanguage } from "../store";
import NextSVG from "@/assets/SubCategoriesPage/next.svg?react";

const CategoriesPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const categories = useCategories((state) => state.categories);
	const NavigateFunc = useNavigate()

	return (
		<>
			<SearchInput></SearchInput>

			{categories.map((item, index) => {
				return (
					<Box
						onClick={() => {NavigateFunc(item.link)}}

						sx={{
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							padding: "5px 0px",
							my: "5px",
						}}
						key={index}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									mr: "10px",
									borderRadius: "5px",
									height: "65px",
									width: "65px",
									backgroundImage: `url("${item.src}")`,
									backgroundPosition: "50% 50%",
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}}
							></Box>
							<Typography variant="h4">
								{item.title[currentLanguage]}
							</Typography>
						</Box>
						<NextSVG />
					</Box>
				);
			})}
		</>
	);
};

export { CategoriesPage };

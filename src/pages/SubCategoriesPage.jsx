import { useParams, useNavigate } from "react-router-dom";
import { useCategories, useLanguage } from "../store";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { Box, Typography } from "@mui/material";
import NextSVG from "@/assets/SubCategoriesPage/next.svg?react";
import BackSVG from "@/assets/SubCategoriesPage/back.svg?react";


const SubCategoriesPage = () => {
	const { subcategory } = useParams();
	const currentLanguage = useLanguage((state) => state.language);
	const categories = useCategories((state) => state.categories);
	const { subCategories } = categories.find((item) =>
		item.link.includes(subcategory)
	);

	const NavigateFunc = useNavigate()

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "5px",
			}}
		>
			<SearchInput></SearchInput>

			<Box
				onClick={()=> NavigateFunc("/categories")}
				sx={{
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					padding: "10px 0px",
					gap: "15px",
				}}
			>
				<BackSVG></BackSVG>
				<Typography>Все категории</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
				}}
			>
				{subCategories.map((item, index) => {
					return (
						<Box
							onClick={()=> NavigateFunc(`/search/null/${subcategory}--${item.value}`)}

							key={index}
							sx={{
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "25px 0px",
								my: "1px",
							}}
						>
							<Typography variant="h4">
								{item.title[currentLanguage]}
							</Typography>

							<NextSVG />
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export { SubCategoriesPage };

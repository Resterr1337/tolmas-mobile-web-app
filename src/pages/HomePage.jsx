import { Typography, Box } from "@mui/material";
import { PromoSlider } from "../components/HomePage/PromoSlider.jsx";
import { SearchInput } from "../components/SearchInput/SearchInput.jsx";
import { CategoriesSlider } from "../components/HomePage/CategoriesSlider.jsx";

const HomePage = () => {
	return (
		<>
			<PromoSlider></PromoSlider>
			<Box sx={{ my: "1rem" }}>
				<SearchInput></SearchInput>
			</Box>
			<Box>
				<Typography sx={{ mb: "10px" }} variant="h1">
					Категории
				</Typography>
				<CategoriesSlider
					categoriesArray={[
						{
							src: "https://aromacode.ru/wa-data/public/photos/61/31/3161/3161.970.jpg",
							title: "Парфюмерия",
							link: "/categories/parfume",
						},
						{
							src: "https://st2.depositphotos.com/1005563/7105/i/450/depositphotos_71059225-stock-photo-set-of-car-accessories.jpg",
							title: "Акссесуары для авто",
							link: "/categories/accesories_for_auto",
						},
						{
							src: "https://st2.depositphotos.com/1005563/7105/i/450/depositphotos_71059225-stock-photo-set-of-car-accessories.jpg",
							title: "Акссесуары для авто",
							link: "/categories/accesories_for_auto",
						},
						{
							src: "https://st2.depositphotos.com/1005563/7105/i/450/depositphotos_71059225-stock-photo-set-of-car-accessories.jpg",
							title: "Акссесуары для авто",
							link: "/categories/accesories_for_auto",
						},
						{
							src: "https://st2.depositphotos.com/1005563/7105/i/450/depositphotos_71059225-stock-photo-set-of-car-accessories.jpg",
							title: "Акссесуары для авто",
							link: "/categories/accesories_for_auto",
						}
					]}
				></CategoriesSlider>
			</Box>
		</>
	);
};

export { HomePage };

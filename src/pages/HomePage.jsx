import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { Typography, Box, Input } from "@mui/material";
import { PromoSlider } from "@/components/HomePage/PromoSlider.jsx";
import SearchSVG from "@/assets/SearchInput/search.svg?react";
import { CategoriesSlider } from "@/components/HomePage/CategoriesSlider.jsx";
import { Product } from "@/components/Product/Product.jsx";
import { some_products, some_promo } from "../data";
import { useCategories, useLanguage } from "../store";

const HomePage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const categories = useCategories((state) => state.categories);
	const NavigationFunc = useNavigate();

	return (
		<>
			{/* Промо-слайдер */}
			<PromoSlider promoArray={some_promo}></PromoSlider>

			{/* Поисковой блок*/}
			<Box
				onClick={() => NavigationFunc("/categories")}
				sx={{ mb: "0.75rem" }}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "start",
						border: "solid black #",
					}}
				>
					<SearchSVG></SearchSVG>
					<Input
						sx={{
							ml: "1rem",
							py: "0.75rem",
							fontFamily: "Onest , sans-serif",
							fontSize: "1rem",
							fontWeight: "400",
							color: "#1F2024",
							"&::placeholder": {
								color: "black",
							},
							"&&&:before": {
								borderBottom: "none",
							},
							"&&:after": {
								borderBottom: "none",
							},
						}}
						fullWidth={true}
						placeholder={
							currentLanguage == "rus"
								? "Поиск товаров"
								: "Tovarlarni qidirish"
						}
					></Input>
				</Box>
			</Box>

			{/* Блок с слайдером-категорий */}
			<Box key={nanoid()}>
				<Typography key={nanoid()} sx={{ mb: "10px" }} variant="h1">
					{currentLanguage == "rus" ? "Категории" : "Kategoriyalar"}
				</Typography>
				<CategoriesSlider
					key={nanoid()}
					categoriesArray={categories}
				></CategoriesSlider>
			</Box>

			{/* Блок с товарами */}
			<Box key={nanoid()}>
				<Box
					key={nanoid()}
					sx={{
						my: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Typography key={nanoid()} variant="h1">
						{currentLanguage == "rus"
							? "Парфюмерия"
							: "Parfyumeriya"}
					</Typography>
					<Link key={nanoid()} to={"products"}>
						<Typography
							key={nanoid()}
							sx={{
								cursor: "pointer",
							}}
							color="#2588FF"
							fontWeight={400}
							variant="h3"
						>
							{currentLanguage == "rus"
								? "Показать всё"
								: "Hammasini ko'rsatish"}
						</Typography>
					</Link>
				</Box>

				{/* Сами продукты */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "start",
						gap: "2.5%",
						alignItems: "start",
						flexWrap: "wrap",
					}}
				>
					{some_products.map((product, index) => {
						return (
							<Product
								key={nanoid()}
								productInfo={product}
							></Product>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export { HomePage };

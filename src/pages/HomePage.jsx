import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { Typography, Box } from "@mui/material";
import { PromoSlider } from "@/components/HomePage/PromoSlider.jsx";
import { SearchInput } from "@/components/SearchInput/SearchInput.jsx";
import { CategoriesSlider } from "@/components/HomePage/CategoriesSlider.jsx";
import { Product } from "@/components/Product/Product.jsx";
import { some_products, some_categories, some_promo } from "../data";

const HomePage = () => {
	return (
		<>
			{/* Промо-слайдер */}
			<PromoSlider key={nanoid()} promoArray={some_promo}></PromoSlider>

			{/* Поисковой */}
			<Box key={nanoid()} sx={{ mb: "0.75rem" }}>
				<SearchInput key={nanoid()} ></SearchInput>
			</Box>

			{/* Блок с слайдером-категорий */}
			<Box key={nanoid()}>
				<Typography key={nanoid()}  sx={{ mb: "10px" }} variant="h1">
					Категории
				</Typography>
				<CategoriesSlider
					key={nanoid()}
					categoriesArray={some_categories}
				></CategoriesSlider>
			</Box>

			{/* Блок с товарами */}
			{/* #Сделать динамическую смену товаров под категории */}
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
						Парфюмерия
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
							Показать всё
						</Typography>
					</Link>
				</Box>

				{/* Сами продукты */}
				<Box
					key={nanoid()}
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
							<>
								<Product
									key={nanoid()}
									productInfo={product}
								></Product>
							</>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export { HomePage };

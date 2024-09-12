import { Link } from "react-router-dom";

import { Typography, Box } from "@mui/material";
import { PromoSlider } from "@/components/HomePage/PromoSlider.jsx";
import { SearchInput } from "@/components/SearchInput/SearchInput.jsx";
import { CategoriesSlider } from "@/components/HomePage/CategoriesSlider.jsx";
import { Product } from "@/components/Product/Product.jsx";

const HomePage = () => {
	return (
		<>
			{/* Промо-слайдер */}
			<PromoSlider
				promoArray={[
					{
						link: "/some_discount",
						imageSRC:
							"https://s3-alpha-sig.figma.com/img/cc94/bd16/5df35d982ee5a6228569a106a1b93bdf?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A08PUaFoVah-6ga7cTNcmTwtgoXqeDjP6-U7FgruS3cAi6S-V-WOcwHr3uQmwuwYOUCrfxyZJZY6eY0nXUIgWx54d9q~~J48IRY2FpRfUJRk-8EVvcPexGyhP92I-Ln2NNqfQvWihlnxElPAMMXofY-c3ZvUCg-alKEzbutXSqkfVFEze199CB4WJx0ZNzsCEN7hmFTzBwxjdgmu2CWeGUyYkPdZISwjZw4sysu7oPywsTizmr03joVqZKHANY6IHiVtPFpkuD0m7j0FfpGTaee19gu6a7Vljkl7cdL47M-w4ICx3VBqlpveatJE82~lZEBee0kB3U~IchD8R~T2uQ__",
						text: {
							topSideText:
								"Заканчиваем неделю с большими скидками успей купить!",
							centerText: "Чёрная пятница",
							bottomSideText: "-50%",
						},
					},
					{
						link: false,
						imageSRC:
							"https://s9.stc.all.kpcdn.net/woman/wp-content/uploads/2022/07/20-luchshih-muzhskih-duhov-960x540-1-960x540.jpg",
						text: {
							topSideText: "Скидки на мужскую парфюмерию",
							bottomSideText: "-20%",
						},
					},
					{
						link: "/some_discount",
						imageSRC:
							"https://business.olx.ua/wp-content/uploads/2023/11/Obkladynka-1.png",
						text: {
							topSideText: "Осенние скидки",
							centerText: "",
							bottomSideText: "-25%",
						},
					},
				]}
			></PromoSlider>

			{/* Поисковой */}
			<Box sx={{ mb: "0.75rem" }}>
				<SearchInput></SearchInput>
			</Box>

			{/* Блок с слайдером-категорий */}
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
						},
						{
							src: "https://st2.depositphotos.com/1005563/7105/i/450/depositphotos_71059225-stock-photo-set-of-car-accessories.jpg",
							title: "Акссесуары для ПК",
							link: "/categories/accesories_for_auto",
						},
					]}
				></CategoriesSlider>
			</Box>

			{/* Блок с товарами */}
			{/* #Сделать динамическую смену товаров под категории */}
			<Box>
				<Box
					sx={{
						my: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h1">Парфюмерия</Typography>
					<Link>
						<Typography
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
				<Box sx={{
					display: "flex",
					justifyContent: "start",
					gap:"2.5%",
					alignItems:"start",
					flexWrap: "wrap",
				}}>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
				</Box>
			</Box>
		</>
	);
};

export { HomePage };

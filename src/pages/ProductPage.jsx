import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

import { ImageSlider } from "../components/ProductPage/ImageSlider.jsx";
import { formatPrice } from "../utils/priceFormatter.js";
import CartSVG from "@/assets/ProductPage/cart.svg?react";
import AddSVG from "@/assets/ProductPage/next.svg?react";
import SubstractSVG from "@/assets/ProductPage/prev.svg?react";

const ProductPage = () => {
	const [quantityOrder, setQuantityOrder] = useState(0);

	const { id: productId } = useParams();
	// const productInfo = some_products[productId]
	const productInfo = {
		id: 0, // num
		category: "parfume", // str
		subCategory: "forMen", // str
		imageList: [
			"https://i.siteapi.org/TB9xXkMwKXR87q96RmCWUNXcBvo=/fit-in/1024x768/center/top/filters:watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/196a8297a1a2eaeeeccf7642ab14715209e8154a.jpg",
			"https://i.siteapi.org/EFyj-ANqBR7AXkb15N86Rj2RzN8=/fit-in/330x0/center/top/filters:fill(transparent):format(webp):watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/bacd8a757301d07c0fdd403c6a8fdbb78775312d.jpg",
			"https://i.siteapi.org/l6Jg592bs-z4x4y7MrzY54NhnAw=/fit-in/330x0/center/top/filters:fill(transparent):format(webp):watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/9e1bd5a3763a9253d4fc7ed04e552be8b21189a8.jpg",
		], // Array[str]
		name: {
			rus: "Channel #7",
			uzb: "Channel #7",
		}, // str
		descpription: {
			rus: "Представьте себе, что вы стоите на краю бездонного космоса, где звезды светят ярче, чем когда-либо, а галактики вращаются в завораживающем танце. Воздух пропитан ароматом далеких звездных систем и таинственных туманностей. Именно это ощущение невесомости и бесконечности мы хотели передать в наших новых мужских духах.",
			uzb: "Tasavvur qiling, siz cheksiz kosmosning chekkasida turibsiz, yulduzlar hech qachon bo'lmaganidek yorqin porlaydi va galaktikalar maftunkor raqsda aylanib yuradi. Havo uzoq yulduz tizimlari va sirli tumanliklarning hidi bilan to'yingan. Biz aynan shu og'irsizlik va cheksizlik hissiyotini yangi erkaklar atirlarimizda ifoda etishni xohladik.",
		},
		price: 1680000, // int
		discount: "1500", // bool || str
		quantity: 50, // int
		quantityWeekSales: 50, // int || bool
		characteristics: {
			rus: [
				{
					title: "Название", // str
					value: "Космическая Одиссея", // str
				},
				{
					title: "Ароматическая семья",
					value: "Фужерный древесный",
				},
				{
					title: "Интонация",
					value: "Загадочная и мужественная",
				},
				{
					title: "Ассоциации",
					value: "Бесконечность, путешествие, новые горизонты",
				},
				{
					title: "Интенсивность",
					value: "Шлейфовый",
				},
				{
					title: "Время года",
					value: "Осень-зима",
				},
				{
					title: "Стиль",
					value: "Современный, элегантный",
				},
				{
					title: "Стойкость",
					value: "Высокая",
				},
				{
					title: "Возрастная категория",
					value: "30+",
				},
			],
			uzb: [
				{
					title: "Nomi",
					value: "Kosmik Odisseya",
				},
				{
					title: "Xushbo'ylik oilasi",
					value: "Fuzher o'tmishli",
				},
				{
					title: "Ohang",
					value: "Sirli va mardona",
				},
				{
					title: "Assotsiatsiyalar",
					value: "Cheksizlik, sayohat, yangi ufqlar",
				},
				{
					title: "Intensivlik",
					value: "Shleyfli",
				},
				{
					title: "Yil fasli",
					value: "Kuz-qish",
				},
				{
					title: "Uslub",
					value: "Zamonaviy, oqlangan",
				},
				{
					title: "Chidamlilik",
					value: "Yuqori",
				},
				{
					title: "Yosh toifasi",
					value: "30+",
				},
			],
		},
	};
	const currentLanguage = "rus";

	return (
		<>
			{/* Карусель картинок */}
			<ImageSlider imageArray={productInfo.imageList} />

			{/* Название */}
			<Typography sx={{ my: "4px" }} variant="h1">
				{productInfo.name[currentLanguage]}
			</Typography>

			{/* Скидка */}
			{productInfo.discount ? (
				<Typography sx={{ my: "4px" }} color="#677697" variant="h4">
					Скидка{" "}
					{productInfo.discount.includes("%")
						? productInfo.discount
						: `${formatPrice(productInfo.discount)} UZS`}
				</Typography>
			) : (
				<></>
			)}

			{/* Цена */}
			<Typography sx={{ my: "4px" }} variant="h1">
				{productInfo.discount
					? formatPrice(
							productInfo.price -
								(productInfo.discount.includes("%")
									? productInfo.price *
									  parseFloat(
											`0.${productInfo.discount.substring(
												0,
												productInfo.discount.indexOf(
													"%"
												)
											)}`
									  )
									: parseInt(productInfo.discount)) +
								" UZS"
					  )
					: `${formatPrice(productInfo.price)} UZS`}
			</Typography>

			{/* Кол-во в наличие */}
			<Typography sx={{ my: "3px" }} variant="quantity">
				В наличие: {productInfo.quantity} шт
			</Typography>

			{/* Кол-во покупок на этой неделе */}
			<Box
				sx={{
					width: "100%",
					padding: "10px",
					display: "flex",
					alignItems: "center",
					backgroundColor: "#677697",
					borderRadius: "8px",
					color: "white",
					gap: "16px",
					my: "4px",
				}}
			>
				<CartSVG width="32px" height="32px"></CartSVG>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography fontWeight={400} variant="subtitle1">
						{productInfo.quantityWeekSales} штук
					</Typography>
					<Typography variant="subtitle1">
						Купили на этой неделе
					</Typography>
				</Box>
			</Box>

			{/* Описание */}
			<Typography sx={{ my: "6px" }} variant="h2">
				Описание
			</Typography>

			<Typography sx={{ my: "6px" }} variant="subtitle1">
				{productInfo.descpription[currentLanguage]}
			</Typography>

			{/* Характеристики */}
			<Typography sx={{ my: "6px" }} variant="h2">
				Характеристики
			</Typography>

			{productInfo.characteristics[currentLanguage].map((item, index) => {
				return (
					<Box
						key={index}
						sx={{
							my: "10px",
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignContent: "center",
						}}
					>
						<Typography sx={{ width: "50%" }} variant="subtitle1">
							{item.title}
						</Typography>
						<Typography
							sx={{ width: "50%", textAlign: "end" }}
							variant="subtitle1"
						>
							{item.value}
						</Typography>
					</Box>
				);
			})}

			{/* Кнопка добавления в корзину */}
			<Box
				sx={{
					zIndex: "3",
					position: "fixed",
					bottom: "60px",
					right: "0px",
					width: "100vw",
					height: "50px",
					padding: "0px 10px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap:"10px",
					}}
				>
					<Box
						sx={{
							height: "100%",
							width: "120px",
							border: "solid 1px #677697",
							borderRadius: "8px",
							backgroundColor: "#FFFFFF",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<button
							style={{
								height: "100%",
								padding: "0px 6px",
								border: "none",
								outline: "none",
								background: "none",
							}}
							onClick={() => {
								quantityOrder
									? setQuantityOrder(quantityOrder - 1)
									: quantityOrder;
							}}
						>
							<SubstractSVG />
						</button>
						<Typography color="#1F2024" variant="h2">
							{quantityOrder}
						</Typography>
						<button
							style={{
								height: "100%",
								padding: "0px 6px",
								border: "none",
								outline: "none",
								background: "none",
							}}
							onClick={() => {
								quantityOrder < productInfo.quantity
									? setQuantityOrder(quantityOrder + 1)
									: quantityOrder;
							}}
						>
							<AddSVG />
						</button>
					</Box>

					<Box
						sx={{
							background: "#677697",
							height: "100%",
							width:'100%',
							borderRadius:"8px"
						}}
					>

					</Box>
				</Box>
			</Box>

			{/* Компенсатор кнопок добавления в Корзину */}
			<Box
				sx={{
					width: "100%",
					height: "40px",
					opacity: "0.0",
				}}
			></Box>
		</>
	);
};

export { ProductPage };

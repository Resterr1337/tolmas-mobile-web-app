import { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

import { ImageSlider } from "../components/ProductPage/ImageSlider.jsx";
import { formatPrice } from "../utils/priceFormatter.js";
import { some_products } from "../data.js";
import {useLanguage} from "@/store.js"

import CartSVG from "@/assets/ProductPage/cart.svg?react";
import BagSVG from "@/assets/ProductPage/bag.svg?react";
import AddSVG from "@/assets/ProductPage/next.svg?react";
import SubstractSVG from "@/assets/ProductPage/prev.svg?react";
import { useCart } from "../store.js";


const ProductPage = () => {
	const { cartArray, addToCart} = useCart()
	const [isActivated, setIsActivated] = useState(false);
	const { id: productId } = useParams();
	const [quantityOrder, setQuantityOrder] = useState(0);

	const productInfo = some_products[parseInt(productId)];
	const currentLanguage = useLanguage((state) => state.language)

	// #Добавить реализацию добавления товара в корзину
	const HandleClickOnAddToCart = (productInfo) => {
		if (quantityOrder) {
			setIsActivated(true)
			addToCart(productInfo.id, quantityOrder)
		}
	};


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
				<BagSVG width="32px" height="32px"></BagSVG>
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
						gap: `${isActivated ? "0px" : "10px"}`,
					}}
				>
					<Box
						sx={{
							height: "100%",
							width: `${isActivated ? "0px" : "120px"}`,
							border: `${
								isActivated ? "none" : "solid 1px #677697"
							}`,
							borderRadius: "8px",
							backgroundColor: "#FFFFFF",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							transition: "all 400ms",
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
								!isActivated
									? quantityOrder
										? setQuantityOrder(quantityOrder - 1)
										: quantityOrder
									: null;
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
								!isActivated
									? quantityOrder < productInfo.quantity
										? setQuantityOrder(quantityOrder + 1)
										: quantityOrder
									: null;
							}}
						>
							<AddSVG />
						</button>
					</Box>

					<Box
						onClick={() => HandleClickOnAddToCart(productInfo)}
						sx={{
							cursor: "pointer",
							background: `${
								isActivated ? "#21D399" : "#677697"
							}`,
							height: "100%",
							width: "100%",
							borderRadius: "8px",
							display: "flex",
							alignItems: "center",
							justifyContent: "start",
							gap: "8px",
							padding: "0px 10px",
							transition: "all 600ms",
						}}
					>
						{isActivated ? (
							<>
								<DoneRoundedIcon
									sx={{
										width: "30px",
										height: "30px",
									}}
									htmlColor="white"
								/>
								<Typography color="white" variant="h3">
									Успешно добавлено в Корзину
								</Typography>
							</>
						) : (
							<>
								<CartSVG></CartSVG>
								<Typography color="white" variant="h3">
									Добавить в корзину
								</Typography>
							</>
						)}
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

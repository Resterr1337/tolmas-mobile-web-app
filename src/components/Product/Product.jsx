import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/priceFormatter";

import HeartSVG from "@/assets/Product/heart.svg?react";
import "./Product.css";
import { useLanguage, useWishList } from "@/store.js";
import { useState } from "react";

const Product = ({ productInfo }) => {
	const {wishList, addToWishList, removeFromWishList} = useWishList();;
	
	const [isInWishList, setIsInWishList] = useState(wishList.includes(productInfo.id))
	const naviteToProductPage = useNavigate();
	const currentLanguage = useLanguage((state) => state.language);

	const handleProductCardClick = (event) => {
		event.stopPropagation()
		if (event.target.classList.value.includes("wish")) {
		} else {
			naviteToProductPage(`/product/${productInfo.id}`);
		}
	};

	// #Доделать добавление в виш лист
	const handleClickOnHeart = (event) => {
		event.stopPropagation()
		if (event.currentTarget.classList.value.includes("in_wish_list")) {
			setIsInWishList(false);
			removeFromWishList(productInfo.id);
		} else {
			setIsInWishList(true);
			addToWishList(productInfo.id);
		}
	};

	return (
		<Box
			onClick={handleProductCardClick}
			sx={{
				my: "1.25%",
				width: "31.5%",
				height: "210px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			{/* Изображение */}
			<Box
				sx={{
					backgroundImage: `url("${productInfo.imageList[0]}")`,
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					borderRadius: "0.3125rem",
					width: "100%",
					height: "70%",
					position: "relative",
				}}
			>
				{/* Cердечко */}
				<Box
					className={isInWishList? "wishSVG in_wish_list": "wishSVG"}
					onClick={handleClickOnHeart}
					sx={{
						zIndex: "2",
						position: "absolute",
						top: "5px",
						right: "5px",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#1F2024",
						borderRadius: "50%",
						padding: "5px",
					}}
				>
					<HeartSVG className="wishSVG"></HeartSVG>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignContent: "start",
				}}
			>
				<Typography variant="h3">
					{productInfo.name[currentLanguage]}
				</Typography>
				{productInfo.discount ? (
					<>
						<Typography
							sx={{
								textDecoration: "line-through",
								letterSpacing: "-1px",
							}}
							variant="oldprice"
						>
							{formatPrice(productInfo.price) + " UZS"}
						</Typography>
						<Typography
							sx={{ letterSpacing: "-1px" }}
							variant="price"
						>
							{formatPrice(
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
							)}
						</Typography>
					</>
				) : (
					<>
						<Typography
							sx={{ letterSpacing: "-1px" }}
							variant="price"
						>
							{formatPrice(productInfo.price) + " UZS"}
						</Typography>
					</>
				)}
			</Box>
		</Box>
	);
};

export { Product };

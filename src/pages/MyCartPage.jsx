import { Box, Checkbox, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteSVG from "@/assets/Cart/delete.svg?react";
import IncrementSVG from "@/assets/Cart/next.svg?react";
import DecrementSVG from "@/assets/Cart/prev.svg?react";

import { useCart, useLanguage } from "../store";
import { some_products } from "../data";
import { nanoid } from "nanoid";
import { formatPrice } from "../utils/priceFormatter";

const MyCartPage = () => {
	const cartArray = useCart((state) => state.cartArray);
	const deleteFromCart = useCart((state) => state.deleteFromCart);
	const deleteAll = useCart((state) => state.deleteAll);
	const changeQuantity = useCart((state) => state.changeQuantity);
	const currentLanguage = useLanguage((state) => state.language);

	const [deleteIdArray, setDeleteIdArray] = useState([]);

	const NavigateFunc = useNavigate();

	const isDiscount = Boolean(
		cartArray.filter((item) => some_products[item.productId].discount)
			.length
	);

	const discountItems = cartArray.map((item) => {
		const discount = some_products[item.productId].discount;
		if (some_products[item.productId].discount) {
			return {
				quantity: item.quantity,
				discount: discount.includes("%")
					? some_products[item.productId].price *
					  parseFloat(
							`0.${discount.substring(0, discount.indexOf("%"))}`
					  )
					: some_products[item.productId].price - parseInt(discount),
				price: some_products[item.productId].price,
			};
		} else {
			return {
				quantity: item.quantity,
				discount: 0,
				price: some_products[item.productId].price,
			};
		}
	});

	const totalCost = cartArray.reduce(
		(accumulator, item) =>
			accumulator + item.quantity * some_products[item.productId].price,
		0
	);

	const totalCostWithDiscount = discountItems.reduce(
		(accamulator, item) =>
			accamulator + item.quantity * (item.price - item.discount),
		0
	);

	const handleSoloCheckboxClick = (event) => {
		if (deleteIdArray.includes(event.target.name)) {
			setDeleteIdArray([
				...deleteIdArray.filter((id) => id !== event.target.name),
			]);
		} else {
			setDeleteIdArray([...deleteIdArray, event.target.name]);
		}
	};

	const handleAllCheckboxClick = () => {
		if (deleteIdArray.length == cartArray.length) {
			setDeleteIdArray([]);
		} else {
			setDeleteIdArray([
				...cartArray.map((item) => {
					return item.id;
				}),
			]);
		}
	};

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottom: "#797979 solid 0.5px",
					py: "4px",
				}}
			>
				<Box
					sx={{
						fontSize: "1rem",
						fontWeight: "400",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Checkbox
						checked={
							deleteIdArray.length == cartArray.length
								? true
								: false
						}
						onClick={() => {
							handleAllCheckboxClick();
						}}
						sx={{
							color: "#D9D9D9",
							"&.Mui-checked": {
								color: "#2588FF",
							},
						}}
					/>
					<Typography>
						{currentLanguage == "rus"
							? "Выбрать всё"
							: "Hammasini tanlang"}
					</Typography>
				</Box>

				<Button
					sx={{
						borderColor: "black",
						textTransform: "capitalize",
					}}
					onClick={() => {
						if (deleteIdArray.length == cartArray.length) {
							deleteAll();
						}
					}}
					startIcon={<DeleteSVG />}
					size={"small"}
					variant="outlined"
				>
					{currentLanguage == "rus" ? "Удалить" : "O'chirish"}
				</Button>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "2px",
				}}
			>
				{cartArray.length == 0 ? (
					<Typography sx={{ my: "5px" }} variant="subtitle1">
						{currentLanguage == "rus"
							? "Ваша корзина пуста"
							: "Savatingiz bo'sh"}
					</Typography>
				) : (
					cartArray.map((item) => {
						const productInfo = some_products.find(
							(product) => product.id == item.productId
						);

						return (
							<Box
								key={nanoid()}
								sx={{
									borderBottom: "solid 1px #1F2024",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "5px",
									py: "10px",
								}}
							>
								{/* Добавление в массив на удаление */}
								<Checkbox
									checked={
										deleteIdArray.includes(item.id)
											? true
											: false
									}
									name={item.id}
									onClick={(event) =>
										handleSoloCheckboxClick(event, item)
									}
									sx={{
										color: "#D9D9D9",
										"&.Mui-checked": {
											color: "#2588FF",
										},
									}}
								/>
								<Box
									sx={{
										display: "flex",
										width: "95%",
										justifyContent: "space-between",
									}}
								>
									<Box sx={{ display: "flex", gap: "10px" }}>
										<Box
											sx={{
												height: "85px",
												width: "85px",
												backgroundImage: `url("${productInfo.imageList[0]}")`,
												backgroundPosition: "50% 50%",
												backgroundRepeat: "no=repeat",
												backgroundSize: "cover",
												borderRadius: "10px",
											}}
										></Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "space-between",
											}}
										>
											<Typography variant="subtitle1">
												{
													productInfo.name[
														currentLanguage
													]
												}
											</Typography>
											<Typography variant="h3">
												{formatPrice(
													productInfo.price *
														item.quantity
												)}{" "}
												UZS
											</Typography>
											{/* Счётчик */}
											<Box
												sx={{
													display: "flex",
													height: "30px",
													width: "60px",
													alignItems: "center",
													justifyContent:
														"space-between",
													border: "0.637px solid #677697",
													borderRadius: "3px",
												}}
											>
												<button
													onClick={() => {
														if (item.quantity > 1) {
															changeQuantity(
																item.id,
																-1
															);
														} else {
															deleteFromCart(
																item.id
															);
														}
													}}
													style={{
														height: "100%",
														padding: "0px",
														border: "none",
														outline: "none",
														background: "none",
														display: "flex",
														alignItems: "center",
													}}
												>
													<DecrementSVG />
												</button>
												<Typography variant="subtitle1">
													{item.quantity}
												</Typography>
												<button
													onClick={() => {
														if (
															item.quantity <
															productInfo.quantity
														)
															changeQuantity(
																item.id,
																+1
															);
													}}
													style={{
														height: "100%",
														padding: "0px",
														border: "none",
														outline: "none",
														background: "none",
														display: "flex",
														alignItems: "center",
													}}
												>
													<IncrementSVG />
												</button>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "end",
										}}
									>
										<Button
											onClick={() => {
												deleteFromCart(item.id);
											}}
											sx={{
												borderColor: "black",
												textTransform: "capitalize",
												display: "flex",
												alignItems: "center",
											}}
											startIcon={<DeleteSVG />}
											size={"small"}
											variant="outlined"
										>
											{currentLanguage == "rus"
												? "Удалить"
												: "O'chirish"}
										</Button>
									</Box>
								</Box>
							</Box>
						);
					})
				)}
			</Box>

			{cartArray.length !== 0 ? (
				<Box
					sx={{
						height: "60px",
						width: "100vw",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "0px 10px",
						position: "fixed",
						bottom: "60px",
						left: "0px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						{isDiscount ? (
							<Typography
								sx={{ textDecoration: "line-through" }}
								color="#8F9098"
								variant="h2"
							>
								{formatPrice(totalCost)} UZS
							</Typography>
						) : (
							<></>
						)}
						{/* Цена с учётом скидок */}
						<Typography
							fontSize={isDiscount ? "1.25rem" : "1.75rem"}
							variant="h1"
						>
							{isDiscount
								? formatPrice(totalCostWithDiscount)
								: formatPrice(totalCost)}{" "}
							UZS
						</Typography>
						<Typography variant="subtitle2">
							{currentLanguage == "rus" ? "Всего" : "Jami"}
						</Typography>
					</Box>
					<Box
						onClick={() => {
							NavigateFunc("/createOrder");
						}}
						sx={{
							background: "#677697",
							borderRadius: "5px",
							padding: "20px",
						}}
					>
						<Typography color="white" variant="h3">
							{currentLanguage == "rus"
								? "Продолжить"
								: "Davom eting"}
						</Typography>
					</Box>
				</Box>
			) : (
				<></>
			)}
		</>
	);
};

export { MyCartPage };

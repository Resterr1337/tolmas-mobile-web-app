import { Box, Typography, IconButton } from "@mui/material";
import { nanoid } from "nanoid";

import { useLanguage, useOrders } from "@/store.js";
import { formatPrice } from "../utils/priceFormatter";
import { some_products } from "@/data.js";

import ArrowToDownSVG from "@/assets/MyOrdersPage/arrowToDown.svg?react";
import { useState } from "react";

const MyOrdersPage = () => {
	const ordersArray = useOrders((state) => state.ordersArray);
	const currentLanguage = useLanguage((state) => state.language);

	const [isMoreOpen, setIsMoreOpen] = useState(
		Object.fromEntries(ordersArray.map((item) => (item = [item.id, false])))
	);

	const [isHistory, setIsHistory] = useState(false);

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "40px",
						background: "#F4F7F9",
						borderRadius: "16px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "4px 10px",
					}}
				>
					<Typography
						onClick={() => {
							setIsHistory(false);
						}}
						sx={{
							cursor: "pointer",
							padding: "8px 0px",
							width: "45%",
							textAlign: "center",
							background: isHistory ? "#F4F7F9" : "white",
							borderRadius: "16px",
							transition: "background 500ms",
						}}
						variant="h3"
					>
						Активные
					</Typography>
					<Typography variant="h3">|</Typography>
					<Typography
						onClick={() => {
							setIsHistory(true);
							console.log(isHistory);
						}}
						sx={{
							background: isHistory ? "white" : "#F4F7F9",
							cursor: "pointer",
							padding: "8px 0px",
							width: "45%",
							textAlign: "center",
							borderRadius: "16px",
							transition: "background 500ms",
						}}
						variant="h3"
					>
						История
					</Typography>
				</Box>
			</Box>

			{isHistory ? (
				<Typography variant="h2">Ваша история заказов пуста</Typography>
			) : (
				ordersArray.map((item, array) => {
					return (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								padding: "10px",
								gap: "10px",
								background: "#F4F7F9",
								borderRadius: "5px",
								transition: "all 500ms",
							}}
							key={nanoid()}
						>
							<Typography
								sx={{
									borderBottom: "solid 1px #8F9098",
									padding: "10px 0px",
								}}
								variant="h2"
							>
								ID заказа: {item.id}
							</Typography>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<Typography>Статус</Typography>
								<Typography>В ожидании</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<Typography>Время создания</Typography>
								<Typography>{item.createOrderTime}</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<Typography>Время доставки заказа</Typography>
								<Typography>
									{item.deliveryOrderTime}
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<Typography>Цена</Typography>
								<Typography>
									{formatPrice(item.totalCost)} UZS
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									padding: "10px 0px",
									borderTop: "1px solid #A4A4A4",
									cursor: "pointer",
									transition: "all 500ms",
								}}
							>
								<Box
									onClick={() => {
										setIsMoreOpen(
											Object.fromEntries(
												ordersArray.map((i) =>
													item.id == i.id
														? (i = [i.id , !isMoreOpen[item.id],])
														: (i = [i.id , isMoreOpen[i.id],])
												)
											)
										);
									}}
									sx={{
										width: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<Typography color="#2588FF" variant="h2">
										{item.products.length} товар
									</Typography>
									<IconButton
										sx={{
											transition: "all 500ms",
											transform: isMoreOpen[item.id]
												? "rotate(180deg)"
												: "none",
											background: "#1F2024",
											"&:hover": {
												background: "#1F2024",
											},
										}}
									>
										<ArrowToDownSVG />
									</IconButton>
								</Box>

								<Box
									sx={{
										display: isMoreOpen[item.id]
											? "flex"
											: "none",
										flexDirection: "column",
										width: "100%",
										gap: "30px",
										transition: "all 500ms",
									}}
								>
									{item.products.map((product) => {
										return (
											<Box
												key={nanoid()}
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "10px",
												}}
											>
												{/* Картинка */}
												<Box
													sx={{
														width: "90px",
														height: "90px",
														borderRadius: "5px",
														backgroundImage: `url("${
															some_products[
																product
																	.productId
															].imageList[0]
														}")`,
														backgroundPosition:
															"50% 50%",
														backgroundSize: "cover",
														backgroundRepeat:
															"no-repeat",
													}}
												></Box>
												<Box
													sx={{
														display: "flex",
														flexDirection: "column",
														justifyContent:
															"space-between",
														gap: "5px",
													}}
												>
													<Typography>
														{
															some_products[
																product
																	.productId
															].name[
																currentLanguage
															]
														}
													</Typography>
													<Typography>
														{product.quantity} шт
													</Typography>
													<Typography variant="h2">
														{formatPrice(
															some_products[
																product
																	.productId
															].price
														)}{" "}
														UZS
													</Typography>
												</Box>
											</Box>
										);
									})}
								</Box>
							</Box>
						</Box>
					);
				})
			)}
		</>
	);
};

export { MyOrdersPage };

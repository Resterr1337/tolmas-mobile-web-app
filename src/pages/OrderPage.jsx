import { useParams } from "react-router-dom";
import { useLanguage, useOrders } from "../store";
import { Box, Typography, Button } from "@mui/material";
import { some_products } from "../data";
import { formatPrice } from "../utils/priceFormatter";
import { nanoid } from "nanoid";
import { useState } from "react";
const OrderPage = () => {
	const { orderId } = useParams();
	const orderObject = useOrders((state) =>
		state.ordersArray.find((item) => item.id == orderId)
	);

	const currentLanguage = useLanguage((state) => state.language);
	const [isCourierModalOpen, setIsCourierModalOpen] = useState(false);
	const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "space-between",
					padding: "10px 10px",
					borderBottom: "1px solid #E1E1E1",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Typography
						lineHeight={"1"}
						fontSize={"0.85rem"}
						variant="subtitle1"
					>
						ID: {orderObject.id}
					</Typography>
					<Typography
						lineHeight={"1"}
						fontSize={"1.125rem"}
						variant="h4"
					>
						{orderObject.createOrderTime}
					</Typography>
				</Box>
				<Typography variant="subtitle1">
					{orderObject.status}
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					padding: "10px",
				}}
			>
				<Typography fontSize={"0.85rem"} variant="subtitle1">
					Адрес доставки
				</Typography>
				<Typography variant="h2">
					{orderObject.deliveryAddress}
				</Typography>
			</Box>

			{orderObject.status == "Можно забирать" ? (
				<>
					<Box sx={{ padding: "10px" }}>
						<Typography>
							Для получения товара, покажите QR код кассиру
						</Typography>
						<Button
							onClick={() => setIsQRCodeModalOpen(true)}
							sx={{
								padding: "10px 10px",
								color: "white",
								background: "#677697",
								width: "100%",
								fontSize: "1.25rem",
								fontWeight: "700",
								textTransform: "none",
								my: "5px",
							}}
						>
							Показать QR код
						</Button>
					</Box>
					{/* Модалка с QR кодом */}
					<Box
                        onClick={() => setIsQRCodeModalOpen(false)}
						sx={{
							position: "fixed",
							background: "white",
							borderRadius: "10px",
							left: "50%",
                            transform:"translateX(-50%) translateY(-100%)",
							bottom: isQRCodeModalOpen ? "0%" : "-300%",
							zIndex: "22",
							width: "300px",
							height: "300px",
							padding: "20px",
							display: "flex",
							flexDirection: "column",
                            alignItems:"center",
                            justifyContent:"space-between",
							gap: "10px",
							transition: "all 500ms",
							boxShadow: isQRCodeModalOpen
								? "0px 0px 1000px #00000050"
								: "none",
						}}
					>
                        <Box
                            sx={{
                                width:"250px",
                                height:"250px",
                                background:`url("https://s3-alpha-sig.figma.com/img/75b3/f471/47cd74d49d353d05fd1428b1bbdbdbec?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c~xYxL0crWBD98CYuhgsTrDgeWT1rMv4dzwTDvol41e6qNUDbQuVZHYb-1EF5C8B2sx02zRdvWmI0v8HURnlnZcfSdeIAGOdGas7mMMbbeJeYi2FZ5ZJfZRfXGbtjnciDNhLeHZN1ZIoesBomTgIrEN1Q-FH6VGMEnXC5t~mzZZzzAVO~99eijt0CDFEZxHCglH4jqS8Vm19w6ecY9MFXbmmGQoC0Y61oqvHuHbBLk95Tfl-7X8iC9VDUyaPe2pdbxUl8WNjm3PP2OaS01YSB8-4fUeKCanXubCP4lLZK0h~QP8bb5vkjetGyg9Al98G1fOKLQSWRO9pVni1bEH1ng__")`,
                                backgroundPosition:"50% 50%",
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                            }}
                        >
                        </Box>

                        <Typography variant="h1">4378</Typography>
                    </Box>
				</>
			) : (
				<></>
			)}

			<Box sx={{ padding: "10px" }}>
				<Typography variant="h2">Детали заказа</Typography>
				<Box>
					{orderObject.products.map((product) => {
						return (
							<Box
								key={nanoid()}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									gap: "10px",
									my: "10px",
								}}
							>
								{/* Картинка */}
								<Box sx={{ display: "flex", gap: "10px" }}>
									<Box
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											backgroundImage: `url("${
												some_products[product.productId]
													.imageList[0]
											}")`,
											backgroundPosition: "50% 50%",
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat",
										}}
									></Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
										}}
									>
										<Typography variant="h3">
											{
												some_products[product.productId]
													.name[currentLanguage]
											}
										</Typography>
										<Typography>
											{product.quantity} шт
										</Typography>
									</Box>
								</Box>

								<Typography variant="subtitle1">
									{formatPrice(
										some_products[product.productId].price
									)}{" "}
									UZS
								</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					borderTop: "1px dashed #E1E1E1",
				}}
			>
				{orderObject.isDiscount ? (
					<>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "10px",
							}}
						>
							<Typography variant="h2">Скидка</Typography>
							<Typography variant="h2">
								-
								{formatPrice(
									orderObject.totalCost -
										orderObject.totalCostWithDiscount
								)}{" "}
								UZS
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "20px 10px",
								borderRadius: "5px",
								background: "#F2F2F2",
							}}
						>
							<Typography
								fontSize={"1.125rem"}
								variant="subtitle1"
							>
								Всего
							</Typography>
							<Typography variant="h2">
								{formatPrice(orderObject.totalCostWithDiscount)}{" "}
								UZS
							</Typography>
						</Box>
					</>
				) : (
					<>
						{" "}
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "20px 10px",
								borderRadius: "5px",
								background: "#F2F2F2",
							}}
						>
							<Typography
								fontSize={"1.125rem"}
								variant="subtitle1"
							>
								Всего
							</Typography>
							<Typography variant="h2">
								{formatPrice(orderObject.totalCost)} UZS
							</Typography>
						</Box>
					</>
				)}
			</Box>

			{orderObject.status == "Готов, в пути" ? (
				<>
					<Box
						sx={{
							position: "fixed",
							left: "0px",
							right: "0px",
							bottom: "60px",
							display: "flex",
							flexDirection: "column",
							width: "100%",
							padding: "10px",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<Button
							onClick={() => setIsCourierModalOpen(true)}
							sx={{
								padding: "20px 10px",
								color: "white",
								background: "#677697",
								width: "100%",
								fontSize: "1.25rem",
								fontWeight: "700",
								textTransform: "none",
							}}
						>
							Связаться с курьером
						</Button>
					</Box>

					{/* Модалка с Курьером */}
					<Box
						sx={{
							position: "fixed",
							background: "white",
							borderRadius: "10px",
							left: "0px",
							right: "0px",
							bottom: isCourierModalOpen ? "0%" : "-100%",
							zIndex: "22",
							width: "100%",
							height: "200px",
							padding: "20px",
							display: "flex",
							flexDirection: "column",
							gap: "10px",
							transition: "all 500ms",
							boxShadow: isCourierModalOpen
								? "0px 0px 1000px #00000050"
								: "none",
						}}
					>
						<Box
							onClick={() => {
								setIsCourierModalOpen(false);
							}}
							sx={{
								position: "absolute",
								height: "12px",
								width: "96px",
								background: "white",
								left: "50%",
								transform: "translate(-50%)",
								top: "-20px",
								borderRadius: "20px",
							}}
						></Box>
						<Typography variant="h2">Данные курьера</Typography>
						<Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
									my: "5px",
								}}
							>
								<Typography variant="h3">
									Марка машины:
								</Typography>
								<Typography variant="h3">Lesseti</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
									my: "5px",
								}}
							>
								<Typography variant="h3">
									Номер машины:
								</Typography>
								<Typography variant="h3">
									Z 777 ZZ 01
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
									my: "5px",
								}}
							>
								<Typography variant="h3">
									Номер курьера:
								</Typography>
								<Typography variant="h3">
									+998 77 777 777 77
								</Typography>
							</Box>
						</Box>

						<Button
							sx={{
								padding: "10px 10px",
								color: "white",
								background: "#677697",
								width: "100%",
								fontSize: "1.25rem",
								fontWeight: "700",
								textTransform: "none",
							}}
						>
							Позвонить
						</Button>
					</Box>
				</>
			) : (
				<></>
			)}
			{orderObject.status == "В ожидании" ? (
				<Box
					sx={{
						position: "fixed",
						left: "0px",
						right: "0px",
						bottom: "70px",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						padding: "10px",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<Button
						sx={{
							padding: "20px 10px",
							color: "white",
							background: "#677697",
							width: "100%",
							fontSize: "1.25rem",
							fontWeight: "700",
							textTransform: "none",
						}}
					>
						Отменить заказ
					</Button>
					<Typography variant="subtitle2">
						В течении 2 часов вы можете отменить заказ
					</Typography>
				</Box>
			) : (
				<></>
			)}
		</>
	);
};

export { OrderPage };

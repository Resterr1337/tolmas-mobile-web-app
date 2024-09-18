import {
	Box,
	Typography,
	Input,
	Checkbox,
	IconButton,
	Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAddreses, useCart, useDeliveryWay, useLanguage } from "../store";

import AdditionalNumberSVG from "@/assets/CreateOrderPage/additionalPhoneNumber.svg?react";
import PaymentWayChooseSVG from "@/assets/CreateOrderPage/paymentWayChoose.svg?react";
import PromoCodeSVG from "@/assets/CreateOrderPage/promoCode.svg?react";
import ArrowToRightSVG from "@/assets/CreateOrderPage/arrowToRight.svg?react";
import ArrowToDownSVG from "@/assets/CreateOrderPage/arrowToDown.svg?react";
import TimeChooseSVG from "@/assets/CreateOrderPage/timeChoose.svg?react";
import DateChooseSVG from "@/assets/CreateOrderPage/dateChoose.svg?react";
import AddressSettingsSVG from "@/assets/CreateOrderPage/addressSettings.svg?react";
import PlusSVG from "@/assets/MyUserInfoPage/plus.svg?react";
import UzumBankSVG from "@/assets/CreateOrderPage/uzumBank.svg?react";
import HumoSVG from "@/assets/CreateOrderPage/humo.svg?react";
import VisaSVG from "@/assets/CreateOrderPage/visa.svg?react";
import UzcardSVG from "@/assets/CreateOrderPage/uzcard.svg?react";
import MastercardSVG from "@/assets/CreateOrderPage/mastercard.svg?react";

import { some_products, paymentWays } from "../data";
import { formatPrice } from "../utils/priceFormatter";
import { dayCalendarClasses } from "@mui/x-date-pickers";

const CreateOrderPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const addressArray = useAddreses((state) => state.addressArray);

	const currentDeliveryWay = useDeliveryWay(
		(state) => state.activeDeliveryWay
	);

	const cartArray = useCart((state) => state.cartArray);
	const createOrder = useCart((state) => state.createOrder);

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

	const [isAddressModalOpen, setisAddressModalOpen] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState("");
	const NavigateFunc = useNavigate();

	const [isPaymentModalOpen, setisPaymentModalOpen] = useState(false);
	const [paymentWay, setPaymentWay] = useState("");

	const [isPromoModalOpen, setisPromoModalOpen] = useState(false);
	const [promo, setPromo] = useState("");

	const [isRegModalOpen, setIsRegModalOpen] = useState(false);

	const handleCloseAddressModal = () => {
		setisAddressModalOpen(false);
	};
	const handleClosePaymentModal = () => {
		setisPaymentModalOpen(false);
	};
	const handleClosePromoModal = () => {
		setisPromoModalOpen(false);
	};

	const handleCloseRegModal = () => {
		setIsRegModalOpen(false);
	};

	const handleCreateOrder = () => {
		if (currentDeliveryWay == "delivery"){
			if (selectedAddress && paymentWay) {
			}
		}
	}

	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				{/* Дополнительный номер телефона */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "14px",
					}}
				>
					<Typography variant="h2">
						Дополнительный номер телефона
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "5px",
							padding: "12px",
						}}
					>
						<Input
							fullWidth
							sx={{
								padding: "10px 5px",
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
							variant="standard"
							placeholder="Номер телелефона"
						></Input>
						<AdditionalNumberSVG />
					</Box>
				</Box>

				{currentDeliveryWay == "delivery" ? (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<Typography variant="h2">Адрес доставки</Typography>
						<Box
							onClick={() => {
								console.log("123");
								setisAddressModalOpen(true);
							}}
							sx={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "10px",
							}}
						>
							<Typography
								width={"80%"}
								lineHeight={"1.125"}
								variant={selectedAddress ? "subtitle1" : "h4"}
							>
								{selectedAddress
									? `${
											addressArray.find(
												(item) =>
													item.id == selectedAddress
											).value
									  }`
									: "Выберите адрес"}
							</Typography>
							<ArrowToDownSVG />
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<Typography variant="h2">
							Выберите время самовывоза
						</Typography>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "12px",
							}}
						>
							<Typography variant="subtitle1">
								Выберите время
							</Typography>
							<TimeChooseSVG />
						</Box>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "10px",
							}}
						>
							<Typography variant="subtitle1">
								На след. день
							</Typography>
							<DateChooseSVG />
						</Box>
					</Box>
				)}

				{/* Тип оплаты и промокод */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "14px",
					}}
				>
					<Typography variant="h2">Выберите способ оплаты</Typography>
					<Box
						onClick={() => setisPaymentModalOpen(true)}
						sx={{
							padding: "12px",
							display: "flex",
							justifyContent: "space-between",
							gap: "5px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								gap: "10px",
								alignItems: "center",
							}}
						>
							<PaymentWayChooseSVG />
							<Typography variant="subtitle1">
								{paymentWay
									? paymentWays[paymentWay].title[
											currentLanguage
									  ]
									: "Выберите способ оплаты"}
							</Typography>
						</Box>
						<ArrowToRightSVG />
					</Box>
					<Box
						onClick={() => setisPromoModalOpen(true)}
						sx={{
							padding: "12px",
							display: "flex",
							justifyContent: "space-between",
							gap: "5px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								gap: "10px",
								alignItems: "center",
							}}
						>
							<PromoCodeSVG />
							<Typography variant="subtitle1">
								Есть промокод?
							</Typography>
						</Box>
						<ArrowToRightSVG />
					</Box>
				</Box>

				{/* Комментарий */}
				<Box>
					<Typography variant="h2">Комментарий</Typography>
					<Input
						sx={{
							padding: "10px 5px",
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
						fullWidth
						minRows={4}
						maxRows={6}
						placeholder="Оставьте комментарии"
						multiline
					></Input>
				</Box>
			</Box>

			{/* Оформление */}
			<Box
				sx={{
					position: "fixed",
					bottom: "60px",
					left: "0px",
					right: "0px",
					width: "100%",
					height: "70px",
					padding: "0px 10px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					{/* Цена без учёта скидки */}
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
						fontSize={isDiscount ? "1.5rem" : "2.25rem"}
						variant="h1"
					>
						{isDiscount
							? formatPrice(totalCostWithDiscount)
							: formatPrice(totalCost)}{" "}
						UZS
					</Typography>
					<Typography variant="subtitle2">Всего</Typography>
				</Box>

				<Box
					onClick={handleCreateOrder}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "20px 10%",
						background: "#677697",
						borderRadius: "5px",
					}}
				>
					<Typography color="white">Оформить</Typography>
				</Box>
			</Box>

			{/* Модалка Адресов */}
			<Box
				sx={{
					position: "fixed",
					background: "white",
					borderRadius: "10px",
					left: "0px",
					right: "0px",
					bottom: isAddressModalOpen ? "0%" : "-100%",
					zIndex: "22",
					width: "100%",
					height: "400px",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					transition: "all 500ms",
					boxShadow: isAddressModalOpen
						? "0px 0px 1000px #00000050"
						: "none",
				}}
			>
				<Box
					onClick={handleCloseAddressModal}
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
				<Typography variant="h2"> Мои Адреса</Typography>

				<Box sx={{ overflowX: "auto", width: "100%" }}>
					{addressArray.map((item, index) => {
						return (
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									width: "100%",
									borderBottom: "solid 1px #D9D9D9",
									padding: "10px 5px",
								}}
								key={index}
							>
								<Checkbox
									checked={
										item.id == selectedAddress
											? true
											: false
									}
									onClick={() => {
										setSelectedAddress(item.id);
										setisAddressModalOpen(
											!isAddressModalOpen
										);
									}}
									sx={{
										padding: "5px",
										color: "#D9D9D9",
										"&.Mui-checked": {
											color: "#2588FF",
										},
									}}
								/>
								<Typography width={"80%"} variant="subtitle1">
									{item.value}
								</Typography>
								<AddressSettingsSVG />
							</Box>
						);
					})}
				</Box>

				<Box
					onClick={() => {
						NavigateFunc("/userinfo/adresses");
					}}
					sx={{
						display: "flex",
						alignItems: "center",
						padding: "10px 10px",
						gap: "10px",
					}}
				>
					<IconButton>
						<PlusSVG />
					</IconButton>
					<Typography variant="subtitle1">Добавить новый</Typography>
				</Box>
			</Box>

			{/* Модалка выбора способа оплаты */}
			<Box
				sx={{
					position: "fixed",
					background: "white",
					borderRadius: "10px",
					left: "0px",
					right: "0px",
					bottom: isPaymentModalOpen ? "0%" : "-100%",
					zIndex: "22",
					width: "100%",
					height: "320px",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					transition: "all 500ms",
					boxShadow: isPaymentModalOpen
						? "0px 0px 1000px #00000050"
						: "none",
				}}
			>
				<Box
					onClick={handleClosePaymentModal}
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

				<Typography variant="h2">Способ оплаты</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: "10px",
						my: "10px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
							background: "#F2F2F2",
							borderRadius: "5px",
							padding: "5px 12px",
						}}
					>
						<Checkbox
							checked={paymentWay == "cash" ? true : false}
							onClick={() => {
								handleClosePaymentModal();
								setPaymentWay("cash");
							}}
							sx={{
								padding: "5px",
								color: "#D9D9D9",
								"&.Mui-checked": {
									color: "#2588FF",
								},
							}}
						/>
						<Box>
							<Typography variant="h3">
								Наличными или картой
							</Typography>
							<Typography lineHeight={1} variant="subtitle1">
								Оплата в филиалах или курьеру при получении
								заказа
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
							background: "#F2F2F2",
							borderRadius: "5px",
							padding: "5px 12px",
						}}
					>
						<Checkbox
							checked={paymentWay == "cards" ? true : false}
							onClick={() => {
								handleClosePaymentModal();
								setPaymentWay("cards");
							}}
							sx={{
								padding: "5px",
								color: "#D9D9D9",
								"&.Mui-checked": {
									color: "#2588FF",
								},
							}}
						/>
						<Box>
							<Typography variant="h3">
								Оплата картой Онлайн
							</Typography>
							<Typography
								my={"3px"}
								lineHeight={1}
								variant="subtitle1"
							>
								UZCARD, HUMO, Visa, MasterCard
							</Typography>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "4px",
								}}
							>
								<Box
									sx={{
										padding: "4px 4px",
										background: "white",
										borderRadius: "5px",
									}}
								>
									<UzcardSVG />
								</Box>
								<Box
									sx={{
										padding: "4px 4px",
										background: "white",
										borderRadius: "5px",
									}}
								>
									<HumoSVG />
								</Box>
								<Box
									sx={{
										padding: "4px 4px",
										background: "white",
										borderRadius: "5px",
									}}
								>
									<VisaSVG />
								</Box>
								<Box
									sx={{
										padding: "4px 15px",
										background: "white",
										borderRadius: "5px",
									}}
								>
									<MastercardSVG />
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
							background: "#F2F2F2",
							borderRadius: "5px",
							padding: "5px 12px",
						}}
					>
						<Checkbox
							checked={paymentWay == "uzumBank" ? true : false}
							onClick={() => {
								handleClosePaymentModal();
								setPaymentWay("uzumBank");
							}}
							sx={{
								padding: "5px",
								color: "#D9D9D9",
								"&.Mui-checked": {
									color: "#2588FF",
								},
							}}
						/>
						<Box>
							<UzumBankSVG />
							<Typography variant="subtitle1">
								Перенаправим в приложение Uzum Bank, где вы
								сможете оплатить заказ
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* Модалка с промокодом */}
			<Box
				sx={{
					position: "fixed",
					background: "white",
					borderRadius: "10px",
					left: "0px",
					right: "0px",
					bottom: isPromoModalOpen ? "0%" : "-100%",
					zIndex: "22",
					width: "100%",
					height: "320px",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					transition: "all 500ms",
					boxShadow: isPromoModalOpen
						? "0px 0px 1000px #00000050"
						: "none",
				}}
			>
				<Box
					onClick={handleClosePromoModal}
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

				<Typography variant="h2">Введите промокод</Typography>
				<Input
					onInput={() => {
						setPromo(event.currentTarget.value);
					}}
					sx={{
						background: "#F2F2F2",
						padding: "10px",
						fontSize: "1.25rem",
						fontWeight: "700",
						borderRadius: "5px",
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
					variant="standard"
				></Input>

				<Button
					onClick={() => {
						promo ? null : handleClosePromoModal();
					}}
					sx={{
						marginTop: "100px",
						background: "#677697",
						color: "white",
						borderRadius: "5px",
						fontWeight: "700",
						padding: "10px 5px",
						fontSize: "16px",
					}}
				>
					Применить
				</Button>
				<Button
					onClick={handleClosePromoModal}
					sx={{
						background: "white",
						padding: "5px",
						color: "black",
						borderRadius: "5px",
						fontWeight: "500",
						fontSize: "16px",
					}}
				>
					Назад
				</Button>
			</Box>

			{/* Модалка с успешным оформлением заказа */}
			<Box
				sx={{
					position: "fixed",
					background: "white",
					borderRadius: "10px",
					left: "0px",
					right: "0px",
					bottom: isRegModalOpen ? "0%" : "-100%",
					zIndex: "22",
					width: "100%",
					height: "200px",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					transition: "all 500ms",
					boxShadow: isRegModalOpen
						? "0px 0px 1000px #00000090"
						: "none",
				}}
			>
				<Box
					onClick={handleCloseRegModal}
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

				<Typography variant="h2">Успех</Typography>
				<Typography variant="h4">
					Ваш заказ успешно оформлен, чтобы проверить статус заказа
					перейдите в "Мои заказы"
				</Typography>
			</Box>
		</>
	);
};

export { CreateOrderPage };

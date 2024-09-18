import { Typography, Box, IconButton, Button, Checkbox } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/store.js";
import { HeaderNamesObj } from "../../data";
import { slashCalc } from "../../utils/slashCalc";
import { useState } from "react";
import BackSVG from "./HistoryBack.svg?react";
import ArrowToDownSVG from "./ArrowToDown.svg?react";
import { useDeliveryWay } from "../../store";
//
const Header = () => {
	const location = useLocation();
	const currentLanguage = useLanguage((state) => state.language);

	const pathName =
		slashCalc(location.pathname) < 2
			? location.pathname
			: location.pathname.substring(
					0,
					location.pathname.lastIndexOf("/")
			  );

	const HeaderTitle = HeaderNamesObj[pathName][currentLanguage];

	const NavigateFunc = useNavigate();

	const deliveryWay = useDeliveryWay((state) => state.activeDeliveryWay);
	const deliveryWayArray = useDeliveryWay((state) => state.deliveryWayArray);
	const changeActiveDeliveryWay = useDeliveryWay((state) => state.changeActiveDeliveryWay);

	const [isDeliveryWayOpen, setIsDeliveryWayOpen] = useState(false);

	return (
		<>
			<Box
				sx={{
					width: "100vw",
					background: "#FFFFFF99",
					backdropFilter: "blur(15px)",
					position: "fixed",
					padding: "7px 10px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottom: "1px solid #00000050",
					zIndex: "20",
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "10px",
					}}
				>
					<Box sx={{ display: "flex" }}>
						{pathName !== "/" ? (
							<IconButton
								onClick={() => {
									if (pathName == "/search") {
										NavigateFunc("/");
									} else {
										NavigateFunc(-1);
									}
								}}
							>
								<BackSVG />
							</IconButton>
						) : (
							<></>
						)}
						<Box>
							{" "}
							<Typography
								color="text.secondary"
								fontWeight={700}
								variant="h1"
							>
								{HeaderTitle}
							</Typography>
							<Typography
								color="text.secondary"
								variant="subtitle1"
							>
								{currentLanguage == "rus"
									? "Магазин аксессуаров и парфюмерии"
									: "Aksessuarlar va parfyumeriya do'koni"}
							</Typography>
						</Box>
					</Box>

					{pathName == "/createOrder" ? (
						<>
							<Box
								onClick={() => {
									setIsDeliveryWayOpen(true);
								}}
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									border: "1px solid black",
									borderRadius: "5px",
									padding: "5px",
								}}
							>
								<Typography
									sx={{ fontSize: "0.6rem" }}
									lineHeight={1}
									variant="subtitle2"
								>
									{currentLanguage == "rus"
										? "Тип доставки"
										: "Yetkazib berish turi"}
								</Typography>
								<Typography
									sx={{
										display: "flex",
										alignItems: "center",
									}}
									lineHeight={1.125}
									fontWeight={700}
									variant="subtitle2"
									fonstSize={"0.55rem"}
								>
									{
										deliveryWayArray.find(
											(item) => item.value == deliveryWay
										).title[currentLanguage]
									}
									<ArrowToDownSVG />
								</Typography>
							</Box>

							{/* Модалка с выбором типа доставки */}

							<Box
								sx={{
									position: "fixed",
									background: "white",
									borderRadius: "10px",
									left: "0px",
									right: "0px",
									bottom: isDeliveryWayOpen
										? "-90.5vh"
										: "-200vh",
									zIndex: "24",
									width: "100%",
									height: "250px",
									padding: "20px",
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									transition: "all 500ms",
									boxShadow: isDeliveryWayOpen
										? "0px 0px 1000px #00000050"
										: "none",
								}}
							>
								<Box
									onClick={() => {
										setIsDeliveryWayOpen(false);
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
								<Typography variant="h2">
									Способ доставки
								</Typography>

								<Box>
									{deliveryWayArray.map((item, key) => {
										return (
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<Checkbox
													checked={item.value == deliveryWay? true : false}
													onChange={() => {changeActiveDeliveryWay(item.value)}}
													sx={{
														color: "#D9D9D9",
														"&.Mui-checked": {
															color: "#2588FF",
														},
													}}
												/>
												<Typography variant="h4">
													{
														item.title[
															currentLanguage
														]
													}
												</Typography>
											</Box>
										);
									})}
								</Box>

								<Button
									onClick={() => {
										setIsDeliveryWayOpen(false);
									}}
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
									Выбрать
								</Button>
							</Box>
						</>
					) : (
						<></>
					)}
				</Box>
			</Box>
		</>
	);
};

export { Header };

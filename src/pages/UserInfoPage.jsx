import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SettingsSVG from "@/assets/MyUserInfoPage/settings.svg?react";
import MyOrdersSVG from "@/assets/MyUserInfoPage/myOrders.svg?react";
import MyAdressSVG from "@/assets/MyUserInfoPage/myAdresses.svg?react";
import AboutCompanySVG from "@/assets/MyUserInfoPage/aboutCompany.svg?react";
import ChangeLanguageSVG from "@/assets/MyUserInfoPage/changeLanguage.svg?react";
import QuitSVG from "@/assets/MyUserInfoPage/quit.svg?react";
import FeedBackSVG from "@/assets/MyUserInfoPage/feedBack.svg?react";
import { useLanguage, useUser } from "../store";

const UserInfoPage = () => {
	const currentLanguage = useLanguage((state) => state.language);
	const NavigateFunc = useNavigate();
	const userSettings = useUser((state) => state.userSettings);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
			<Box
				onClick={() => NavigateFunc("settings")}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					my: "10px",
				}}
			>
				<Box
					sx={{ display: "flex", alignItems: "center", gap: "10px" }}
				>
					<Box
						sx={{
							background: "gray",
							height: "80px",
							width: "80px",
							borderRadius: "100%",
							backgroundSize: "cover",
							backgroundPosition: "50% 50%",
							backgroundRepeat: "no-repeat",
						}}
					></Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "5px",
						}}
					>
						<Typography variant="h2">
							{userSettings.name} {userSettings.surName}
						</Typography>
						<Typography variant="subtitle1">
							+998 33 999 99 99
						</Typography>
					</Box>
				</Box>
				<SettingsSVG />
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<Box
					onClick={() => NavigateFunc("/myorders")}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px",
						cursor: "pointer",
					}}
				>
					<MyOrdersSVG />
					<Typography fontSize="1.125rem" variant="h4">
						{currentLanguage == "rus"
							? "Мои заказы"
							: "Mening buyurtmalarim"}
					</Typography>
				</Box>
				<Box
					onClick={() => NavigateFunc("adresses")}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px",
						cursor: "pointer",
					}}
				>
					<MyAdressSVG />
					<Typography fontSize="1.125rem" variant="h4">
						{currentLanguage == "rus"
							? "Мои адреса"
							: "Mening manzillarim"}
					</Typography>
				</Box>
				<Box
					onClick={() => NavigateFunc("aboutCompany")}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px",
						cursor: "pointer",
					}}
				>
					<AboutCompanySVG />
					<Typography fontSize="1.125rem" variant="h4">
						{currentLanguage == "rus"
							? "О компании"
							: "Kompaniya haqida"}
					</Typography>
				</Box>
				<Box
					onClick={() => NavigateFunc("changeLanguage")}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px",
						cursor: "pointer",
					}}
				>
					<ChangeLanguageSVG />
					<Typography fontSize="1.125rem" variant="h4">
						{currentLanguage == "rus"
							? "Смена языка"
							: "Tilni o'zgartirish"}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						padding: "10px",
						cursor: "pointer",
					}}
				>
					<QuitSVG />
					<Typography fontSize="1.125rem" variant="h4">
						{currentLanguage == "rus" ? "Выход" : "Chiqish"}
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					padding: "15px 5px",
					width: "100%",
					background: "#F4F7F9",
					display: "flex",
					alignItems: "center",
					gap: "10px",
					my: "20px",
					cursor: "pointer",
				}}
			>
				<FeedBackSVG />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "2px",
					}}
				>
					<Typography variant="subtitle1">{currentLanguage == "rus" ? "Для связи" : "Aloqa uchun"}</Typography>
					<Typography variant="h3">+998 33 999 99 99</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export { UserInfoPage };

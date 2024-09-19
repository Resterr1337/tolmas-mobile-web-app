import {
	Box,
	Typography,
	BottomNavigation,
	BottomNavigationAction,
} from "@mui/material";

import { useState } from "react";

import HomeSVG from "@/assets/NavigationPanel/home.svg?react";
import ShoppingBagSVG from "@/assets/NavigationPanel/shopping-bag.svg?react";
import ShoppingCartSVG from "@/assets/NavigationPanel/shopping-cart.svg?react";
import UserSVG from "@/assets/NavigationPanel/user.svg?react";
import WishesSVG from "@/assets/NavigationPanel/wishes.svg?react";

import "@/components/NavigationPanel/NavigationPanel.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../store";

const NavigationPanel = () => {
	const currentLanguage = useLanguage((state) => state.language)
	const [value, setValue] = useState(useLocation().pathname);
	const navigateFunc = useNavigate();

	return (
		<>
			<BottomNavigation
				sx={{
					transition:"all 500ms",
					width: "100%",
					position: "fixed",
					background: "#FFFFFF80",
					backdropFilter: "blur(10px)",
					right: "0",
					bottom: "0",
					left: "0",
					borderTop: "1px solid #00000050",
					zIndex: "20",
				}}
				onChange={(event, newValue) => {
					setValue(newValue);
					navigateFunc(newValue);
				}}
				value={value}
				showLabels
			>
				<BottomNavigationAction
					sx={{
						padding: "0 0",
					}}
					value={"/"}
					label={<Typography variant="h6">{currentLanguage=="rus"? "Главная": "Bosh sahifa"}</Typography>}
					icon={<HomeSVG />}
				/>
				<BottomNavigationAction
					sx={{
						padding: "0 0",
					}}
					value={"/mywishes"}
					label={<Typography variant="h6">{currentLanguage=="rus"? "Мои желания": "Istaklarim"}</Typography>}
					icon={<WishesSVG />}
				/>
				<BottomNavigationAction
					sx={{
						padding: "0 0",
					}}
					value={"/myorders"}
					label={<Typography variant="h6">{currentLanguage=="rus"? "Мои заказы": "Buyurtmalarim"}</Typography>}
					icon={<ShoppingBagSVG />}
				/>
				<BottomNavigationAction
					sx={{
						padding: "0 0",
					}}
					value={"/mycart"}
					label={<Typography variant="h6">{currentLanguage=="rus"? "Корзина": "Savat"}</Typography>}
					icon={<ShoppingCartSVG style={{transform: "translateX(-3px)"}} />}
				/>
				<BottomNavigationAction
					sx={{
						padding: "0 0",
					}}
					value={"/userinfo"}
					label={<Typography variant="h6">{currentLanguage=="rus"? "Аккаунт": "Hisob"}</Typography>}
					icon={<UserSVG />}
				/>
			</BottomNavigation>
		</>
	);
};
export { NavigationPanel };

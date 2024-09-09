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

import "@/components/NavigationPanel/NavigationPanel.css"
import { useLocation, useNavigate } from "react-router-dom";

const NavigationPanel = () => {
	const [value, setValue] = useState(useLocation().pathname);
	const navigateFunc = useNavigate()
	

	return (
		<>
			<BottomNavigation
				sx={{
					width: "100%",
					position: "fixed",
					background: "#FFFFFF50",
					backdropFilter: "blur(10px)",
					right: "0",
					bottom: "0",
					left: "0",
					borderTop:"1px solid #00000050",
				}}
				onChange={(event, newValue) => {
					setValue(newValue);
					navigateFunc(newValue)
				}}
				value={value}
				showLabels
			>
				<BottomNavigationAction
					value={"/"}
					label={<Typography variant="h6">Главная</Typography>}
					icon={<HomeSVG />}
				/>
				<BottomNavigationAction
					value={"/mywishes"}
					label={<Typography variant="h6">Мои желания</Typography>}
					icon={<WishesSVG />}
				/>
				<BottomNavigationAction
					value={"/myorders"}
					label={<Typography variant="h6">Мои заказы</Typography>}
					icon={<ShoppingBagSVG />}
				/>
				<BottomNavigationAction
					value={"/mycart"}
					label={<Typography variant="h6">Корзина</Typography>}
					icon={<ShoppingCartSVG />}
				/>
				<BottomNavigationAction
					value={"/userinfo"}
					label={<Typography variant="h6">Аккаунт</Typography>}
					icon={<UserSVG />}
				/>
			</BottomNavigation>
		</>
	);
};
export { NavigationPanel };

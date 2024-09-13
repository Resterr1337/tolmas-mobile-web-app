import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { MyWishesPage } from "./pages/MyWishesPage.jsx";
import { MyOrdersPage } from "./pages/MyOrdersPage.jsx";
import { MyCartPage } from "./pages/MyCartPage.jsx";
import { UserInfoPage } from "./pages/UserInfoPage.jsx";
import { Layout } from "./components/Layout.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { CategoriesPage } from "./pages/CategoriesPage.jsx";
import { SubCategoriesPage } from "./pages/SubCategoriesPage.jsx";

// Доделать роутинг
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <HomePage/>,
			},
			{
				path: "product/:id",
				element: <ProductPage />,
			},
			{
				path: "category/:category",
				element: <CategoriesPage />,
			},
			{
				path: "subcategory/:subcategory",
				element: <SubCategoriesPage />,
			},
			{
				path: "mywishes",
				element: <MyWishesPage />,
			},
			{
				path: "myorders",
				element: <MyOrdersPage />,
			},
			{
				path: "mycart",
				element: <MyCartPage />,
			},
			{
				path: "userinfo",
				element: <UserInfoPage />,
			},
		],
	},
]);

export { router };

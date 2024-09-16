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
import { SearchQueryPage } from "./pages/SearchQueryPage.jsx";
import { AddresesPage } from "./pages/AddressesPage.jsx";
import { ChangeLanguagePage } from "./pages/ChangeLanguagePage.jsx";
import { AboutCompanyPage } from "./pages/AboutCompanyPage.jsx";
import { UserSettingsPage } from "./pages/UserSettingsPage.jsx";

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
				path: "search/?",
				element: <SearchQueryPage/>,
			},
			{
				path: "product/:id",
				element: <ProductPage />,
			},
			{
				path: "categories",
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
			{
				path:"userinfo/adresses",
				element: <AddresesPage/>
			},
			{
				path:"userinfo/aboutCompany",
				element: <AboutCompanyPage/>
			},
			{
				path:"userinfo/changeLanguage",
				element: <ChangeLanguagePage/>
			},
			{
				path:"userinfo/settings",
				element: <UserSettingsPage/>
			},
		],
	},
]);

export { router };

import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/HomePage.jsx";
import { Layout } from "./components/Layout.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

// Доделать роутинг
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export {router}
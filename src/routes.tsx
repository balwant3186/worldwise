import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

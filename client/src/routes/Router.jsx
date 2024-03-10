import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ProductLists from "../pages/shop/ProductLists";
import SignUp from "../components/SignUp";
import UpdateProfile from "../pages/dashboard/UpdateProfile";

import ProtectedRoute from "./ProtectedRoute";
import CartTable from "../components/CartTable";
import Cart from "../layout/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <ProductLists />
          </ProtectedRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      {
        path: "/cart",
        element: <CartTable />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;

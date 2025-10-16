import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
// PrivateLayout 불러오기
import PrivateLayout from "../layouts/PrivateLayout";
// AuthLayout 불러오기
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  // PrivateLayout 적용
  {
    Component: PrivateLayout,
    children: [
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  // AuthLayout 적용
  {
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
export default router;

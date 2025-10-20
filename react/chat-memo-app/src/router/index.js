import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import PrivateLayout from "../../../redux-app/src/layouts/PrivateLayout";
import AuthLayout from "../../../redux-app/src/layouts/AuthLayout";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import ChatList from "../pages/ChatList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
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
  {
    Component: PrivateLayout,
    children: [
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "chat",
        Component: Chat,
      },
      {
        path: "chatlist",
        Component: ChatList,
      },
    ],
  },
]);

export default router;

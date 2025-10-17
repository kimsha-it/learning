import { createBrowserRouter } from "react-router-dom";
import RootRayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/chat",
        Component: Chat,
      },
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

// createBrowserRouter 함수 불러오기
// 라우터 설정을 생성하는 함수
// 라우터: 주소와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home.jsx";
import About from "../pages/RootPages/About.jsx";
import Profile from "../pages/RootPages/Profile.jsx";
import PostList from "../pages/RootPages/PostList.jsx";
import PostDetail from "../pages/RootPages/PostDetail.jsx";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout.jsx";
import ProtectedLayout from "../layout/ProtectedLayout.jsx";

import AuthHome from "../pages/AuthPages/AuthHome.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";
import Login from "../pages/AuthPages/Login.jsx";

// 경로 상수 불러오기
import PATHS from "../constants/path.jsx";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본 경로
        // 완성되는 path: "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },

      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },
      {
        path: PATHS.ROOT.PROFILE,
        Component: PostDetail,
      },

      // {
      //   path: "profile",
      //   Component: Profile,
      // },
      {
        Component: ProtectedLayout,
        children: [
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },

  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: DummyHome,
      },
    ],
  },
]);

// 라우터 내보내기
export default router;

// createBrowserRouter 함수 불러오기
// 라우터 설정을 생성하는 함수
// 라우터: 주소와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 페이지 컴포넌트 불러오기
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },

  {
    path: "/profile",
    Component: Profile,
  },
]);

// 라우터 내보내기
export default router;

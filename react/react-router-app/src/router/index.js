// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// RootLayout 관련 경로 배열 불러오기
import rootRoutes from "./routes/rootRoutes.js";
import authRoutes from "./routes/authRoutes.js";
// 404 처리 페이지
import NotFound from "../pages/NotFound.jsx";

// 라우터 설정 생성
const router = createBrowserRouter([
  // 스프레드 연산자(...)로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,

  {
    // 모든 주소에 매핑되는 path
    path: "*", // *: 모든 것에 매핑(일치)되는 특수문자
    Component: NotFound,
  },
]);

export default router;

// 레이아웃 컴포넌트와 페이지 컴포넌트 불러오기
import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome.jsx";
import Signup from "../../pages/AuthPages/Signup.jsx";
import Login from "../../pages/AuthPages/Login.jsx";

// 경로 상수 불러오기
import PATHS from "../../constants/paths.js";

//AuthLayout의 경로 배열을 작성
const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
];

// 경로 배열을 내보내기
export default authRoutes;

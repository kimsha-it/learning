// 인증 관련 레이아웃
// 로그인 사용자의 접근 막는 레이아웃
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const token = useSelector((state) => state.auth.token);

  // 토큰이 있으면(로그인 했으면)
  if (token) {
    // 로그인한 사용자라면 프로필 페이지로 이동
    return <Navigate to="/profile" replace></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}

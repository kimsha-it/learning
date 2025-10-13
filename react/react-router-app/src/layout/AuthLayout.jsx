import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  const baseClass = "border-2 border-amber-300 p-2";
  const activeClass = "border-2 border-red-900";

  return (
    <div>
      <div className="flex gap-2">
        <NawLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth"
        >
          인증 홈페이지
        </NawLink>
        <NawLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth/login"
        >
          로그인 홈페이지
        </NawLink>
        <NawLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth/signup"
        >
          회원가입 홈페이지
        </NawLink>
        <NawLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
          to="/auth/authhome"
        >
          홈페이지
        </NawLink>
      </div>

      <div className="text-center">사용자 인증 관리 레이아웃</div>
      <Outlet></Outlet>
    </div>
  );
}

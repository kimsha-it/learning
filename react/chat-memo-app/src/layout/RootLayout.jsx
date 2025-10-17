import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navItems = [
    { path: "/", label: "Memo AI" },
    { path: "/chat", label: "메모 작성" },
    { path: "/chatlist", label: "메모 목록" },
  ];

  const navigate = useNavigate();
  const activeNavItemClass = "bg-blue-50 text-blue-700 border border-blue-200";

  return (
    <div>
      <div className="h-screen bg-gray-50 flex-row">
        {/*네비게이션바 */}
        <nav className="bg-white border-b border-gray-200 h-20 w-full flex-shrink-0 flex justify-between">
          <div className="flex flex-row gap-4 p-4">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    ` px-4 py-3 text-sm  ${
                      isActive ? activeNavItemClass : "text-gray-600 "
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <div className="flex flex-row gap-2 p-2">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 p-2 m-2 text-white"
            >
              로그인
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gray-500 p-2 m-2 text-white"
            >
              회원가입
            </button>
          </div>
        </nav>
        {/* 메인 컨텐츠 - 중앙 배치 */}
        <div className="flex-1 flex justify-center overflow-y-auto">
          <div className="w-full max-w-6xl h-full flex flex-col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

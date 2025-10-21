// import React from "react";
// import { Outlet, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function RootLayout() {
//   const navItems = [
//     { path: "/", label: "Memo AI" },
//     { path: "/chat", label: "메모 작성" },
//     { path: "/chatlist", label: "메모 목록" },
//   ];

//   const navigate = useNavigate();
//   const activeNavItemClass = "bg-blue-50 text-blue-700 border border-blue-200";

//   return (
//     <div>
//       <div className="h-screen bg-gray-50 flex-row">
//         {/*네비게이션바 */}
//         <nav className="bg-white border-b border-gray-200 h-20 w-full flex-shrink-0 flex justify-between">
//           <div className="flex flex-row gap-4 p-4">
//             {navItems.map((item) => {
//               return (
//                 <NavLink
//                   key={item.path}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     ` px-4 py-3 text-sm  ${
//                       isActive ? activeNavItemClass : "text-gray-600 "
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               );
//             })}
//           </div>

//           <div className="flex flex-row gap-2 p-2">
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-blue-500 p-2 m-2 text-white"
//             >
//               로그인
//             </button>
//             <button
//               onClick={() => navigate("/signup")}
//               className="bg-gray-500 p-2 m-2 text-white"
//             >
//               회원가입
//             </button>
//           </div>
//         </nav>
//         {/* 메인 컨텐츠 - 중앙 배치 */}
//         <div className="flex-1 flex justify-center overflow-y-auto">
//           <div className="w-full max-w-6xl h-full flex flex-col">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RootLayout() {
  const token = useSelector((state) => state.auth.token);

  const navItems = [
    { path: "/", label: "Memo AI" },
    { path: "/chat", label: "메모 작성" },
    { path: "/chatlist", label: "메모 목록" },
  ];

  const navigate = useNavigate();
  const activeNavItemClass =
    "text-[#5c5042] border-b-2 border-[#bfa98e] font-semibold";

  return (
    <div className="min-h-screen bg-[#f8f4ec] flex flex-col font-serif">
      {/* 네비게이션바 */}
      <nav className="bg-[#f2e8dc] border-b border-[#e4d6c3] shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* 로고 및 메뉴 */}
          <div className="flex items-center gap-6 flex-wrap">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#e9dfd1] hover:text-[#4b4033] ${
                    isActive ? activeNavItemClass : "text-[#7a6b58]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* 로그인 / 회원가입 버튼 */}
          <div className="flex gap-3">
            {token ? (
              <button
                onClick={() => navigate("/profile")}
                className="px-4 py-2 bg-[#bfa98e] text-white rounded-lg shadow hover:bg-[#a6907a] transition-all duration-200"
              >
                마이페이지
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 bg-[#bfa98e] text-white rounded-lg shadow hover:bg-[#a6907a] transition-all duration-200"
                >
                  로그인
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 bg-[#d1c0a5] text-[#4b4033] rounded-lg shadow hover:bg-[#c3ae91] transition-all duration-200"
                >
                  회원가입
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* main */}
      <main className="flex-grow flex justify-center items-start p-6 overflow-y-auto">
        <div className="w-full max-w-5xl bg-[#fffaf2] rounded-2xl shadow-md p-8 mt-6 border border-[#e6dccb]">
          <Outlet />
        </div>
      </main>

      {/* footer */}
      <footer className="text-center py-4 text-[#8b7b68] text-sm border-t border-[#e6dccb]">
        © {new Date().getFullYear()} Memo AI ☕
      </footer>
    </div>
  );
}

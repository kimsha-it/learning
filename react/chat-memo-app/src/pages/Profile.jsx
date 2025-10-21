// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// export default function Profile() {
//   const dispatch = useDispatch();

//   const token = useSelector((state) => state.auth.token);

//   const [decodToken, setDecodeToken] = useState(null);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (token) {
//       setDecodeToken(jwtDecode(token));
//     } else {
//     }
//   }, [token]);

//   console.log(decodToken);

//   function handleLogout() {
//     dispatch(logout());
//   }

//   return (
//     <div>
//       <div>{token ? token : "로그인을 해주세요."}</div>
//       <div>
//         {decodToken ? `이메일: ${decodToken.email}` : "로그인을 해주세요."}
//       </div>
//       <div>
//         <button
//           className="border-2"
//           onClick={() => {
//             handleLogout();
//           }}
//         >
//           로그아웃
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [decodToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setDecodeToken(jwtDecode(token));
    } else {
      navigate("/login");
    }
  }, [token]);

  function handleLogout() {
    dispatch(logout());
    localStorage.removeItem("token");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4ec]">
      <div className="bg-[#fcfaf5] p-8 rounded-2xl shadow-md border border-[#e0d6c2] w-full max-w-md flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-center text-[#5a4633] mb-4">
          ☕ 마이페이지
        </h2>

        <div className="text-[#4a3c2a] text-center">
          {token ? (
            <p className="mb-2">
              {decodToken
                ? `이메일: ${decodToken.email}`
                : "로그인을 해주세요."}
            </p>
          ) : (
            <p className="mb-2">로그인을 해주세요.</p>
          )}
        </div>

        <button
          className="bg-[#d2b48c] text-white py-2 rounded-lg shadow-md
                     hover:bg-[#c1a175] transition-all cursor-pointer font-medium"
          onClick={() => handleLogout()}
        >
          로그아웃
        </button>
        <button
          className="bg-[#b6a895] text-white py-2 rounded-lg shadow-md
                     hover:bg-[#b4a48d] transition-all cursor-pointer font-medium"
          onClick={() => navigate("/")}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

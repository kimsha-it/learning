// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // token 상태는 로그인을 성공하면 값이 존재
//   const token = useSelector((state) => {
//     return state.auth.token;
//   });

//   useEffect(() => {
//     if (token) {
//       alert("로그인 상태입니다.");
//       console.log(token);
//       // navigate("/profile");
//     }
//   }, [token]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(login({ email: email, password: password }));
//   }

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           handleSubmit(e);
//         }}
//       >
//         <input className="border-2"
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input className="border-2"
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <input className="border-2" type="submit" value="로그인" />
//       </form>
//     </div>
//   );
// }

























import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // token 상태는 로그인을 성공하면 값이 존재
  const token = useSelector((state) => {
    return state.auth.token;
  });

  useEffect(() => {
    if (token) {
      alert("로그인 상태입니다.");
      console.log(token);
      // navigate("/profile");
    }
  }, [token]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4ec]">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-[#fcfaf5] p-8 rounded-2xl shadow-md border border-[#e0d6c2] w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-center text-[#5a4633] mb-4">
          ☕ 로그인
        </h2>

        <input
          className="border border-[#e0d6c2] rounded-lg px-4 py-2 bg-[#fbf8f3]
                     text-[#4a3c2a] placeholder-[#b8a88a] focus:outline-none
                     focus:ring-2 focus:ring-[#d2b48c]"
          type="email"
          value={email}
          placeholder="이메일을 입력하세요"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border border-[#e0d6c2] rounded-lg px-4 py-2 bg-[#fbf8f3]
                     text-[#4a3c2a] placeholder-[#b8a88a] focus:outline-none
                     focus:ring-2 focus:ring-[#d2b48c]"
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="bg-[#d2b48c] text-white py-2 rounded-lg shadow-md
                     hover:bg-[#c1a175] transition-all cursor-pointer font-medium"
          type="submit"
          value="로그인"
        />
      </form>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signup, resetIsSignup } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isSignup = useSelector((state) => state.auth.isSignup);
//   const error = useSelector((state) => state.auth.error);

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(signup({ email: email, password: password }));
//   }

//   useEffect(() => {
//     if (isSignup === true) {
//       // 회원가입을 성공 했다면
//       alert("회원가입을 성공했습니다. 메일함을 확인해주세요.");
//       dispatch(resetIsSignup());
//       navigate("/");
//     }
//   }, [isSignup, dispatch]);

//   return (
//     <div>
//       <form className="flex justify-center"
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
//         <input className="border-2" type="submit" value="회원가입" />
//       </form>
//     </div>
//   );
// }





















import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup, resetIsSignup } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSignup = useSelector((state) => state.auth.isSignup);
  const error = useSelector((state) => state.auth.error);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signup({ email: email, password: password }));
  }

  useEffect(() => {
    if (isSignup === true) {
      // 회원가입을 성공 했다면
      alert("회원가입을 성공했습니다. 메일함을 확인해주세요.");
      dispatch(resetIsSignup());
      navigate("/");
    }
  }, [isSignup, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4ec]">
      <form
        className="bg-[#fcfaf5] p-8 rounded-2xl shadow-md border border-[#e0d6c2] w-full max-w-md flex flex-col gap-4"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className="text-2xl font-semibold text-center text-[#5a4633] mb-4">
          ☕ 회원가입
        </h2>

        <input
          className="border border-[#e0d6c2] rounded-lg px-4 py-2 bg-[#fbf8f3]
                     text-[#4a3c2a] placeholder-[#b8a88a] focus:outline-none
                     focus:ring-2 focus:ring-[#d2b48c]"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="border border-[#e0d6c2] rounded-lg px-4 py-2 bg-[#fbf8f3]
                     text-[#4a3c2a] placeholder-[#b8a88a] focus:outline-none
                     focus:ring-2 focus:ring-[#d2b48c]"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="bg-[#d2b48c] text-white py-2 rounded-lg shadow-md
                     hover:bg-[#c1a175] transition-all cursor-pointer font-medium"
          type="submit"
          value="회원가입"
        />
      </form>
    </div>
  );
}

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
    <div>
      <form className="flex justify-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input className="border-2"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input className="border-2"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input className="border-2" type="submit" value="회원가입" />
      </form>
    </div>
  );
}

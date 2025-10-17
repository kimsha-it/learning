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
    }
  }, [token]);

  console.log(decodToken);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div>
      <div>{token ? token : "로그인을 해주세요."}</div>
      <div>
        {decodToken ? `이메일: ${decodToken.email}` : "로그인을 해주세요."}
      </div>
      <div>
        <button
          className="border-2"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

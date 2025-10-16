import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

// 로그아웃 버튼
// 만약에 로그인을 했다면 사용자 정보를 출력
// 사용자 정보는 전역 상태 token에 저장된 상황
export default function Profile() {
  // dispatch 전역 함수
  const dispatch = useDispatch();

  // 전역상태 token
  const token = useSelector((state) => state.auth.token);

  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // 토큰이 있다 => 로그인을 한 상태
    if (token) {
      // 토큰 복호화 => 사용자 정보 불러오기
      setDecodeToken(jwtDecode(token));
    } else {
      // 로그인 상태가 아니라면, 로그인 상태로 보내기
      // navigate("/login");
    }
  }, [token]);

  // // 토큰(token) 복호화 코드
  // const decodToken = jwtDecode(token);

  console.log(decodToken);

  // 로그아웃 핸들러 함수
  function handleLogout() {
    // dispatch 함수로 logout 액션을 스토어에 전달
    dispatch(logout());
    // 로그아웃 성공했다면 token=null
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

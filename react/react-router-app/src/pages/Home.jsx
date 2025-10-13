import React from "react";
// a태그를 대체하는 Link 컴포넌트
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold">Homepage</h1>
      {/* to 속성: 어떤 주소로 이동할 것인지 */}
      {/* 내부에서 이동할 땐 a태그 사용 X */}
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/profile">사용자 정보</Link>
    </div>
  );
}

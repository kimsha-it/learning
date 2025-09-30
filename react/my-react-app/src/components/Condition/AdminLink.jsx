import React from "react";

export default function AdminLink({ isAdmin }) {
  return (
    <div>
      <p>현재 권한: {isAdmin === true ? "관리자" : "일반 사용자"}</p>
      <p className="text-blue-400">
        {isAdmin === true && <a>관리 페이지 이동</a>}
      </p>
    </div>
  );
}

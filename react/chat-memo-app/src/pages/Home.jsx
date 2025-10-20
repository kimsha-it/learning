import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <p className="font-bold text-5xl">Memo AI</p>
      <p className="text-2xl">지능형 메모 관리</p>
      <button
        className="bg-gray-300 p-2 m-2 cursor-grab"
        onClick={() => navigate("/chat")}
      >
        메모 작성하기
      </button>
      <button
        className="border-2 p-2 m-2 cursor-grab"
        onClick={() => navigate("/chatlist")}
      >
        메모 목록 보기
      </button>

     
    </div>
  );
}

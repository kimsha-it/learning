// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="text-center">
//       <p className="font-bold text-5xl">Memo AI</p>
//       <p className="text-2xl">지능형 메모 관리</p>
//       <button
//         className="bg-gray-300 p-2 m-2 cursor-grab"
//         onClick={() => navigate("/chat")}
//       >
//         메모 작성하기
//       </button>
//       <button
//         className="border-2 p-2 m-2 cursor-grab"
//         onClick={() => navigate("/chatlist")}
//       >
//         메모 목록 보기
//       </button>

//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center flex flex-col items-center justify-center h-full space-y-8 bg-gradient-to-b from-[#f5f0e6] to-[#f0e6d2] rounded-2xl p-10 shadow-inner">
      {/* 앱 제목 */}
      <div>
        <h1 className="font-serif text-6xl text-[#5b4636] drop-shadow-sm">
          Memo AI
        </h1>
        <p className="text-2xl text-[#7a5c3a] mt-3 font-light">
          지능형 메모 관리 도우미
        </p>
        <p className="text-[#7a5c3a] mt-3 font-light">
          자연어로 할 일을 입력하면 AI가 자동으로 구조화된 메모로 변환해주는{" "}
          <br /> 지능형 메모 관리 서비스입니다.
        </p>
      </div>

      {/* 버튼 섹션 */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={() => navigate("/chat")}
          className="bg-[#dac9aa] hover:bg-[#aca08b] text-[#5b4636] px-6 py-3 rounded-xl font-medium shadow-md transition transform hover:scale-105"
        >
          ✍️ 메모 작성하기
        </button>
        <button
          onClick={() => navigate("/chatlist")}
          className="bg-[#fffaf2] border border-[#d6c4a3] hover:bg-[#f5e9d8] text-[#5b4636] px-6 py-3 rounded-xl font-medium shadow-md transition transform hover:scale-105"
        >
          📜 메모 목록 보기
        </button>
      </div>

      {/* 하단 설명문구 */}
      <p className="text-sm text-[#a78b6f] mt-10 italic">
        “따뜻한 감성으로 당신의 하루를 기록하세요.”
      </p>
    </div>
  );
}

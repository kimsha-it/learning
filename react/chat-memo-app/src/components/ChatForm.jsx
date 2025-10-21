// import React from "react";

// export default function ChatForm({ prompt, setPrompt, onSubmit, isLoading }) {
//   return (
//     <form onSubmit={onSubmit} className="flex w-full gap-2">
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder={isLoading ? "답변 생성 중..." : "메시지를 입력하세요..."}
//         disabled={isLoading}
//         className="flex-grow px-3 py-2 border rounded"
//       />
//       <button
//         type="submit"
//         disabled={isLoading || !prompt.trim()}
//         className="px-4 py-2 bg-blue-500 text-white rounded h-10"
//       >
//         전송
//       </button>
//     </form>
//   );
// }

























import React from "react";

export default function ChatForm({ prompt, setPrompt, onSubmit, isLoading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full gap-3 bg-[#fbf8ef] p-4 rounded-2xl shadow-inner border border-[#e6dcc2]"
    >
      {/* 입력창 */}
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={
          isLoading ? "답변을 생성 중입니다..." : "메시지를 입력하세요..."
        }
        disabled={isLoading}
        className="flex-grow px-4 py-2 bg-[#f9f5e7] border border-[#d8ccb3] rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-[#cbb994] text-[#5c4b3b]
                   placeholder-[#b1a58a] transition-all duration-200"
      />

      {/* 전송 버튼 */}
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className={`px-6 py-2 rounded-xl font-semibold text-white transition-all duration-200 
          ${
            isLoading || !prompt.trim()
              ? "bg-[#d4c6a8] cursor-not-allowed"
              : "bg-[#b28b67] hover:bg-[#a37a55]"
          }`}
      >
        {isLoading ? "전송 중..." : "전송"}
      </button>
    </form>
  );
}

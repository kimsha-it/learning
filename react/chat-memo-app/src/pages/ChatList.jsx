// import { useEffect, useState } from "react";

// export default function ChatList() {
//   const [memos, setMemos] = useState([]);

//   // 로컬 스토리지에서 메모 불러오기
//   useEffect(() => {
//     const stored = localStorage.getItem("memos");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       parsed.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
//       setMemos(parsed);
//     }
//   }, []);

//   // 완료 상태 토글
//   function toggleComplete(id) {
//     const updated = memos.map((memo) =>
//       memo.id === id ? { ...memo, isCompleted: !memo.isCompleted } : memo
//     );
//     setMemos(updated);
//     localStorage.setItem("memos", JSON.stringify(updated));
//   }

//   // 메모 삭제
//   function deleteMemo(id) {
//     const updated = memos.filter((memo) => memo.id !== id);
//     setMemos(updated);
//     localStorage.setItem("memos", JSON.stringify(updated));
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-center">메모 목록</h2>

//       {memos.length === 0 ? (
//         <p className="text-center text-gray-500">저장된 메모가 없습니다.</p>
//       ) : (
//         <ul className="space-y-3">
//           {memos.map((memo) => (
//             <li
//               key={memo.id}
//               className={`p-4 rounded-lg shadow flex justify-between items-center ${
//                 memo.isCompleted ? "bg-green-100" : "bg-white"
//               }`}
//             >
//               <div>
//                 <h3 className="font-semibold">{memo.title}</h3>
//                 <p className="text-gray-600 text-sm">{memo.content}</p>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   className="px-2 py-1 bg-yellow-400 text-white rounded"
//                   onClick={() => toggleComplete(memo.id)}
//                 >
//                   {memo.isCompleted ? "되돌리기" : "완료"}
//                 </button>
//                 <button
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                   onClick={() => deleteMemo(memo.id)}
//                 >
//                   삭제
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function ChatList() {
  const [memos, setMemos] = useState([]);

  // 로컬 스토리지에서 메모 불러오기
  useEffect(() => {
    const stored = localStorage.getItem("memos");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      setMemos(parsed);
    }
  }, []);

  // 완료 상태 토글
  function toggleComplete(id) {
    const updated = memos.map((memo) =>
      memo.id === id ? { ...memo, isCompleted: !memo.isCompleted } : memo
    );
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated));
  }

  // 메모 삭제
  function deleteMemo(id) {
    const updated = memos.filter((memo) => memo.id !== id);
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-[#f9f5e7] font-serif py-10 px-4">
      {/* 상단 제목 */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#5c4b3b]">Memo List</h2>
        <p className="text-[#8a7c67] text-sm mt-2">
          저장된 메모를 확인하고 관리하세요
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-[#fbf8ef] p-6 rounded-2xl shadow-md border border-[#e0d7bf]">
        {memos.length === 0 ? (
          <p className="text-center text-[#9a8f79] py-8">
            저장된 메모가 없습니다.
          </p>
        ) : (
          <ul className="space-y-4">
            {memos.map((memo) => (
              <li
                key={memo.id}
                className={`p-5 rounded-xl shadow-sm border flex justify-between items-center transition-all duration-300 ${
                  memo.isCompleted
                    ? "bg-[#e5e0cc] border-[#cfc4a6]"
                    : "bg-[#fffaf0] border-[#e4d8b4]"
                }`}
              >
                <div>
                  <h3
                    className={`font-bold text-lg ${
                      memo.isCompleted
                        ? "text-[#7a6a4f] line-through"
                        : "text-[#5c4b3b]"
                    }`}
                  >
                    {memo.title}
                  </h3>
                  <p className="text-[#8a7c67] text-sm mt-1">{memo.content}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-semibold transition-all duration-200 ${
                      memo.isCompleted
                        ? "bg-[#d8c398] hover:bg-[#b9a67f] text-white"
                        : "bg-[#f0c079] hover:bg-[#c39c67] text-white"
                    }`}
                    onClick={() => toggleComplete(memo.id)}
                  >
                    {memo.isCompleted ? "되돌리기" : "완료"}
                  </button>
                  <button
                    className="px-3 py-1 bg-[#db7786] hover:bg-[#a55d68] text-white rounded-md text-sm font-semibold transition-all duration-200"
                    onClick={() => deleteMemo(memo.id)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

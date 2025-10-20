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
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">메모 목록</h2>

      {memos.length === 0 ? (
        <p className="text-center text-gray-500">저장된 메모가 없습니다.</p>
      ) : (
        <ul className="space-y-3">
          {memos.map((memo) => (
            <li
              key={memo.id}
              className={`p-4 rounded-lg shadow flex justify-between items-center ${
                memo.isCompleted ? "bg-green-100" : "bg-white"
              }`}
            >
              <div>
                <h3 className="font-semibold">{memo.title}</h3>
                <p className="text-gray-600 text-sm">{memo.content}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="px-2 py-1 bg-yellow-400 text-white rounded"
                  onClick={() => toggleComplete(memo.id)}
                >
                  {memo.isCompleted ? "되돌리기" : "완료"}
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
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
  );
}

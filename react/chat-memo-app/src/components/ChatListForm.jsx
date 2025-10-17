import { useEffect, useRef } from "react";

export default function ChatListForm({ messages }) {
  const chatEndRef = useRef(null);

  // 새 메시지 추가 시 자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 p-4 overflow-y-auto h-[80vh] bg-gray-50 rounded-lg shadow-inner">
      {messages.map((message, index) => {
        const isUser = message.role === "user";

        return (
          <div
            key={index}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
                isUser
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
              }`}
            >
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        );
      })}
      {/* 마지막 메시지 스크롤용 ref */}
      <div ref={chatEndRef} />
    </div>
  );
}

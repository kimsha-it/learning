import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Props message : 사용자 or AI 메세지 객체
export default function ChatMessage({ messages }) {
  // 사용자 메세지 / AI 메세지 확인용 변수
  const isUser = messages["role"] === "user";
  const isAi = messages["role"] === "ai";

  return (
    // 메세지 role에 따라 정렬 방향 결정
    <div className={`mt-16 flex ${isUser ? "justify-end" : "justify-start"}`}>
      {/* AI 메세지 : 마크다운 표현 */}
      {/* 사용자 메세지 : 일반 텍스트 표현 */}
      {isAi ? (
        <div className="markdown-content max-w-[90%]">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {messages.content}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="p-3 border rounded-xl border-gray-300">
          {messages.content}
        </div>
      )}
    </div>
  );
}

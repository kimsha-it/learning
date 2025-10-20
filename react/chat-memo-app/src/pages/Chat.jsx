import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";
import { ai, chat } from "../utils/genai";

// 응답 제어 파라미터 불러오기
import { config } from "../utils/genai";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function Chat() {
  const [prompt, setPrompt] = useState(""); // 사용자 입력 프롬프트 관리 상태
  const [messages, setMessages] = useState([]); // 사용자 - AI 메세지 관리 상태
  const [isLoading, setIsLoading] = useState(false); // AI 요청 후 응답 대기 상태

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading === true || prompt.trim() === "") return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    // currentPrompt 변수
    const currentPrompt = prompt;
    // 상태 prompt 초기화
    setPrompt("");

    setIsLoading(true); // 요청 시작

    try {
      // Gemini에게 요청 보내기
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });

      // 응답 텍스트 안전하게 추출
      const aiText =
        response.text ||
        response?.text() ||
        "AI 응답을 불러올 수 없습니다.";

      console.log("AI 응답 원문:", aiText);

      // JSON 파싱 시도
      let parsed;
      try {
        parsed = JSON.parse(aiText);
      } catch {
        parsed = { content: aiText, dueDate: "날짜 정보 없음" };
      }

      // 새 메모 객체 생성
      const newMemo = {
        id: Date.now(),
        title: parsed.dueDate || "AI 생성 메모",
        content: parsed.content || currentPrompt,
        dueDate: parsed.dueDate || null,
        isCompleted: false,
      };

      // 로컬스토리지에 저장
      const storedMemos = JSON.parse(localStorage.getItem("memos")) || [];
      const updatedMemos = [...storedMemos, newMemo];
      localStorage.setItem("memos", JSON.stringify(updatedMemos));

      // 채팅창에 AI 응답 표시
      setMessages((prev) => [...prev, { role: "ai", content: parsed.content }]);


      alert("✅ 메모가 저장되었습니다! ChatList 페이지에서 확인하세요.");
    } catch (error) {
      console.error("AI 응답 처리 중 오류:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "❌ 메모 생성 중 오류가 발생했습니다." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* 채팅 내역 */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <MessageList messages={messages} />
      </div>

      {/* 입력창 */}
      <div className="border-t bg-white p-4">
        <ChatForm
          prompt={prompt}
          setPrompt={setPrompt}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

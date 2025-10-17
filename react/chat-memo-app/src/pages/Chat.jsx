import { useState } from "react";
import ChatListForm from "../components/ChatListForm";
import ChatForm from "../components/ChatForm";
import { ai, chat } from "../utils/genai";

// 응답 제어 파라미터 불러오기
import { config } from "../utils/genai";

export default function Chat() {
  const [prompt, setPrompt] = useState(""); // 사용자 입력 프롬프트 관리 상태
  const [messages, setMessages] = useState([]); // 사용자 - AI 메세지 관리 상태
  const [isLoading, setIsLoading] = useState(false); // AI 요청 후 응답 대기 상태

  async function handleSubmit(event) {
    event.preventDefault();
    // 프롬프트가 비어있거나 AI 응답을 대기 중이라면
    // isLoading === true, prompt.trim() === ""라면 작업 X
    if (isLoading === true || prompt.trim() === "") return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role: "user")
    // role 역할: user라면 오른쪽에 배치, ai라면 왼쪽에 배치
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    // currentPrompt 변수
    const currentPrompt = prompt;
    // 상태 prompt 초기화
    setPrompt("");

    setIsLoading(true); // 요청 시작
    await generateAiContent(currentPrompt); //AI 응답 생성 함수
    setIsLoading(false); // 요청 종료
  }

  // AI에게 요청을 보내서 응답을 생성하는 함수
  async function generateAiContent(currentPrompt) {
    try {
      // 이전 대화 내용을 유지하면서 연속된 대화를 하며 텍스트를 생성
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });
      console.log(response.data);

      // messages 상태에 AI 응답을 저장
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* 채팅 내역 */}
      <div className="flex-1 overflow-y-auto p-4">
        <ChatListForm messages={messages} />
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

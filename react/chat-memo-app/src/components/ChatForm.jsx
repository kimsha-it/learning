import React from "react";

export default function ChatForm({ prompt, setPrompt, onSubmit, isLoading }) {
  return (
    <form onSubmit={onSubmit} className="flex w-full gap-2">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={isLoading ? "답변 생성 중..." : "메시지를 입력하세요..."}
        disabled={isLoading}
        className="flex-grow px-3 py-2 border rounded"
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="px-4 py-2 bg-blue-500 text-white rounded h-10"
      >
        전송
      </button>
    </form>
  );
}

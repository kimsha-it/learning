import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      {/* 데이터(Props)를 전달하는 방법 */}
      {/* Child 컴포넌트의 name 속성과 age 속성 */}
      {/* "문자열 속성", {숫자} */}
      <Child name="홍길동" age={20} />
      <Child name="김철수" age={25} />
      <Child name="영희" age={30} />
    </div>
  );
}

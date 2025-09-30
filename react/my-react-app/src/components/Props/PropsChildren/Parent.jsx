import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
          <h1>안녕하세요</h1>
          <h2>나는야 홍길동</h2>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는야 김철수</p>
          <p>나이는 5살</p>
        </div>
      </Child>
      <Child>
        <div>
          <p>나는야 김영희</p>
          <h1>나이는 10살</h1>
        </div>
      </Child>
    </div>
  );
}

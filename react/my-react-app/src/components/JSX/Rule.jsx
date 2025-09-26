import React from "react";
{
  /* class -> className */
}

export default function Rule() {
  // 규칙1. 1개의 태그만 반환해야 한다
  // return (
  //   <div>App</div>
  // )

  // div 태그 3개를 감싸는 1개의 fragment 태그 <> </>를 반환
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      {/* 규칙2. 모든 태그는 반드시 닫아야 한다 */}
      {/* 규칙3. 속성명(class, onclick, onsubmit)을 카멜 케이스로 작성해야 한다 */}
      {/* 카멜 케이스: 첫 단어는 소문자, 이후 단어의 시작 글자를 대문자 */}
      {/* ex> onClick, onSubmit */}

      <p className="font-bold text-5xl text-red-700">p 태그{1 + 0}</p>

      {/* 규칙4. style 속성의 값은 객체로 작성한다 */}
      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그 2 + 0</p>
    </>
  );
}

import React from "react";
// 상태(State)를 사용하기 위한 모듈
import { useState } from "react";

// 리액트 훅(Hook)
// JS 함수와 유사한 개념이지만 함수는 아님
// 훅: 리액트에서 특정 동작을 수행하는 "도구"
// useState 훅: 리액트에서 상태 관리를 수행하는 "도구", 배열 []을 생성.
// 배열에는 2개의 원소가 존재 -> [상태를 저장할 변수, 상태를 설정(변경)할 함수]
// 배열의 구조분해할당을 활용

export default function StateBasic() {
  // const [one, two] =[상태를 저장할 변수, 상태를 설정(변경)할 함수]
  const [somethingState, setSomethingState] = useState();
  const [something, setSomething] = useState();

  // 문자열 데이터로 관리하는 상태(state)
  const [string, setString] = useState("초기값");
  const [array, setArray] = useState([1, 2, 3]);

  function handleClick() {
    console.log("상태 변경");
    setString("상태 변경");

    const newArray = [...array, 4];
    setArray(newArray);
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((element) => {
        return <li>{element}</li>;
      })}
    </div>
  );
}

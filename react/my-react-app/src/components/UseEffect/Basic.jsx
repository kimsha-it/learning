import React, { useState } from "react";
import { useEffect } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  useEffect(() => {
    console.log("의존성 배열이 없는 useEffect");
  });
  useEffect(() => {
    console.log("의존성 배열이 있는데 빈 배열인 useEffect");
  }, []);

  useEffect(() => {
    console.log("의존성 배열에 number 상태가 저장");
  }, [number]);
  useEffect(() => {
    console.log("의존성 배열에 number2 상태가 저장");
  }, [number2]);

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>

      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}

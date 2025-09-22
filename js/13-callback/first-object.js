// 함수 선언식
function 함수명() {}

// 일급 객체
// 1. 변수에 할당

// 함수 표현식
// 함수명이 없고, 대신에 변수에 할당
function functionExpression() {}

// 화살표 함수
// 함수명이 없고, 대신에 변수에 할당
const functionArray = () => {};

// 일급 객체
// 2. 함수의 반환값으로 사용 가능하다

function calculator(operator) {
  if (operator === "더하기") {
    return (n1, n2) => {
      return n1 + n2;
    };
  }
  if (operator === "빼기") {
    return (n1, n2) => {
      return n1 - n2;
    };
  }
}
const add = calculator("더하기");
const sub = calculator("빼기");
console.log(add(1, 2));
console.log(sub(1, 2));

// 일급 객체
// 3. 함수의 인자로 전달

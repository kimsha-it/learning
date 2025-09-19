// 세 숫자를 매개변수로 받아서 더한 숫자를 반환(생성)하는 함수

// 함수 선언은 function 키워드로 시작

function add(number1, number2, number3) {
  // 함수를 호출하면 실행될 코드블럭
  return number1 + number2 + number3;
}

// 함수의 호출(call)
// 함수에 전달(입력)하는 데이터를 인자(argument)
const result1 = add(1, 2, 3);

const n1 = 1;
const n2 = 2;
const n3 = 3;
const result2 = add(n1, n2, n3);

console.log(`result1 = ${result1}`);
console.log(`result2 = ${result2}`);

// 함수 표현식
const sub = function (number1, number2) {
  return number1 - number2;
};
console.log(sub(1, 2));

function determine(number) {
  if (number < 0) {
    console.log("음수");
  } else if (number === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
}

// 화살표 함수 코드로 작성
// 함수 선언식 -> 화살표 함수
// 1. function 키워드를 지운다
// 2. 함수명을 지운다
// 3. 매개변수 와 함수 몸체(코드블럭)를 => 연결한다
// 4. 변수를 선언하고 변수에 화살표 함수를 할당한다
const det = (number) => {
  if (number < 0) {
    console.log("음수");
  } else if (number === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
};
det(1);

// 함수 선언식
// 매개변수가 짝수면 true 반환
// 매개변수가 홀수면 false 반환

// 1. 변수 선언
let number;
// 2. 기능 코드 작성
if (number % 2 == 0) {
  // 짝수
} else {
  // 홀수
}

// 3. 함수를 선언한다
// 4. 변수 -> 매개변수
// 5. 기능 코드 -> 함수 코드블럭
// 6. 반환값을 작성
function evenOdd(number) {
  if (number % 2 == 0) {
    // 짝수
    return true;
  } else {
    // 홀수
    return false;
  }
}

// 화살표 함수로 표현
const evenOddArr = (number) => {
  if (number % 2 == 0) {
    // 짝수
    return true;
  } else {
    // 홀수
    return false;
  }
};

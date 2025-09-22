// 배열 고차 메서드
// 배열의 반복문을 함수화

let numbers3 = [1, 2, 3, 4, 5];

// 인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for (let index = 0; index <= numbers3.length - 1; index++) {}

// for...of
// 1. 조건식 X
// 2. 원소에 바로 직접 접근
// for...of의 문제점
// 1. 내부 로직 관리의 어려움
// 2. 유연함이 떨어진다
for (let element of numbers3) {
  // 내부 로직
}

// 배열 고차 메서드
// 1. 문법이 간결
// 2. 콜백함수로 반복작업을 유연하게 제어
// numbers3.forEach(콜백함수);

// 각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach((element) => {
  // 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});
// 각 원소 중 2로 나눴을 때 나머지가 0인 원소만 출력
numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  if (element % 2 === 0) {
    console.log(element);
  }
});

// ---
console.log("---");
// map()을 활용해서 원소+1를 한 값 모은 새로운 배열 생성
const newArray2 = numbers4.map((element) => {
  return element + 1;
});
console.log(newArray2);
// map()을 활용해서 원소*2를 한 값 모은 새로운 배열 생성
const newArray3 = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray3);
// ---
console.log("---");

// 1. 원소 중 짝수인 경우만 모아서 ㅛㅐ로운 배열 만든다. filter()
// 2. 새로운 배열의 원소 +1 모아서 새로운 배열 만든다. map()

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result = numbers10.reduce((accValue, currElement) => {
  // accValue: 이전 반복 동안 반환된 값을 누적한 데이터
  // currElement: 현재 원소

  // 반환값들이 누적된다
  return accValue + currElement;
  // accValue + currElement
  // -----------
}, 0 /*초기값*/);
console.log(result);
// ---
console.log("---");

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬

const numbers11 = [2, 6, 1, 9, 7];

// a b
// 2 6
// 6 1
// 1 9

numbers11.sort((a, b) => {
  // 정렬 규칙
  // 반환 값이 양수라면 a가 뒤로 배치
  // 반환 값이 음수라면 a가 앞으로 배치
  // 반환 값이 0이라면 같다

  // 오름차순 축약
  return a - b;

  // 내림차순 축약
  return b - a;

  // 오름차순
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  // 내림차순
});
console.log(numbers11);

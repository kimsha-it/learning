// 조건문의 기본 구조

// 여러줄 주석: /* */
/*
if(조건식) {
// 조건식이 참이면 실행되는 코드 영역
}
*/
if (5 >= 1) {
  console.log("5는 1보다 크다");
}

/* if ~ else if 조건문 기본 구조
if (조건식) {

} else if(조건식') {
  조건식'는 조건식이 거짓일때 평가
  }
*/
if (5 > 10) {
  console.log("5는 10보다 크다");
} else if (5 > 7) {
  console.log("5는 7보다 크다");
} else if (5 > 5) {
  console.log("5는 5보다 크다");
} else if (5 > 3) {
  console.log("5는 3보다 크다");
}
/* if ~ else if ~ else 조건문 기본 구조
if (조건식) {
} else if (조건식') {
 } else{
   else는 조건식이 없다.
   대신 위의 모든 조건식이 거짓이면 실행
  }
*/

// 변수 number를 선언하고, 숫자 1을 할당
let number = 1;

// number가 0보다 크면 "양수"를 출력
// number가 0보다 큰게 아니라면 "음수" 출력
// if ~ else문
if (number > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 변수 number2 선언 후 숫자 0 할당
// 만약 number2가 0보다 크면 "양수", 작으면 "음수" 출력
// 모두 아니라면 "0" 출력
let number2 = 0;
if (number2 > 0) {
  console.log("양수");
} else if (number2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}

// 변수 score를 선언하고, 숫자 75를 할당한다
// 만약 변수 socre가 90 이상이라면
// 그런데 만약 변수 score가 90 미만 그리고(&&), 80 이상이라면
// 그런데 만약 변수 score가 80 미만 그리고(&&), 70 이상이라면
// 그런데 만약 변수 score가 70 미만 그리고(&&), 60 이상이라면
// 그런데 모두 아니라면
let score = 75;
if (score >= 90) {
} else if (score < 90 && score >= 80) {
  console.log("80이상");
} else if (score < 80 && score >= 70) {
  console.log("70이상");
} else if (score < 70 && score >= 60) {
  console.log("60이상");
} else {
  console.log("0이상");
}

// 삼항 연산자 표현식
// 표현식: 데이터를 생성하는 코드
// 조건식은 무조건 참/거짓 데이터 중 하나를 생성
// 조건식 ? 조건식이 참 : 조건식이 거짓
const message = 2 > 1 ? "2는 1보다 크다" : "2는 1보다 크지 않다";
console.log(message);

let isLoggined = true;
const user = isLoggined === true ? "회원 시용자 화면" : "비회원 사용자 화면";
console.log(user);

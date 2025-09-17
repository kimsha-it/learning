// 변수에 데이터를 할당(assign 0, save X)
// 변수명 = 할당할 데이터
// "Hello World" 데이터를 저장한 공간의 이름이 message
// 변수 message에 "Hello World"를 할당
message = "Hello World";

// = : 할당 연산자
console.log(message);
console.log(message);
console.log(message);

// 자주하는 실수
// 데이터 = 변수명
// "Hello World" = message

// 변수 message2 선언
// 선언과 할당은 분리 가능
let message2;

// 선언의 방식 2개 (원래 3개)
// let
// 데이터의 재할당(중요)
// 변수 message3에 "Hello variable"을 할당
let message3 = "Hello variable";

// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
// let은 안붙이나요? -> let을 분이면 선언
// let 키워드는 재선언은 불가능

// let 변수 message4를 선언
let message4;
// 재선언은 불가능
// let message4;

// const
// 데이터의 재할당이 불가능(중요) -> 상수 라고 개발에서는 표현
const message5 = "Hello Const";
message5 = "Hello World";

// let vs. const
// let: 변하는 데이터를 저장하는 변수 선언 방식
// const: 변하면 안되는 데이터를 저장하는 변수 선언 방식

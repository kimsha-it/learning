// 모듈 불러오기
// import / from

// from: 어디서 불러올 것이냐
// import: 무엇을 불러올 것이냐
// import {함수명1, 함수명2, ...} from ...
// { add, substract, multiply, devide, PI} from "./math.js";
// +
import { add } from "./math.js";
console.log(add(1, 2));

// -
import { substract } from "./math.js";
console.log(substract(2, 1));

// *
import { multiply } from "./math.js";
console.log(multiply(1, 2));

// /
import { devide } from "./math.js";
console.log(devide(4, 2));

// 하나만 불러오기
// 내가 불러온 함수의 이름을 결정
// import add from "./calculator.js";
// console.log(add(1, 2));


import calculator from "./calculator.js";
console.log(calculator);
console.log(calculator.add(1, 2));
console.log(calculator.substract(1, 2));

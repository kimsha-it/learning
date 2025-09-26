// function func() {
//   console.log("함수");
//   console.log(this);
// }
// func();

// const obj = {
//   name: "홍길동",
//   age: 20,
//   func: function () {
//     console.log(this);
//   },
// };
// obj.func();

// 화살표 함수로 표현한 메서드는 함수 선언식(표현식, function 키워드를 사용한 함수) 작동 방식이 다르다.

const user2 = {
  name: "홍길동",
  age: 20,

  greet: () => {
    console.log(this);
  },
};
user2.greet(); // 결과: {}
console.log(this); // 함수가 아닌 곳에서 실행한 this: {}

const user3 = {
  name: "홍길동",
  age: 20,

  greet: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};
user3.greet();

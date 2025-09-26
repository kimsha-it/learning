// 구조 분해 할당

const object = {
  name: "홍길동",
  age: 20,
  name2: "홍길동",
  age2: 20,
};

// 구조 분해 할당 활용 X
let name = object["name"];
let age = object["age"];

// 구조 분해 할당 활용 O
// 변수명과 객체의 key가 동일해야 함
let { name2, age2 } = object;
console.log(name);
console.log(name2);

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성 스마트폰",
  price: 9900,
};

const { title, price } = object2;

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5

// 객체를 인자로 전달받는 함수
function func(object) {
  // 구조분해할당
  const { name, age } = object;
  // 일반
  console.log(`Hello ${object["name"]}, I'm ${object["age"]}`);
}

// 매개변수에 구조분해할당을 활용
function func2(name, age) {
  console.log(`Hello ${object["name"]}, I'm ${object["age"]}`);
}

const user = {
  name: "홍길동",
  age: 20,
};
func(user);

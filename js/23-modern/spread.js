const obj1 = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

// 객체 복사
const obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2["location"] = "대구";
console.log(obj2);

console.log(obj1); // 얘도 바뀜

// ...스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 };
console.log(obj3);

obj3["name"] = "고길동";
console.log(obj3);
console.log(obj1); // 안 바뀜

// 객체의 속성을 수정하면서 새로운 객체 생성 역할
const obj4 = { ...obj1 };
obj4["age"] = 21;
console.log(obj4);

// 위 축약
const obj5 = { ...obj1, age: 21, planet: "지구" };
console.log(obj5);

// 배열의 스프레드 연산자
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
arr2[0] = 0;
console.log(arr2);
console.log(arr1); // 바뀜

let arr3 = [...arr1];
arr3[0] = -1;
console.log(arr3);
console.log(arr1); // 안 바뀜

// 스프레드 연산자를 통한 원소 추가
let arr4 = [...arr1, 6, 7, 8];
console.log(arr4);

// react에서 스프레드 연산자 활용
let objectArr = [{ name: "철수", age: 20 }];
// 새로운 객체 추가한 새로운 배열 생성
let newObjectArr = [...objectArr, { name: "영희", age: 20 }];
objectArr.push({ name: "영희", age: 20 });

console.log(objectArr);
console.log(newObjectArr);

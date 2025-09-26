let key = "name";

const user = {
  key: "홍길동", // 의도- name:"홍길동"
};
console.log(user);

// 템플릿 리터럴도 사용 X
// const user2 = {
//   `${key}`: "홍길동",
// }

// 계산된 속성명
// 변수를 속성의 key로 사용하고 싶을때
const user3 = {
  [key]: "홍길동", // name:"홍길동"
};
console.log(user3);

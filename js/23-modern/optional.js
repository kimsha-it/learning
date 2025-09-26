const user = {
  name: "홍길동",
  address: {
    city: "서울",
  },
};

// ["속성명"]
// .속성명
// 옵셔널 체이닝 -> ?.속성명
console.log(user?.address);
console.log(user?.address?.city);
console.log(user?.address?.country);

console.log(user?.contact?.mail);
console.log(user?.contact?.phone); // 원래는 오류 나야하는데 undefined로 나옴

let value1; // undefined
let value2 = null; // null: 의도한 것

console.log(value1);
console.log(value2);

// nullish는 데이터가 undefined or null이면 해당 데이터를 대체하는 기본값 적용
let value3 = null ?? "기본값";
console.log(value3);

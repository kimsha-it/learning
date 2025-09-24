import axios from "axios";

// 도메인 주소
const BASE_URL = "https://dummyjson.com";

// async 화살표 함수
// 통신 테스트
const testRoute = async () => {
  /**
   * fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then(data=>console.log(data));
   */
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
  // { status: 'ok', method: 'GET' }
};
testRoute();

// 모든 상품 목록 조회
async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];

  // // 상품 목록의 객체 키 추출
  // console.log(Object.keys(data));
  // // 상품 목록의 객체 키-값 쌍 추출
  // console.log(Object.entries(data));

  // 특정 속성 추출
  const products = data["products"];
  console.log(products);
}
getAllProducts();

// // 단일(n번) 상품 조회
// async function getProductById(n) {
//   const response = await axios.get(`${BASE_URL}/products/${n}`);
//   const data = response["data"];
//   console.log(data);
// }
// getProductById(1);

// // 특정 상품 조회
// async function searchProducts(search) {
//   const queryParams = new URLSearchParams({ q: search });
//   const response = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
//   const data = response["data"];
//   console.log(data);
// }
// searchProducts("phone");

import axios from "axios";

async function addProduct() {
  const URL = "https://dummyjson.com/products/add";

  const METHOD = "POST";

  const body = {
    title: "갤럭시",
    category: "스마트폰",
  };
  // 헤더는 요청의 부가정보
  const headers = {
    // Content-Type:요청 본문의 데이터 형식
    "Content-Type": "application/json",
  };

  // axios 요청 파일
  const config = {
    url: URL,
    method: METHOD,
    data: body,
  };

  const response = await axios(config);

  const data = response.data;
  console.log(data);
}
addProduct();

import axios from "axios";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

//
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000,
});

axiosInstance["interceptors"]["response"].use(
  // 2개의 함수 전달
  // 통신이 성공했을 때의 함수
  (response) => {
    console.log("통신 성공 응답 인터셉터");
    return response.data;
  },
  // 통신이 성공했을 때의 함수
  (error) => {
    if (error.response) {
      // 401: 인증오류
      // 404: Not Found (없는 주소 요청)
      if (error.response.status === 401) {
        alert("인증에 문제가 있습니다.");
      }
      if (error.response.status === 404) {
        alert("Not Found");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

// 응답 인터셉터: 서버가 사용자에게 돌려주는 응답 데이터를 가로채서 추가 작업을 수행한다.

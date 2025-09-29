// import React from "react";

// export default function OnClick() {
//   // 클릭 이벤트 핸들링 함수
//   // 관례적으로 핸들링 함수명은 handle이벤트명
//   // 매개변수가 없는 함수
//   function handleClick() {
//     alert("클릭!");
//   }

//   return (
//     <div>
//       <button
//         className="curser-pointer border-2 p-2 bg-blue-700 text-white"
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         화살표 함수 클릭
//       </button>
//       <button
//         className="curser-pointer border-2 p-2 bg-blue-700 text-white"
//         onClick={() => {
//           handleParamClick("Hello World");
//         }}
//       >
//         매개변수가 있는 함수 클릭
//       </button>
//       {/* <button OnClick={handleClick}>함수 참조 클릭</button> */}
//     </div>
//   );

//   // 매개변수가 있는 함수
//   function handleParamClick(param) {
//     alert(param);
//   }
// }

// 미니 실습
import React from "react";

export default function OnClick() {
  function handleClick() {
    alert("클릭");
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        클릭
      </button>
    </div>
  );
}

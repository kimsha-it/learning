import { useState } from "react";

export default function ArrayState() {
  const [array, setArray] = useState([{ id: 1, name: "철수" }]);

  const handleAdd = () => {
    let newId = array.length + 1;
    let newName = `친구${newId}`;

    // 기존 배열에서 새로운 데이터를 추가한 새로운 배열 생성
    const newArray = [...array, { id: newId, name: newName }];

    // 새로운 배열로 상태 업데이트
    setArray(newArray);
  };

  return (
    <div>
      <ul>
        {array.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        친구 추가
      </button>
    </div>
  );
}

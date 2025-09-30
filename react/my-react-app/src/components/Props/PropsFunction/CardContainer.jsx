import React from "react";
import Card from "./Card";

export default function CardContainer() {
  function handleClick(user) {
    alert("클릭!");
    console.log(user);
  }
  const user = {
    name: "홍길동",
    age: 20,
  };

  return (
    <div>
      <Card userProps={user} onClickProps={handleClick}></Card>
    </div>
  );
}

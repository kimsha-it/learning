import React from "react";

export default function Card({ userProps, onClickProps }) {
  return (
    <div>
      <button
        onClick={() => {
          onClickProps(userProps);
        }}
      >
        클릭
      </button>
    </div>
  );
}

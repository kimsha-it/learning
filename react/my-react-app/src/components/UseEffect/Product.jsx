import React from "react";

export default function Product({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  );
}

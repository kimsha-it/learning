import React from "react";

export default function ProductCard({ name, price, inStock, rating, tags }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold">{name}</h2>
      <p className="font-bold text-green-600">{price}</p>
      <p>재고: {inStock ? "재고 있음" : "품절"}</p>
      <p>평점: {rating}</p>
      <div>
        {tags.map((tag) => {
          return tag;
        })}
      </div>
    </div>
  );
}

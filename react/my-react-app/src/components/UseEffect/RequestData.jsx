import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response.data;
      console.log(data);
      setProducts(data.products);
    }
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <Product ket={product.id} product={product}></Product>;
      })}
    </div>
  );
}

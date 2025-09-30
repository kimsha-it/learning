import React from "react";
import ProfileContainer from "./components/PropsExample/ProfileContainer";
import CardContainer from "./components/PropsFunction/CardContainer";
import ProductContainer from "./components/ProductCard/ProductContainer";
import Parent from "./components/PropsChildren/Parent";

export default function App() {
  return (
    <div>
      {/* <ProfileContainer></ProfileContainer> */}
      {/* <CardContainer></CardContainer> */}
      {/* <ProductContainer></ProductContainer> */}
      <Parent></Parent>
    </div>
  );
}

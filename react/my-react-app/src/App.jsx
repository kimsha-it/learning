import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";

export default function App() {
  return (
    <div>
      {/* <Header></Header>
      <Interpolation></Interpolation> */}
      <MyButton></MyButton>
      <MyList></MyList>
    </div>
  );
}

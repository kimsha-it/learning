import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import OnClick from "./components/EventHandling/onClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/onSubmit";

export default function App() {
  return (
    <div>
      <OnClick></OnClick>
      <OnChange></OnChange>
      <OnSubmit></OnSubmit>
    </div>
  );
}

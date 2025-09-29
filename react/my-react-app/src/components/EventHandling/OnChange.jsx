import React from "react";

export default function OnChange() {
  function handleChange(event) {
    console.log(event);
    console.log(event["target"]);
    console.log(event["target"]["value"]);
  }

  function handleNumberChange(event) {
    if (event["target"]["value"] < 10) {
      console.log("10보다 작은 수");
    }
  }
  return (
    <div>
      <input
        type="number"
        className="w-7xl border-4 border-amber-400 p-2 m-2"
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />

      <input
        type="text"
        className="w-7xl border-4 border-amber-100 p-2 m-2"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}

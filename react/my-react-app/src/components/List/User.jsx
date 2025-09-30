import React from "react";

export default function User({ userElement }) {
  return (
    <div>
      <li>
        {userElement["id"]}-{userElement["name"]}
      </li>
    </div>
  );
}

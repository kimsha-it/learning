import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold">Aboutpage</h1>
      <NavLink to="/">홈</NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-red-700 font-bold" : "";
        }}
      >
        소개
      </NavLink>
      <NavLink to="/profile">사용자 정보</NavLink>
    </div>
  );
}

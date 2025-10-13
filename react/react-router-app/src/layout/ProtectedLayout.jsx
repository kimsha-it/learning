import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ProtectedLayout() {
  const isLogin = true;

  if (isLogin === false) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div>
      <Outlet></Outlet>;
    </div>
  );
}

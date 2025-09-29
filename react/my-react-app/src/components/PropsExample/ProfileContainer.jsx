import React from "react";
import Profile from "./Profile";

export default function ProfileContainer() {
  return (
    <div>
      <Profile
        user={{ name:"현우", age:22, isAdmin:true, }} />
      <Profile
        user={{ name:"수진", age:21, isAdmin:false, }} />
    </div>
  );
}

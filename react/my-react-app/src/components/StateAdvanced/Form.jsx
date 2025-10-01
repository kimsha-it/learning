import React from "react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");

  function handleChange(event) {
    // target: 이벤트가 발생한 요소 정보
    const target = event["target"];
    console.log(target);

    const { name, value } = target;
    console.log(name, value);

    // if (name === "username") {
    //   setUsername(value);
    // }
    // if (name === "age") {
    //   setAge(value);
    // }
    // if (name === "email") {
    //   setEmail(value);
    // }

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  }

  return (
    <div>
      <form>
        <input type="checkbox" checked={true} />
        <input
          className="border-2"
          type="text"
          name="username"
          value={form.username}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form.age}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form.email}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}

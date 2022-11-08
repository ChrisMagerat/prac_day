import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Register from "./Register";

export default function Login() {
  const [user, setUser] = useState("");
  const loginEmailRef = useRef();
  const passRef = useRef();
  const LOCAL_STORAGE_KEY = "token";

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, user.access_token);
  }, [user]);

  function handleLogin() {
    const loginEmail = loginEmailRef.current.value;
    const password = passRef.current.value;
    let added = false;
    const qs = require("qs");
    axios
      .post(
        "https://edeaf-api-staging.azurewebsites.net/connect/token",
        qs.stringify({
          grant_type: "password",
          client_id: "web-dashboard",
          client_secret: "SuperSecretPassword",
          scope: "openid profile role email offline_access adminApi mobileApi",
          username: loginEmail,
          password: password,
        })
      )
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        added = true;
        console.log("got here")
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Login");

    if (added) {
      console.log("Added");
    }
  }

  return (
    <div>
      <h1>Sign in</h1>
      <input ref={loginEmailRef} type="text" placeholder="email" />
      <input ref={passRef} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <button>Invite people</button>
    </div>
  );
}

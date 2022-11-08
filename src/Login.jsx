import React, {useState} from "react";
import axios from "axios";

export default function Login() {
    const [login, setLogin] = useState("");


    function handleLogin() {
        axios.post(process.env.URL, {
            username: "process.env.login",
            password: "process.env.password",
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>Sign in</h1>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <button>Invite people</button>
        </div>
    );
}
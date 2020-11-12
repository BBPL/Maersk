import { render } from "@testing-library/react";
import React, { useState } from "react";
import { signInWithGoogle } from "../../data/firebase";

import './screens.scss'

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    return (
        <div className="login-wrapper">
            <div className="login-box-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <button onClick={() => signInWithGoogle()}>Log in with google</button>
                    <form className="login-form">
                        <label>Username:</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
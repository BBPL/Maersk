import React from "react";
import { signInWithGoogle } from "../../data/firebase";
import { ReactComponent as Logo } from './../../img/maersk_logo.svg'

import './screens.scss'

export default function LoginScreen() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);

    return (
        <div className="login-wrapper">
            {/* <div className="login-box-container"> */}
                    <Logo className="logo"/>
                    {/* <h1>Login</h1> */}
                    <div onClick={() => signInWithGoogle()} className="login-btn"><p>Log in with google</p></div>
                    {/* <form className="login-form">
                        <label>Username:</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                        <button>Log In</button>
                    </form> */}
            {/* </div> */}
        </div>
    )

}
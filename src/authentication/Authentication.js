import React, { useState } from "react";
import Login from "./login/Login";
import "./Authentication.css"
import logo from '../logo.svg';
import SignUp from "./signup/SignUp";

const axios = require('axios').default;
const Authentication = () => {

    axios
    .get('https://technowz.000webhostapp.com/test.php')
    .then(response => console.log(response))
    
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="App-name">Technowz</h3>

            {
                isLogin ?
                    <Login
                        change={setIsLogin}
                    />
                    : <SignUp
                        change={setIsLogin}
                    />
            }

        </div>
    )
}
export default Authentication;
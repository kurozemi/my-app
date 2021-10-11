import React, { useState } from "react";
import Login from "./login/Login";
import "./Authentication.css"
import logo from '../logo.svg';
import SignUp from "./signup/SignUp";

const axios = require('axios').default;
const Authentication = () => {

    let headers = {
        "userid": 69,
    }
    let obj = {
        name: 'kurozemi',
        age: 24,
    }

    // axios.defaults.headers.common['AXIOS'] = 'true';
    axios.get('http://technowdb.phuhanh.com.vn/api/test.php')
    .then(response => console.log(response.data))

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
import React, { useState } from "react";

const Login = (props) => {

  // console.log(JSON.parse(localStorage.getItem("kurozemi")));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAuthentication = (e) => {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem(username));

    if (data !== null) {
      if (data.password === password) {
        alert(`Log in success, hello ${data.username}`);
        setUsername("");
        setPassword("");
      }
      else {
        alert("Incorrect password");
      }
    }
    else {
      alert("Username is not exists");
    }
  }
  return (
    <div>
      <form className="Authentication-form">
        <label>
          Username
        </label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
        />
        <label>
          Password
        </label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
        <button className="Authentication-button" type="submit" onClick={e => loginAuthentication(e)}>Login</button>
      </form>
      <div className="SignUp-row">
        <p>Don't have an account ?</p>
        <button onClick={() => props.change(false)} className="SignUp-text">Sign up</button>
      </div>
    </div>

  );
}

export default Login;
import React, { useState } from "react";
const SignUp = (props) => {

    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const signUp = (e) => {
        e.preventDefault();

        let checkError = {};
        if (!validateEmail(email)) {
            checkError.email = "Invalid email!";
        }
        if (username === "") {
            checkError.username = "Username can't be blank";
        }
        if (password < 5) {
            checkError.password = "Password must be more than 5 characters";
        }
        if (gender === "") {
            checkError.gender = "Please select one";
        }

        let dataLogin = {
            email: email,
            username: username,
            password: password,
            gender: gender,
        }

        if (Object.keys(checkError).length === 0) {
            localStorage.setItem(username, JSON.stringify(dataLogin));
            props.change(true);
            alert("Register successfully")
        }
        setErrors(checkError);

    }
    return (
        <div>
            <form className="Authentication-form">
                <label>
                    Email
                </label>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                />
                {errors.email && <p className="errors">{errors.email}</p>}
                <label>
                    Username
                </label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                />
                {errors.username && <p className="errors">{errors.username}</p>}
                <label>
                    Password
                </label>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                {errors.password && <p className="errors">{errors.password}</p>}

                <div className="Gender-row"
                    onChange={(e) => setGender(e.target.value)}>
                    <label>
                        Gender
                    </label>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                </div>
                {errors.gender && <p className="errors">{errors.gender}</p>}
                <button className="Authentication-button" type="submit" onClick={e => signUp(e)}>Sign up</button>
            </form>
            <div className="SignUp-row">
                <p>Already have an account ?</p>
                <button onClick={() => props.change(true)} className="SignUp-text">Log in</button>
            </div>
        </div>

    );
}

export default SignUp;
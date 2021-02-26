import React, { useState } from "react";
import AUTH from "../utils/AUTH";
// import Signup from "../components/Signup"
import PropTypes from 'prop-types';

export default function Login ({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
        e.preventDefault();

        console.log("username is " + username)
        console.log("password is " + password);
        try {
            const token = await AUTH.loginUser({
                username,
                password
            })
            setToken(token)
            // console.log(token);
        }
        catch(err) {
            console.log('Login error: ', err)
            alert ('Incorrect username or password')
        }
    }

    return (
        <div className="card login-card">
            <div className="card-header">
                <h4>Log In</h4>
            </div>
            <div className="card-body">
            <div className="container my-3 px-5 text-center">
                <form onSubmit={handleSubmit}>
                    <div className="row form-group">
                        <div className="col" size="12">
                        <input
                            className="form-control login"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col" size="12">
                        <input
                            className="form-control password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="btn loginbtn" type="submit">
                        Log In
                    </button>
                </form>
                <div className="line-break">
                    <hr className="mt-4"></hr>
                </div>
                <div className="mt-4 mb-5 px-5">
                    <p className="newuser mb-1">New user?</p>
                    <div className="mt-0 btn signupswap"> Sign Up! </div>
                </div>
            </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
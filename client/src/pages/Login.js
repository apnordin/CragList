import React, { useState } from "react";
import AUTH from "../utils/AUTH";
import Signup from "../components/Signup"
import PropTypes from 'prop-types';
import logo from "../assets/logowhite.png";

export default function Login ({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
        e.preventDefault();

        // console.log("username is " + username)
        // console.log("password is " + password);
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
        // <div className="container">
        <div className="yosemite allpage">
            <div className="row allpage">
                <div className="col-3">
                    <div className="login-card">
                        <div className="card-header round-0">
                            <span className="welcomeh3">Welcome to CragList!
                            </span>
                            <img className="logo float-right" alt= "logo" src ={logo}>
                            </img>
                        </div>
                        <div className="card-body">
                            <div className="mt-2 mb-4 px-5 text-center">
                                <h3 className="mb-3">Existing Users</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row form-group">
                                        <div className="col" size="12">
                                        <input
                                            className="form-control loginsignup"
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
                                            className="form-control loginsignup"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button className="btn loginsignupbtn" type="submit">
                                        Log In
                                    </button>
                                </form>
                                <div className="line-break">
                                    <hr className="mt-4 mb-4"></hr>
                                </div>
                            </div>
                            <Signup setToken={setToken} />
                        </div>
                    
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                    <div className="welcomeblurb">
                        <h3 className="welcomeblurbh3 top">
                            Welcome to CragList, a website for climbers to find for climbing routes anywhere in the world.
                        </h3>
                        <h3 className="welcomeblurbh3">
                            Add your own routes, search or browse routes added by other users, post on your favorite route's feed, and chat live with other users.
                        </h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};
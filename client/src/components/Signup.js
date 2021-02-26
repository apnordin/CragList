import React, { useState } from "react";
import AUTH from "../utils/AUTH";
import Login from "../pages/Login";
import PropTypes from 'prop-types';
//  Signup function
export default function Signup({ setToken }) {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const handleLogin = async () => {
      const token = await AUTH.loginUser({
        username,
        password
      })
      setToken(token);
  }

  const handleSignup = async e => {
      e.preventDefault();
      console.log("name is " + firstname + " " + lastname);
      console.log("username is " + username)
      console.log("password is " + password);

      await AUTH.signUpUser({
        firstName: firstname,
        lastName: lastname,
        username: username,
        password: password
      })

      return handleLogin();
  };


  return (
    <div className="container my-4 px-5 text-center">
      <h3 className="newusers mb-3">New Users</h3>
      <form onSubmit={handleSignup}>
          <div className="row form-group">
            <div className="col" size="12">
              <input
                className="form-control loginsignup"
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={e => setFirstname(e.target.value)}
                />
            </div>
          </div>
          <div className="row form-group">
            <div className="col" size="12">
              <input
                className="form-control loginsignup"
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={e => setLastname(e.target.value)}
                />
            </div>
          </div>
          <div className="row form-group ">
            <div className="col" size="12">
              <input
                className="form-control loginsignup"
                type="username"
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
            Sign Up
          </button>
        
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
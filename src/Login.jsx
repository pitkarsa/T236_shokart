import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function doLogin(){
    event.preventDefault(); // stop the reloading of form
    const loginData = {email, password};
    console.log(loginData);  
    // send api request - fetch
    // response --> jwtToken  -- if not received , then error handling
    // if not received, login successful
    // localstorage 
    // decode the token to get - id, username, roles, email
    // localstorage 
    // home page
  }

  function updateEmail(){
    // console.log(event);
    setEmail(event.target.value);
  }

  return (
    <div className='col-4 mx-auto my-3 border rounded shadow p-3'>
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
          onChange={updateEmail} name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control"
          onChange={() => setPassword(event.target.value)} name="password" />
        </div>
        <button type="submit" className="btn btn-primary"
        onClick={doLogin}>Login</button> Not a user? Click <NavLink to={"/register"}>here</NavLink> to Sign-Up
      </form>
    </div>
  )
}

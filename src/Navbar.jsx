import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg " 
          style={{ backgroundColor:"#650259"}} data-bs-theme="dark">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="/">ShopKart_6</a> */}
              <NavLink className="navbar-brand" 
              to={"/"}>ShopKart_6</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                    <NavLink className="nav-link "  to={"/"}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/login">Login</a> */}
                    <NavLink className="nav-link" to={"/login"}>Login</NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" 
                    href="/register">Register</a> */}
                    <NavLink className="nav-link" 
                    to={"/register"}>Register</NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/aboutus">About US</a> */}
                    <NavLink className="nav-link" to={"/aboutus"}>About US</NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" 
                    href="/contactus">Contact Us</a> */}
                    <NavLink className="nav-link" 
                    to={"/contactus"}>Contact Us</NavLink>
                  </li>
                </ul>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className="d-flex">
                  <h2 >
                    <i className="bi bi-box-arrow-in-right" style={{ color:"white" }} >
                    </i>
                  </h2>
                </div>
              </div>
            </div>
    </nav>
  )
}

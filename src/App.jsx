import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 
import Home from './Home'

function App() { 

  return (
    <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg " 
          style={{ backgroundColor:"#650259"}} data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">ShopKart_6</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About US</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
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
        </div>
        <div className="row mt-2">
          <div className="col-2">
            <ul>
              <li><a href="">All</a></li>
              <li><a href="">Beauty</a></li>
              <li><a href="">Fragrances</a></li>
              <li><a href="">Furniture</a></li>
            </ul>      
          </div>
          <div className="col-10">
            <Home />
          </div>
        </div>
        <div className="row">Footer</div>
    </div>
  )
}
export default App

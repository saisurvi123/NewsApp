import React, { Component } from 'react'
import './navbar.css'
import {
  NavLink
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="/">News Monkey</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link " aria-current="page" to="/technology">Technology</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </>
    )
  }
}

export default Navbar
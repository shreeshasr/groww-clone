import React from 'react'
import image from '../../images/logo-dark-groww.svg'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="brandImage">
                <a href="https://groww.in"><img src={image} alt="groww"></img></a>
            </div>
            <div className="searchBox">
                <span>
                    <input type="text" className="searchInput"></input>
                </span>
                <span>
                    <span className="material-icons">search</span>
                    <span className="placeholderText">"What are you looking for today?"</span>
                </span>
                
            </div>
            <div className="loginOrRegister">
                <button>Login/Register</button>
            </div>
        </div>
    )
}

export default Navbar

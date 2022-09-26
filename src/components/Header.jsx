import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container py-4">
                    <a className="navbar-brand title" href="/">ETHNIC</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item px-3">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink to="/product" className="nav-link">Product</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item dropdown px-3">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu p-2 text-center">
                                    <li><NavLink to="/login" className="dropdown-item link" href="/">Login</NavLink></li>
                                    <hr />
                                    <li><NavLink to="/register" className="dropdown-item" href="/">Register</NavLink></li>
                                    <hr />
                                </ul>
                            </li>
                        </ul>
                       <Cart/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
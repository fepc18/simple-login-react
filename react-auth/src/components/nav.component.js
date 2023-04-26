import React from "react";

export default function Nav() {


    return (
        <nav className="navbar navbar-expand navbar-light fixed-top" >
            <div className="container">
                <a className="navbar-brand" href="/">Home</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )

}
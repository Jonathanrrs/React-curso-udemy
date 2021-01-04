import React from 'react'
import { NavLink } from 'react-router-dom'; /* navlink a diferencia del link es para poder agregar clases cuando esté esta en dicha ruta */
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="./about">About</NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" to="./login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

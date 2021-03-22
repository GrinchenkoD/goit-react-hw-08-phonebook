import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <span>LOGO</span>
            <ul>
                <li><NavLink to="/register" className="" activeClassName="">Sign up</NavLink></li>
                <li><NavLink to="/login" className="" activeClassName="">Login </NavLink></li>
            </ul>
        </header>
    )
}

export default Header

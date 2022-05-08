import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md'
import Logo from '../images/logosp.svg'

export default function Navbar() {
    // show and close mobile menu 
    const [showNav, setShowNav] = useState(false)

    return (
        < nav className="navbar" >
            <div className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}>
                <MdMenu />
            </div>

            <div className="logo"><img src={Logo} className="logo--img" alt="logo"></img></div>

            <ul className={!showNav ? 'nav-sub link-group hide-item' : 'nav-sub link-group'} onClick={() => setShowNav(!showNav)}>
                <div className="close-nav-icon"
                    onClick={() => setShowNav(!showNav)}
                >
                    <MdClose />
                </div>
                <li className="list-item">
                    <NavLink to="/" exact >Home</NavLink>
                </li>
                <li className="list-item" >
                    <NavLink to="/projects" >Projects</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav >
    )
}

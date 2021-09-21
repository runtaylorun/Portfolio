import * as React from "react"
import { Link } from "gatsby"
import * as sharedClasses from '../css/shared.module.css'

const NavBar = () => {
    return (
        <nav className={sharedClasses.navBar}>
            <ul className={sharedClasses.navList}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/experience'>Experience</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
import React from 'react'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <a className='navbar__logo' href="/">Porfolio</a>
        <div className='navbar__menu'>
            <img className='navbar__menu--icon' src="public/assets/nav/menuIcon.png" alt="nuenu boton" />
            <ul className='navbar__menu--list'>
                <li className='navbar__menu--list-item'><a className='navbar__menu--list-item_link' href="#abaout">About</a></li>
                <li className='navbar__menu--list-item'><a className='navbar__menu--list-item_link' href="#experience">Experience</a></li>
                <li className='navbar__menu--list-item'><a className='navbar__menu--list-item_link' href="#projects">Projects</a></li>
                <li className='navbar__menu--list-item'><a className='navbar__menu--list-item_link' href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

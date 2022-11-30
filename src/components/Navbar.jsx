import React from 'react'
import { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  function toggle() {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }

  return (
    <nav className={`nav ${toggleMenu ? "" : "false"}`}>
      <p className='menuIcon' onClick={toggle}>Menu</p>
      <ul className={`navList  ${toggleMenu ? "" : "false"}`}>
        <li className='li'>Home</li>
        <li className='li'>Cart</li>
        <li className='li'>Likes</li>
        <li className='li'>Categories</li>
        <li className='li'>About</li>
        <li className='li'>Contact</li>
      </ul>
    
      <div className={`faq ${toggleMenu ? "" : "false"}`}>FAQ</div>
  </nav>
    )
}

export default Navbar
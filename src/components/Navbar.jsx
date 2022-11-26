import React from 'react'
import classes from "./Navbar.module.css"
const Navbar = () => {
 
  return (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.li}>Home</li>
        <li className={classes.li}>Cart</li>
        <li className={classes.li}>Likes</li>
        <li className={classes.li}>Categories</li>
        <li className={classes.li}>About</li>
        <li className={classes.li}>Contact</li>
      </ul>
    
      <div className={classes.faq}>FAQ</div>
  </nav>
    )
}

export default Navbar
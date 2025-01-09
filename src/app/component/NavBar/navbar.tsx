'use client'
import Link from "next/link";
import {useState} from 'react'
import "./navbar.css"; // Import the SCSS file

const Navbar = () => {

     const [isMenuOpen ,setIsMenuOpen] =useState(false)

     const toggleMenu = () =>{
        setIsMenuOpen(prevState => !prevState)
     }

  return (
    <nav className="navbar">
      <div className="logo">eSchool</div>
      <ul className="nav-links-container">
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#benefits">Benefits</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <label htmlFor="menu-toggle" className="dotmenu ml-2">
          <div className="dot"></div>
          <div className="dot"></div>
        </label>
      </ul>
      <div  className="hamburger" onClick={toggleMenu}>
        {!isMenuOpen ? (<>
            <div className="dot"></div>
            <div className="dot"></div>
        </>) : (<>
            <div className="cross-line top"></div>
            <div className="cross-line bottom"></div>
        </>)}
        
        
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css'

function Header() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
        <li><NavLink to="/CV" className={({ isActive }) => (isActive ? 'active' : '')}>CV</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
      </ul>
    </nav>
    </>
  );
}

export default Header;
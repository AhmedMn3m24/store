import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav >
      <ul >
        <li >
          <NavLink 
            to="/" style={{color:"black"}}> Home 
      </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"style={{color:"black"}}> AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" style={{color:"black"}}> Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/Contact" style={{color:"black"}}> Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/customers" className={"csutomers"}>  Customers
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login-in"  className={"login"}>  Login 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="hamburger">
          <GiHamburgerMenu />
        </label>
        <label htmlFor="click" className="cancel">
          <FaXmark />
        </label>
        <div className="logo">
          <NavLink to="/">
            <img
              src="https://lh5.googleusercontent.com/C6Mow3738OqKjrVkjWJ53Gr0rXtzfT8qpt1WzTxVH--ly2ak56mmxeFq85ZhaT5k4qUxnonuxilgahBP7aPcLWE=w16383"
              alt="uvce"
            />
          </NavLink>
          <span>UVCE</span>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/departments">Departments ▼</NavLink>
            <ul>
              <li>
                <a href="">Department of civil</a>
              </li>
              <li>
                <a href="">Department of Mech</a>
              </li>
              <li>
                <a href="">Department of EEE</a>
              </li>
              <li>
                <a href="">Department of ECE</a>
              </li>
              <li>
                <a href="">Department of CSE</a>
              </li>
              <li>
                <a href="">Department of Arch</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/academics">Academics</NavLink>
          </li>
          <li>
            <NavLink to="/students">Faculty</NavLink>
          </li>
          <li>
            <NavLink to="/students">Students</NavLink>
          </li>
          <li>
            <NavLink to="/students">
              Facilities and &nbsp;&nbsp;Infrastructure
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications">Notifications</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/">More ▼</NavLink>
            <ul>
              <li>
                <NavLink to="/library">Library</NavLink>
              </li>
              <li>
                <NavLink to="/placements">Placements</NavLink>
              </li>
              <li>
                <NavLink to="/alumini">Alumini</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/about">RTI</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* 
<li>
<IoSearchSharp className="search-icon" />
</li>
</ul> */
}

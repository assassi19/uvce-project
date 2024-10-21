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
          <li>
            <NavLink to="/research">Research</NavLink>
          </li>
          <li className="dropdown">
            <span className="dropdown-list">
              <NavLink to="/departments">Departments</NavLink>

              <label>
                <FaAngleDown />
              </label>
            </span>
            <ul>
              <li>
                <a href="">CSE</a>
              </li>
              <li>
                <a href="">CSE</a>
              </li>
              <li>
                <a href="">CSE</a>
              </li>
              <li>
                <a href="">CSE</a>
              </li>
              <li>
                <a href="">CSE</a>
              </li>
              <li>
                <a href="">CSE</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/students">Students</NavLink>
          </li>
          <li>
            <NavLink to="/placements">Placements</NavLink>
          </li>
          <li>
            <NavLink to="/library">Library</NavLink>
          </li>
          <li>
            <NavLink to="/alumini">Alumini</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/notifications">Notifications</NavLink>
          </li>
          <li>
            <NavLink to="/about">SEB UVCE</NavLink>
          </li>
          <li>
            <IoSearchSharp className="search-icon" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

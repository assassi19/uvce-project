import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

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
          <li>
            <NavLink to="/departments">Departments</NavLink>
            <ul className="dropdown">
              <li>
                <a href="#">Department of CS</a>
              </li>
              <li>
                <a href="#">Department of EC</a>
              </li>
              <li>
                <a href="#">Department of Mech</a>
              </li>
              <li>
                <a href="#">Department of civil</a>
              </li>
              <li>
                <a href="#">Department of ECE</a>
              </li>
              <li>
                <a href="#">Department of Archi</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/students">Students</NavLink>
            <ul className="dropdown">
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Competitons</a>
              </li>
              <li>
                <a href="#">Clubs</a>
              </li>
            </ul>
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
            <NavLink to="/about">SEB UVCE ▼</NavLink>
            <ul className="dropdown2">
              <li>
                <a href="#">Rahul S.R - Chairman SEB</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

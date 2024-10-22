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
              <li className="sub-dropdown">
                <NavLink to="/depart-of-civil">Depart of civil ▼</NavLink>
                <ul>
                  <li>
                    <NavLink to="/depart-of-civil">UG - B.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-civil">PG - M.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-civil">Phd</NavLink>
                  </li>
                </ul>
              </li>
              <li className="sub-dropdown">
                <NavLink to="/depart-of-mech">Depart of Mech ▼</NavLink>
                <ul>
                  <li>
                    <NavLink to="/depart-of-mech">UG - B.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-mech">PG - M.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-mech">Phd</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/depart-of-electronics">Depart of EEE</NavLink>
              </li>
              <li>
                <NavLink to="/depart-of-electrical">Depart of ECE</NavLink>
              </li>
              <li className="sub-dropdown">
                <NavLink to="/depart-of-computers">Depart of CSE ▼</NavLink>
                <ul>
                  <li>
                    <NavLink to="/depart-of-computers">UG - B.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-computers">PG - M.tech</NavLink>
                  </li>
                  <li>
                    <NavLink to="/depart-of-computers">Phd</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/depart-of-Arch">Depart of Arch</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/academics">Academics</NavLink>
          </li>
          <li>
            <NavLink to="/faculty">Faculty</NavLink>
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
            <NavLink to="/library">Library</NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/">More ▼</NavLink>
            <ul>
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
                <NavLink to="/notifications">Notifications</NavLink>
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

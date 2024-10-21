import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-sec-1">
        <div className="footer-1">
          <h4 className="footer-heading">ABOUT</h4>
          <p className="footer-1-para">
            University of Visvesvaraya College of Engineering (UVCE) was
            established in the year 1917 by Bharat Ratna Sir M Visvesvaraya.
            Currently an autonomous institution, the College provides seven
            engineering courses - Electronics and Communication, Electrical and
            Electronics, Mechanical, Computer Science, Information Science,
            Artificial Intelligence and Civil Engineering apart from
            Architecture.
          </p>
        </div>
        <div className="footer-2">
          <h4 className="footer-heading">QUICKLINKS</h4>
          <ul className="footer-2-lists">
            <li>
              <NavLink to="/">College Intake</NavLink>
            </li>
            <li>
              <NavLink to="/">Admission Process</NavLink>
            </li>
            <li>
              <NavLink to="/">Syallabus</NavLink>
            </li>
            <li>
              <NavLink to="/">Placement Office</NavLink>
            </li>
            <li>
              <NavLink to="/">Fests</NavLink>
            </li>
            <li>
              <NavLink to="/">Student Clubs</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-3">
          <h4 className="footer-heading">CONTACT</h4>
          <div className="footer-3-details">
            <p>
              Office Address - K R Circle, Dr Ambedkar Veedhi, Bengaluru,
              Karnataka 560001
            </p>
            <p>
              Info line - <span className="footer-3-span">+080-22961890</span>
            </p>
            <p>
              Email - <span className="footer-3-span">info@campusuvce.in</span>
            </p>
            <p className="footer-3-navlink">
              <NavLink to="/">Plan a vist</NavLink>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-sec-2">
        <p>
          © UVCE 2024-2025 - All rights reserved | Designed and Developed by
          <span>Hruthik M</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

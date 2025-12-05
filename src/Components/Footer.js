import React from "react";
import { Logo, MainLogo } from "./Image";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-footer">
                <div className="footer-logo">
                  <img src={MainLogo} alt="" />
                </div>
                <div className="about-footer-content">
                  <p>
                    One of the best dental clinic in Indore,<br></br> Bhapkar
                    Dental Care,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer-links footer-quick-links">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <NavLink to="/">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">about us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/service">services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">book apoointment</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-links footer-social-links">
                <h3>social media</h3>
                <ul>
                  <li>
                    <NavLink to="#">facebook</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">instagram</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">youtube</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">twitter</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-links footer-contact-links">
                <h3>contact us</h3>
                <ul>
                  <li>
                    <NavLink to="#">bhapkar@gmail.com</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">+91 92017 31382</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-copyright-text">
                  <p>Copyright © 2025 All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

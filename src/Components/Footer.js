import React from "react";
import { Logo } from "./Image";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="about-footer">
                <div class="footer-logo">
                  <img src={Logo} alt="" />
                </div>
                <div class="about-footer-content">
                  <p>
                    The goal our clinic is provide friendly, caring dentistry
                    and highest level of general, cosmetic, and specialist
                    dental treatments.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="footer-links footer-quick-links">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <NavLink to="#">home</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">about us</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">services</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">book apoointment</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="footer-links footer-social-links">
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

            <div class="col-lg-2 col-md-4">
              <div class="footer-links footer-contact-links">
                <h3>contact us</h3>
                <ul>
                  <li>
                    <NavLink to="#">info@dental.com</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">+91 98765 43210</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="row">
              <div class="col-lg-12">
                <div class="footer-copyright-text">
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

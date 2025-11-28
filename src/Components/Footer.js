import React from "react";
import { Logo } from "./Image";

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
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">book apoointment</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="footer-links footer-social-links">
                <h3>social media</h3>
                <ul>
                  <li>
                    <a href="#">facebook</a>
                  </li>
                  <li>
                    <a href="#">instagram</a>
                  </li>
                  <li>
                    <a href="#">youtube</a>
                  </li>
                  <li>
                    <a href="#">twitter</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-4">
              <div class="footer-links footer-contact-links">
                <h3>contact us</h3>
                <ul>
                  <li>
                    <a href="#">info@dental.com</a>
                  </li>
                  <li>
                    <a href="#">+91 98765 43210</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="row">
              <div class="col-lg-12">
                <div class="footer-copyright-text">
                  <p>Copyright © 2024 All Rights Reserved.</p>
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

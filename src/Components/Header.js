import React from "react";
import { Logo } from "./Image";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" className="mainLogo" />
              </a>
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Services
                      </a>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        Pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item highlighted-menu">
                      <a className="nav-link" href="#">
                        book appointment
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <a href="#" className="btn-default">
                    book appointment
                  </a>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
};

export default Header;

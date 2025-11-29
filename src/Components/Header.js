import React from "react";
import { Logo } from "./Image";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" className="mainLogo" />
              </NavLink>
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/service">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item submenu">
                      <NavLink className="nav-link" to="/blog">
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item highlighted-menu">
                      <a className="nav-link" href="#">
                        book appointment
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <NavLink to="/contact" className="btn-default">
                    book appointment
                  </NavLink>
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

import React from "react";
import { Logo, menu, MainLogo } from "./Image";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <img src={MainLogo} alt="Logo" className="mainLogo" />
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
                      <NavLink className="nav-link" href="/contact">
                        book appointment
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <NavLink to="/contact" className="btn-default">
                    book appointment
                  </NavLink>
                </div>
              </div>
              <div className="navbar-toggle">
                <button
                  className="toggleBtn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <img src={menu} alt="" />
                </button>

                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                      <img src={MainLogo} alt="Logo" className="mainLogo" />
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/about">About</NavLink>
                      <NavLink to="/service">Service</NavLink>
                      <NavLink to="/blog">Blog</NavLink>
                      <NavLink to="/contact">Make An Appointment</NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
};

export default Header;

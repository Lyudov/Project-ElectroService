import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import styles from "./Header.Module.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    document.cookie.includes("authToken")
  );

  useEffect(() => {
    const handleCookieChange = () => {
      setIsLoggedIn(document.cookie.includes("authToken"));
    };
    console.log(isLoggedIn);

    window.addEventListener("onCookieChange", handleCookieChange);

    return () => {
      window.removeEventListener("onCookieChange", handleCookieChange);
    };
  }, [isLoggedIn]);

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt="" />
              <span>Electrochip</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">
                      Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  {isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/create-blog">
                          Create Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Logout />
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">
                          Register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;

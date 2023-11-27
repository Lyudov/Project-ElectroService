import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const [cookies] = useCookies(["authToken"]);

  const isAuthenticated = !!cookies.authToken;

  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
              <img src="images/logo.png" alt="" />
              <span>Electrochip</span>
            </a>
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
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/service">
                      {" "}
                      Service{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog">
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact{" "}
                    </a>
                  </li>
                  {isAuthenticated && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/create-blog">
                          Create Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
                  {!isAuthenticated && (
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

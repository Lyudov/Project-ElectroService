function Header() {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
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
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {" "}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">
                      {" "}
                      Service{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      {" "}
                      Blog{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className=" slider_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="detail_box">
                <h1>Electrical Service Providersc</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <button href="" className="">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 offset-lg-1">
              <div className="img_content">
                <div className="img_container">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="img-box">
                          <img src="images/slider-img.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

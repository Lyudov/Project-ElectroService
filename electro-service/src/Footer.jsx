import styles from "./Footer.Module.css";

function Footer() {
  return (
    <footer className="container-fluid footer_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 mx-auto">
            <p>
              &copy; 2023
              <a href="https://softuni.bg/">React Project Defense</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

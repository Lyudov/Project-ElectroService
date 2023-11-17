import styles from "./Footer.Module.css";

function Footer() {
  return (
    <footer className={`${styles["container-fluid"]} ${styles.footer_section}`}>
      <div className={styles["container"]}>
        <div className={styles["row"]}>
          <div
            className={`${styles["col-lg-7"]} ${styles["col-md-9"]} ${styles["mx-auto"]}`}
          >
            <p>
              &copy; 2023 All Rights Reserved By
              <a href="https://softuni.bg/"> React Project Defense </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

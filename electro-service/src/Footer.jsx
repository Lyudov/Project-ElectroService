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
              &copy; 2019 All Rights Reserved By
              <a href="https://html.design/"> Free Html Templates</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

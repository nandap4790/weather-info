import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles.footer}>
        5 Day / 3 Hour Weather Forecast - Bangalore
      </div>
    </footer>
  );
};

export default Footer;

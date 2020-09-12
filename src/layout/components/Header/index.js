import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return <header className={styles["header-container"]}>
    <h1 className={styles.header}>5 Day / 3 Hour Weather Forecast </h1>
  </header>
}

export default Header;
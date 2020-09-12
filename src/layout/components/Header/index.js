import React from "react";

import styles from "./Header.module.css";
import { connect } from "react-redux";

const Header = () => {
  return <header className={styles["header-container"]}>
    <h1 className={styles.header}>5 Day / 3 Hour Weather Forecast </h1>
  </header>
}

const mapStateToProps = (state) => {
  console.log(state)
}

export default connect(mapStateToProps)(Header);
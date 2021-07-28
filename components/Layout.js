import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import * as styles from "./Layout.module.scss";
// import { ReactComponent as Logo } from '../public/images/logo.svg';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImageContainer}></div>
          <div className={styles.logoTitle}>simply home</div>
        </div>
        <div className={styles.hamburgerMenuContainer}>
          <div className={styles.hamburgerMenuLine}></div>
          <div className={styles.hamburgerMenuLine}></div>
          <div className={styles.hamburgerMenuLine}></div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;

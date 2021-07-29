import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.svg";
import * as styles from "./Layout.module.scss";
import { Collapse } from "react-burgers";

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const onNavigationItemClick = (navItem) => {
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`${styles.navbarContainer} ${
          isActive ? styles.navbarBackground : ""
        }`}
      >
        <div className={styles.topSectionContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoImageContainer}></div>
            <div className={styles.logoTitle}>simply home</div>
          </div>
          <Collapse
            active={isActive}
            onClick={() => setIsActive((active) => !active)}
            lineHeight={4}
            lineSpacing={4}
            width={22}
            padding="0"
            color="#131255"
          />
        </div>
        <div
          className={`${styles.navigationAreaContainer} ${
            isActive
              ? styles.showNavigationMenuAnimation
              : styles.hideNavigationMenuAnimation
          }`}
        >
          <span onClick={onNavigationItemClick} className={styles.navigationItem}>
            <Link href="/HomeScreen">About</Link>
          </span>
          <span onClick={onNavigationItemClick} className={styles.navigationItem}>
            <Link href="/HomeScreen">Deals</Link>
          </span>
          <span onClick={onNavigationItemClick} className={styles.navigationItem}>
            <Link href="/HomeScreen">Gallery</Link>
          </span>
          <span onClick={onNavigationItemClick} className={styles.signUpButton}>
            <Link href="/SignUpScreen">
                <a className={styles.signUpButtonText}>Sign Up</a>
            </Link>
          </span>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;

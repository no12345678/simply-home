import React from "react";
import * as styles from "./HomeScreen.module.scss";
import Link from "next/link";

const HomeScreen = () => {
  const renderTopSection = () => {
    return (
      <div className={styles.topSectionContainer}>
        <div className={styles.infoSectionContainer}>
          <div className={styles.mainTitle}>Let&apos;s Redecorate!</div>
          <div className={styles.description}>
            Welcome to Simply Home. We can’t wait to get started showing you how
            to make the most of your living spaces for whatever budget works
            best for you.
          </div>
          <div className={styles.getStartedButton}>
            <Link href="/SignUpScreen">
              <a className={styles.getStartedButtonText}>Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const renderSecondarySection = () => {
    return (
      <div className={styles.secondarySection}>
        <div className={styles.keepItSimpleSection}>
          <div className={styles.title}>Keep It Simple...</div>
          <div className={styles.description}>
            Learn more about our unique approach to personalized home
            decoration. Find out why we’re different.
          </div>
          <div className={styles.learnMoreButton}>
            <Link href="/AboutScreen">
              <a className={styles.learnMoreButtonText}>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.simplifyYourHomeSection}>
          <div className={styles.homeImage}></div>
          <div className={styles.detailsSection}>
            <div className={styles.title}>
              Simplify <br /> Your Home
            </div>
            <div className={styles.description}>
              Let us show you how to make your home more like home with simple,
              modern techniques.
            </div>
            <div className={styles.joinFreeButton}>
              <Link href="/SignUpScreen">
                <a className={styles.joinFreeButtonText}>Join FREE</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className={styles.footerSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImageContainer}></div>
          <div className={styles.logoTitle}>simply home</div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.address}>
            123 Main Ave. Palo Alto CA, 94020
          </div>
          <div>
            If you feel like your home is pretty well decorated already...
          </div>
          <div className={styles.unsubscribeButton}>unsubscribe here.</div>
        </div>
        <div className={styles.downloadsContainer}>
          <div className={styles.appStoreButton}></div>
          <div className={styles.googlePlayButton}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderTopSection()}
      {renderSecondarySection()}
      {renderFooter()}
    </div>
  );
};

export default HomeScreen;

import React from "react";
import * as styles from "./AboutScreen.module.scss";
import Lottie from "react-lottie";
import animationData from '../public/lotties/under-construction';

const AboutScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <Lottie options={defaultOptions} height={370} width={370} />
    </div>
  );
};

export default AboutScreen;

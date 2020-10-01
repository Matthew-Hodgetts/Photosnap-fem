import React from "react";
import styles from "./Hero.module.scss";
import CtaButton from "@common/CtaButton/CtaButton";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ">
            <h2 className={styles.subheading}>Last month's featured story</h2>
            <h1 className={styles.title}>Hazy full moon of Appalachia</h1>
            <p>
              <span className={styles.details}>March 2nd 2020 by </span>
              <span className={styles.author}>Srisaket Sorungvisai</span>
            </p>
            <p className={styles.text}>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

import styles from "./CtaButton.module.scss";

import { Link } from "gatsby";

import arrow from "../../../images/shared/arrow-white.svg";

const CtaButton = ({ text, url, altText }) => {
  return (
    <Link to={url} className={styles.ctaButton}>
      <span>{text}</span>
      <img
        src={arrow}
        className={styles.arrow}
        //   eslint-disable-next-line
        alt={altText}
      />
    </Link>
  );
};

CtaButton.defaultProps = {
  text: "Get an invite",
  url: "/",
  altText: "",
};

export default CtaButton;

import React from "react";

import "./CtaButton.scss";

import { Link } from "gatsby";

import arrow from "../../../images/shared/arrow-white.svg";
import arrowBlack from "../../../images/shared/arrow-black.svg";

const CtaButton = ({ text, url, altText, maxWidth, white, useLink }) => {
  if (useLink) {
    return (
      <Link
        to={url}
        className={maxWidth ? "ctaButton ctaButton--mw" : "ctaButton"}
      >
        <span>{text}</span>
        <img
          src={white ? arrowBlack : arrow}
          className="ctaButton__arrow"
          //   eslint-disable-next-line
          alt={altText}
        />
      </Link>
    );
  } else {
    return (
      <div className={maxWidth ? "ctaButton ctaButton--mw" : "ctaButton"}>
        <span>{text}</span>
        <img
          src={white ? arrowBlack : arrow}
          className="ctaButton__arrow"
          //   eslint-disable-next-line
          alt={altText}
        />
      </div>
    );
  }
};

CtaButton.defaultProps = {
  text: "Get an invite",
  url: "/",
  altText: "Arrow",
  useLink: true,
};

export default CtaButton;

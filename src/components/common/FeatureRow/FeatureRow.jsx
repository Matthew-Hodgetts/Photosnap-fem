import React from "react";

import "./FeatureRow.scss";

import { Link } from "gatsby";
import { BsArrowRight } from "react-icons/bs";

const FeatureRow = ({
  title,
  text,
  linkText,
  linkUrl,
  imgUrl,
  white,
  alternate,
  special,
}) => {
  let color;
  if (white) {
    color = "white";
  } else {
    color = "black";
  }

  let direction;

  if (alternate) {
    direction = "flex-row-reverse";
  } else {
    direction = "";
  }

  let highlight;

  if (special) {
    highlight = "feature-row__content--special";
  } else {
    highlight = "";
  }

  return (
    <section className={`feature-row feature-row--${color}`}>
      <div className="container-fluid">
        <div className={`row ${direction}`}>
          <div className="col-md-6 col-xl-5">
            <div className={`feature-row__content ${highlight} `}>
              <h2 className="feature-row__title">{title}</h2>
              <p className="feature-row__text my-3">{text}</p>
              {linkUrl && (
                <Link to={linkUrl}>
                  {linkText} <BsArrowRight />{" "}
                </Link>
              )}
            </div>
          </div>
          <div
            className="col-md-6 col-xl-7 feature-row__img"
            style={{ backgroundImage: `url('${imgUrl}')` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

FeatureRow.defaultProps = {
  title: "Title here",
  text: "Lorem ipsum dolor sit amet....",
  linkText: "Text for link",
  imgUrl: "https://via.placeholder.com/830x650",
  white: false,
  alternate: false,
  special: false,
};

export default FeatureRow;

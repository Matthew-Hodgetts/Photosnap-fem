import React from "react";

import "./Plan.scss";

const Plan = ({ title, text, monthly, yearly, black, showMonthly }) => {
  let classes, btnClass;

  if (black) {
    classes = "plan--black";
    btnClass = "btn--white";
  } else {
    btnClass = "btn--black";
  }
  return (
    <div className="col-lg-4">
      <div className={`plan ${classes}`}>
        <div className="plan__inner">
          <h2 className="plan__title">{title}</h2>
          <p className="plan__text">{text}</p>
          <div className="price__wrapper">
            <span className="plan__price">
              £ {showMonthly ? monthly : yearly}
            </span>
            <p className="plan__price-interval">
              per {showMonthly ? "month" : "year"}
            </p>
          </div>
          <div>
            <button className={`btn btn--hover-grey d-block ${btnClass}`}>
              Pick Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

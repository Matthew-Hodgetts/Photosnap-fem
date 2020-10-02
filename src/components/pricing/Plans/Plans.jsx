import React, { useState } from "react";

import "./Plans.scss";

import Plan from "../Plan/Plan";

const Plans = () => {
  const [showMonthly, setShowMonthly] = useState(true);

  let timeLabel;
  if (showMonthly) {
    timeLabel = "plans--monthly";
  } else {
    timeLabel = "plans--yearly";
  }

  return (
    <section className={`plans py-6 ${timeLabel}`}>
      <div className="container">
        <div className="row pb-5">
          <div className="col d-flex align-items-center justify-content-center">
            <span className={`plans__time-label plans__time-label--monthly`}>
              Monthly
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={!showMonthly}
                onChange={() => setShowMonthly(!showMonthly)}
              />
              <span className="slider round"></span>
            </label>
            <span className={`plans__time-label  plans__time-label--yearly`}>
              Yearly
            </span>
          </div>
        </div>
        <div className="row">
          <Plan
            title="Basic"
            text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            monthly="19.00"
            yearly="190.00"
            showMonthly={showMonthly}
          />
          <Plan
            title="Pro"
            text="More advanced features available. Recommended for photography veterans and professionals."
            monthly="39.00"
            yearly="390.00"
            showMonthly={showMonthly}
            black
          />
          <Plan
            title="Business"
            text="Additional features available such as more detailed metrics. Recommended for business owners."
            monthly="99.00"
            yearly="990.00"
            showMonthly={showMonthly}
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;

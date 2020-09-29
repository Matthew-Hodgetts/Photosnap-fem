import React from "react";
import IconFeature from "../IconFeature/IconFeature";

const IconsRow = ({ iconFeatures }) => {
  return (
    <section className="icons-row py-6">
      <div className="container">
        <div className="row">
          {iconFeatures.map((f) => (
            <IconFeature
              title={f.title}
              text={f.text}
              img={f.img}
              altText={f.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

IconsRow.defaultProps = {
  iconFeatures: [],
};

export default IconsRow;

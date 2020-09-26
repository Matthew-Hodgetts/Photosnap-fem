import React from "react";

const Stories = ({ children }) => {
  return (
    <section className="stories">
      <div
        className="container-fluid"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        <div className="row no-gutters">{children}</div>
      </div>
    </section>
  );
};

export default Stories;

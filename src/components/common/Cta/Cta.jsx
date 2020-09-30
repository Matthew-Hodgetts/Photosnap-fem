import React from "react";

import styles from "./Cta.module.scss";

import CtaButton from "@common/CtaButton/CtaButton";

const Cta = ({ title, url }) => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-3">
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className="col-md-6 py-3 text-center text-md-right">
            <CtaButton url={url} />
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.defaultProps = {
  title: "title is not defined",
  url: "/",
};

export default Cta;

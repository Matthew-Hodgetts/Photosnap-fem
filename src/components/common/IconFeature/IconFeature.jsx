import React from "react";

import styles from "./IconFeature.module.scss";

const IconFeature = ({ title, text, img, altText }) => {
  return (
    <div className={`col-md-4 py-2 py-md-0 ${styles.iconFeature}`}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={altText} className={styles.img} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

IconFeature.defaultProps = {
  img: "https://via.placeholder.com/72x72",
  altText: "Change this",
  title: "Icon feature",
  text: "Lorem ipsum dolor sit amet",
};

export default IconFeature;

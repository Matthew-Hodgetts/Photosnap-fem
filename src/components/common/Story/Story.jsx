import React from "react";

import styles from "./Story.module.scss";
import { Link } from "gatsby";

import CtaButton from "@common/CtaButton/CtaButton";

const Story = ({ link, date, title, author, imgUrl, imgAlt }) => {
  return (
    <div className={`col-md-6 col-xl-3 ${styles.story}`}>
      <Link to={link} className={styles.link}>
        <img src={imgUrl} className={styles.img} alt={imgAlt} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.author}>by {author}</span>
          <div className={styles.divider}></div>
          <CtaButton text="Get an invite" />
        </div>
      </Link>
    </div>
  );
};

Story.defaultProps = {
  link: "/",
  date: "Oct 1 2020",
  title: "Story title",
  author: "Whelan Smithers",
  imgUrl: "https://via.placeholder.com/360x500",
  imgAlt: "Define this!!!",
};

export default Story;

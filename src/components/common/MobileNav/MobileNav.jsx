import React from "react";

import styles from "./MobileNav.module.scss";

import { Link } from "gatsby";
const MobileNav = ({ navShowing }) => {
  const displayClass = navShowing ? styles.active : styles.inactive;

  return (
    <nav className={`${styles.nav} ${displayClass}`}>
      <div className="container d-md-none">
        <div className="row">
          <div className="col text-center">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>

            <Link
              to="/"
              className="btn btn--black btn--hover-grey d-block my-3"
            >
              Get an invite
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

MobileNav.defaultProps = {
  navShowing: true,
};

export default MobileNav;

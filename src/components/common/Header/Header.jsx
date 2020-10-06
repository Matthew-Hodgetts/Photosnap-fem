import React from "react";

import { Link } from "gatsby";
import styles from "./Header.module.scss";
import logo from "../../../images/shared/logo.svg";

const Header = ({ toggleNav }) => (
  <header className={styles.header}>
    <div className="container py-2">
      <div className="row align-items-center">
        <div className="col-6 col-lg-3">
          <Link to="/">
            <img src={logo} alt="Photosnap logo" />
          </Link>
        </div>
        <div className="d-none d-lg-flex col-lg-6 justify-content-center">
          <nav className={styles.nav}>
            <ul>
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
          </nav>
        </div>
        <div className="col-6 col-lg-3 text-right">
          <Link
            to="/"
            className="btn btn--black btn--hover-grey d-none d-lg-inline-block"
          >
            Get an invite
          </Link>
          <button
            className="hamburger d-lg-none"
            type="button"
            onClick={() => toggleNav(true)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

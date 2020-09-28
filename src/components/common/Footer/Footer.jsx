import React from "react";

import "./Footer.scss";

import { Link } from "gatsby";

import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import logo from "../../../images/shared/logo-white.svg";
import arrowRight from "../../../images/shared/arrow-white.svg";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer__col">
            <Link to="/">
              <img src={logo} alt="photosnap logo" />
            </Link>
            <div className="footer__socials">
              <a
                href="http://oogle.ocm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="http://oogle.ocm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="http://oogle.ocm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="http://oogle.ocm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <ul className="footer__nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Stories</Link>
              </li>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 offset-md-4 footer__col">
            <Link to="/">
              <div className="d-flex justify-content-between footer__cta">
                <span>Get an invite</span>
                <div>
                  <img src={arrowRight} alt="arrow" />
                </div>
              </div>
            </Link>
            <p className="footer__copyright">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import PropTypes from "prop-types";

import Header from "@common/Header/Header";
import Footer from "@common/Footer/Footer";
import MobileNav from "@common/MobileNav/MobileNav";

const Layout = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileclick = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <MobileNav navShowing={showMobileNav} />
      <Header toggleNav={handleMobileclick} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

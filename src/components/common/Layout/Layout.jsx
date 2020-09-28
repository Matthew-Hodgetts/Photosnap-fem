import React from "react";
import PropTypes from "prop-types";

import Header from "@common/Header/Header";
import Footer from "@common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const DesignLayouts = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet /> 
      </section>
      <Footer />
    </>
  );
};

export default DesignLayouts;
import React from "react";

import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

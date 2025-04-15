import '../../styled-components/layout.module.css';

import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

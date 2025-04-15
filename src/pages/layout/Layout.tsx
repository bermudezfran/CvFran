import { useRef } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Navbar } from "../../components/header/Navbar";
import { Footer } from "../../components/footer/Footer";
import '../../styled-components/layout.module.css';

export const Layout = () => {
  const location = useLocation();
  const nodeRef = useRef(null); // 👈 importante

  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef} // 👈 pasamos el ref acá
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div ref={nodeRef} className="route-wrapper">
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </main>
      <Footer />
    </div>
  );
};
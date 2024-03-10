import { Suspense } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import ScrollToTop from "../../utils/ScrollToTop";


const SharedLayout = () => {
  return (
    <div style={{
        minHeight: '100vh',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <main>
        <Suspense>
          <Outlet />
          <ScrollToTop/>
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
};

export default SharedLayout;

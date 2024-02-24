import { Suspense } from "react";
import Header from "../../../../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../../shared/Footer";


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
        </Suspense>
      </main>
      <Footer/>
    </div>
  );
};

export default SharedLayout;

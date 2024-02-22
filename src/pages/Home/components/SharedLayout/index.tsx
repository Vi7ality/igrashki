import { Suspense } from "react";
import Header from "../../../../shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../../shared/Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

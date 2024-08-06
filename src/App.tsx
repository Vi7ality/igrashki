import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAppDispatch } from "./redux/store";
import { useEffect } from "react";
import { loadCartItems, loadSelectedManagementPoint } from "./redux/slices/cart.slice";
import ManagerLogin from "./pages/ManagerLogin";
import Profile from "./pages/Profile";
import SubscriptionInfo from "./pages/Management/screens/SubscriptionInfo";
import { managerGetInfo } from "./redux/slices/manager.slice";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import SharedLayout from "./shared/SharedLayout";
import NotFound from "./pages/NotFound";
import RegisterSuccess from "./pages/RegisterSuccess";
import { lazy } from 'react';
import Clients from "./pages/Management/screens/Clients";
import Toys from "./pages/Management/screens/Toys";
import ManagementLayout from "./pages/Management";

const Bag = lazy(()=> import ("./pages/Bag"))
const Catalogue = lazy(() => import("./pages/Catalogue"))
const FAQ = lazy(() => import("./pages/FAQ"))
const Toy = lazy(()=>import("./pages/Toy"))
const Subscription = lazy(()=>import("./pages/Subscription"))
const Confirmation = lazy(()=>import("./pages/Confirmation"))
const AboutUs = lazy(()=>import("./pages/AboutUs"))
// const ManagementLayout = lazy(()=>import("./pages/Management"))
// const Clients = lazy(()=>import("./pages/Management/screens/Clients"))
const ClientDetails = lazy(()=>import("./pages/Management/screens/ClientDetails"))
// const Toys = lazy(()=>import("./pages/Management/screens/Toys"))
const ToyDetails = lazy(()=>import("./pages/Management/screens/ToyDetails"))
const ManagementHome = lazy(()=>import("./pages/Management/screens/ManagementHome"))

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const managerToken = localStorage.getItem("managerToken");
    if (managerToken) {
      dispatch(managerGetInfo());
    }
    dispatch(loadCartItems());
    dispatch(loadSelectedManagementPoint());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/toys/:toyId" element={<Toy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/register-success" element={<RegisterSuccess />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound/>} />
          </Route>

          <Route path="/managerLogin" element={<ManagerLogin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/management" element={<ManagementLayout />}>
            <Route path="clients" element={<Clients />} />
            <Route path="clients/:clientId" element={<ClientDetails />} />
            <Route path="toys" element={<Toys />} />
            <Route path="toys/:toyEntryId" element={<ToyDetails />} />
            <Route path="subscriptions/:subId" element={<SubscriptionInfo />} />
            <Route index element={<ManagementHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

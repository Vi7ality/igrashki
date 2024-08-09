import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import { useEffect } from "react";
import { loadCartItems, loadSelectedManagementPoint } from "./redux/slices/cart.slice";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import SharedLayout from "./shared/SharedLayout";
import { lazy } from 'react';
import ManagementLayout from "./pages/Management";

const Home = lazy(() => import('./pages/Home'));
const ManagerLogin = lazy(() => import('./pages/ManagerLogin'));
const Profile = lazy(() => import('./pages/Profile'));
const SubscriptionInfo = lazy(() => import('./pages/Management/screens/SubscriptionInfo'));
const Clients = lazy(() => import('./pages/Management/screens/Clients'));
const Toys = lazy(() => import('./pages/Management/screens/Toys'));
const ClientDetails = lazy(() => import('./pages/Management/screens/ClientDetails'));
const ToyDetails = lazy(() => import('./pages/Management/screens/ToyDetails'));
const RegisterSuccess = lazy(() => import('./pages/RegisterSuccess'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Bag = lazy(()=> import ("./pages/Bag"))
const Catalogue = lazy(() => import("./pages/Catalogue"))
const FAQ = lazy(() => import("./pages/FAQ"))
const Toy = lazy(()=>import("./pages/Toy"))
const Subscription = lazy(()=>import("./pages/Subscription"))
const Confirmation = lazy(()=>import("./pages/Confirmation"))
const AboutUs = lazy(()=>import("./pages/AboutUs"))

const ManagementHome = lazy(()=>import("./pages/Management/screens/ManagementHome"))

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
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

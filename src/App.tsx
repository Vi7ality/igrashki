import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bag from "./pages/Bag";
import Catalogue from "./pages/Catalogue";
import FAQ from "./pages/FAQ";
import Toy from "./pages/Toy";
import Subscription from "./pages/Subscription";
import Confirmation from "./pages/Confirmation";
import AboutUs from "./pages/AboutUs";
import ManagementLayout from "./pages/Management";
import Clients from "./pages/Management/screens/Clients";
import ClientDetails from "./pages/Management/screens/ClientDetails";
import Toys from "./pages/Management/screens/Toys";
import ToyDetails from "./pages/Management/screens/ToyDetails";
import ManagementHome from "./pages/Management/screens/ManagementHome";
import { useAppDispatch } from "./redux/store";
import { useEffect } from 'react';
import { loadCartItems } from "./redux/slices/cart.slice";
import ManagerLogin from "./pages/ManagerLogin";
import Profile from "./pages/Profile";
import SubscriptionInfo from "./pages/Management/screens/SubscriptionInfo";
import { managerGetInfo } from "./redux/slices/manager.slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const managerToken = localStorage.getItem('managerToken')
    if (managerToken) {
      dispatch(managerGetInfo())
    }
    dispatch(loadCartItems())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/toys/:toyId" element={<Toy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/about" element={<AboutUs />} />
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
  );
}

export default App;

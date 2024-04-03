import {useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import AuthModal from "../../shared/Header/components/AuthModal";
import { ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";
import HeaderBackgound from "../../shared/HeaderBackground";
import AuthSection from "./components/AuthSection";
import { PageTitle, SubscrContainer } from "./Subscription.styled";
import { AxiosError } from "axios";
import OrderSection from "./components/OrderSection";

// managementPointId:
// clientId:
// toys:
// subscribtionStartDate:



const Subscription = () => {
  const navigate = useNavigate();
  const { client } = useAppSelector((state) => state.client);
  const { selectedManagementPoint } = useAppSelector((state) => state.cart);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [clientValues, setClientValues] = useState({
    parentName: "",
    parentSurname: "",
    phoneNumber: "",
    password: "",
    childName: "",
    childBirthDate: "",
    messenger: "telegram",
    formType: "online",
    acceptRules: false,
  });

  const handleSubmit = async (values: any) => {
    try {
      // e.preventDefault();
      console.log(values);
      // let token = localStorage.getItem("userToken");
      // const subscription = {
      //   managementPointId: selectedManagementPoint?._id,
      //   toys: cart.map((toy) => toy.itemId),
      // };

      // if (!client?._id) {
      //   const { data: registeredClient } = await api.post("/auth/register", clientValues);
      //   token = registeredClient.token;
      // }

      // await api.post("/subscription/sub", subscription, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // dispatch(clearCart());
      // navigate("/confirmation");
    } catch (error: any) {
      toast.error(`Помилка при оформленні: ${error?.response?.data?.error}`);
      setTimeout(() => {
        if (client?._id) {
          navigate("/profile");
        }
      }, 3000);
    }
  }; 
  return (
    <>
      <HeaderBackgound />
        <PageTitle>Реєстрація</PageTitle>
        <SubscrContainer>
          <AuthSection
            handleSubmit={handleSubmit}
            selectedManagementPoint={selectedManagementPoint}
            client={client}
            clientValues={clientValues}
            setClientValues={setClientValues}
            setIsAuthModalOpen={setIsAuthModalOpen}
          />
          <OrderSection clientValues={clientValues} setIsAuthModalOpen={setIsAuthModalOpen} />
        </SubscrContainer>
          {isAuthModalOpen && <AuthModal authClose={() => setIsAuthModalOpen(false)} />}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            closeButton={false}
          />
    </>
  );
};

export default Subscription;

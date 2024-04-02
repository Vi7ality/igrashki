import {useNavigate } from "react-router-dom";
import styles from "./Subscription.module.scss";
import edit from "./assets/edit.png";
import OrderedToy from "./components/OrderedToy";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import AuthModal from "../../shared/Header/components/AuthModal";
import { ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";
import { removeItemFromCart } from "../../redux/slices/cart.slice";
import HeaderBackgound from "../../shared/HeaderBackground";
import Container from "../../shared/Container";
import AuthSection from "./components/AuthSection";
import { PageTitle, SubscrContainer } from "./Subscription.styled";
import { AxiosError } from "axios";
import ButtonPannel from "./components/ButtonPannel";

// managementPointId:
// clientId:
// toys:
// subscribtionStartDate:



const Subscription = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { client } = useAppSelector((state) => state.client);
  const { cart, selectedManagementPoint } = useAppSelector((state) => state.cart);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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

  const handleDeleteItem = useCallback(
    (id: string) => {
      dispatch(removeItemFromCart(id));
    },
    [dispatch]
  );

  const handleSubmit = async (e: FormEvent) => {
    try {
      // e.preventDefault();
      console.log(clientValues);
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

  const toysCount = cart.length;
  return (
    <>
      <HeaderBackgound />
      <Container>
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

          <div className={styles.rightContent}>
            <h1 className={styles.title}>Твоє замовлення</h1>
            <div className={styles.container}>
              <h6 className={styles.toysTitle}>Іграшки ({toysCount}) </h6>
              <div className={styles.contentBox}>
                <img className={styles.editImg} src={edit} alt="edit" />
                <button className={styles.btnEdit} onClick={() => setIsEditing(!isEditing)}>
                  Редагувати
                </button>
              </div>
            </div>
            <div className={styles.orderContainer}>
              {cart.map((item) => (
                <OrderedToy
                  key={item.itemId}
                  itemImage={item.itemImage}
                  itemId={item.itemId}
                  itemName={item.itemName}
                  onDelete={handleDeleteItem}
                  isEditing={isEditing}
                />
              ))}
            </div>
            <hr className={styles.line} />
            <ButtonPannel client={client} clientValues={clientValues} setIsAuthModalOpen={setIsAuthModalOpen} position="cart"/>
            {/* <button
              disabled={!clientValues.acceptRules && !client?._id}
              type="submit"
              form="formId"
            >
              Відправити
            </button>
                  {!client?._id && (
        <div className={styles.headerSub}>
          <>
            <p>
              Якщо ви вже заповнили анкету у одній з бібліотек або онлайн — увійдіть до свого
              облікового запису, натиснувши кнопку нижче
            </p>
            <button onClick={() => setIsAuthModalOpen(true)} className={styles.accountBtn}>
              Увійти
            </button>
          </>
        </div>
      )} */}
          </div>
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
        </SubscrContainer>
      </Container>
    </>
  );
};

export default Subscription;

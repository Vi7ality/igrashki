import { Link, useNavigate } from "react-router-dom";
import styles from "./Subscription.module.scss";
import edit from "./assets/edit.png";
import OrderedToy from "./components/OrderedToy";
import checkbox from "./assets/checkbox.png";
import checkboxVb from "./assets/checkboxVb.png";
import checkboxTg from "./assets/checkboxTg.png";
import animalCenter from "./assets/animalCenter.png";
import checkedImg from "./assets/checkedImg.png";
import checkedVb from "./assets/checkedVb.png";
import checkedTg from "./assets/checkedTg.png";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import api from "../../api";
import { clearCart } from "../../redux/slices/cart.slice";
import AuthModal from "../../shared/Header/components/AuthModal";
import { ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";
import { removeItemFromCart } from "../../redux/slices/cart.slice";
import InputMask from "react-input-mask";
import HeaderBackgound from "../../shared/HeaderBackground";
import Container from "../../shared/Container";
import AuthSection from "./components/AuthSection";

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
        <h1 className={styles.hed}>Реєстрація</h1>
        <section></section>
        <section></section>
        <div className={styles.subscriptionContainer}>
          {!client?._id && <img className={styles.animalCenter} src={animalCenter} alt="animal" />}
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
            <button
              disabled={!clientValues.acceptRules && !client?._id}
              type="submit"
              form="formId"
              className={styles.SecondBtnSubmit}
            >
              Відправити
            </button>
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
        </div>
      </Container>
    </>
  );
};

export default Subscription;

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
      e.preventDefault();

      let token = localStorage.getItem("userToken");
      const subscription = {
        managementPointId: selectedManagementPoint?._id,
        toys: cart.map((toy) => toy.itemId),
      };

      if (!client?._id) {
        const { data: registeredClient } = await api.post("/auth/register", clientValues);
        token = registeredClient.token;
      }

      await api.post("/subscription/sub", subscription, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(clearCart());
      navigate("/confirmation");
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
          <div className={styles.leftContent}>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm} id="formId">
              <div className={styles.field}>
                {selectedManagementPoint && (
                    <label htmlFor="managementPoint" className={styles.fieldLabel}>
                      Локація
                    </label>
                  ) && (
                    <input
                      className={styles.fieldInput}
                      value={selectedManagementPoint ? selectedManagementPoint.location : ""}
                      disabled
                    />
                  )}
              </div>
              {!client?._id ? (
                <>
                  <div className={styles.field}>
                    <label htmlFor="parentSurname" className={styles.fieldLabel}>
                      Прізвище
                    </label>
                    <input
                      type="text"
                      name="parentSurname"
                      className={styles.fieldInput}
                      placeholder="Прізвище"
                      value={clientValues.parentSurname}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, parentSurname: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="parentName" className={styles.fieldLabel}>
                      Ім'я
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      className={styles.fieldInput}
                      placeholder="Ім'я"
                      value={clientValues.parentName}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, parentName: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phoneNumber" className={styles.fieldLabel}>
                      Мобільний номер
                    </label>
                    <InputMask
                      placeholder="+38 (___) ___ __ __"
                      mask="+38 (999) 999 99 99"
                      maskChar="_"
                      type="tel"
                      name="phoneNumber"
                      className={styles.fieldInput}
                      value={clientValues.phoneNumber}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, phoneNumber: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="password" className={styles.fieldLabel}>
                      Пароль
                    </label>
                    <input
                      type="password"
                      name="password"
                      className={styles.fieldInput}
                      placeholder="Пароль"
                      value={clientValues.password}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, password: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phoneNumber" className={styles.fieldLabel}>
                      Ім'я дитини
                    </label>
                    <input
                      type="text"
                      name="childName"
                      className={styles.fieldInput}
                      placeholder="Ім'я дитини"
                      value={clientValues.childName}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, childName: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="childBirthDate" className={styles.fieldLabel}>
                      Дата народження дитини
                    </label>
                    <input
                      type="date"
                      name="childBirthDate"
                      className={styles.fieldInput}
                      placeholder="Дата народження дитини"
                      value={clientValues.childBirthDate}
                      onChange={(e) =>
                        setClientValues({ ...clientValues, childBirthDate: e.target.value })
                      }
                    />
                  </div>
                  <div className={styles.fieldCheckbox}>
                    <label
                      className={styles.fieldCheckLabel}
                      onClick={() =>
                        setClientValues({ ...clientValues, acceptRules: !clientValues.acceptRules })
                      }
                    >
                      <img
                        src={clientValues.acceptRules ? checkedImg : checkbox}
                        className={styles.checkedImg}
                      />
                      <span className={styles.checkboxText}>
                        Я надаю згоду на оброблення персональних даних
                      </span>
                    </label>
                  </div>
                  <label className={styles.messengerLabel} htmlFor="messenger">
                    Оберіть месенджер, у якому вам зручніше продовжити спілкування:
                  </label>
                  <div className={styles.messengerCheck}>
                    <label
                      className={styles.checkboxLabel}
                      onClick={() => setClientValues({ ...clientValues, messenger: "viber" })}
                    >
                      <img
                        src={clientValues.messenger === "viber" ? checkedVb : checkboxVb}
                        alt="checkboxVb"
                      />
                      <span className={styles.checkboxVb}>Viber</span>
                    </label>

                    <label
                      className={styles.checkboxLabel}
                      onClick={() => setClientValues({ ...clientValues, messenger: "telegram" })}
                    >
                      <img
                        src={clientValues.messenger === "telegram" ? checkedTg : checkboxTg}
                        alt="checkboxTg"
                      />
                      <span className={styles.checkboxTg}>Telegram</span>
                    </label>
                  </div>
                  <div className={styles.headerSub}>
                    <>
                      <p>
                        Якщо ви вже заповнили анкету у одній з бібліотек або онлайн — увійдіть до
                        свого облікового запису, натиснувши кнопку нижче
                      </p>
                      <button
                        onClick={() => setIsAuthModalOpen(true)}
                        className={styles.accountBtn}
                      >
                        Увійти
                      </button>
                    </>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.field}>
                    <label htmlFor="parentName" className={styles.fieldLabel}>
                      Ім'я
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      className={styles.fieldInput}
                      placeholder="Ім'я"
                      value={client?.parentName}
                      disabled
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="parentSurname" className={styles.fieldLabel}>
                      Прізвище
                    </label>
                    <input
                      type="text"
                      name="parentSurname"
                      className={styles.fieldInput}
                      placeholder="Прізвище"
                      value={client?.parentSurname}
                      disabled
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phoneNumber" className={styles.fieldLabel}>
                      Мобільний номер
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className={styles.fieldInput}
                      placeholder="+38 (___) ___ __ __"
                      value={client?.phoneNumber}
                      disabled
                    />
                  </div>
                </>
              )}
              <button
                disabled={!clientValues.acceptRules && !client?._id}
                type="submit"
                className={styles.btnSubmit}
              >
                Відправити
              </button>
            </form>
          </div>
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

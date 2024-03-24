import styles from "../../Subscription.module.scss";
import InputMask from "react-input-mask";
import checkedImg from "../../assets/checkedImg.png";
import checkbox from "../../assets/checkbox.png";
import checkboxVb from "../../assets/checkboxVb.png";
import checkboxTg from "../../assets/checkboxTg.png";
import checkedVb from "../../assets/checkedVb.png";
import checkedTg from "../../assets/checkedTg.png";

const Register = ({ clientValues, setClientValues, setIsAuthModalOpen }) => {
  return (
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
          onChange={(e) => setClientValues({ ...clientValues, parentSurname: e.target.value })}
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
          onChange={(e) => setClientValues({ ...clientValues, parentName: e.target.value })}
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
          onChange={(e) => setClientValues({ ...clientValues, phoneNumber: e.target.value })}
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
          onChange={(e) => setClientValues({ ...clientValues, password: e.target.value })}
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
          onChange={(e) => setClientValues({ ...clientValues, childName: e.target.value })}
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
          onChange={(e) => setClientValues({ ...clientValues, childBirthDate: e.target.value })}
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
          <img src={clientValues.messenger === "viber" ? checkedVb : checkboxVb} alt="checkboxVb" />
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
            Якщо ви вже заповнили анкету у одній з бібліотек або онлайн — увійдіть до свого
            облікового запису, натиснувши кнопку нижче
          </p>
          <button onClick={() => setIsAuthModalOpen(true)} className={styles.accountBtn}>
            Увійти
          </button>
        </>
      </div>
    </>
  );
};

export default Register;

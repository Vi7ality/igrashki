import styles from "../../Subscription.module.scss";
import checkbox from "../../assets/checkbox.png";
import InputField from "../InputField";
import PhoneInput from "../PhoneInput";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import { useState } from "react";

type ProopType = {
  clientValues: any,
  setClientValues(clientValues: any): void,
}

const Register = ({ clientValues, setClientValues }: ProopType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <InputField
        label="Прізвище"
        type="text"
        name="parentSurname"
        placeholder="Прізвище"
        value={clientValues.parentSurname}
        onChange={(e) => setClientValues({ ...clientValues, parentSurname: e.target.value })}
      />
      <InputField
        label="Ім'я"
        type="text"
        name="parentName"
        placeholder="Ім'я"
        value={clientValues.parentName}
        onChange={(e) => setClientValues({ ...clientValues, parentName: e.target.value })}
      />
      <PhoneInput
        name="phoneNumber"
        value={clientValues.phoneNumber}
        onChange={(e) => setClientValues({ ...clientValues, phoneNumber: e.target.value })}
      />
      <div style={{ position: "relative" }}>
        <InputField
        label="Пароль"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Пароль"
        value={clientValues.password}
        onChange={(e) => setClientValues({ ...clientValues, password: e.target.value })}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
          ) : (
            <AiFillEye style={{ width: "24px", height: "24px" }} />
          )}
        </button>
      </div>
      <InputField
        label="Ім'я дитини"
         type="text"
          name="childName"
          placeholder="Ім'я дитини"
          value={clientValues.childName}
          onChange={(e) => setClientValues({ ...clientValues, childName: e.target.value })}
      />
      <InputField
        label="Дата народження дитини"
      type="date"
          name="childBirthDate"
          placeholder="Дата народження дитини"
          value={clientValues.childBirthDate}
          onChange={(e) => setClientValues({ ...clientValues, childBirthDate: e.target.value })}/>
      <div className={styles.fieldCheckbox}>
        <label
          className={styles.fieldCheckLabel}
          onClick={() =>
            setClientValues({ ...clientValues, acceptRules: !clientValues.acceptRules })
          }
        >
{  clientValues.acceptRules ?   <IoCheckbox/> : <img
            src={checkbox}
            className={styles.checkedImg}
          />}
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
          {clientValues.messenger === "viber" ? <IoCheckbox/> : <img
            src={checkbox}
            className={styles.checkedImg}
          /> }
          <span className={styles.checkboxVb}>Viber</span>
        </label>

        <label
          className={styles.checkboxLabel}
          onClick={() => setClientValues({ ...clientValues, messenger: "telegram" })}
        >
          {clientValues.messenger === "telegram" ? <IoCheckbox/> : <img
            src={checkbox}
            className={styles.checkedImg}
          /> }
          <span className={styles.checkboxTg}>Telegram</span>
        </label>
      </div>
    </>
  );
};

export default Register;


      {/* <div className={styles.field}>
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
      </div> */}
      {/* <div className={styles.field}>
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
      </div> */}
      {/* <div className={styles.field}>
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
      </div> */}
      {/* <div className={styles.field}>
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
      </div> */}

      {/* <div className={styles.field}>
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
      </div> */}

      {/* <div className={styles.field}>
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
      </div> */}
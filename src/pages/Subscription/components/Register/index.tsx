import InputField from "../InputField";
import PasswordInput from "../PasswordInput";
import { ClientValuesType } from "../../../../models/auth";
import { CheckboxField } from "../CheckboxField";


type PropType = {
  clientValues: ClientValuesType,
  setClientValues(values: ClientValuesType): void,
}


const Register = ({ clientValues, setClientValues }: PropType) => {
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
      <InputField
        name="phoneNumber"
        type="tel"
        label="Номер телефону"
        value={clientValues.phoneNumber}
        onChange={(e) => setClientValues({ ...clientValues, phoneNumber: e.target.value })}
      />
      <PasswordInput clientValues={clientValues} setClientValues={setClientValues} />
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
      <CheckboxField clientValues={clientValues} setClientValues={setClientValues} />
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
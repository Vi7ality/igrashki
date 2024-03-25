import { ChangeEventHandler } from "react";
import styles from "../../Subscription.module.scss";
import InputMask from "react-input-mask";

type PropType = {
    name: string,
    value: string,
    onChange: ChangeEventHandler
}

const PhoneInput = ({ name,  value, onChange }: PropType) => {
    return (
        <div className={styles.field}>
        <label htmlFor={name} className={styles.fieldLabel}>
          Мобільний номер
        </label>
        <InputMask
          placeholder="+38 (___) ___ __ __"
          mask="+38 (999) 999 99 99"
          maskChar="_"
          type="tel"
          name={name}
          className={styles.fieldInput}
          value={value}
          onChange={onChange}
        />
      </div>
    )
}

export default PhoneInput;
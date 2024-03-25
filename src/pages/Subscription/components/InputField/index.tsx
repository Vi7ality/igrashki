import { ChangeEventHandler } from "react";
import styles from "../../Subscription.module.scss";

type PropType = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler;
};

const InputField = ({ label, type, name, placeholder, value, onChange }: PropType) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.fieldLabel}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={styles.fieldInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;

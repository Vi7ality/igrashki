import { FC, Ref, forwardRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = forwardRef(({ label, name, type = "text", disabled = false, ...registerProps }, ref: Ref<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === "password"
    ? showPassword ? "text" : "password"
    : type

  return (
    <div className={styles.input}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputContainer}>
        <input type={inputType} id={name} name={name} ref={ref} {...registerProps} disabled={disabled} />
        {type === "password" && (
          <div className={styles.passwordIcon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        )}
      </div>

    </div>
  );
});

export default Input;
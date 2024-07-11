import { FC, Ref, forwardRef, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from './Input.module.scss';
import { ErrorMessage } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
  getFieldProps(name: string): object;
}

const Input: FC<InputProps> = forwardRef(
  (
    { label, name, type = 'text', disabled = false, getFieldProps },
    ref: Ref<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType =
      type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
      <div>
        <div className={styles.input}>
          <label htmlFor={name}>{label}</label>
          <div className={styles.inputContainer}>
            <input
              type={inputType}
              id={name}
              name={name}
              ref={ref}
              {...getFieldProps(name)}
              // {...registerProps}
              disabled={disabled}
            />
            {type === 'password' && (
              <div
                className={styles.passwordIcon}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            )}
          </div>
        </div>
        <ErrorMessage name={name} component="div">
          {msg => <p className={styles.errMessage}>{msg}</p>}
        </ErrorMessage>
      </div>
    );
  }
);

export default Input;

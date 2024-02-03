import { FC, Ref, forwardRef } from "react";
import styles from "./Input.module.scss";
import ReactInputMask from "react-input-mask";

interface InputProps {
    label: string;
    name: string;
    type?: string;
    disabled?: boolean;
}

const PhoneInput: FC<InputProps> = forwardRef(({ label, name, type = "text", disabled = false, ...registerProps }, ref: Ref<HTMLInputElement>) => {
    console.log('render', registerProps);
    
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.inputContainer}>
                <ReactInputMask
                    mask="+38 (999) 999 99 99"
                    maskChar="_"
                    className={styles.inputField}
                    name={name}
                    inputRef={ref}
                    {...registerProps}
                    disabled={disabled}
                />
            </div>

        </div>
    );
});

export default PhoneInput;
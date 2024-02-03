import { FC, forwardRef } from "react";
import ReactSelect from "react-select";
import styles from "./Select.module.scss";

interface SelectProps {
    label: string;
    name: string;
    multiple?: boolean;
    options: { value: string; label: string }[];
    type?: string;
}

const Select: FC<SelectProps> = forwardRef(({ label, name, multiple, options, ...registerProps }) => {
    // const customStyles = multiple && {
    //     valueContainer: (provided: any) => ({
    //       ...provided,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'flex-start',
    //       justifyContent: 'center',
    //       width: '100%',
    //     }),
    //     multiValueLabel: (provided: any) => ({
    //       ...provided,
    //       width: '100%',
    //       minWidth: 'fit-content',
    //     }),
    //     input: (provided: any) => ({
    //         ...provided,
    //         display: 'none',
    //     }),
    //   };

    return (
        <div className={styles.select}>
            <label htmlFor={name}>{label}</label>
            {/* styles={customStyles} */}
            <ReactSelect isMulti={multiple} name={name} options={options} {...registerProps} />
        </div>
    );
});

export default Select;
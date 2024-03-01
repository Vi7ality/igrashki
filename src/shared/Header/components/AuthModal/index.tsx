import { CgProfile } from 'react-icons/cg';
import styles from "./AuthModal.module.scss";
import closeBtn from "../../../../assets/CloseBtn.png";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { IClientCredentials } from '../../../../models/client';
import { clientLogin } from '../../../../redux/slices/client.slice';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

interface AuthModalProps {
    authClose: () => void;
}

interface LoginForm {
    phoneNumber: string;
    password: string;
}


const AuthModal = ({ authClose }: AuthModalProps) => {
    const dispatch = useAppDispatch();
    const { client, error } = useAppSelector(state => state.client);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    useEffect(() => {
        if (client) {
            authClose();
        }
    }, [client])

    const handleLogin = ( data: IClientCredentials) => {
        dispatch(clientLogin(data));
    };

    return (
        <div className={styles.authModal} onClick={authClose}>
            <form className={styles.authForm} onSubmit={handleSubmit(handleLogin)} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={authClose}>
                    <img src={closeBtn} alt="closeBtn" />
                </button>
                <div className={styles.authTitle}>
                    <h2 className={styles.title}>Авторизація</h2>
                    {error && <h6 className={styles.error}>(Неправильні облікові дані)</h6>}
                </div>
                <div className={styles.loginAvatar}>
                    <CgProfile className={styles.loginIcon} />
                </div>
                <div className={styles.input}>
                    <InputMask mask="+38 (999) 999 99 99" maskChar="_" placeholder="Введіть номер телефону" className={styles.inputField} {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className={styles.error}>Це поле обов'язкове</span>}
                </div>
                <div className={styles.input}>
                    {/* <input type="password" placeholder="Введіть пароль" className={styles.inputField} {...register('password', { required: true })} /> */}
                    <input type={showPassword ? "text" : "password"} placeholder="Введіть пароль " className={styles.inputField} {...register('password', { required: true })} />
                    <button className={styles.showPasswordBtn} type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                    {errors.password && <span className={styles.error}>Це поле обов'язкове</span>}
                </div>
                <button className={styles.enterBtn} type='submit'>Увійти на сайт</button>
            </form >
        </div>
    );
};

export default AuthModal;
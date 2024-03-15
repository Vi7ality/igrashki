import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { IClientCredentials } from '../../../../models/client';
import { clientLogin } from '../../../../redux/slices/client.slice';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { FormWrap, BackdropWrap} from './AuthModal.styled';

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
    }, [client, authClose])

    const handleLogin = (data: IClientCredentials) => {
        dispatch(clientLogin(data));
    };

    return (
        <BackdropWrap onClick={authClose}>
            <FormWrap   onClick={e => e.stopPropagation()}>
                <button  onClick={authClose}>
                </button>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                    <h2>Авторизація</h2>
                    {error && <h6>Недійсні облікові дані</h6>}
                </div>
                <div>
                    <InputMask mask="+38 (999) 999 99 99" placeholder="Введіть номер телефону" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span>Це поле обов'язкове</span>}
                </div>
                <div>
                    <input type={showPassword ? "text" : "password"} placeholder="Введіть пароль " {...register('password', { required: true })} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                    {errors.password && <span>Це поле обов'язкове</span>}
                </div>
                <button type='submit'>Увійти на сайт</button>
                </form>
                
            </FormWrap >
        </BackdropWrap>
    );
};

export default AuthModal;
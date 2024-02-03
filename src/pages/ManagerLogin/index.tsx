import { IManagerCredentials } from '../../models/manager';
import Input from '../../shared/formComponents/Input'
import { useForm } from 'react-hook-form';
import styles from './ManagerLogin.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { managerLogin } from '../../redux/slices/manager.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultValues = {
    managerUserName: "",
    managerPassword: ""
}

const ManagerLogin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {currentManager} = useAppSelector(state => state.manager)
    const { register, handleSubmit } = useForm<IManagerCredentials>(
        { mode: 'onBlur', values: defaultValues }
    );

    useEffect(() => {
        if (currentManager?._id) {
            navigate('/management')
        }
    }, [currentManager?._id])

    const onSubmit = (data: IManagerCredentials) => {
        dispatch(managerLogin(data))
    };

    return (
        <div className={styles.managerForm}>
            <h1>Manager Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Username"  {...register('managerUserName')} name="managerUserName" />
                <Input label="Password"  {...register('managerPassword')} name="managerPassword" type='password' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default ManagerLogin
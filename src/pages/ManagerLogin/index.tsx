import { IManagerCredentials } from '../../models/manager';
import styles from './ManagerLogin.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { managerLogin } from '../../redux/slices/manager.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikInput from '../../shared/formComponents/FormikInput';
import { managerLoginValidSchema } from '../../utils/validationSchemas/authValidationSchema';
import LoadSpinner from '../../shared/LoadSpinner';

const defaultValues = {
  managerUserName: '',
  managerPassword: '',
};

const spinnerSettings = {
  height: '36',
  width: '36',
  color: 'white',
};

const ManagerLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    currentManager,
    error,
    loading: isLoading,
  } = useAppSelector(state => state.manager);

  useEffect(() => {
    if (currentManager?._id) {
      navigate('/management');
    }
  }, [currentManager?._id, navigate]);

  const handleLogin = (data: IManagerCredentials) => {
    dispatch(managerLogin(data));
  };

  return (
    <div className={styles.managerForm}>
      <h1>Manager Login</h1>
      {error && <p className={styles.errMsg}>Недійсні облікові дані</p>}
      <Formik
        onSubmit={handleLogin}
        initialValues={defaultValues}
        validationSchema={managerLoginValidSchema}
      >
        {({ handleSubmit, getFieldProps }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <FormikInput
                label="Username"
                name="managerUserName"
                getFieldProps={getFieldProps}
              />
              <FormikInput
                label="Password"
                name="managerPassword"
                type="password"
                getFieldProps={getFieldProps}
              />
              <button
                className={styles.sbmtButton}
                type="submit"
                disabled={isLoading}
              >
                {!isLoading ? (
                  'Login'
                ) : (
                    <LoadSpinner
                      height={spinnerSettings.height}
                      width={spinnerSettings.width}
                      color={spinnerSettings.color}
                    />
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ManagerLogin;

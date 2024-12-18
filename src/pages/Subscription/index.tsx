import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppDispatch, useAppSelector } from '../../redux/store';
import AuthModal from '../../shared/AuthModal';
import { ToastContainer, toast } from 'react-toastify';
import HeaderBackgound from '../../shared/HeaderBackground';
import AuthSection from './components/AuthSection';
import { PageTitle, SubscrContainer } from './Subscription.styled';
import OrderSection from './components/OrderSection';
import { useDispatch } from 'react-redux';
import { cartSubsription, clearCart } from '../../redux/slices/cart.slice';
import { ClientValuesType } from '../../models/auth';
import { clientRegister } from '../../redux/slices/client.slice';
import { Helmet } from 'react-helmet';

// managementPointId:
// clientId:
// toys:
// subscribtionStartDate:

const Subscription = () => {
  const navigate = useNavigate();
  const { client } = useAppSelector(state => state.client);
  const { selectedManagementPoint } = useAppSelector(state => state.cart);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [clientValues, setClientValues] = useState({
    messenger: 'telegram',
    acceptRules: false,
  });
  const { cart } = useAppSelector(state => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (values: ClientValuesType) => {
    try {
      let token = localStorage.getItem('userToken');
      if (token === undefined) {
        token = '';
      }
      const subscription = {
        managementPointId: selectedManagementPoint?._id,
        toys: cart.map(toy => toy.itemId),
      };

      if (!client?._id) {
        const data = await dispatch(clientRegister(values));
        token = data.payload.token;
      }

      if (cart.length > 0) {
        await dispatch(cartSubsription(subscription));
        dispatch(clearCart());
        navigate('/confirmation');
        return;
      }

      navigate('/register-success');
    } catch (error: any) {
      toast.error(`Помилка при оформленні: ${error?.response?.data?.error}`);
      setTimeout(() => {
        if (client?._id) {
          navigate('/profile');
        }
      }, 3000);
    }
  };
  return (
    <>
      <Helmet>
        <title>Реєстрація та замовлення</title>
        <meta
          name="description"
          content="Заповнюйте анкету на сайті або безпосередньо у найближчій Дитячій Точці “Спільно” та приходьте обирати іграшки."
        />
      </Helmet>
      <HeaderBackgound />
      <PageTitle>Реєстрація</PageTitle>
      <SubscrContainer>
        <AuthSection
          handleSubmit={handleSubmit}
          clientValues={clientValues}
          setClientValues={setClientValues}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
        <OrderSection
          clientValues={clientValues}
          setIsAuthModalOpen={setIsAuthModalOpen}
        />
      </SubscrContainer>
      {isAuthModalOpen && (
        <AuthModal authClose={() => setIsAuthModalOpen(false)} />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        closeButton={false}
      />
    </>
  );
};

export default Subscription;

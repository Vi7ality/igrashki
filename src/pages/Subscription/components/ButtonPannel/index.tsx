import { useDispatch } from 'react-redux';
import { ClientState } from '../../../../models/auth';
import { AppDispatch, useAppSelector } from '../../../../redux/store';
import LoadSpinner from '../../../../shared/LoadSpinner';
import {
  DecorLine,
  DecorText,
  DecorWrap,
  LoginBtn,
  PannelWrap,
  SubmitBtn,
  TextStyled,
  WarnMsg,
} from './ButtonPannel.styled';
import { fetchClientOrder } from '../../../../redux/slices/order.slice';
import { useCallback, useEffect, useState } from 'react';

type PropType = {
  clientValues: ClientState;
  setIsAuthModalOpen(value: boolean): void;
  position: 'auth' | 'cart';
};

const ButtonPannel = ({
  clientValues,
  setIsAuthModalOpen,
  position,
}: PropType) => {
  const [isOrderMade, setisOrderMade] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const { client } = useAppSelector(state => state.client);
  const { cart } = useAppSelector(state => state.cart);
  const { loading: isLoading } = useAppSelector(state => state.client);
  const { loading: isCartLoading } = useAppSelector(state => state.cart);
  const { loading: isOrderFetching } = useAppSelector(state => state.order);
  const dispatch = useDispatch<AppDispatch>();


  const fetchData = useCallback(async () => {
    // setIsLoading(true);
    try {
    const { payload: data } = await dispatch(fetchClientOrder());
      data.length === 0 && setisOrderMade(true);
      // setIsLoading(false);
    } catch (error: any) {
      // setIsLoading(false);
      throw new Error(error);
  }
  }, [dispatch]);
  
  useEffect(() => {
    fetchData();
  },[fetchData])

  const toysCount = cart.length;
  return (
    <PannelWrap position={position}>
      {client?._id && toysCount !== 0 && (
        <>
          <SubmitBtn
            type="submit"
            form="formId"
            disabled={isCartLoading || isOrderFetching || isOrderMade}
          >
            {!isCartLoading ? 'Замовити' : <LoadSpinner />}
          </SubmitBtn>
          {isOrderMade && <WarnMsg>У вас вже є активне замовлення.</WarnMsg>}
        </>
      )}

      {!client?._id && toysCount > 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules || isLoading}
          type="submit"
          form="formId"
        >
          {!isLoading ? 'Зареєструватися і замовити' : <LoadSpinner />}
        </SubmitBtn>
      )}

      {!client?._id && toysCount === 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules || isLoading}
          type="submit"
          form="formId"
        >
          {!isLoading ? 'Зареєструватися' : <LoadSpinner />}
        </SubmitBtn>
      )}

      {!client?._id && (
        <div>
          <DecorWrap>
            <DecorLine />
            <DecorText>або</DecorText>
            <DecorLine />
          </DecorWrap>
          <TextStyled>
            Увійдіть до свого облікового запису — якщо ви вже заповнили анкету у
            одній з бібліотек або онлайн.
          </TextStyled>
          <LoginBtn onClick={() => setIsAuthModalOpen(true)}>Увійти</LoginBtn>
        </div>
      )}
    </PannelWrap>
  );
};

export default ButtonPannel;

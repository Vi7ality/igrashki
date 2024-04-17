import { ClientState } from "../../../../models/auth";
import { useAppSelector } from "../../../../redux/store";
import LoadSpinner from "../../../../shared/LoadSpinner";
import {
  DecorLine,
  DecorText,
  DecorWrap,
  LoginBtn,
  PannelWrap,
  SubmitBtn,
  TextStyled,
} from "./ButtonPannel.styled";

type PropType = {
  clientValues: ClientState;
  setIsAuthModalOpen(value: boolean): void;
  position: "auth" | "cart";
};

const ButtonPannel = ({ clientValues, setIsAuthModalOpen, position }: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  const { cart } = useAppSelector((state) => state.cart);
  const { loading: isLoading } = useAppSelector((state) => state.client);
  const { loading: isCartLoading } = useAppSelector((state) => state.cart);
  const toysCount = cart.length;
  return (
    <PannelWrap position={position}>
      {client?._id && toysCount !== 0 && (
        <SubmitBtn type="submit" form="formId" disabled={isCartLoading}>
          {!isCartLoading ? 'Замовити' : <LoadSpinner/>}
        </SubmitBtn>
      )}

      {!client?._id && toysCount > 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules || isLoading}
          type="submit"
          form="formId"
        >
          {!isLoading ? 'Зареєструватися і замовити' : <LoadSpinner/>}
        </SubmitBtn>
      )}

      {!client?._id && toysCount === 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules || isLoading}
          type="submit"
          form="formId"
        >
          {!isLoading ? 'Зареєструватися' : <LoadSpinner/>}
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
            Увійдіть до свого облікового запису — якщо ви вже заповнили анкету у одній з бібліотек
            або онлайн.
          </TextStyled>
          <LoginBtn onClick={() => setIsAuthModalOpen(true)}>Увійти</LoginBtn>
        </div>
      )}
    </PannelWrap>
  );
};

export default ButtonPannel;

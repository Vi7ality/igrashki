import { ClientValuesType } from "../../../../models/auth";
import { useAppSelector } from "../../../../redux/store";
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
  clientValues: ClientValuesType;
  setIsAuthModalOpen(value: boolean): void;
  position: "auth" | "cart";
};

const ButtonPannel = ({ clientValues, setIsAuthModalOpen, position }: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  const { cart } = useAppSelector((state) => state.cart);
  const toysCount = cart.length;
  return (
    <PannelWrap position={position}>
      {client?._id && toysCount !== 0 && (
        <SubmitBtn type="submit" form="formId">
          Замовити
        </SubmitBtn>
      )}

      {!client?._id && toysCount !== 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules && !client?._id}
          type="submit"
          form="formId"
        >
          Зареєструватися і замовити
        </SubmitBtn>
      )}

      {!client?._id && toysCount === 0 && (
        <SubmitBtn
          disabled={!clientValues?.acceptRules && !client?._id}
          type="submit"
          form="formId"
        >
          Зареєструватися
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

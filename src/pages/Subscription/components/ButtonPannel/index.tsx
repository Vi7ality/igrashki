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
  return (
    <PannelWrap position={position}>
      <SubmitBtn disabled={!clientValues?.acceptRules && !client?._id} type="submit" form="formId">
        Зареєструватися
      </SubmitBtn>
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

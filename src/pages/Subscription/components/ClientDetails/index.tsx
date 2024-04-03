import { useAppSelector } from "../../../../redux/store";
import { InputStyled, InputWrap, LabelStyled, PhoneInput } from "./ClientDetails.styled";

const ClientDetails = () => {
  const { client } = useAppSelector((state) => state.client);
  return (
    <>
      <InputWrap>
        <LabelStyled htmlFor="parentName">Ім'я</LabelStyled>
        <InputStyled type="text" name="parentName" value={client?.parentName} disabled />
      </InputWrap>
      <InputWrap>
        <LabelStyled htmlFor="parentSurname">Прізвище</LabelStyled>
        <InputStyled type="text" name="parentSurname" value={client?.parentSurname} disabled />
      </InputWrap>
      <InputWrap>
        <LabelStyled htmlFor="phoneNumber">Мобільний номер</LabelStyled>
        <InputStyled type="tel" name="phoneNumber" value={client?.phoneNumber} disabled />
      </InputWrap>
    </>
  );
};

export default ClientDetails;

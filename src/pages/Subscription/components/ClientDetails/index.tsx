import { Form, Formik } from "formik";
import { useAppSelector } from "../../../../redux/store";
import { InputStyled, InputWrap, LabelStyled } from "./ClientDetails.styled";
import { FormEvent } from "react";
import ButtonPannel from "../ButtonPannel";
import { ClientValuesType } from "../../../../models/auth";
import SelectedLocation from "../SelectedLocation";

type PropType = {
  handleSubmit: (e: FormEvent<Element>) => Promise<void>;
  setIsAuthModalOpen(value: boolean): void;
  clientValues: ClientValuesType;
};

const initialValues = {
  parentName: "",
  parentSurname: "",
  phoneNumber: "",
};

const ClientDetails = ({ handleSubmit, clientValues, setIsAuthModalOpen }: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  const { selectedManagementPoint } = useAppSelector((state) => state.cart);
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} id="formId">
            {selectedManagementPoint && <SelectedLocation />}
            <InputWrap>
              <LabelStyled htmlFor="parentName">Ім'я</LabelStyled>
              <InputStyled type="text" name="parentName" value={client?.parentName} disabled />
            </InputWrap>
            <InputWrap>
              <LabelStyled htmlFor="parentSurname">Прізвище</LabelStyled>
              <InputStyled
                type="text"
                name="parentSurname"
                value={client?.parentSurname}
                disabled
              />
            </InputWrap>
            <InputWrap>
              <LabelStyled htmlFor="phoneNumber">Мобільний номер</LabelStyled>
              <InputStyled type="tel" name="phoneNumber" value={client?.phoneNumber} disabled />
            </InputWrap>
            <ButtonPannel
              clientValues={clientValues}
              setIsAuthModalOpen={setIsAuthModalOpen}
              position="auth"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ClientDetails;

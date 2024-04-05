import { Form, Formik } from "formik";
import { useAppSelector } from "../../../../redux/store";
import { InputStyled, InputWrap, LabelStyled } from "./ClientDetails.styled";
import ButtonPannel from "../ButtonPannel";
import { ClientState } from "../../../../models/auth";
import SelectedLocation from "../SelectedLocation";

type PropType = {
  handleSubmit(values: ClientState): Promise<void>;
  setIsAuthModalOpen(value: boolean): void;
  clientValues: ClientState;
};

const initialValues = {
  parentName: "",
  parentSurname: "",
  phoneNumber: "",
  password: "",
  childName: "",
  childBirthDate: "",
  messenger: "telegram",
  formType: "online",
  acceptRules: false,
};

const ClientDetails = ({ handleSubmit, clientValues, setIsAuthModalOpen }: PropType) => {
  const { client } = useAppSelector((state) => state.client);
  const { selectedManagementPoint } = useAppSelector((state) => state.cart);
  const { cart } = useAppSelector((state) => state.cart);
  const toysCount = cart.length;
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit} id="formId">
            {selectedManagementPoint && toysCount > 0 && <SelectedLocation />}
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

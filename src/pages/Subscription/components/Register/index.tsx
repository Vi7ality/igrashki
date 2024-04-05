import InputField from "../InputField";
import PasswordInput from "../PasswordInput";
import { ClientState } from "../../../../models/auth";
import { CheckboxField } from "../CheckboxField";
import { useAppSelector } from "../../../../redux/store";
import { Form, Formik } from "formik";
import { registerValidationSchema } from "../../../../utils/validationSchemas/authValidationSchema";
import ButtonPannel from "../ButtonPannel";
import SelectedLocation from "../SelectedLocation";

type PropType = {
  clientValues: ClientState;
  setClientValues(values: ClientState): void;
  handleSubmit(values: ClientState): Promise<void>;
  setIsAuthModalOpen(value: boolean): void;
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

const Register = ({
  clientValues,
  setClientValues,
  handleSubmit,
  setIsAuthModalOpen,
}: PropType) => {
  const { selectedManagementPoint } = useAppSelector((state) => state.cart);
  const { cart } = useAppSelector((state) => state.cart);
  const toysCount = cart.length;
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerValidationSchema}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => {
        return (
          <Form onSubmit={handleSubmit} id="formId">
            {selectedManagementPoint && toysCount > 0 && <SelectedLocation />}
            <InputField
              label="Прізвище"
              type="text"
              name="parentSurname"
              placeholder="Прізвище"
              error={errors.parentSurname}
              touched={touched.parentSurname}
              getFieldProps={getFieldProps}
            />
            <InputField
              label="Ім'я"
              type="text"
              name="parentName"
              placeholder="Ім'я"
              error={errors.parentName}
              touched={touched.parentName}
              getFieldProps={getFieldProps}
            />
            <InputField
              name="phoneNumber"
              type="tel"
              label="Номер телефону"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              getFieldProps={getFieldProps}
            />
            <PasswordInput
              clientValues={clientValues}
              setClientValues={setClientValues}
              error={errors.password}
              touched={touched.password}
              getFieldProps={getFieldProps}
            />

            <InputField
              label="Ім'я дитини"
              type="text"
              name="childName"
              placeholder="Ім'я дитини"
              error={errors.childName}
              touched={touched.childName}
              getFieldProps={getFieldProps}
            />
            <InputField
              label="Дата народження дитини"
              type="date"
              name="childBirthDate"
              placeholder="Дата народження дитини"
              error={errors.childBirthDate}
              touched={touched.childBirthDate}
              getFieldProps={getFieldProps}
            />
            <CheckboxField
              clientValues={clientValues}
              setClientValues={setClientValues}
              getFieldProps={getFieldProps}
            />
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

export default Register;


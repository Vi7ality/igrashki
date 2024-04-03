import Register from "../Register";
import { Formik } from "formik";
import { FormEvent } from "react";
import { SectionStyled } from "./AuthSection.styled";
import InputField from "../InputField";
import { ClientValuesType } from "../../../../models/auth";
import { ImanagementPoint } from "../../../../models/managementPoint";
import ButtonPannel from "../ButtonPannel";
import { registerValidationSchema } from "../../../../utils/validationSchemas/authValidationSchema";
import { useAppSelector } from "../../../../redux/store";
import ClientDetails from "../ClientDetails";
import { InputStyled, InputWrap, LabelStyled } from "../ClientDetails/ClientDetails.styled";

type PropType = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  selectedManagementPoint?: ImanagementPoint;
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
  setIsAuthModalOpen(value: boolean): void;
  initialValues: string;
};

const AuthSection = ({
  handleSubmit,
  selectedManagementPoint,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}: PropType) => {
  const { client } = useAppSelector((state) => state.client);
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

  return (
    <SectionStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        {({ handleSubmit, getFieldProps, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit} id="formId">
              <div>
                {selectedManagementPoint && (
                  <InputWrap>
                    <LabelStyled htmlFor="parentName">Локація</LabelStyled>
                    <InputStyled
                      type="text"
                      name="location"
                      value={
                        selectedManagementPoint
                          ? `${selectedManagementPoint.city}, ${selectedManagementPoint.location}`
                          : ""
                      }
                      disabled
                    />
                  </InputWrap>
                )}
              </div>
              {!client?._id ? (
                <Register
                  touched={touched}
                  errors={errors}
                  clientValues={clientValues}
                  setClientValues={setClientValues}
                  getFieldProps={getFieldProps}
                />
              ) : (
                <ClientDetails />
              )}
              <ButtonPannel
                clientValues={clientValues}
                setIsAuthModalOpen={setIsAuthModalOpen}
                position="auth"
              />
            </form>
          );
        }}
      </Formik>
    </SectionStyled>
  );
};

export default AuthSection;

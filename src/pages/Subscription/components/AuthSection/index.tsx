import Register from "../Register";
import styles from "../../Subscription.module.scss";
import { Formik } from "formik";
import { FormEvent } from "react";
import { SectionStyled } from "./AuthSection.styled";
import InputField from "../InputField";
import { ClientValuesType } from "../../../../models/auth";
import { IClient } from "../../../../models/client";
import { ImanagementPoint } from "../../../../models/managementPoint";
import ButtonPannel from "../ButtonPannel";
import { registerValidationSchema } from "../../../../utils/validationSchemas/authValidationSchema";

type PropType = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  selectedManagementPoint?: ImanagementPoint;
  client?: IClient;
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
  setIsAuthModalOpen(value: boolean): void;
  initialValues: string;
};

const AuthSection = ({
  handleSubmit,
  selectedManagementPoint,
  client,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}: PropType) => {

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
  }

  return (
    <SectionStyled>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
        {({ handleSubmit, getFieldProps, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit} id="formId">
              <div>
                {selectedManagementPoint && (
                  <InputField
                    label="Локація"
                    type="text"
                    name="location"
                    value={
                      selectedManagementPoint
                        ? `${selectedManagementPoint.city}, ${selectedManagementPoint.location}`
                        : ""
                    }
                    disabled
                    getFieldProps={getFieldProps}
                  />
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
                <>
                  <div>
                    <label htmlFor="parentName">Ім'я</label>
                    <input
                      type="text"
                      name="parentName"
                      className={styles.fieldInput}
                      placeholder="Ім'я"
                      value={client?.parentName}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="parentSurname">Прізвище</label>
                    <input
                      type="text"
                      name="parentSurname"
                      placeholder="Прізвище"
                      value={client?.parentSurname}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">Мобільний номер</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="+38 (___) ___ __ __"
                      value={client?.phoneNumber}
                      disabled
                    />
                  </div>
                </>
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

import Register from "../Register";
import styles from "../../Subscription.module.scss";
import { Formik } from "formik";
import { FormEvent } from "react";
import { SectionStyled } from "./AuthSection.styled";
import InputField from "../InputField";
import { ClientValuesType } from "../../../../models/auth";
import { IClient } from "../../../../models/client";
import { ImanagementPoint } from "../../../../models/managementPoint";



type PropType = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  selectedManagementPoint: ImanagementPoint;
  client: IClient;
  clientValues: ClientValuesType;
  setClientValues(values: ClientValuesType): void;
  setIsAuthModalOpen(value: boolean): void;
};

const AuthSection = ({
  handleSubmit,
  selectedManagementPoint,
  client,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}: PropType) => {
  return (
    <SectionStyled>
      <Formik initialValues={{ parentName: "" }} onSubmit={handleSubmit}>
        {({ handleSubmit, getFieldProps, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit} id="formId">
              <div>
                {selectedManagementPoint && (
                  <InputField
                    label='Локація'
                    type='text'
                    name='location'
                    value={selectedManagementPoint ? `${selectedManagementPoint.city}, ${selectedManagementPoint.location}` : ""}
                    disabled
                  />
             )} 
              </div>
              {!client?._id ? (
                <Register clientValues={clientValues} setClientValues={setClientValues} />
              ) : (
                <>
                  <div>
                    <label htmlFor="parentName">
                      Ім'я
                    </label>
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
                    <label htmlFor="parentSurname">
                      Прізвище
                    </label>
                    <input
                      type="text"
                      name="parentSurname"
                      placeholder="Прізвище"
                      value={client?.parentSurname}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">
                      Мобільний номер
                    </label>
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
              <button
                disabled={!clientValues.acceptRules && !client?._id}
                type="submit"
              >
                Відправити
              </button>
            </form>
          );
        }}
      </Formik>
      {!client?._id && (
        <div className={styles.headerSub}>
          <>
            <p>
              Якщо ви вже заповнили анкету у одній з бібліотек або онлайн — увійдіть до свого
              облікового запису, натиснувши кнопку нижче
            </p>
            <button onClick={() => setIsAuthModalOpen(true)} className={styles.accountBtn}>
              Увійти
            </button>
          </>
        </div>
      )}
    </SectionStyled>
  );
};

export default AuthSection;

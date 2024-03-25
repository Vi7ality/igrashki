import Register from "../Register";
import styles from "../../Subscription.module.scss";
import { Formik } from "formik";

type PropType = {
  handleSubmit: void,
  selectedManagementPoint: any,
  client: any,
  clientValues: any,
  setClientValues(values: any): void,
  setIsAuthModalOpen(value: boolean): void
}

const AuthSection = ({
  handleSubmit,
  selectedManagementPoint,
  client,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}: PropType) => {
  return (
    <>
      {/* {!client?._id && <img className={styles.animalCenter} src={animalCenter} alt="animal" />} */}
      <div className={styles.leftContent}>
        <Formik
          initialValues={{parentName: ''}}
          onSubmit={handleSubmit}>{({ handleSubmit, getFieldProps, touched, errors }) => {
            return (
              <form onSubmit={handleSubmit} className={styles.subscriptionForm} id="formId">
          <div className={styles.field}>
            {selectedManagementPoint && (
                <label htmlFor="managementPoint" className={styles.fieldLabel}>
                  Локація
                </label>
              ) && (
                <input
                  className={styles.fieldInput}
                  value={selectedManagementPoint ? selectedManagementPoint.location : ""}
                  disabled
                />
              )}
          </div>
          {!client?._id ? (
            <Register
              clientValues={clientValues}
              setClientValues={setClientValues}
                  />
          ) : (
            <>
              <div className={styles.field}>
                <label htmlFor="parentName" className={styles.fieldLabel}>
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
              <div className={styles.field}>
                <label htmlFor="parentSurname" className={styles.fieldLabel}>
                  Прізвище
                </label>
                <input
                  type="text"
                  name="parentSurname"
                  className={styles.fieldInput}
                  placeholder="Прізвище"
                  value={client?.parentSurname}
                  disabled
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="phoneNumber" className={styles.fieldLabel}>
                  Мобільний номер
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className={styles.fieldInput}
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
            className={styles.btnSubmit}
          >
            Відправити
          </button>
        </form>
          )} }</Formik>
      {!client?._id && <div className={styles.headerSub}>
        <>
          <p>
            Якщо ви вже заповнили анкету у одній з бібліотек або онлайн — увійдіть до свого
            облікового запису, натиснувши кнопку нижче
          </p>
          <button onClick={() => setIsAuthModalOpen(true)} className={styles.accountBtn}>
            Увійти
          </button>
        </>
      </div>}
      </div>
    </>
  );
};

export default AuthSection;

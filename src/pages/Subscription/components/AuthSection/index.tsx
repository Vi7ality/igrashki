import Register from "../Register";
import styles from "../../Subscription.module.scss";

const AuthSection = ({
  handleSubmit,
  selectedManagementPoint,
  client,
  clientValues,
  setClientValues,
  setIsAuthModalOpen,
}) => {
  return (
    <>
      {/* {!client?._id && <img className={styles.animalCenter} src={animalCenter} alt="animal" />} */}
      <div className={styles.leftContent}>
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
              setIsAuthModalOpen={setIsAuthModalOpen}
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
      </div>
    </>
  );
};

export default AuthSection;

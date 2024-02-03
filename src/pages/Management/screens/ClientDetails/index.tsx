import styles from "./ClientDetails.module.scss";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import ClientModal from "../Clients/components/ClientModal";
import { fetchClientInfoForAdmin } from "../../../../redux/slices/clientAdmin.slice";
import { addMonths, format } from "date-fns";
import { Link } from "react-router-dom";
import { appDateFormat } from "../../../../constants/date";

const ClientDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { clientId } = useParams<{ clientId: string }>();
  const { clientInfoAdmin } = useAppSelector(state => state.clientAdmin)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (clientId) {
      dispatch(fetchClientInfoForAdmin(clientId))
    }
  }, [])

  console.log(clientInfoAdmin);


  const getEndingExpectedDate = (startSubDate: Date | null) => {
    if (!startSubDate) return ""
    return format(addMonths(new Date(startSubDate), 3), appDateFormat)
  }
  return (
    <main className={styles.main}>
      <header>
        <div className={styles.headerLeft}>
          <h1>Клієнт{` > ${clientId}`}</h1>
        </div>
        <button>
          <BsFillPersonPlusFill />
          <span>Додати клієнта</span>
        </button>
      </header>
      <div className={styles.clientInfoWrapper}>
        <div className={styles.clientInfoLeft}>
          <h2>Клієнт</h2>
          <div className={styles.clientInfo}>
            <div>
              <span>Імя та прізвище батька/матері:</span>
              <span>{clientInfoAdmin?.parentName}</span>
            </div>
            <div>
              <span>Номер телефону:</span>
              <span>{clientInfoAdmin?.phoneNumber}</span>
            </div>
            <div>
              <span>Імя малюка:</span>
              <span>{clientInfoAdmin?.childName}</span>
            </div>
            <div>
              <span>Дата народження малюка:</span>
              <span>{clientInfoAdmin?.childName}</span>
            </div>

            <button onClick={() => setIsModalOpen(true)}>
              <span>Редагувати</span> <AiOutlineEdit />
            </button>
          </div>
        </div>
        <div className={styles.clientInfoRightWrapper}>
          {clientInfoAdmin?.subscriptions &&
            clientInfoAdmin?.subscriptions.map((sub, i) => (
              <div className={styles.clientInfoRight}>
                <div className={styles.rentalItem} key={i + 1}>
                  <h2>Інформація про оренду</h2>
                  {sub.subscribtionStartDate ? (
                    <>
                      <div>
                        <span>Дата отримання</span>
                        <span>{format(new Date(sub?.subscribtionStartDate), appDateFormat)}</span>
                      </div>
                      {sub.subscribtionEndDate ? (
                        <div>
                          <span>Дата повернення</span>
                          <span>{format(new Date(sub?.subscribtionEndDate), appDateFormat)}</span>
                        </div>
                      ) : (
                        <div>
                          <span>Очікувана дата повернення</span>
                          <span>{getEndingExpectedDate(new Date(sub.subscribtionStartDate))}</span>
                        </div>
                      )}

                    </>
                  ) : (
                    <>
                      <div>
                        <span>Ще не розпочато</span>
                      </div>
                      <div>
                        <span>Дата створення запиту</span>
                        <span>{format(new Date(sub?.createdAt), "yyyy.MM.dd")}</span>
                      </div>
                    </>
                  )}

                  <div className={styles.rentalToys}>
                    <span>Іграшки в оренді</span>
                    <ul>
                      {sub.toys.map((toy, i) => (
                        <li key={i + 1}>
                          <Link to={`/management/toys/${toy._id}`}>{toy.toyName}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {isModalOpen && <ClientModal isModalOpen={isModalOpen} closeModal={() => { setIsModalOpen(false); }} editableClient={clientInfoAdmin} />}
    </main>
  );
};

export default ClientDetails;

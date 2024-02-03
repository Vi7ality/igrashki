import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ToyDetails.module.scss";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { fetchToyAdmin } from "../../../../redux/slices/toyAdmin.slice";
import AddToyModal from "../Toys/components/AddToyManager";

const ToyDetails = () => {
  const [isToyModalOpen, setIsToyModalOpen] = useState(false)
  const { toyEntryId } = useParams<{ toyEntryId: string }>();
  const { toy } = useAppSelector((state) => state.toyAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (toyEntryId) dispatch(fetchToyAdmin(toyEntryId));
  }, [dispatch, toyEntryId]);

  return <main className={styles.main}>
    <header>
      <div className={styles.headerLeft}>
        <h1>Іграшка{` > ${toyEntryId}`}</h1>
      </div>
      <button>
        <MdOutlineAddCircleOutline />
        <span>Додати іграшку</span>
      </button>
    </header>
    <div className={styles.clientInfoWrapper}>
      <img src={toy?.images[0]} alt="" className={styles.toyImg} />
      <div className={styles.clientInfoLeft}>
        <h2>Іграшка</h2>
        <div className={styles.clientInfo}>
          <div>
            <span>Назва:</span>
            <span>{toy?.toyName}</span>
          </div>
          <div>
            <span>Виробник:</span>
            <span>{toy?.manufacturer}</span>
          </div>
          <div>
            <span>Вік:</span>
            <span>{toy?.ageTo ? `від ${toy?.ageFrom} до ${toy.ageTo}` : `${toy?.ageFrom}+`}</span>
          </div>
          <div className={styles.infoColumn}>
            <h6>Опис:</h6>
            <p>{toy?.description}</p>
          </div>

          <div className={styles.infoColumn}>
            <h6>Особливості:</h6>
            {toy?.features.length === 0 && <p>Немає</p>}
            <ul>
              {toy?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <button onClick={() => setIsToyModalOpen(true)}>
            <span>Редагувати</span> <AiOutlineEdit />
          </button>
        </div>
      </div>
      {isToyModalOpen && (
        <AddToyModal closeModal={() => setIsToyModalOpen(false)} isModalOpen={isToyModalOpen} editableToy={toy} />
      )}
    </div>
  </main>;
};

export default ToyDetails;

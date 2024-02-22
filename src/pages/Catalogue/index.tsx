import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import styles from "./Catalogue.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { fetchToys } from "../../redux/slices/toys.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addItemToCart,
  setSelectedManagementPoint,
} from "../../redux/slices/cart.slice";
import api from "../../api";
import { IManager } from "../../models/manager";
import { IToyInfo } from "../../models/toy";

const Catalogue = () => {
  const { toys, isLoading: isToysLoading } = useAppSelector(
    (state) => state.toys
  );
  const { cart, selectedManagementPoint } = useAppSelector(
    (state) => state.cart
  );
  const [managementPoints, setManagementPoints] = useState([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await api.get("/management/points");
      setManagementPoints(data);

      dispatch(setSelectedManagementPoint(data[0]));
      setSelectedCity(data[0].city);
    };
    fetchPoints();
  }, []);

  useEffect(() => {
    selectedManagementPoint && dispatch(fetchToys(selectedManagementPoint));
  }, [selectedManagementPoint]);

  const handleAddToCart = (toy: IToyInfo) => {
    if (toy) {
      const isItemInCart = cart.some((item) => item.itemId === toy.toyId);
      if (isItemInCart) {
        toast.warning("Іграшка вже додана в кошик!", { autoClose: 1000 });
      } else if (cart.length >= 3) {
        toast.error("Кошик повний. Максимальна кількість: 3 іграшки.", {
          autoClose: 1000,
        });
      } else {
        dispatch(
          addItemToCart({
            itemId: toy.toyId,
            itemName: toy.toyName,
            itemImage: toy.images[0],
          })
        );
        toast.success("Іграшку додано в кошик!", { autoClose: 1000 });
      }
    }
  };

  const handleCitySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (cart.length > 0) {
      toast.warning("Очистіть кошик перед зміною міста отримання!", {
        autoClose: 3000,
      });
      return;
    }

    setSelectedCity(e.target.value);
    const newManagementPoint = managementPoints.find(
      (point: IManager) => point.city === e.target.value
    )!;
    dispatch(setSelectedManagementPoint(newManagementPoint));
  };

  const handleChangeLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    if (cart.length > 0) {
      toast.warning("Очистіть кошик перед вибором іншої локації!", {
        autoClose: 3000,
      });
      return;
    }
    dispatch(
      setSelectedManagementPoint(
        managementPoints.find(
          (point: IManager) => point._id === e.target.value
        )!
      )
    );
  };

  const cities = useMemo(
    () => [...new Set(managementPoints.map((point: IManager) => point.city))],
    [managementPoints]
  );
  const managementPointsByCity = useMemo(
    () =>
      managementPoints.filter((point: IManager) => point.city === selectedCity),
    [selectedCity, managementPoints]
  );

  return (
    <div className={styles.catalogue}>
      <Header />
      <div className={styles.сontent}>
        <h1>Каталог іграшок</h1>
        <div className={styles.container}>
          <aside>
            <div className={styles.location}>
              <h3>Місто</h3>
              {cities.length > 0 && (
                <select
                  className={styles.locationSelect}
                  value={selectedCity}
                  onChange={handleCitySelect}
                >
                  {cities.map((city: string) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className={styles.location}>
              <h3>Локація</h3>
              {managementPointsByCity.length > 0 && (
                <select
                  className={styles.locationSelect}
                  value={selectedManagementPoint?._id}
                  onChange={(e) => handleChangeLocation(e)}
                >
                  {managementPointsByCity.map(({ _id, location }: IManager) => (
                    <option key={_id} value={_id}>
                      {location}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </aside>
          <main className={styles.main}>
            {isToysLoading ? (
              <h1>Шукаємо іграшки на вибраній локації...</h1>
            ) : (
              <div className={styles.toys}>
                {toys.map((toy) => (
                  <div className={styles.toy} key={toy._id}>
                    <Link className={styles.toyImage} to={`/toys/${toy.toyId}`}>
                      <img src={toy?.images[0]} alt="toy" />
                    </Link>
                    <h6 className={styles.toyName}>{toy.toyName}</h6>
                    <button
                      className={styles.toyButton}
                      onClick={() => handleAddToCart(toy)}
                    >
                      Додати
                    </button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        closeButton={false}
      />

      <Footer />
    </div>
  );
};

export default Catalogue;

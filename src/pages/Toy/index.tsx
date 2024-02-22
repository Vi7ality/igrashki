import { useParams } from "react-router-dom";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import styles from "./Toy.module.scss";

import ImageSlider from "./components/ImageSlider";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchToy } from "../../redux/slices/toy.slice";
import { useEffect } from "react";
import { addItemToCart } from "../../redux/slices/cart.slice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toy = () => {
  const { toyId } = useParams<{ toyId: string }>();
  const { toy } = useAppSelector((state) => state.toy);
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (toyId) {
      dispatch(fetchToy(toyId));
    }
  }, [toyId]);

  const handleAddToCart = () => {
    if (toy) {
      const isItemInCart = cart.some((item) => item.itemId === toy.images[0]);
      if (isItemInCart) {
        toast.warning("Іграшка вже додана в кошик!");
      } else if (cart.length >= 3) {
        toast.error("Кошик повний. Максимальна кількість: 3 іграшки.");
      } else {
        dispatch(addItemToCart({ itemId: toy._id, itemImage: toy.images[0], itemName: toy.toyName }));
        toast.success("Іграшку додано в кошик!");
      }
    }
  };

  return (
    <div className={styles.toy}>
      <Header />
      <div className={styles.toyWrapper}>
        <ImageSlider images={toy?.images} />
        <div className={styles.toyTitle}>
          <h2>{toy?.toyName}</h2>
          <button onClick={handleAddToCart}>Додати</button>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
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
        </div>
        <button className={styles.mobileAddBtn} onClick={handleAddToCart}>Додати</button>
      </div>
      <div className={styles.toyInfo}>
        {/* <img className={styles.bg} src={bg} alt="bg" /> */}
        <div className={styles.toyInfoLeft}>
          <div className={styles.toyDescription}>
            <h6>Опис</h6>
            <p>
              {toy?.description}
            </p>
          </div>
          {toy?.features?.length! > 0 && (
            <div className={styles.toyFeatures}>
              <h6>
                Особливості {toy?.toyName}:
              </h6>
              <ul>
                {toy?.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
        <div className={styles.toyInfoRight}>
          <div className={styles.toyCharacterstic}>
            <h6>Характеристики:</h6>
            <div className={styles.toyCharactersticItem}>
              <div className={styles.title}>Виробництво</div>
              <div className={styles.value}>{toy?.manufacturer}</div>
            </div>
            <div className={styles.toyCharactersticItem}>
              <div className={styles.title}>Вік </div>
              <div className={styles.value}>
                Від {toy?.ageFrom}{toy?.ageTo && ` до ${toy?.ageTo}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Toy;

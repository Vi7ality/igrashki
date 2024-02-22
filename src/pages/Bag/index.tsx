import { Link } from "react-router-dom";
import Header from "../../shared/Header";
import styles from "./Bag.module.scss";
import Footer from "../../shared/Footer";
import BagItem from "./components/BagItem";
import EmptyBag from "./components/EmptyBag";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { removeItemFromCart } from "../../redux/slices/cart.slice";
import { useCallback } from "react";

const Bag = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleDeleteItem = useCallback((id: string) => {
    dispatch(removeItemFromCart(id))
  }, [dispatch])

  return (
    <div className={styles.bag}>
      <Header/>
      <h1>Твій кошик</h1>
      {cart.length === 0 ? (
        <EmptyBag />
      ) : (
        <>
          <div className={styles.bagItems}>
            {cart.map((item) => (
              <BagItem key={item.itemId} itemId={item.itemId} itemImage={item.itemImage} itemName={item.itemName} deleteItem={handleDeleteItem} />
            ))}
          </div>
          <div className={styles.hr}></div>
          <Link to="/catalogue" className={styles.backToCatalogue}>
            Повернутися до каталогу
          </Link>
          <Link to="/subscription" className={styles.subscriptionBtn}>
            Оформити замовлення
          </Link>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Bag;

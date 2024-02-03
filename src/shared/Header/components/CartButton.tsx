import { useState } from "react";
import bagButton from "../../../assets/bagButton.png";
import bagButtonDark from "../../../assets/bagButtonDark.png";
import styles from "../Header.module.scss";
import CartModal from "./CartModal";
import { useAppSelector } from "../../../redux/store";

const CartButton = ({ darkMode }: { darkMode?: boolean }) => {
    const { cart } = useAppSelector((state) => state.cart);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false)

    return (
        <div className={styles.cartBtnWrapper}>
            <button onClick={() => setIsCartModalVisible(!isCartModalVisible)} className={styles.cartBtn}>
                {darkMode ? (
                    <img src={bagButtonDark} alt="bagButton" />
                ) : (
                    <img src={bagButton} alt="bagButton" />
                )}
            </button>
            {isCartModalVisible && <CartModal cart={cart} onClose={() => setIsCartModalVisible(false)} />}
        </div>
    )
}

export default CartButton
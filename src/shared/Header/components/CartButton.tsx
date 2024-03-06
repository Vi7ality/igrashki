import { useState } from "react";
import styles from "../Header.module.scss";
import CartModal from "./CartModal";
import { useAppSelector } from "../../../redux/store";
import icons from '../../../assets/icons.svg'
import { BasketBtn } from "../Header.styled";

const CartButton = () => {
    const { cart } = useAppSelector((state) => state.cart);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false)

    return (
        <div className={styles.cartBtnWrapper}>
            <BasketBtn onClick={() => setIsCartModalVisible(!isCartModalVisible)} >
                <svg><use href={`${icons}#icon-basket`} /></svg>
                {cart.length !== 0 && <p>{cart.length}</p>}
            </BasketBtn>
            {isCartModalVisible && <CartModal cart={cart} onClose={() => setIsCartModalVisible(false)} />}
        </div>
    )
}

export default CartButton;
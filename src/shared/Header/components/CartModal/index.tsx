import { Link } from 'react-router-dom'
import styles from "./CartModal.module.scss"
import closeBtn from "../../../../assets/CloseBtn.png"
import { useAppDispatch } from '../../../../redux/store';
import { clearCart } from '../../../../redux/slices/cart.slice';

interface CartModalProps {
    cart: Array<{ itemId: string; itemName: string }>;
    onClose: () => void;
}

const CartModal = ({ cart, onClose }: CartModalProps) => {
    const dispatch = useAppDispatch();
    const totalItems = cart.length;
    const getWordEnding = (quantity: number) => {
        return quantity === 1 ? "іграшка" : quantity >= 2 && quantity <= 4 ? "іграшки" : "іграшок";
    };

    const handleClearCart = () => {
        dispatch(clearCart())
        onClose()
    }

    return (
        <div className={styles.cartModal}>
            <button className={styles.closeBtn} onClick={onClose}>
                <img src={closeBtn} alt="closeBtn" />
            </button>
            <div className={styles.header}>
                <h2>У кошику:</h2>
                <h2>{totalItems} {getWordEnding(totalItems)}</h2>
            </div>
            <ul className={styles.cartList}>
                {cart.map((item) => (
                    <li key={item.itemId}>{item.itemName}</li>
                ))}
            </ul>
            <div className={styles.cartBtns}>
                <Link to={"/bag"} className={styles.cartBtn}>Перейти до кошика</Link>
                {cart.length > 0 && <button onClick={handleClearCart} className={styles.crearBtn}>Очистити</button>}
            </div>


        </div>
    )
}

export default CartModal
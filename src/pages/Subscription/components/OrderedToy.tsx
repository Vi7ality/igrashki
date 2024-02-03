import styles from "./OrderedToy.module.scss";
import { FaMinusCircle } from "react-icons/fa";

export interface OrderedToyProps {
  itemId: string;
  itemName: string;
  itemImage: string;
  onDelete: (itemId: string) => void;
  isEditing: boolean;
}

const OrderedToy = ({ itemId, itemName, itemImage, onDelete, isEditing }: OrderedToyProps) => {
  return (
    <div className={styles.orderedContainer}>
      <div className={styles.img}>
        <img src={itemImage} className={styles.imgToy} alt="order" />
      </div>
      <div className={styles.toyText}>{itemName}</div>
      {isEditing && (
        <button className={styles.deleteButton} onClick={() => onDelete(itemId)}>
          <FaMinusCircle className={styles.minusIcon} />
        </button>
      )}
    </div>
  );
};

export default OrderedToy;

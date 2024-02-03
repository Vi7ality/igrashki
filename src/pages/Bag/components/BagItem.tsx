import styles from './BagItem.module.scss';
import trashIcon from '../assets/trashIcon.svg';
import { memo } from 'react';

interface BagItemProps {
    itemId: string;
    itemName: string;
    itemImage: string;
    deleteItem: (id: string) => void;
}

const BagItem = ({ itemId, itemImage, itemName, deleteItem }: BagItemProps) => {
    return (
        <div className={styles.bagItem}>
            <div className={styles.infoWrapper}>
                <div className={styles.image}>
                    <img src={itemImage} className={styles.img} />
                </div>
                <h6>{itemName}</h6>
            </div>
            <button onClick={() => deleteItem(itemId)}>
                <img className={styles.btn} src={trashIcon} />
            </button>
        </div>
    )
}

export default memo(BagItem);
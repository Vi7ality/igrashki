import styles from './EmptyBag.module.scss';
import emptyBag from '../assets/emptyBag.png';
import { Link } from 'react-router-dom';

const EmptyBag = () => {
    return (
        <div className={styles.emptyBag}>
            <img className={styles.emptyBagImg} src={emptyBag} alt="emptyBag" />
            <h2 className={styles.title}>Твій кошик порожній</h2>
            <h2 className={styles.title}>У кошику житимуть іграшки. Оберемо їх разом?</h2>
            <Link to="/catalogue">
                <button className={styles.backToCatalogue}>Обрати іграшки</button>
            </Link>
        </div>
    );
}

export default EmptyBag;
import styles from './Confirmation.module.scss';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import vector1 from './assets/vector1.png';
import vector2 from './assets/vector2.png';
import vector3 from './assets/vector3.png';
import vector4 from './assets/vector4.png';
import vector5 from './assets/vector5.png';
import vector6 from './assets/vector6.png';
import vector7 from './assets/vector7.png';

const Confirmation = () => {
    return (
        <div className={styles.confirmationContainer}>
            <img src={vector1} alt="vector1" className={styles.vector1} />
            <img src={vector2} alt="vector2" className={styles.vector2} />
            <img src={vector3} alt="vector3" className={styles.vector3} />
            <img src={vector4} alt="vector4" className={styles.vector4} />
            <img src={vector5} alt="vector5" className={styles.vector5} />
            <img src={vector6} alt="vector6" className={styles.vector6} />
            <img src={vector7} alt="vector7" className={styles.vector7} />
            <Link to="/"><img className={styles.logo} src={logo} alt="logo" /></Link>
            <div className={styles.thanksForOrder}>Дякуемо за замовлення!</div>
            <div className={styles.text}>
                <p>Найближчим часом наш менеджер зв’яжеться з вами</p>
                <p>у мессенджері, що ви обрали, для погодження вашого замовлення.</p>
                <p> Бажаємо гарного дня!</p>
            </div>
            <Link className={styles.goHome} to="/">Повернутися на головну сторінку</Link>
        </div>
    );
}

export default Confirmation;

import styles from "./Header.module.scss"
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";
import menuIcon from "./assets/menu.png"
import menuIconDark from "./assets/menuDark.png";
import closeIcon from "./assets/close.png"
import catalogueIcon from "./assets/catalogue.png"
import catalogueDarkIcon from "./assets/catalogueDark.png"
import fb from "../../assets/fb.png"
import inst from "../../assets/inst.png"
import patternLg from './assets/patternLg.png'
import patternSm from './assets/patternSm.png'
import monsterImg from './assets/monsterLg.png'
import monsterSmImg from './assets/monsterSm.png'
import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileButton from "./components/ProfileButton";
import CartButton from "./components/CartButton";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { clearClient } from "../../redux/slices/client.slice";



const links: { name: string, path: string }[] = [
    { name: 'Головна сторінка', path: '/' },
    { name: 'Каталог іграшок', path: '/catalogue' },
    { name: 'Про нас', path: '/about' },
    { name: 'Популярні запитання', path: '/faq' }
]

const HeaderMobile = ({ darkMode }: { darkMode?: boolean }) => {
    const { client } = useAppSelector(state => state.client)
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        document.body.style.overflow = isMobileMenuVisible ? 'hidden' : 'auto';
    }, [isMobileMenuVisible])

    const handleLogout = () => {
        dispatch(clearClient());
        navigate('/');
    };

    const renderHeader = () => (
        <header className={styles.headerMobile}>
            {isMobileMenuVisible && <>
                <img src={patternLg} alt="pattern" className={styles.patternLg} />
                <img src={patternSm} alt="pattern" className={styles.patternSm} />
            </>}

            <div className={`${styles.containerLeft}`}>
                <button className={styles.navItem} onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}>
                    {isMobileMenuVisible ? <img src={closeIcon} alt="closeIcon" /> : <img src={darkMode ? menuIconDark : menuIcon} alt="menuIcon" />}
                    <h6 className={`${darkMode && styles.dark}`}>{isMobileMenuVisible ? "Закрити" : "Меню"}</h6>
                </button>
                <Link to='/catalogue' className={`${styles.navItem} ${styles.catalogue}`} onClick={() => setIsMobileMenuVisible(true)}>
                    {isMobileMenuVisible || darkMode ? <img src={catalogueDarkIcon} alt="catalogueIcon" /> : <img src={catalogueIcon} alt="catalogueIcon" />}
                    <h6 className={`${darkMode && styles.dark}`}>Каталог іграшок</h6>
                </Link>
                {isMobileMenuVisible || darkMode ? <img src={logoDark} alt="GROW WITH U" className={styles.logoMenu} /> : <img src={logo} alt="GROW WITH U" className={styles.logoMenu} />}
            </div>
            {isMobileMenuVisible || darkMode ? <img src={logoDark} alt="GROW WITH U" className={styles.logoCenter} /> : <img src={logo} alt="GROW WITH U" className={styles.logoCenter} />}
            <CartButton />
        </header>
    )

    return !isMobileMenuVisible ? renderHeader() : <div className={styles.mobileMenu}>
        {renderHeader()}
        <div className={styles.mobileMenuContent}>
            <ul className={styles.navigation}>
                {links.map(({ name, path }) => (
                    <li key={path}>
                        <Link to={path} onClick={() => setIsMobileMenuVisible(false)}>{name}</Link>
                    </li>
                ))}
                {client ? <>
                    <li className={styles.items}><Link to='/profile'>Профіль</Link></li>
                    <li className={styles.items}><button onClick={handleLogout}>Вийти</button></li>
                </> : <li>
                    <ProfileButton/>
                </li>}

            </ul>
        </div>
        <footer>
            <img src={monsterImg} alt="monster" className={styles.monsterLg} />
            <img src={monsterSmImg} alt="monster" className={styles.monsterSm} />
            <div className={styles.footerContent}>
                <div className={styles.socials}>
                    <a href="https://www.facebook.com/growwithu.com.ua" target="_blank" rel="noreferrer">
                        <img src={fb} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/growwithu.com.ua/" target="_blank" rel="noreferrer">
                        <img src={inst} alt="instagram" />
                    </a>
                </div>
                <div className={styles.contacts}>
                    <h6>+380 12 345 67 89</h6>
                    <h6>ouremail@email.com</h6>
                </div>
                <div className={styles.terms}>
                    <h6>Legal&privacy</h6>
                    <h6>Terms&conditions</h6>
                </div>

                <div className={styles.copyRight}>
                    <img src={logo} alt="GROW WITH U" />
                    <h6>Copyright © 2021 Grow With U<br />All rights reserved</h6>
                </div>
            </div>
        </footer>
    </div>;
}

export default HeaderMobile
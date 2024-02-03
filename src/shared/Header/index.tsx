import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logoDark.png";
import { useEffect } from "react";
import { autoLogin } from "../../redux/slices/client.slice";
import { useAppDispatch } from "../../redux/store";
import HeaderMobile from "./HeaderMobile";
import ProfileButton from "./components/ProfileButton";
import CartButton from "./components/CartButton";

interface HeaderProps {
  darkMode?: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch(autoLogin(token));
    }
  }, []);


  return (
    <>
      <header className={styles.header}>
        <div className={styles.containerLeft}>
          <Link to="/" className={styles.logo}>
            {darkMode ? (
              <img src={logoDark} alt="GROW WITH U" />
            ) : (
              <img src={logo} alt="GROW WITH U" />
            )}
          </Link>
          <ul className={`${styles.navigation} ${darkMode ? styles.dark : ""}`}>
            <li>
              <Link to={"/catalogue"}>Каталог іграшок</Link>
            </li>
            <li>
              <Link to={"/about"}>Про проєкт</Link>
            </li>
            <li>
              <Link to={"/faq"}>Популярні запитання</Link>
            </li>
          </ul>
        </div>
        <div className={styles.containerRight}>
          <ProfileButton darkMode={darkMode} />
          <CartButton darkMode={darkMode} />
        </div>

      </header>
      <HeaderMobile darkMode={darkMode} />
    </>
  );
};

export default Header;

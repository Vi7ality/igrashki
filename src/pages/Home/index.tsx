import Header from "../../shared/Header";
import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import WhyUs from "./components//WhyUs/WhyUs";
import styles from "./styles.module.scss";
import headerImgXl from "./assets/header/headerImgXl.png";
import headerImgLg from "./assets/header/headerImgLg.png";
import headerImgSm from "./assets/header/headerImgSm.png";

import galleryImgXl from "./assets/gallery/galleryXl.png";
import galleryImgSm from "./assets/gallery/gallerySm.png";
import footerImgXl from "./assets/footer/footerXl.png";
import footerImgLg from "./assets/footer/footerLg.png";
import footerImgSm from "./assets/footer/footerSm.png";
import logo from "../../assets/logo.png";
import inst from "../../assets/inst.png";
import fb from "../../assets/fb.png";
import { NavLink } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Gallery from "./components/GallerySection/Gallery";
import JoinUs from "./components/JoinUs/JoinUs";

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery/>
      <JoinUs/>

      <footer>
        <div className={styles.footerContent}>
          <h4>Почни гратися зі Спільно Іграшки вже сьогодні!</h4>
          <div className={styles.buttons}>
            <NavLink to="/catalogue" className={styles.giveToys}>
              Забронювати іграшками
            </NavLink>
            <NavLink to="/subscription" className={styles.subscribe}>
              Заповнити анкету
            </NavLink>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/growithyou.official" target="_blank" rel="noreferrer">
              <img src={fb} alt="facebook" />
            </a>
            <a
              href="https://instagram.com/growwith__you?igshid=MjEwN2IyYWYwYw=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={inst} alt="instagram" />
            </a>
          </div>
          {/* <h6 className={styles.phone}>+380 12 345 67 89</h6>
          <h6 className={styles.email}>ouremail@email.com</h6> */}
          <img src={logo} className={styles.logo} alt="logo" />
          <p className={styles.footerRealization}>
            Проєкт реалізує ГО “БФ Світ Майбутнього” у рамках СПІЛЬНО — програми Дитячого фонду ООН
            (ЮНІСЕФ) для підтримки сімей з дітьми, які постраждали від війни. Програма СПІЛЬНО
            об’єднує зусилля ЮНІСЕФ з урядом, місцевими органами влади, громадським сектором та
            бізнес-партнерами заради кожної дитини в Україні.
          </p>
        </div>
        <img src={footerImgXl} className={styles.footerImgXl} alt="footerImg" />
        <img src={footerImgLg} className={styles.footerImgLg} alt="footerImg" />
        <img src={footerImgSm} className={styles.footerImgSm} alt="footerImg" />
      </footer>
    </div>
  );
};

export default Home;

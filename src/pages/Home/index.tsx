import Header from "../../shared/Header";
import HowItWorks from "./components/HowItWorksSection/HowItWorks";
import WhyUs from "./components//WhyUs/WhyUs";
import styles from "./styles.module.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Gallery from "./components/GallerySection/Gallery";
import JoinUs from "./components/JoinUs/JoinUs";
import Footer from "../../shared/Footer";

const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyUs />
      <Gallery/>
      <JoinUs />
      <Footer/>

      {/* <footer>
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
      </footer> */}
    </div>
  );
};

export default Home;

import styles from './AboutUs.module.scss';
import Header from '../../shared/Header';
import { NavLink } from 'react-router-dom';
import headerBg from "./assets/header/headerBg.png"
import headerBgXxl from "./assets/header/headerBgXxl.png"
import headerBgXl from "./assets/header/headerBgXl.png"
import headerBgLg from "./assets/header/headerBgLg.png"
import headerBgMd from "./assets/header/headerBgMd.png"
import headerBgSm from "./assets/header/headerBgSm.png"
import patternWave from "./assets/patternWave.png"
import missionLeftImg from "./assets/missionLeftImg.png"
import missionRightImg from "./assets/missionRightImg.png"
import footerBg from "./assets/footer/footerBg.png"
// import footerBgXxxl from "./assets/footer/footerBgXxxl.png"
import footerBgXxl from "./assets/footer/footerBgXxl.png"
import footerBgXl from "./assets/footer/footerBgXl.png"
import footerBgLg from "./assets/footer/footerBgLg.png"
import footerBgMd from "./assets/footer/footerBgMd.png"
import footerBgSm from "./assets/footer/footerBgSm.png"

import logo from "../../assets/logo.png"
import inst from "../../assets/inst.png"
import fb from "../../assets/fb.png"

const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headerWrapper}>
                <Header />
                <h1>Що таке Спільно Іграшки?</h1>
                <img src={headerBg} alt="headerBg" className={styles.headerBg} />
                <img src={headerBgXxl} alt="headerBgXxl" className={styles.headerBgXxl} />
                <img src={headerBgXl} alt="headerBgXl" className={styles.headerBgXl} />
                <img src={headerBgLg} alt="headerBgLg" className={styles.headerBgLg} />
                <img src={headerBgMd} alt="headerBgMd" className={styles.headerBgMd} />
                <img src={headerBgSm} alt="headerBgSm" className={styles.headerBgSm} />
            </div>

            <div className={styles.aboutUsWrapper}>
                <img className={styles.patternWave} src={patternWave} alt="patternWave" />
                <p> — це програма з безкоштовної оренди дитячих іграшок для раннього розвитку, що реалізується через мережу Дитячих точок "Спільно". В основі проєкту лежить ідея бібліотеки, де замість книжок — іграшки.</p>
                <p>Участь у програмі повністю безкоштовна. Наразі проєкт реалізується у Чернівецькій, Тернопільській, Івано-Франківській та Закарпатській та Львівській областях.</p>

                <div className={styles.projectMission}>
                    <div className={styles.projectMissionLeft}>
                        <img src={missionLeftImg} alt="" className={styles.missionLeftImg} />
                    </div>
                    <div className={styles.projectMissionRight}>
                        <h4 className={styles.missionText}>Місія проєкту — повернути частинку дитинства дітям, які щодня проживають війну.</h4>
                        <img src={missionRightImg} alt="" className={styles.missionRightImg} />
                    </div>
                </div>

                <p>Однією із цілей проєкту є популяризація  інноваційної та екологічної моделі споживання. Користуватися іграшками певний час, а потім повертати —  це той підхід, що допоможе дітям у майбутньому більш усвідомлено ставитись до придбання речей.</p>
            </div>

            <footer>
                <div className={styles.footerContent}>
                    <h4>
                        Заповнюйте анкету та знаходьте найближчу до вас Дитячу точку "Спільно"!
                    </h4>
                    <div className={styles.buttons}>
                        <NavLink to="/catalogue" className={styles.giveToys}>Забронювати іграшками</NavLink>
                        <NavLink to="/subscription" className={styles.subscribe}>Заповнити анкету</NavLink>
                    </div>
                </div>
                <div className={styles.footerInfo}>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com/growithyou.official" target="_blank" rel="noreferrer">
                            <img src={fb} alt="facebook" />
                        </a>
                        <a href="https://instagram.com/growwith__you?igshid=MjEwN2IyYWYwYw==" target="_blank" rel="noreferrer">
                            <img src={inst} alt="instagram" />
                        </a>
                    </div>
                    {/* <h6 className={styles.phone}>+380 12 345 67 89</h6>
                    <h6 className={styles.email}>ouremail@email.com</h6> */}
                    <img src={logo} className={styles.logo} alt="logo" />
                    <p className={styles.footerRealization}>Проєкт реалізує ГО “БФ Світ Майбутнього” у рамках СПІЛЬНО — програми Дитячого фонду ООН (ЮНІСЕФ) для підтримки сімей з дітьми, які постраждали від війни. Програма СПІЛЬНО об’єднує зусилля ЮНІСЕФ з урядом, місцевими органами влади, громадським сектором та бізнес-партнерами заради кожної дитини в Україні.</p>
                </div>
                <img src={footerBg} className={styles.footerBg} alt="footerBg" />
                {/* <img src={footerBgXxxl} className={styles.footerBgXxxl} alt="footerBgXxxl" /> */}
                <img src={footerBgXxl} className={styles.footerBgXxl} alt="footerBgXxl" />
                <img src={footerBgXl} className={styles.footerBgXl} alt="footerBgXl" />
                <img src={footerBgLg} className={styles.footerBgLg} alt="footerBgLg" />
                <img src={footerBgMd} className={styles.footerBgMd} alt="footerBgMd" />
                <img src={footerBgSm} className={styles.footerBgSm} alt="footerBgSm" />
            </footer>
        </div>
    );
}

export default AboutUs;
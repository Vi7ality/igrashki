import styles from './AboutUs.module.scss';
import headerBg from "./assets/header/headerBg.png"
import headerBgXxl from "./assets/header/headerBgXxl.png"
import headerBgXl from "./assets/header/headerBgXl.png"
import headerBgLg from "./assets/header/headerBgLg.png"
import headerBgMd from "./assets/header/headerBgMd.png"
import headerBgSm from "./assets/header/headerBgSm.png"
import patternWave from "./assets/patternWave.png"
import missionLeftImg from "./assets/missionLeftImg.png"
import missionRightImg from "./assets/missionRightImg.png"


const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.headerWrapper}>
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
        </div>
    );
}

export default AboutUs;
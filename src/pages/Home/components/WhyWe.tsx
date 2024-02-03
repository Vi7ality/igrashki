import styles from "./WhyWe.module.scss";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import patternLeftXl from "../assets/whyWe/patternLeftXl.png";
import patternLeftLg from "../assets/whyWe/patternLeftLg.png";
import patternLeftSm from "../assets/whyWe/patternLeftSm.png";
import patternRightXl from "../assets/whyWe/patternRightXl.png";
import patternRightLg from "../assets/whyWe/patternRightLg.png";
import patternRightSm from "../assets/whyWe/patternRightSm.png";

const WhyWe = () => {
    return (
        <div className={styles.container}>
            <img src={patternLeftXl} className={styles.patternLeftXl} alt="pattern" />
            <img src={patternLeftLg} className={styles.patternLeftLg} alt="pattern" />
            <img src={patternLeftSm} className={styles.patternLeftSm} alt="pattern" />
            <img src={patternRightXl} className={styles.patternRightXl} alt="pattern" />
            <img src={patternRightLg} className={styles.patternRightLg} alt="pattern" />
            <img src={patternRightSm} className={styles.patternRightSm} alt="pattern" />

            <div className={styles.title}>
                <h2 className={styles.titleText}>Чому ми?</h2>
            </div>
            <div className={styles.firstContent}>
                <div className={styles.boxContainer}>
                    <img className={styles.image} src={img1} alt="img1" />
                    <div className={styles.textContainer}>
                        <h3 className={styles.h3}>Культивування звички ділитись</h3>
                        <p className={styles.p}>Навіщо володіти речима, якщо можна користуватись ними за потреби? Це зручніше, дешевше та більш еколологічно.</p>
                    </div>
                </div>
                <div className={styles.boxContainer}>
                    <img className={styles.image} src={img2} alt="img1" />
                    <div className={styles.textContainer}>
                        <h3 className={styles.h3}>Ранній розвиток дитини</h3>
                        <p className={styles.p}>Ми знаємо, яку надважливу роль відіграють іграшки для дітей: розвиток уяви,  винахідливості, креативності і активізація сенсорних здібностей та моторики.</p>
                    </div>
                </div>
            </div>
            <div className={styles.firstContent}>
                <div className={styles.boxContainer}>
                    <img className={styles.image} src={img3} alt="img1" />
                    <div className={styles.textContainer}>
                        <h3 className={styles.h3}>Безкоштовний доступ до іграшок</h3>
                        <p className={styles.p}>У Дитячих точка "Спільно" або вдома - обирати вам. Долучайтесь до спільної гри в хабі або ж візьміть іграшки з собою та обмінюйте на інші. Безоплатно та нескінчену кількість разів.</p>
                    </div>
                </div>
                <div className={styles.boxContainer}>
                    <img className={styles.image} src={img4} alt="img1" />
                    <div className={styles.textContainer}>
                        <h3 className={styles.h3}>Безпечність  та дезінфекція</h3>
                        <p className={styles.p}>Іграшки мають всі сертифікати відповідності та рекомендовані для раннього розвитку дітей. Кожна іграшка обов'язково проходить три етапи дезінфекції. </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WhyWe;
import styles from "./HowItWorks.module.scss";
import step1Img from "../assets/steps/step1.png";
import step2Img from "../assets/steps/step2.png";
import step3Img from "../assets/steps/step3.png";

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.FirstTitle}>Як це працює?</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src={step1Img} alt="" />
          <h3>Заповнюйте анкету на сайті або у Дитячій точці "Спільно”, де вже працює бібліотека іграшок </h3>
        </div>
        <div className={styles.step}>
          <img src={step2Img} alt="" />
          <h3>Відвідуйте ігрові сесії у Дитячій точці "Спільно” та забираєте іграшки, що сподобались, додому </h3>
        </div>
        <div className={styles.step}>
          <img src={step3Img} alt="" />
          <h3>Обмінюйте іграшки щотримісяці та ставайте частиною спільноти однодумців</h3>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

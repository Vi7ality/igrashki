import { useState } from "react";
import styles from "./Accordion.module.scss";
import Arrow from "../Arrow";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h2>{title}</h2>
        <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <Arrow />
        </div>
      </div>

      <div className={styles.accordionContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;

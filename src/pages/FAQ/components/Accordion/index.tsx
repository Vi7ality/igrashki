import { useState } from "react";
import styles from "./Accordion.module.scss";
// import Arrow from "../Arrow";
import { AccordionHeader, AccordionWrap, IconWrapper } from "./Accordion.styled";

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
    <AccordionWrap className={`${styles.accordion} ${isOpen ? styles.open : ""}`}>
      <AccordionHeader onClick={toggleAccordion}>
        <h2>{title}</h2>
        <IconWrapper className={` ${isOpen && "open"}`}>
          {/* <Arrow /> */}
          {isOpen ? '-' : '+'}
        </IconWrapper>
      </AccordionHeader>

      <div className={styles.accordionContent}>
        <p>{content}</p>
      </div>
    </AccordionWrap>
  );
};

export default Accordion;

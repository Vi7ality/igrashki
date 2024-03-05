import { useState } from "react";
import { AccordionHeader, AccordionWrap, Content, IconWrapper } from "./Accordion.styled";
import icons from "../../assets/icons.svg";

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
    <AccordionWrap className={`${isOpen && "open"}`}>
      <AccordionHeader onClick={toggleAccordion}>
        <h2>{title}</h2>
        <IconWrapper className={`${isOpen && "open"}`}>
          <svg>
            {isOpen ? <use href={`${icons}#icon-minus`} /> : <use href={`${icons}#icon-plus`} />}
          </svg>
        </IconWrapper>
      </AccordionHeader>
      <Content className={`${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </Content>
    </AccordionWrap>
  );
};

export default Accordion;

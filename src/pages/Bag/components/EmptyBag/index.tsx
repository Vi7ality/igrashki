import emptyBag from "../../assets/empty-box.svg";
import { FlexWrap, BoxImg, TextStyled, LinkStyled } from "./EmptyBag.styled";

const EmptyBag = () => {
  return (
    <FlexWrap>
      <BoxImg src={emptyBag} alt="empty bag" />
      <TextStyled>
        Твій кошик порожній
        <br />У кошику житимуть іграшки. Оберемо їх разом?
      </TextStyled>
      <LinkStyled to="/catalogue">Обрати іграшки</LinkStyled>
    </FlexWrap>
  );
};

export default EmptyBag;

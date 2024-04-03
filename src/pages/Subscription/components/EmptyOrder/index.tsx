import EmptyBox from "../../assets/empty-box.svg";
import { BoxImage, LinkStyled, TextStyled } from "./EmptyOrder.styled";

const EmptyOrder = () => {
  return (
    <>
      <TextStyled>
        Твій кошик порожній.
        <br />
        Завітай до нашого <LinkStyled to={"/catalogue"}>Каталогу іграшок</LinkStyled>
          </TextStyled>
              <BoxImage src={EmptyBox} alt="Empty box" />   
    </>
  );
};

export default EmptyOrder;

import { FooterStyled } from "./Footer.styled";
import FooterBottom from "./components/FooterBottom";
import FooterTop from "./components/FooterTop";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterTop/>
      <FooterBottom/>
    </FooterStyled>
  );
};

export default Footer;

import Container from "../../../../shared/Container";
import Carousel from "../Carousel/Carousel";
import { SectionStyled, TitleStyled } from "./Gallery.styled";


const Gallery = () => {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled>Галерея</TitleStyled>
      </Container>
      <Carousel/>
    </SectionStyled>
  );
};

export default Gallery;

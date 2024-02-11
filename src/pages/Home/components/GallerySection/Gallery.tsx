import Container from "../../../../shared/Container";
import { Carousel, CarouselItem } from "../Carousel/Caurousel";
import { SectionStyled, TitleStyled } from "./Gallery.styled";

const items = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/500?idx=${i}`,
}));

const Gallery = () => {
  return (
    <SectionStyled>
      <Container>
        <TitleStyled>Галерея</TitleStyled>
      </Container>
      <Carousel
        items={items}
        renderItem={({ item, isSnapPoint }) => (
          <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
            <img src={item.src} width="450" height="450" style={{borderRadius: '60px'}} alt="Gallery image"/>
          </CarouselItem>
        )}
      />
    </SectionStyled>
  );
};

export default Gallery;

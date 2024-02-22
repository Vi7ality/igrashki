import {
  SectionStyled,
  SvgImg,
  ItemStyled,
  Title,
  Text,
  List,
  NavLinkStyled,
  FlexContainer,
  TitleStyled
} from "./WhyUs.styled";
import svgImg from "../../assets/homepage_vector-img.svg";

const WhyUs = () => {
  return (
    <SectionStyled>
      <FlexContainer>
        <TitleStyled>Чому ми?</TitleStyled>
        <List>
          <ItemStyled>
            <SvgImg>
              <use href={`${svgImg}#svg-whyus_cultivation`}></use>
            </SvgImg>
            <div>
              <Title>Культивування звички ділитись</Title>
              <Text>
                Навіщо володіти речима, якщо можна користуватись ними за потреби? Це зручніше,
                дешевше та більш еколологічно.
              </Text>
            </div>
          </ItemStyled>
          <ItemStyled>
            <SvgImg>
              <use href={`${svgImg}#svg-whyus_development`}></use>
            </SvgImg>
            <div>
              <Title>Ранній розвиток дитини</Title>
              <Text>
                Ми знаємо, яку надважливу роль відіграють іграшки для дітей: розвиток уяви,
                винахідливості, креативності і активізація сенсорних здібностей та моторики.
              </Text>
            </div>
          </ItemStyled>
          <ItemStyled>
            <SvgImg>
              <use href={`${svgImg}#svg-whyus_free`}></use>
            </SvgImg>
            <div>
              <Title>Безкоштовний доступ до іграшок</Title>
              <Text>
                У Дитячих точка "Спільно" або вдома - обирати вам. Долучайтесь до спільної гри в
                хабі або ж візьміть іграшки з собою та обмінюйте на інші. Безоплатно та нескінчену
                кількість разів.
              </Text>
            </div>
          </ItemStyled>
          <ItemStyled>
            <SvgImg>
              <use href={`${svgImg}#svg-whyus_safety`}></use>
            </SvgImg>
            <div>
              <Title>Безпечність та дезінфекція</Title>
              <Text>
                Іграшки мають всі сертифікати відповідності та рекомендовані для раннього розвитку
                дітей. Кожна іграшка обов'язково проходить три етапи дезінфекції.
              </Text>
            </div>
          </ItemStyled>
        </List>
        <NavLinkStyled to="/subscription">Заповнити анкету</NavLinkStyled>
      </FlexContainer>
    </SectionStyled>
  );
};

export default WhyUs;
